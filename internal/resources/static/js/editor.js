/**
 * Editor Module - Main Coordinator
 * Orchestrates all editor functionality through modular components
 * 
 * This file has been refactored into multiple modules:
 * - editor-core.js: Core editor functionality and content management
 * - editor-toolbar.js: Toolbar creation and actions
 * - editor-pickers.js: Emoji, document, table, and anchor pickers
 * - editor-themes.js: Theme management and mobile handling
 */

// Ensure modules are loaded before using them
function ensureModulesLoaded() {
    const modules = ['EditorVisual', 'EditorCore', 'EditorToolbar', 'EditorPickers', 'EditorThemes'];
    for (const module of modules) {
        if (!window[module]) {
            console.warn(`Editor module ${module} not loaded yet`);
            return false;
        }
    }
    return true;
}

// Legacy compatibility functions - delegate to new modules
function loadEditor(mainContent, editorContainer, viewToolbar, editToolbar) {
    if (!ensureModulesLoaded()) {
        console.error('Editor modules not loaded');
        return;
    }
    return window.EditorCore.loadEditor(mainContent, editorContainer, viewToolbar, editToolbar);
}

function exitEditMode(mainContent, editorContainer, viewToolbar, editToolbar) {
    if (!window.EditorCore) return;
    return window.EditorCore.exitEditMode(mainContent, editorContainer, viewToolbar, editToolbar);
}

function getEditorContent() {
    if (!window.EditorCore) return '';
    return window.EditorCore.getEditorContent();
}

function insertIntoEditor(url, isImage, name) {
    if (!window.EditorCore) return false;
    return window.EditorCore.insertIntoEditor(url, isImage, name);
}

function insertRawContent(content) {
    if (!window.EditorCore) return false;
    return window.EditorCore.insertRawContent(content);
}

function isEditorActive() {
    if (!window.EditorCore) return false;
    return window.EditorCore.isEditorActive();
}

function hasUnsavedChanges() {
    if (!window.EditorCore) return false;
    return window.EditorCore.hasUnsavedChanges();
}

// Toolbar functions
function createToolbar(container) {
    if (!window.EditorToolbar) return null;
    return window.EditorToolbar.createToolbar(container);
}

function setupToolbarActions(toolbar) {
    if (!window.EditorToolbar) return;
    return window.EditorToolbar.setupToolbarActions(toolbar);
}

// Picker functions
function showEmojiPicker(button) {
    if (!window.EditorPickers) return;
    return window.EditorPickers.showEmojiPicker(button);
}

function showDocPicker(button) {
    if (!window.EditorPickers) return;
    return window.EditorPickers.showDocPicker(button);
}

function showTablePicker(button) {
    if (!window.EditorPickers) return;
    return window.EditorPickers.showTablePicker(button);
}

function showAnchorPicker(button) {
    if (!window.EditorPickers) return;
    return window.EditorPickers.showAnchorPicker(button);
}

// Dialog functions for unsaved changes
function showUnsavedChangesDialog(saveCallback, discardCallback) {
    // Create a custom dialog if it doesn't exist
    let dialog = document.querySelector('.unsaved-changes-dialog');

    if (!dialog) {
        // Create dialog from scratch
        dialog = document.createElement('div');
        dialog.className = 'unsaved-changes-dialog user-confirmation-dialog';
        dialog.setAttribute('dir', 'auto');

        const container = document.createElement('div');
        container.className = 'dialog-container';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-dialog';
        closeBtn.setAttribute('aria-label', 'Close confirmation dialog');
        closeBtn.innerHTML = '<i class="fa fa-times"></i>';

        const title = document.createElement('h2');
        title.className = 'dialog-title confirm-title';
        title.textContent = window.i18n ? window.i18n.t('editor.unsaved_changes') : 'Unsaved Changes';

        const content = document.createElement('p');
        content.className = 'dialog-message confirm-content';
        content.textContent = window.i18n ? window.i18n.t('editor.unsaved_changes_save') : 'You have unsaved changes. Do you want to save them before exiting?';

        const actions = document.createElement('div');
        actions.className = 'form-actions';

        const saveBtn = document.createElement('button');
        saveBtn.type = 'button';
        saveBtn.className = 'dialog-button confirm-save primary';
        saveBtn.textContent = window.i18n ? window.i18n.t('common.yes') : 'Save';

        const discardBtn = document.createElement('button');
        discardBtn.type = 'button';
        discardBtn.className = 'dialog-button confirm-discard';
        discardBtn.textContent = window.i18n ? window.i18n.t('common.no') : "Don't Save";

        const stayBtn = document.createElement('button');
        stayBtn.type = 'button';
        stayBtn.className = 'dialog-button confirm-stay';
        stayBtn.textContent = window.i18n ? window.i18n.t('common.cancel') : 'Cancel';

        // Assemble the dialog
        actions.appendChild(saveBtn);
        actions.appendChild(discardBtn);
        actions.appendChild(stayBtn);

        container.appendChild(closeBtn);
        container.appendChild(title);
        container.appendChild(content);
        container.appendChild(actions);

        dialog.appendChild(container);

        // Add to document
        document.body.appendChild(dialog);

        // Set up event listeners
        saveBtn.addEventListener('click', function() {
            hideUnsavedChangesDialog();
            if (typeof saveCallback === 'function') {
                saveCallback();
            }
        });

        discardBtn.addEventListener('click', function() {
            hideUnsavedChangesDialog();
            if (typeof discardCallback === 'function') {
                discardCallback();
            }
        });

        stayBtn.addEventListener('click', function() {
            hideUnsavedChangesDialog();
            // No callback - just stay in edit mode
        });

        closeBtn.addEventListener('click', function() {
            hideUnsavedChangesDialog();
            // No callback - just close the dialog and stay in edit mode
        });
    } else {
        // Update existing dialog text
        const title = dialog.querySelector('.confirm-title');
        const content = dialog.querySelector('.confirm-content');

        if (title) {
            title.textContent = window.i18n ? window.i18n.t('editor.unsaved_changes') : 'Unsaved Changes';
        }

        if (content) {
            content.textContent = window.i18n ? window.i18n.t('editor.unsaved_changes_save') : 'You have unsaved changes. Do you want to save them before exiting?';
        }

        // Update button event listeners
        const saveBtn = dialog.querySelector('.confirm-save');
        const discardBtn = dialog.querySelector('.confirm-discard');

        if (saveBtn) {
            const newSaveBtn = saveBtn.cloneNode(true);
            saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
            newSaveBtn.addEventListener('click', function() {
                hideUnsavedChangesDialog();
                if (typeof saveCallback === 'function') {
                    saveCallback();
                }
            });
        }

        if (discardBtn) {
            const newDiscardBtn = discardBtn.cloneNode(true);
            discardBtn.parentNode.replaceChild(newDiscardBtn, discardBtn);
            newDiscardBtn.addEventListener('click', function() {
                hideUnsavedChangesDialog();
                if (typeof discardCallback === 'function') {
                    discardCallback();
                }
            });
        }
    }

    // Show the dialog
    dialog.classList.add('active');
}

// Function to hide the unsaved changes dialog
function hideUnsavedChangesDialog() {
    const dialog = document.querySelector('.unsaved-changes-dialog');
    if (dialog) {
        dialog.classList.remove('active');
    }
}

let editControlsInitialized = false;

function getEditElements() {
    return {
        mainContent: document.querySelector('.content'),
        editorContainer: document.querySelector('.editor-container'),
        viewToolbar: document.querySelector('.view-toolbar'),
        editToolbar: document.querySelector('.edit-toolbar')
    };
}

// Enter edit mode without navigating away from the rendered document.
async function enterEditMode() {
    const elements = getEditElements();
    if (!elements.mainContent || !elements.editorContainer || !elements.viewToolbar || !elements.editToolbar) {
        return false;
    }
    if (elements.mainContent.classList.contains('editing')) return true;

    return await loadEditor(
        elements.mainContent,
        elements.editorContainer,
        elements.viewToolbar,
        elements.editToolbar
    );
}

function leaveEditMode() {
    const elements = getEditElements();
    exitEditMode(
        elements.mainContent,
        elements.editorContainer,
        elements.viewToolbar,
        elements.editToolbar
    );
}

// Function to initialize edit controls after the deferred editor bundle loads.
function initializeEditControls() {
    if (editControlsInitialized) return;

    const saveButton = document.querySelector('.save-changes');
    const cancelButton = document.querySelector('.cancel-edit');
    const modeButton = document.querySelector('.toggle-editor-mode');
    editControlsInitialized = true;

    // Save button functionality
    if (saveButton) {
        saveButton.addEventListener('click', async function() {
            if (!isEditorActive() || saveButton.disabled) return;

            saveButton.disabled = true;
            saveButton.setAttribute('aria-busy', 'true');
            try {
                const isHomepage = window.location.pathname === '/';
                const apiPath = isHomepage ? '/api/save/' : `/api/save${window.location.pathname}`;

                const content = getEditorContent();

                const response = await fetch(apiPath, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                    body: content
                });

                if (!response.ok) throw new Error('Failed to save content');

                // Update originalContent to match what was just saved
                if (window.EditorCore) {
                    window.EditorCore.setOriginalContent(content);
                }

                // Reload the same URL so titles, layouts, attachments, and other
                // server-derived content all reflect the saved markdown.
                window.location.reload();

            } catch (error) {
                console.error('Error:', error);
                alert('Failed to save changes');
                saveButton.disabled = false;
                saveButton.setAttribute('aria-busy', 'false');
            }
        });
    }

    // Cancel button functionality
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            // Check if there are unsaved changes
            if (hasUnsavedChanges()) {
                // Show custom unsaved changes dialog
                showUnsavedChangesDialog(
                    // Save callback
                    function() {
                        const saveButton = document.querySelector('.save-changes');
                        if (saveButton) {
                            saveButton.click();
                        }
                    },
                    // Discard callback
                    function() {
                        leaveEditMode();
                    }
                );
            } else {
                leaveEditMode();
            }
        });
    }

    if (modeButton) {
        modeButton.addEventListener('click', async function() {
            if (!isEditorActive() || modeButton.disabled) return;
            modeButton.disabled = true;
            try {
                await window.EditorCore.toggleMode();
            } catch (error) {
                console.error('Error switching editor mode:', error);
                alert('Failed to switch editor mode');
            } finally {
                modeButton.disabled = false;
            }
        });
    }
}

// Export the functions for global access
window.WikiEditor = {
    // Main functions
    loadEditor,
    enterEditMode,
    exitEditMode,
    getEditorContent,
    insertIntoEditor,
    insertRawContent,
    isEditorActive,
    hasUnsavedChanges,
    
    // Dialog functions
    showUnsavedChangesDialog,
    hideUnsavedChangesDialog,
    
    // Initialization
    initializeEditControls
};

// Backward compatibility - ensure these functions are available globally
window.loadEditor = loadEditor;
window.exitEditMode = exitEditMode;
window.getEditorContent = getEditorContent;
window.insertIntoEditor = insertIntoEditor;
window.insertRawContent = insertRawContent;
window.isEditorActive = isEditorActive;
window.hasUnsavedChanges = hasUnsavedChanges;
window.showUnsavedChangesDialog = showUnsavedChangesDialog;
window.hideUnsavedChangesDialog = hideUnsavedChangesDialog;
