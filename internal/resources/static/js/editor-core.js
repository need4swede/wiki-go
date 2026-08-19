/**
 * Editor Core Module
 * Handles main editor functionality, initialization, and content management
 */

// Global editor variables
let editor = null;
let originalContent = '';
let viewScrollPosition = 0;
let editorMode = 'visual';
let visualEditor = null;
let visualToolbar = null;
let visualBaseMarkdown = '';
let visualChanged = false;
let visualRequiresReload = false;
let dirty = false;
let settingSourceValue = false;
let sourceChanged = false;
let visualInputHandler = null;
let visualClickHandler = null;
let activeElements = null;

// Define custom CodeMirror modes
if (typeof CodeMirror !== 'undefined') {
    // Define a custom overlay mode for highlight syntax (==text==)
    CodeMirror.defineMode("markdown-highlight-overlay", function(config, parserConfig) {
        // Improved regex that handles edge cases better
        const highlightRegex = /==(?:[^=]|=(?!=))+?==/;

        return {
            token: function(stream, state) {
                // Look for the start of a highlight marker
                if (stream.match(/==/)) {
                    // Check if we have a complete highlight pattern
                    const line = stream.string.slice(stream.pos - 2);
                    const match = line.match(highlightRegex);

                    if (match && match.index === 0) {
                        // We found a complete highlight pattern
                        // Move the stream position to the end of the match
                        stream.pos += match[0].length - 2;
                        return "highlight";
                    }

                    // If not a complete highlight, just return null
                    return null;
                }

                // Skip until we find a potential highlight marker
                while (stream.next() != null && !stream.match(/==/, false)) {}
                return null;
            }
        };
    });

    // Create a custom markdown mode that properly handles frontmatter
    CodeMirror.defineMode("markdown-with-frontmatter", function(config) {
        // Create the base markdown mode
        const markdownMode = CodeMirror.getMode(config, {
            name: "markdown",
            highlightFormatting: true,
            strikethrough: true,
            fencedCodeBlockHighlighting: true,
            taskLists: true
        });

        return {
            startState: function() {
                return {
                    markdownState: CodeMirror.startState(markdownMode),
                    inFrontmatter: false,
                    firstLine: true
                };
            },

            copyState: function(state) {
                return {
                    markdownState: CodeMirror.copyState(markdownMode, state.markdownState),
                    inFrontmatter: state.inFrontmatter,
                    firstLine: state.firstLine
                };
            },

            token: function(stream, state) {
                // Handle frontmatter start
                if (state.firstLine && stream.sol() && stream.match(/---/)) {
                    state.inFrontmatter = true;
                    state.firstLine = false;
                    return "frontmatter-delimiter";
                }

                // No longer on first line
                if (state.firstLine && stream.sol()) {
                    state.firstLine = false;
                }

                // Handle frontmatter end
                if (state.inFrontmatter && stream.sol() && stream.match(/---/)) {
                    state.inFrontmatter = false;
                    return "frontmatter-delimiter";
                }

                // Inside frontmatter
                if (state.inFrontmatter) {
                    // Skip to end of line for frontmatter content
                    stream.skipToEnd();
                    return "frontmatter";
                }

                // Default to markdown mode outside frontmatter
                return markdownMode.token(stream, state.markdownState);
            },

            blankLine: function(state) {
                if (state.inFrontmatter) {
                    return "frontmatter";
                }
                if (markdownMode.blankLine) {
                    return markdownMode.blankLine(state.markdownState);
                }
                return null;
            },

            indent: function(state, textAfter) {
                if (state.inFrontmatter) return 0;
                if (markdownMode.indent) {
                    return markdownMode.indent(state.markdownState, textAfter);
                }
                return CodeMirror.Pass;
            },

            innerMode: function(state) {
                if (state.inFrontmatter) return {state: state, mode: this};
                return {state: state.markdownState, mode: markdownMode};
            }
        };
    });

    // Create a simple frontmatter detector overlay that doesn't use state
    CodeMirror.defineMode("frontmatter-detector", function() {
        return {
            token: function(stream, state) {
                // Check for frontmatter delimiters at the beginning of lines
                if (stream.sol() && stream.match(/---/)) {
                    return "frontmatter-delimiter";
                }

                // Skip to next position
                stream.next();
                return null;
            }
        };
    });
}

// Helper functions for text manipulation
function wrapText(cm, prefix = '', suffix = '', placeholder = '') {
    const selection = cm.getSelection();
    if (selection) {
        cm.replaceSelection(`${prefix}${selection}${suffix}`);
    } else {
        const cursor = cm.getCursor();
        cm.replaceRange(prefix + placeholder + suffix, cursor);
        // Place cursor between prefix and suffix so the user can start typing.
        cm.setCursor(cursor.line, cursor.ch + prefix.length);
    }
    // Ensure the editor keeps focus.
    cm.focus();
}

function setSourceContent(markdown) {
    if (!editor) return;
    settingSourceValue = true;
    editor.setValue(markdown);
    editor.clearHistory?.();
    settingSourceValue = false;
    sourceChanged = false;
}

function updateModeToggle() {
    const button = document.querySelector('.toggle-editor-mode');
    if (!button) return;

    const sourceMode = editorMode === 'source';
    const icon = button.querySelector('i');
    const label = button.querySelector('.button-text');
    if (icon) icon.className = sourceMode ? 'fa fa-file-text-o' : 'fa fa-code';
    if (label) label.textContent = sourceMode ? 'Visual' : 'Markdown';
    button.title = sourceMode ? 'Edit the rendered page' : 'Edit Markdown source';
    button.setAttribute('aria-label', button.title);
    button.setAttribute('aria-pressed', sourceMode ? 'true' : 'false');
}

function activateVisualEditor(markdown) {
    if (!visualEditor) return;

    window.EditorVisual.activate(visualEditor, markdown);
    visualToolbar?.remove();
    visualToolbar = window.EditorVisual.createToolbar(visualEditor);

    visualInputHandler = () => {
        visualChanged = true;
        dirty = true;
        setupBeforeUnloadHandler();
    };
    visualEditor.addEventListener('input', visualInputHandler);
    visualEditor.addEventListener('change', visualInputHandler);

    // While editing, links must remain editable instead of navigating away.
    // Checkbox clicks stay local as well; the normal page has live-save handlers.
    visualClickHandler = (event) => {
        if (event.type === 'dragstart') {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        const interactive = event.target.closest('a, button');
        if (interactive) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (event.target.matches('input[type="checkbox"]')) event.stopPropagation();
    };
    visualEditor.addEventListener('click', visualClickHandler, true);
    visualEditor.addEventListener('dragstart', visualClickHandler, true);
}

function deactivateVisualEditor() {
    if (!visualEditor) return;
    if (visualInputHandler) {
        visualEditor.removeEventListener('input', visualInputHandler);
        visualEditor.removeEventListener('change', visualInputHandler);
    }
    if (visualClickHandler) {
        visualEditor.removeEventListener('click', visualClickHandler, true);
        visualEditor.removeEventListener('dragstart', visualClickHandler, true);
    }
    visualInputHandler = null;
    visualClickHandler = null;
    window.EditorVisual.deactivate(visualEditor);
}

function createSourceEditor(editorContainer, markdown) {
    if (editor) {
        setSourceContent(markdown);
        return editor;
    }

    editorContainer.innerHTML = '';
    const editorLayout = document.createElement('div');
    editorLayout.className = 'editor-layout';
    editorContainer.appendChild(editorLayout);

    const toolbar = window.EditorToolbar.createToolbar(editorLayout);
    const editorArea = document.createElement('div');
    editorArea.className = 'editor-area';
    editorLayout.appendChild(editorArea);

    const editorMainArea = document.createElement('div');
    editorMainArea.className = 'editor-main-area';
    editorArea.appendChild(editorMainArea);

    const editorWrapper = document.createElement('div');
    editorWrapper.className = 'custom-editor-wrapper';
    editorMainArea.appendChild(editorWrapper);

    const textarea = document.createElement('textarea');
    textarea.id = 'markdown-editor';
    editorWrapper.appendChild(textarea);
    const statusbar = createStatusbar(editorMainArea);
    const isMobile = window.innerWidth <= 768;

    editor = CodeMirror.fromTextArea(textarea, {
        mode: 'markdown-with-frontmatter',
        theme: 'default',
        lineNumbers: false,
        lineWrapping: true,
        autofocus: true,
        tabSize: 2,
        indentWithTabs: false,
        styleActiveLine: isMobile ? false : { nonEmpty: true },
        extraKeys: {},
        placeholder: 'Write your markdown here...',
        spellcheck: true,
        gutters: ['CodeMirror-linenumbers'],
        // Let the page own vertical scrolling instead of creating a nested pane.
        viewportMargin: Infinity
    });
    editor.addOverlay('markdown-highlight-overlay');
    editor.setSize(null, 'auto');

    window.EditorToolbar.setupToolbarActions(toolbar);
    editor.on('cursorActivity', () => updateStatusbar(statusbar));
    editor.on('change', () => {
        updateStatusbar(statusbar);
        if (settingSourceValue) return;
        sourceChanged = true;
        dirty = true;
        setupBeforeUnloadHandler();
    });

    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    window.EditorThemes.updateCodeMirrorTheme(isDarkMode ? 'dark' : 'light');
    setSourceContent(markdown);
    refreshEditor(statusbar);

    const wrapButton = document.querySelector('.toggle-wordwrap-button');
    if (wrapButton && editor.getOption('lineWrapping')) {
        const getShortcut = window.EditorToolbar?.getShortcut || ((mac, other) => mac || other);
        wrapButton.classList.add('active');
        wrapButton.title = `Disable Word Wrap (${getShortcut('Option+Z', 'Alt+Z')})`;
    }

    return editor;
}

// Enter edit mode on the rendered document. Markdown source remains optional.
async function loadEditor(mainContent, editorContainer, viewToolbar, editToolbar) {
    try {
        const isHomepage = window.location.pathname === '/';
        const apiPath = isHomepage ? '/api/source/' : `/api/source${window.location.pathname}`;
        const response = await fetch(apiPath);
        if (!response.ok) throw new Error('Failed to fetch content');

        const markdown = await response.text();
        visualEditor = mainContent.querySelector('.markdown-content');
        if (!visualEditor) throw new Error('Rendered document not found');

        activeElements = { mainContent, editorContainer, viewToolbar, editToolbar };
        originalContent = markdown;
        visualBaseMarkdown = markdown;
        viewScrollPosition = window.scrollY;
        editorMode = 'visual';
        visualChanged = false;
        visualRequiresReload = false;
        dirty = false;
        sourceChanged = false;

        mainContent.classList.add('editing', 'visual-editing');
        mainContent.classList.remove('source-editing');
        editorContainer.hidden = true;
        editorContainer.setAttribute('aria-hidden', 'true');
        editorContainer.classList.remove('active');
        viewToolbar.style.display = 'none';
        editToolbar.style.display = 'flex';

        activateVisualEditor(markdown);
        updateModeToggle();
        visualEditor.focus({ preventScroll: true });
        return true;
    } catch (error) {
        console.error('Error:', error);
        exitEditMode(mainContent, editorContainer, viewToolbar, editToolbar);
        alert('Failed to load content for editing');
        return false;
    }
}

async function toggleMode() {
    if (!activeElements || !visualEditor) return false;
    const { mainContent, editorContainer } = activeElements;

    if (editorMode === 'visual') {
        const markdown = visualChanged
            ? window.EditorVisual.toMarkdown(visualEditor, visualBaseMarkdown)
            : visualBaseMarkdown;

        deactivateVisualEditor();
        visualToolbar?.remove();
        visualToolbar = null;
        editorMode = 'source';
        visualChanged = false;
        mainContent.classList.remove('visual-editing');
        mainContent.classList.add('source-editing');
        editorContainer.hidden = false;
        editorContainer.setAttribute('aria-hidden', 'false');
        editorContainer.classList.add('active');
        createSourceEditor(editorContainer, markdown);
        updateModeToggle();
        editor.focus();
        return true;
    }

    const markdown = editor.getValue();
    if (sourceChanged) {
        const response = await fetch(`/api/render-markdown?path=${encodeURIComponent(window.location.pathname)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: markdown
        });
        if (!response.ok) throw new Error('Failed to render Markdown');

        visualEditor.innerHTML = await response.text();
        visualRequiresReload = true;
    }
    visualBaseMarkdown = markdown;
    visualChanged = false;
    sourceChanged = false;
    editorMode = 'visual';
    mainContent.classList.remove('source-editing');
    mainContent.classList.add('visual-editing');
    editorContainer.classList.remove('active');
    editorContainer.hidden = true;
    editorContainer.setAttribute('aria-hidden', 'true');
    activateVisualEditor(markdown);
    updateModeToggle();
    visualEditor.focus({ preventScroll: true });
    return true;
}

// Function to create statusbar
function createStatusbar(container) {
    const statusbar = document.createElement('div');
    statusbar.className = 'editor-statusbar';

    // Add status elements (lines, words, cursor position)
    const linesStatus = document.createElement('span');
    linesStatus.className = 'lines';
    linesStatus.textContent = '0';

    const wordsStatus = document.createElement('span');
    wordsStatus.className = 'words';
    wordsStatus.textContent = '0';

    const cursorStatus = document.createElement('span');
    cursorStatus.className = 'cursor';
    cursorStatus.textContent = '0:0';

    statusbar.appendChild(linesStatus);
    statusbar.appendChild(wordsStatus);
    statusbar.appendChild(cursorStatus);

    container.appendChild(statusbar);
    return statusbar;
}

// Function to update statusbar
function updateStatusbar(statusbar) {
    if (!editor || !statusbar) return;

    const content = editor.getValue();
    const lines = content.split('\n').length;
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    const cursor = editor.getCursor();

    statusbar.querySelector('.lines').textContent = lines;
    statusbar.querySelector('.words').textContent = words;
    statusbar.querySelector('.cursor').textContent = `${cursor.line + 1}:${cursor.ch}`;
}

// Helper function to ensure editor gets properly refreshed
function refreshEditor(statusbar) {
    if (!editor) return;

    editor.refresh();
    if (statusbar) updateStatusbar(statusbar);

    requestAnimationFrame(() => {
        if (editor) {
            editor.refresh();
            if (statusbar) updateStatusbar(statusbar);
        }
    });
}

// Exit edit mode
function exitEditMode(mainContent, editorContainer, viewToolbar, editToolbar) {
    removeBeforeUnloadHandler();

    // A reload is the reliable way to restore generated widgets and their
    // event listeners after the document DOM itself was changed or re-rendered.
    if (dirty || visualRequiresReload) {
        window.location.reload();
        return;
    }

    deactivateVisualEditor();
    visualToolbar?.remove();
    visualToolbar = null;

    if (mainContent) mainContent.classList.remove('editing', 'visual-editing', 'source-editing');
    if (editorContainer) {
        editorContainer.classList.remove('active');
        editorContainer.hidden = true;
        editorContainer.setAttribute('aria-hidden', 'true');
    }

    if (viewToolbar) viewToolbar.style.display = 'flex';
    if (editToolbar) editToolbar.style.display = 'none';

    if (editor) {
        try {
            editor.toTextArea();
        } catch(e) {
            console.warn('Error while destroying editor:', e);
        }
        editor = null;
    }

    window.EditorPickers?.cleanup();
    if (editorContainer) editorContainer.innerHTML = '';

    originalContent = '';
    visualBaseMarkdown = '';
    visualEditor = null;
    activeElements = null;
    editorMode = 'visual';
    visualChanged = false;
    visualRequiresReload = false;
    dirty = false;
    sourceChanged = false;
    updateModeToggle();

    requestAnimationFrame(() => {
        window.scrollTo({ top: viewScrollPosition, behavior: 'auto' });
    });
}

// Content management functions
function getEditorContent() {
    if (editorMode === 'source' && editor) return editor.getValue();
    if (visualEditor) {
        return visualChanged
            ? window.EditorVisual.toMarkdown(visualEditor, visualBaseMarkdown)
            : visualBaseMarkdown;
    }
    return '';
}

function insertIntoEditor(url, isImage, name) {
    const isVideo = name.toLowerCase().endsWith('.mp4');
    const filename = name;
    let markdown = '';
    if (isVideo) {
        markdown = "```mp4\n" + filename + "\n```\n\n";
    } else if (isImage) {
        markdown = `![${name}](${filename})\n\n`;
    } else {
        markdown = `[${name}](${filename})\n\n`;
    }

    if (editorMode === 'source' && editor) {
        editor.replaceSelection(markdown);
        editor.focus();
        return true;
    }

    if (!visualEditor) return false;
    visualEditor.focus();
    if (isVideo) {
        const video = document.createElement('video');
        video.src = url;
        video.controls = true;
        visualEditor.appendChild(video);
    } else {
        const element = document.createElement(isImage ? 'img' : 'a');
        if (isImage) {
            element.src = url;
            element.alt = name;
        } else {
            element.href = url;
            element.textContent = name;
        }
        const selection = window.getSelection();
        if (selection?.rangeCount) {
            const range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(element);
            range.setStartAfter(element);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            visualEditor.appendChild(element);
        }
    }
    visualEditor.dispatchEvent(new Event('input', { bubbles: true }));

    return true;
}

function insertRawContent(content) {
    if (editorMode === 'source' && editor) {
        editor.replaceSelection(content);
        editor.focus();
        return true;
    }

    if (!visualEditor) return false;
    visualEditor.focus();
    document.execCommand('insertText', false, content);
    visualEditor.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
}

function isEditorActive() {
    return !!activeElements;
}

// Function to check if document has unsaved changes
function hasUnsavedChanges() {
    return isEditorActive() && dirty;
}

// Add function to handle beforeunload event
function setupBeforeUnloadHandler() {
    // Only add the handler if it doesn't already exist
    if (!window._beforeUnloadHandler) {
        window._beforeUnloadHandler = function(e) {
            if (hasUnsavedChanges()) {
                // Standard way to show a confirmation dialog when leaving page
                e.preventDefault();
                // Custom message (note: most modern browsers no longer show this message, just a generic one)
                const leaveMsg = window.i18n ? window.i18n.t('editor.unsaved_changes_leave') : 'You have unsaved changes. Are you sure you want to leave?';
                e.returnValue = leaveMsg;
                return leaveMsg;
            }
        };

        // Add the event listener
        window.addEventListener('beforeunload', window._beforeUnloadHandler);
    }
}

// Function to remove the beforeunload handler
function removeBeforeUnloadHandler() {
    if (window._beforeUnloadHandler) {
        window.removeEventListener('beforeunload', window._beforeUnloadHandler);
        window._beforeUnloadHandler = null;
    }
}

// Function to toggle word wrap
function toggleWordWrap() {
    if (!editor) return;

    // Get current line wrapping state
    const currentWrapping = editor.getOption('lineWrapping');

    // Toggle line wrapping
    editor.setOption('lineWrapping', !currentWrapping);

    // Update button appearance
    const wrapButton = document.querySelector('.toggle-wordwrap-button');
    if (wrapButton) {
        // Use the shared getShortcut function from EditorToolbar
        const getShortcut = window.EditorToolbar && window.EditorToolbar.getShortcut ? 
            window.EditorToolbar.getShortcut : (mac, other) => mac || other;
        
        const shortcut = getShortcut('Option+Z', 'Alt+Z');
        
        if (!currentWrapping) {
            // Line wrapping was turned on
            wrapButton.classList.add('active');
            wrapButton.title = `Disable Word Wrap (${shortcut})`;
        } else {
            // Line wrapping was turned off
            wrapButton.classList.remove('active');
            wrapButton.title = `Enable Word Wrap (${shortcut})`;
        }
    }

    // Refresh editor to apply changes
    editor.refresh();
}

// Function to toggle line numbers
function toggleLineNumbers() {
    if (!editor) return;

    // Get current line numbers state
    const currentLineNumbers = editor.getOption('lineNumbers');

    // Toggle line numbers
    editor.setOption('lineNumbers', !currentLineNumbers);

    // Update button appearance
    const lineNumbersButton = document.querySelector('.toggle-linenumbers-button');
    if (lineNumbersButton) {
        // Use the shared getShortcut function from EditorToolbar
        const getShortcut = window.EditorToolbar && window.EditorToolbar.getShortcut ? 
            window.EditorToolbar.getShortcut : (mac, other) => mac || other;
        
        const shortcut = getShortcut('Option+N', 'Alt+N');
        
        if (!currentLineNumbers) {
            // Line numbers were turned on
            lineNumbersButton.classList.add('active');
            lineNumbersButton.title = `Hide Line Numbers (${shortcut})`;
        } else {
            // Line numbers were turned off
            lineNumbersButton.classList.remove('active');
            lineNumbersButton.title = `Show Line Numbers (${shortcut})`;
        }
    }

    // Refresh editor to apply changes
    editor.refresh();
}

// Variable to track autocapitalize state
let autocapitalizeEnabled = false;

// Function to toggle autocapitalize
function toggleAutocapitalize() {
    if (!editor) return;

    // Toggle autocapitalize state
    autocapitalizeEnabled = !autocapitalizeEnabled;
    
    // Update button appearance
    const autocapitalizeButton = document.querySelector('.toggle-autocapitalize-button');
    if (autocapitalizeButton) {
        // Use the shared getShortcut function from EditorToolbar
        const getShortcut = window.EditorToolbar && window.EditorToolbar.getShortcut ? 
            window.EditorToolbar.getShortcut : (mac, other) => mac || other;
        
        const shortcut = getShortcut('Option+C', 'Alt+C');
        
        if (autocapitalizeEnabled) {
            // Autocapitalize was turned on
            autocapitalizeButton.classList.add('active');
            autocapitalizeButton.title = `Disable Auto-Capitalize (${shortcut})`;
        } else {
            // Autocapitalize was turned off
            autocapitalizeButton.classList.remove('active');
            autocapitalizeButton.title = `Enable Auto-Capitalize (${shortcut})`;
        }
    }
    
    // If enabled, set up the event handler for autocapitalize
    if (autocapitalizeEnabled) {
        // Only add if not already added
        if (!editor._autocapitalizeHandler) {
            editor._autocapitalizeHandler = function(cm, change) {
                // Only process if autocapitalize is enabled
                if (!autocapitalizeEnabled) return;
                
                // Only process single character insertions and newlines
                if (change.origin === '+input' && (change.text.length === 1 || (change.text.length === 2 && change.text[0] === ''))) {
                    const doc = cm.getDoc();
                    const cursor = doc.getCursor();
                    const line = doc.getLine(cursor.line);
                    
                    // Check if we're at the beginning of a line or after punctuation followed by space
                    if (cursor.ch === 1 || 
                        (cursor.ch >= 2 && 
                         /[.!?]\s$/.test(line.substring(cursor.ch - 2, cursor.ch)))) {
                        
                        // Get the character just inserted
                        const char = line.charAt(cursor.ch - 1);
                        
                        // If it's a lowercase letter, capitalize it
                        if (/[a-z]/.test(char)) {
                            const uppercase = char.toUpperCase();
                            doc.replaceRange(uppercase, 
                                {line: cursor.line, ch: cursor.ch - 1}, 
                                {line: cursor.line, ch: cursor.ch});
                        }
                    }
                }
            };
            
            // Add the change event handler
            editor.on('change', editor._autocapitalizeHandler);
        }
    } else {
        // Remove the event handler if it exists
        if (editor._autocapitalizeHandler) {
            editor.off('change', editor._autocapitalizeHandler);
            editor._autocapitalizeHandler = null;
        }
    }
}

// Export the module
window.EditorCore = {
    // Editor management
    loadEditor,
    exitEditMode,
    refreshEditor,
    toggleMode,

    // Content functions
    getEditorContent,
    insertIntoEditor,
    insertRawContent,
    isEditorActive,
    hasUnsavedChanges,

        // Utility functions
    wrapText,
    toggleWordWrap,
    toggleLineNumbers,
    toggleAutocapitalize,

    // Getters
    getEditor: () => editor,
    getMode: () => editorMode,
    getOriginalContent: () => originalContent,
    setOriginalContent: (content) => {
        originalContent = content;
        visualBaseMarkdown = content;
        dirty = false;
        visualChanged = false;
        sourceChanged = false;
    }
};
