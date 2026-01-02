// Navigation Drag & Drop Handler
// Allows admin/editor users to reorder navigation items via drag-and-drop

(function() {
    'use strict';

    let draggedItem = null;
    let placeholder = null;
    let navItemsContainer = null;
    let reorderMode = false;
    let hasChanges = false;

    /**
     * Initialize the navigation drag-and-drop functionality
     */
    async function init() {
        // Check if user has editor/admin role
        if (!window.Auth || !window.Auth.checkUserRole) {
            return;
        }

        const canEdit = await window.Auth.checkUserRole('editor');
        if (!canEdit) {
            return;
        }

        // Add the reorder button to sidebar
        addReorderButton();
    }

    /**
     * Add the reorder toggle button to the sidebar
     */
    function addReorderButton() {
        const sidebar = document.querySelector('.sidebar');
        if (!sidebar) return;

        // Check if button already exists
        if (document.querySelector('.reorder-nav-btn')) return;

        // Find the sidebar footer or create controls container
        let footer = sidebar.querySelector('.sidebar-footer');
        if (!footer) {
            footer = document.createElement('div');
            footer.className = 'sidebar-footer';
            sidebar.appendChild(footer);
        }

        // Create reorder button
        const reorderBtn = document.createElement('button');
        reorderBtn.className = 'reorder-nav-btn';
        reorderBtn.innerHTML = '<i class="fa fa-sort"></i>';
        reorderBtn.title = 'Reorder pages';
        reorderBtn.setAttribute('aria-label', 'Reorder navigation');

        reorderBtn.addEventListener('click', toggleReorderMode);

        // Insert at the beginning of footer
        footer.insertBefore(reorderBtn, footer.firstChild);
    }

    /**
     * Toggle reorder mode on/off
     */
    function toggleReorderMode() {
        reorderMode = !reorderMode;
        navItemsContainer = document.querySelector('.nav-items');
        const reorderBtn = document.querySelector('.reorder-nav-btn');

        if (reorderMode) {
            enableReorderMode(reorderBtn);
        } else {
            disableReorderMode(reorderBtn);
        }
    }

    /**
     * Enable reorder mode
     */
    function enableReorderMode(reorderBtn) {
        if (!navItemsContainer) return;

        navItemsContainer.classList.add('reorder-mode');
        reorderBtn.classList.add('active');
        reorderBtn.title = 'Exit reorder mode';

        // Create placeholder element
        placeholder = document.createElement('div');
        placeholder.className = 'nav-item-placeholder';

        // Setup drag events on the container
        navItemsContainer.addEventListener('dragover', onContainerDragOver);
        navItemsContainer.addEventListener('drop', onContainerDrop);

        // Make top-level nav items draggable
        const items = navItemsContainer.querySelectorAll(':scope > .nav-item');
        items.forEach(item => {
            makeItemDraggable(item);
        });

        // Show save/cancel controls
        showReorderControls();
    }

    /**
     * Disable reorder mode
     */
    function disableReorderMode(reorderBtn) {
        if (!navItemsContainer) return;

        navItemsContainer.classList.remove('reorder-mode');
        reorderBtn.classList.remove('active');
        reorderBtn.title = 'Reorder pages';

        // Remove container events
        navItemsContainer.removeEventListener('dragover', onContainerDragOver);
        navItemsContainer.removeEventListener('drop', onContainerDrop);

        // Remove draggable from items and clean up events
        const items = navItemsContainer.querySelectorAll('.nav-item');
        items.forEach(item => {
            item.removeAttribute('draggable');
            item.classList.remove('dragging', 'drag-over');
        });

        // Remove placeholder if exists
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }
        placeholder = null;

        // Hide controls
        hideReorderControls();
        hasChanges = false;
    }

    /**
     * Make a nav item draggable
     */
    function makeItemDraggable(item) {
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragstart', onDragStart);
        item.addEventListener('dragend', onDragEnd);
    }

    /**
     * Handle drag start
     */
    function onDragStart(e) {
        draggedItem = this;

        // Set drag data
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', this.dataset.path || '');

        // Add visual feedback after a tick (so the drag image shows correctly)
        setTimeout(() => {
            this.classList.add('dragging');
        }, 0);
    }

    /**
     * Handle drag end
     */
    function onDragEnd(e) {
        this.classList.remove('dragging');

        // Remove placeholder from DOM
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }

        // Remove all drag-over classes
        if (navItemsContainer) {
            navItemsContainer.querySelectorAll('.nav-item.drag-over').forEach(item => {
                item.classList.remove('drag-over');
            });
        }

        draggedItem = null;
    }

    /**
     * Handle dragover on the container - determines where to show placeholder
     */
    function onContainerDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';

        if (!draggedItem || !navItemsContainer) return;

        const items = Array.from(navItemsContainer.querySelectorAll(':scope > .nav-item:not(.dragging)'));

        // Find the item we're hovering over and determine if we're in top or bottom half
        let insertBefore = null;

        for (const item of items) {
            const rect = item.getBoundingClientRect();
            const midpoint = rect.top + rect.height / 2;

            if (e.clientY < midpoint) {
                insertBefore = item;
                break;
            }
        }

        // Remove placeholder if it exists
        if (placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }

        // Insert placeholder at the right position
        if (insertBefore) {
            navItemsContainer.insertBefore(placeholder, insertBefore);
        } else {
            // Append at the end (but before any non-nav-item elements)
            const lastNavItem = items[items.length - 1];
            if (lastNavItem) {
                navItemsContainer.insertBefore(placeholder, lastNavItem.nextSibling);
            } else {
                navItemsContainer.appendChild(placeholder);
            }
        }
    }

    /**
     * Handle drop on the container
     */
    function onContainerDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!draggedItem || !placeholder || !navItemsContainer) return;

        // Move the dragged item to the placeholder position
        if (placeholder.parentNode) {
            navItemsContainer.insertBefore(draggedItem, placeholder);
            placeholder.parentNode.removeChild(placeholder);
            hasChanges = true;
            updateSaveButtonState();
        }
    }

    /**
     * Show reorder controls (save/cancel buttons)
     */
    function showReorderControls() {
        // Check if controls already exist
        if (document.querySelector('.reorder-controls')) return;

        if (!navItemsContainer) return;

        const controls = document.createElement('div');
        controls.className = 'reorder-controls';

        const saveBtn = document.createElement('button');
        saveBtn.className = 'reorder-save-btn';
        saveBtn.textContent = 'Save Order';
        saveBtn.disabled = true;
        saveBtn.addEventListener('click', saveOrder);

        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'reorder-cancel-btn';
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', cancelReorder);

        controls.appendChild(saveBtn);
        controls.appendChild(cancelBtn);

        navItemsContainer.parentNode.insertBefore(controls, navItemsContainer.nextSibling);
    }

    /**
     * Hide reorder controls
     */
    function hideReorderControls() {
        const controls = document.querySelector('.reorder-controls');
        if (controls) {
            controls.parentNode.removeChild(controls);
        }
    }

    /**
     * Update save button enabled state
     */
    function updateSaveButtonState() {
        const saveBtn = document.querySelector('.reorder-save-btn');
        if (saveBtn) {
            saveBtn.disabled = !hasChanges;
        }
    }

    /**
     * Save the new order to the server
     */
    async function saveOrder() {
        if (!navItemsContainer) return;

        const items = navItemsContainer.querySelectorAll(':scope > .nav-item');
        const orderData = [];

        items.forEach((item, index) => {
            const link = item.querySelector('a');
            if (link) {
                orderData.push({
                    path: link.getAttribute('href'),
                    order: (index + 1) * 10 // Use gaps of 10 for easy insertion
                });
            }
        });

        try {
            const response = await fetch('/api/navigation/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ items: orderData })
            });

            const result = await response.json();

            if (result.success) {
                // Exit reorder mode and reload page to show new order
                toggleReorderMode();
                window.location.reload();
            } else {
                if (window.DialogSystem) {
                    window.DialogSystem.showMessageDialog('Error', result.message || 'Failed to save order');
                } else {
                    alert(result.message || 'Failed to save order');
                }
            }
        } catch (error) {
            console.error('Error saving navigation order:', error);
            if (window.DialogSystem) {
                window.DialogSystem.showMessageDialog('Error', 'Failed to save navigation order');
            } else {
                alert('Failed to save navigation order');
            }
        }
    }

    /**
     * Cancel reorder and reload to restore original order
     */
    function cancelReorder() {
        if (hasChanges) {
            // Reload to restore original order
            window.location.reload();
        } else {
            toggleReorderMode();
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose to window for debugging
    window.NavDrag = {
        toggleReorderMode: toggleReorderMode
    };
})();
