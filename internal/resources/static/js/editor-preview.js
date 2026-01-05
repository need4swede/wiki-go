/**
 * Editor Preview Module
 * Handles preview functionality and markdown rendering
 */

let previewElement = null;
let previewUpdateTimeout = null;
const PREVIEW_DEBOUNCE_MS = 300;

// Function to create preview panel
function createPreview(container) {
    const preview = document.createElement('div');
    preview.className = 'editor-preview';
    container.appendChild(preview);
    previewElement = preview;
    return preview;
}

// Function to toggle preview panel visibility
async function togglePreview() {
    const editor = window.EditorCore.getEditor();
    if (!editor) return;

    const previewPanel = document.querySelector('.editor-preview-panel');
    const editorMainArea = document.querySelector('.editor-main-area');
    const toolbar = document.querySelector('.custom-toolbar');

    if (!previewPanel) return;

    const isPreviewHidden = previewPanel.style.display === 'none';

    if (isPreviewHidden) {
        // Show preview panel
        previewPanel.style.display = 'flex';
        editorMainArea.style.flex = '1';

        // Update preview with current content
        await updatePreview(editor.getValue());

        // Update button icon
        const previewButton = toolbar?.querySelector('.preview-button');
        if (previewButton) {
            previewButton.classList.add('active');
            previewButton.title = 'Hide Preview';
            const icon = previewButton.querySelector('i');
            if (icon) icon.className = 'fa fa-eye';
        }
    } else {
        // Hide preview panel
        previewPanel.style.display = 'none';
        editorMainArea.style.flex = '1';

        // Update button icon
        const previewButton = toolbar?.querySelector('.preview-button');
        if (previewButton) {
            previewButton.classList.remove('active');
            previewButton.title = 'Show Preview';
            const icon = previewButton.querySelector('i');
            if (icon) icon.className = 'fa fa-eye-slash';
        }
    }

    // Refresh editor to ensure proper sizing
    setTimeout(() => {
        if (editor) {
            editor.refresh();
            editor.focus();
        }
    }, 50);
}

// Debounced preview update for live editing
function debouncedUpdatePreview(content) {
    if (previewUpdateTimeout) {
        clearTimeout(previewUpdateTimeout);
    }
    previewUpdateTimeout = setTimeout(() => {
        updatePreviewNow(content);
    }, PREVIEW_DEBOUNCE_MS);
}

// Function to update preview content (immediate)
async function updatePreviewNow(content) {
    if (!previewElement) return;

    // Don't show loading message for live preview - it's too distracting
    // Just keep the current content until the new one is ready

    try {
        // Get current path for handling relative links correctly
        const isHomepage = window.location.pathname === '/';
        const path = isHomepage ? '/' : window.location.pathname;

        // Check for frontmatter to add special styling if needed
        const hasFrontmatter = content.startsWith('---\n');

        // Call the server-side renderer
        const response = await fetch(`/api/render-markdown?path=${encodeURIComponent(path)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: content
        });

        if (!response.ok) {
            throw new Error('Failed to render markdown');
        }

        const html = await response.text();

        // If the content has kanban board, add a class to the preview element
        if (hasFrontmatter && html.includes('kanban-board')) {
            previewElement.classList.add('kanban-preview');
        } else {
            previewElement.classList.remove('kanban-preview');
        }

        previewElement.innerHTML = html;

        // Store Mermaid sources BEFORE any rendering happens
        const mermaidDiagrams = previewElement.querySelectorAll('.mermaid');
        mermaidDiagrams.forEach((diagram) => {
            // Extract the original source from the rendered content
            const textContent = diagram.textContent || diagram.innerText;
            if (textContent && textContent.trim()) {
                diagram.dataset.mermaidSource = textContent.trim();
            }
        });

        // Use lazy loader to ensure libraries are loaded before rendering
        const promises = [];

        // Load and initialize Prism if there are code blocks
        if (previewElement.querySelector('pre code')) {
            if (window.LazyLoader) {
                promises.push(window.LazyLoader.forceLoad('prism').then(() => {
                    if (window.Prism) {
                        Prism.highlightAllUnder(previewElement);
                    }
                }));
            } else if (window.Prism) {
                Prism.highlightAllUnder(previewElement);
            }
        }

        // Load and initialize MathJax if there are math formulas
        if (previewElement.querySelector('.math, .katex, [class*="math"]') || 
            previewElement.textContent.includes('$')) {
            if (window.LazyLoader) {
                promises.push(window.LazyLoader.forceLoad('mathjax').then(() => {
                    if (window.MathJax) {
                        MathJax.typeset([previewElement]);
                    }
                }));
            } else if (window.MathJax) {
                MathJax.typeset([previewElement]);
            }
        }

        // Load and initialize Mermaid if there are diagrams
        if (previewElement.querySelector('.mermaid')) {
            if (window.LazyLoader) {
                promises.push(window.LazyLoader.forceLoad('mermaid').then(() => {
                    if (window.mermaid) {
                        mermaid.init(undefined, previewElement.querySelectorAll('.mermaid'));
                    }
                }));
            } else if (window.mermaid) {
                mermaid.init(undefined, previewElement.querySelectorAll('.mermaid'));
            }
        }

        // Wait for all libraries to load and render
        await Promise.all(promises);

    } catch (error) {
        console.error('Preview error:', error);
        previewElement.innerHTML = '<p>Error rendering preview</p>';
    }
}

// Public updatePreview function - uses debouncing by default
function updatePreview(content, immediate = false) {
    if (immediate) {
        updatePreviewNow(content);
    } else {
        debouncedUpdatePreview(content);
    }
}

// Cleanup function
function cleanup() {
    if (previewUpdateTimeout) {
        clearTimeout(previewUpdateTimeout);
        previewUpdateTimeout = null;
    }
    if (previewElement) {
        previewElement.remove();
        previewElement = null;
    }
}

// Export the module
window.EditorPreview = {
    createPreview,
    togglePreview,
    updatePreview,
    cleanup,

    // Getters
    getPreviewElement: () => previewElement
};