/**
 * In-place editor loader.
 *
 * The normal document remains the initial page. CodeMirror and the editor
 * modules are loaded only when an authorized user asks to edit it.
 */
(function() {
    'use strict';

    let editorAssetsPromise = null;
    let editRequestPending = false;

    const assetVersion = document.querySelector('meta[name="asset-version"]')?.content || 'dev';
    const versioned = (path) => `${path}?=${encodeURIComponent(assetVersion)}`;

    function loadStylesheet(href, id) {
        if ((id && document.getElementById(id)) || document.querySelector(`link[href="${href}"]`)) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            if (id) link.id = id;
            link.onload = resolve;
            link.onerror = () => reject(new Error(`Failed to load stylesheet: ${href}`));
            document.head.appendChild(link);
        });
    }

    function loadScript(src) {
        const existing = Array.from(document.scripts).find((script) => script.getAttribute('src') === src);
        if (existing) {
            return existing.dataset.loaded === 'true'
                ? Promise.resolve()
                : new Promise((resolve, reject) => {
                    existing.addEventListener('load', resolve, { once: true });
                    existing.addEventListener('error', reject, { once: true });
                });
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = false;
            script.onload = () => {
                script.dataset.loaded = 'true';
                resolve();
            };
            script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
            document.body.appendChild(script);
        });
    }

    async function loadEditorAssets() {
        if (window.WikiEditor && window.EditorCore) return;
        if (editorAssetsPromise) return editorAssetsPromise;

        editorAssetsPromise = (async () => {
            await Promise.all([
                loadStylesheet('/static/libs/codemirror-5.65.18/codemirror.min.css', 'codemirror-editor-style'),
                loadStylesheet('/static/libs/codemirror-5.65.18/theme/darcula.min.css', 'codemirror-darcula-style'),
                loadStylesheet(versioned('/static/css/editor.css'), 'wiki-editor-style')
            ]);

            const scripts = [
                '/static/libs/codemirror-5.65.18/codemirror.min.js',
                '/static/libs/codemirror-5.65.18/mode/markdown.min.js',
                '/static/libs/codemirror-5.65.18/addon/edit/continuelist.min.js',
                '/static/libs/codemirror-5.65.18/addon/display/placeholder.min.js',
                '/static/libs/codemirror-5.65.18/addon/selection/active-line.min.js',
                versioned('/static/js/mte-meaw.js'),
                versioned('/static/js/mte-kernel-2.1.1.js'),
                versioned('/static/js/editor-themes.js'),
                versioned('/static/js/editor-visual.js'),
                versioned('/static/js/editor-core.js'),
                versioned('/static/js/editor-pickers.js'),
                versioned('/static/js/editor-toolbar.js'),
                versioned('/static/js/editor.js'),
                versioned('/static/js/markdown-table-editor.js')
            ];

            for (const src of scripts) {
                await loadScript(src);
            }

            if (!window.WikiEditor || !window.EditorCore) {
                throw new Error('Editor modules did not initialize');
            }

            // Keyboard shortcuts initialized before CodeMirror existed on the
            // normal page, so register their editor commands now.
            window.KeyboardShortcuts?.registerFormattingCommands?.();
            window.KeyboardShortcuts?.registerAllCodeMirrorShortcuts?.();

            window.WikiEditor.initializeEditControls();
        })().catch((error) => {
            editorAssetsPromise = null;
            throw error;
        });

        return editorAssetsPromise;
    }

    function setEditButtonBusy(isBusy) {
        const button = document.querySelector('.edit-page');
        if (!button) return;

        button.disabled = isBusy;
        button.setAttribute('aria-busy', String(isBusy));
        button.classList.toggle('loading', isBusy);
    }

    async function authorizeEdit() {
        const response = await fetch('/api/check-auth');
        if (response.status === 401) {
            if (window.Auth?.showLoginDialog) {
                window.Auth.showLoginDialog(() => {});
            }
            return false;
        }

        if (!response.ok) {
            throw new Error('Unable to verify editor access');
        }

        const session = await response.json();
        const canEdit = session.role === 'admin' || session.role === 'editor';
        if (!canEdit) {
            window.Auth?.showPermissionError?.('editor');
        }
        return canEdit;
    }

    function removeLegacyEditParameter() {
        const url = new URL(window.location.href);
        if (!url.searchParams.has('mode')) return;

        url.searchParams.delete('mode');
        window.history.replaceState({}, '', url.pathname + url.search + url.hash);
    }

    async function requestEdit() {
        if (window.NotFound || document.querySelector('.content')?.classList.contains('editing') || editRequestPending) {
            return;
        }

        editRequestPending = true;
        setEditButtonBusy(true);

        try {
            if (!await authorizeEdit()) return;
            await loadEditorAssets();
            const didEnter = await window.WikiEditor.enterEditMode();
            if (didEnter) removeLegacyEditParameter();
        } catch (error) {
            console.error('Unable to open the editor:', error);
            if (window.DialogSystem?.showMessageDialog) {
                window.DialogSystem.showMessageDialog('Editor Error', 'The editor could not be loaded. Please try again.');
            }
        } finally {
            editRequestPending = false;
            setEditButtonBusy(false);
        }
    }

    window.InPlaceEditor = {
        requestEdit,
        loadEditorAssets
    };

    document.addEventListener('DOMContentLoaded', function() {
        const editPageButton = document.querySelector('.edit-page');
        editPageButton?.addEventListener('click', requestEdit);

        // Preserve old edit links while normalizing them to the in-place flow.
        if (new URLSearchParams(window.location.search).get('mode') === 'edit') {
            requestEdit();
        }
    });
})();
