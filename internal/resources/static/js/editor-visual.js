/**
 * Visual editor utilities.
 * Converts the editable rendered document back to Markdown while preserving
 * frontmatter and wiki-specific generated blocks.
 */
(function() {
    'use strict';

    const SKIP_SELECTOR = [
        '.copy-button',
        '.heading-anchor',
        '.editor-admin-only',
        '.global-banner',
        '.links-controls',
        '.links-stats-bar',
        '.no-results',
        '.section-count',
        '.external-icon',
        '.link-favicon',
        '.save-state',
        'button',
        'script',
        'style'
    ].join(',');

    function extractFrontmatter(markdown) {
        const match = markdown.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n)*/);
        return match ? match[0].replace(/\s*$/, '\n\n') : '';
    }

    function contentWithoutFrontmatter(markdown) {
        return markdown.slice(extractFrontmatter(markdown).length).replace(/^\s+/, '');
    }

    function normalizeAssetURL(value) {
        if (!value) return '';

        // Goldmark keeps ordinary relative links intact; preserve that useful
        // source form instead of expanding it to the current absolute path.
        if (!value.startsWith('/') && !/^[a-z][a-z0-9+.-]*:/i.test(value) && !value.startsWith('//')) {
            return value;
        }

        try {
            const url = new URL(value, window.location.origin);
            if (url.origin === window.location.origin && url.pathname.startsWith('/api/files/')) {
                return decodeURIComponent(url.pathname.split('/').pop()) + url.search + url.hash;
            }
            if (url.origin === window.location.origin) {
                return url.pathname + url.search + url.hash;
            }
        } catch (_) {
            // Keep the original value when it is not a URL.
        }

        return value;
    }

    function escapeText(value) {
        return value
            .replace(/\u00a0/g, ' ')
            .replace(/\\/g, '\\\\')
            .replace(/([`*_\[\]])/g, '\\$1');
    }

    function inlineContent(node) {
        return Array.from(node.childNodes).map((child) => convertNode(child, { inline: true })).join('').trim();
    }

    function prefixLines(value, prefix) {
        return value.trim().split('\n').map((line) => `${prefix}${line}`).join('\n');
    }

    function listToMarkdown(list, depth = 0) {
        const ordered = list.tagName === 'OL';
        const start = Number(list.getAttribute('start')) || 1;
        const lines = [];

        Array.from(list.children).filter((child) => child.tagName === 'LI').forEach((item, index) => {
            const nestedLists = Array.from(item.children).filter((child) => child.matches('ul, ol'));
            const contentNodes = Array.from(item.childNodes).filter((child) => !(child.nodeType === Node.ELEMENT_NODE && child.matches('ul, ol')));
            const checkbox = item.querySelector(':scope > input[type="checkbox"], :scope > .task-list-item > input[type="checkbox"]');
            let text = contentNodes.map((child) => convertNode(child, { inline: true })).join('').trim();
            text = text.replace(/^\s+|\s+$/g, '');

            let marker = ordered ? `${start + index}. ` : '- ';
            if (checkbox) marker = `- [${checkbox.checked ? 'x' : ' '}] `;

            const itemDepth = depth + (Number(item.dataset.indentLevel) || 0);
            const indentation = '  '.repeat(itemDepth);
            lines.push(indentation + marker + text);
            nestedLists.forEach((nested) => lines.push(listToMarkdown(nested, depth + 1)));
        });

        return lines.join('\n') + (depth === 0 ? '\n\n' : '');
    }

    function tableToMarkdown(table) {
        const rows = Array.from(table.querySelectorAll('tr')).map((row) =>
            Array.from(row.querySelectorAll(':scope > th, :scope > td')).map((cell) => inlineContent(cell).replace(/\|/g, '\\|'))
        ).filter((row) => row.length);

        if (!rows.length) return '';
        const width = Math.max(...rows.map((row) => row.length));
        rows.forEach((row) => {
            while (row.length < width) row.push('');
        });

        const header = rows[0];
        const body = rows.slice(1);
        return [
            `| ${header.join(' | ')} |`,
            `| ${header.map(() => '---').join(' | ')} |`,
            ...body.map((row) => `| ${row.join(' | ')} |`)
        ].join('\n') + '\n\n';
    }

    function alertToMarkdown(element) {
        const typeClass = Array.from(element.classList).find((name) => name.startsWith('markdown-alert-')) || 'markdown-alert-note';
        const type = typeClass.replace('markdown-alert-', '').toUpperCase();
        const content = element.querySelector('.markdown-alert-content');
        const markdown = content ? convertChildren(content).trim() : '';
        return `> [!${type}]\n${prefixLines(markdown, '> ')}\n\n`;
    }

    function convertNode(node, context = {}) {
        if (node.nodeType === Node.TEXT_NODE) return escapeText(node.nodeValue || '');
        if (node.nodeType !== Node.ELEMENT_NODE) return '';

        const element = node;
        if (element.matches(SKIP_SELECTOR) || element.hasAttribute('data-editor-ui')) return '';
        if (element.dataset.wikiSource) return `${element.dataset.wikiSource.trim()}\n\n`;

        const tag = element.tagName.toLowerCase();
        const children = () => convertChildren(element);

        if (element.classList.contains('link-item')) {
            const link = element.querySelector('.link-title a');
            const title = link?.textContent.trim() || element.dataset.title || 'Link';
            const href = normalizeAssetURL(link?.getAttribute('href') || element.dataset.url || '');
            const description = element.querySelector('.link-description')?.textContent.trim() || '';
            const timestamp = Number(element.dataset.date);
            const date = timestamp ? new Date(timestamp * 1000).toISOString().slice(0, 10) : '';
            return `- [${escapeText(title)}](${href})${description ? ` - ${escapeText(description)}` : ''}${date ? ` | ${date}` : ''}\n`;
        }

        if (element.classList.contains('kanban-column')) {
            const title = element.querySelector(':scope > .kanban-column-header .column-title')?.textContent.trim() || 'Column';
            const tasks = element.querySelector(':scope > .kanban-column-content > ul');
            return `##### ${escapeText(title)}\n${tasks ? listToMarkdown(tasks) : '\n'}`;
        }

        if (/^h[1-6]$/.test(tag)) {
            const level = Number(tag.slice(1));
            return `${'#'.repeat(level)} ${inlineContent(element)}\n\n`;
        }

        switch (tag) {
            case 'br': return '  \n';
            case 'p': return `${children().trim()}\n\n`;
            case 'strong':
            case 'b': return `**${children()}**`;
            case 'em':
            case 'i':
                if (element.classList.contains('fa')) return '';
                return `*${children()}*`;
            case 'del':
            case 's':
            case 'strike': return `~~${children()}~~`;
            case 'mark': return `==${children()}==`;
            case 'sup': return `^${children()}^`;
            case 'sub': return `~${children()}~`;
            case 'code':
                if (element.parentElement?.tagName === 'PRE') return element.textContent || '';
                return `\`${(element.textContent || '').replace(/`/g, '\\`')}\``;
            case 'pre': {
                const code = element.querySelector('code');
                const languageClass = Array.from(code?.classList || []).find((name) => name.startsWith('language-'));
                const language = languageClass ? languageClass.replace('language-', '') : '';
                const value = (code?.textContent || element.textContent || '').replace(/\n$/, '');
                return `\`\`\`${language}\n${value}\n\`\`\`\n\n`;
            }
            case 'a': {
                const label = children().trim() || element.textContent.trim();
                const href = normalizeAssetURL(element.getAttribute('href'));
                return href ? `[${label}](${href})` : label;
            }
            case 'img': {
                const alt = element.getAttribute('alt') || '';
                const src = normalizeAssetURL(element.getAttribute('src'));
                return `![${alt}](${src})`;
            }
            case 'video': {
                const source = element.getAttribute('src') || element.querySelector('source')?.getAttribute('src') || '';
                const filename = normalizeAssetURL(source);
                return filename ? `\`\`\`mp4\n${filename}\n\`\`\`\n\n` : '';
            }
            case 'ul':
            case 'ol': return listToMarkdown(element);
            case 'li': {
                if (element.classList.contains('task-list-item-container')) {
                    const checkbox = element.querySelector('input[type="checkbox"]');
                    const taskText = element.querySelector('.task-text');
                    const depth = Number(element.dataset.indentLevel) || 0;
                    const text = taskText ? inlineContent(taskText) : children().trim();
                    return `${'  '.repeat(depth)}- [${checkbox?.checked ? 'x' : ' '}] ${text}\n`;
                }
                return children();
            }
            case 'blockquote': return `${prefixLines(children(), '> ')}\n\n`;
            case 'hr': return '---\n\n';
            case 'table': return tableToMarkdown(element);
            case 'details': {
                const summary = element.querySelector(':scope > summary')?.textContent.trim() || 'Details';
                const content = element.querySelector(':scope > .details-content');
                return `\`\`\`details ${summary}\n${content ? convertChildren(content).trim() : ''}\n\`\`\`\n\n`;
            }
            case 'input': return '';
            case 'div':
                if (element.classList.contains('markdown-alert')) return alertToMarkdown(element);
                return `${children().trim()}\n\n`;
            case 'figure': return `${children().trim()}\n\n`;
            case 'figcaption': return `*${children().trim()}*\n\n`;
            default: return children();
        }
    }

    function convertChildren(element) {
        return Array.from(element.childNodes).map((child) => convertNode(child)).join('');
    }

    function annotateSources(root, markdown) {
        const mappings = [
            { selector: '.mermaid', regex: /```mermaid\s*\n[\s\S]*?\n```|~~~mermaid\s*\n[\s\S]*?\n~~~/gi },
            { selector: '.wiki-stats', regex: /:::stats\s+(?:recent|count)=[^:]+:::/gi },
            { selector: '.wiki-toc', regex: /^\s*\[toc\]\s*$/gim },
            { selector: 'video, .video-container, .youtube-container, .vimeo-container', regex: /```(?:mp4|youtube|vimeo)\s*\n[\s\S]*?\n```|~~~(?:mp4|youtube|vimeo)\s*\n[\s\S]*?\n~~~/gi }
        ];

        mappings.forEach(({ selector, regex }) => {
            const sources = markdown.match(regex) || [];
            root.querySelectorAll(selector).forEach((element, index) => {
                if (!sources[index] || element.closest('[data-wiki-source]')) return;
                element.dataset.wikiSource = sources[index];
                element.contentEditable = 'false';
                element.classList.add('visual-editor-protected');
            });
        });

        root.querySelectorAll('.global-banner, .links-controls, .links-stats-bar, .no-results').forEach((element) => {
            element.setAttribute('data-editor-ui', 'true');
            element.contentEditable = 'false';
        });
        root.querySelectorAll('.copy-button, .heading-anchor, button').forEach((element) => element.contentEditable = 'false');
    }

    function activate(root, markdown) {
        annotateSources(root, markdown);
        root.contentEditable = 'true';
        root.spellcheck = true;
        root.setAttribute('role', 'textbox');
        root.setAttribute('aria-multiline', 'true');
        root.setAttribute('aria-label', 'Document content');
        root.classList.add('visual-editor-surface');
    }

    function deactivate(root) {
        if (!root) return;
        root.removeAttribute('contenteditable');
        root.removeAttribute('role');
        root.removeAttribute('aria-multiline');
        root.removeAttribute('aria-label');
        root.classList.remove('visual-editor-surface');
        root.querySelectorAll('[data-wiki-source]').forEach((element) => {
            element.removeAttribute('data-wiki-source');
            element.classList.remove('visual-editor-protected');
            element.removeAttribute('contenteditable');
        });
        root.querySelectorAll('[data-editor-ui]').forEach((element) => {
            element.removeAttribute('data-editor-ui');
            element.removeAttribute('contenteditable');
        });
        root.querySelectorAll('.copy-button, .heading-anchor, button').forEach((element) => {
            element.removeAttribute('contenteditable');
        });
    }

    function toMarkdown(root, baseMarkdown) {
        const frontmatter = extractFrontmatter(baseMarkdown);
        const markdown = convertChildren(root)
            .replace(/[ \t]+\n/g, '\n')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
        return frontmatter + markdown + '\n';
    }

    function command(root, action, value) {
        root.focus();
        document.execCommand(action, false, value || null);
        let event;
        try {
            event = new InputEvent('input', { bubbles: true, inputType: 'format' });
        } catch (_) {
            event = new Event('input', { bubbles: true });
        }
        root.dispatchEvent(event);
    }

    function createToolbar(root) {
        const toolbar = document.createElement('div');
        toolbar.className = 'visual-editor-toolbar';
        toolbar.setAttribute('data-editor-ui', 'true');
        toolbar.setAttribute('role', 'toolbar');
        toolbar.setAttribute('aria-label', 'Visual formatting');

        const actions = [
            ['fa-paragraph', 'formatBlock', 'p', 'Paragraph'],
            ['fa-header', 'formatBlock', 'h2', 'Heading'],
            ['fa-bold', 'bold', '', 'Bold'],
            ['fa-italic', 'italic', '', 'Italic'],
            ['fa-strikethrough', 'strikeThrough', '', 'Strikethrough'],
            ['fa-list-ul', 'insertUnorderedList', '', 'Bulleted list'],
            ['fa-list-ol', 'insertOrderedList', '', 'Numbered list'],
            ['fa-quote-left', 'formatBlock', 'blockquote', 'Quote'],
            ['fa-link', 'createLink', 'prompt', 'Link'],
            ['fa-undo', 'undo', '', 'Undo'],
            ['fa-repeat', 'redo', '', 'Redo']
        ];

        actions.forEach(([icon, action, value, title]) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'toolbar-button';
            button.title = title;
            button.setAttribute('aria-label', title);
            button.innerHTML = `<i class="fa ${icon}" aria-hidden="true"></i>`;
            button.addEventListener('mousedown', (event) => event.preventDefault());
            button.addEventListener('click', () => {
                let commandValue = value;
                if (value === 'prompt') {
                    commandValue = window.prompt('Link URL');
                    if (!commandValue) return;
                }
                command(root, action, commandValue);
            });
            toolbar.appendChild(button);
        });

        root.parentNode.insertBefore(toolbar, root);
        return toolbar;
    }

    window.EditorVisual = {
        activate,
        deactivate,
        toMarkdown,
        createToolbar,
        extractFrontmatter,
        contentWithoutFrontmatter
    };
})();
