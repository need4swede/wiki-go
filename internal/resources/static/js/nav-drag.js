// Navigation Drag & Drop Handler
// Allows admin/editor users to reorder navigation items via drag-and-drop

(function() {
    'use strict';

    let draggedItem = null;
    let draggedItemParent = null;
    let placeholder = null;
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
        const navItems = document.querySelector('.nav-items');
        const reorderBtn = document.querySelector('.reorder-nav-btn');

        if (reorderMode) {
            enableReorderMode(navItems, reorderBtn);
        } else {
            disableReorderMode(navItems, reorderBtn);
        }
    }

    /**
     * Enable reorder mode
     */
    function enableReorderMode(navItems, reorderBtn) {
        if (!navItems) return;

        navItems.classList.add('reorder-mode');
        reorderBtn.classList.add('active');
        reorderBtn.title = 'Exit reorder mode';

        // Make top-level nav items draggable
        const items = navItems.querySelectorAll(':scope > .nav-item');
        items.forEach(item => {
            makeItemDraggable(item);
        });

        // Show save/cancel controls
        showReorderControls();
    }

    /**
     * Disable reorder mode
     */
    function disableReorderMode(navItems, reorderBtn) {
        if (!navItems) return;

        navItems.classList.remove('reorder-mode');
        reorderBtn.classList.remove('active');
        reorderBtn.title = 'Reorder pages';

        // Remove draggable from items
        const items = navItems.querySelectorAll('.nav-item');
        items.forEach(item => {
            item.removeAttribute('draggable');
            item.classList.remove('dragging', 'drag-over');
        });

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
        item.addEventListener('dragover', onDragOver);
        item.addEventListener('dragenter', onDragEnter);
        item.addEventListener('dragleave', onDragLeave);
        item.addEventListener('drop', onDrop);
    }

    /**
     * Handle drag start
     */
    function onDragStart(e) {
        draggedItem = this;
        draggedItemParent = this.parentNode;

        // Set drag data
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', this.querySelector('a').getAttribute('href'));

        // Add visual feedback
        setTimeout(() => {
            this.classList.add('dragging');
        }, 0);

        // Create placeholder
        placeholder = document.createElement('div');
        placeholder.className = 'nav-item-placeholder';
    }

    /**
     * Handle drag end
     */
    function onDragEnd(e) {
        this.classList.remove('dragging');

        // Remove all drag-over classes
        document.querySelectorAll('.nav-item.drag-over').forEach(item => {
            item.classList.remove('drag-over');
        });

        // Remove placeholder
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }

        draggedItem = null;
        placeholder = null;
    }

    /**
     * Handle drag over
     */
    function onDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';

        if (this === draggedItem) return;

        // Determine drop position based on mouse position
        const rect = this.getBoundingClientRect();
        const midpoint = rect.top + rect.height / 2;

        // Remove existing placeholder
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }

        // Insert placeholder above or below based on mouse position
        if (e.clientY < midpoint) {
            this.parentNode.insertBefore(placeholder, this);
        } else {
            this.parentNode.insertBefore(placeholder, this.nextSibling);
        }
    }

    /**
     * Handle drag enter
     */
    function onDragEnter(e) {
        e.preventDefault();
        if (this !== draggedItem) {
            this.classList.add('drag-over');
        }
    }

    /**
     * Handle drag leave
     */
    function onDragLeave(e) {
        // Only remove if we're actually leaving this element
        const rect = this.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right ||
            e.clientY < rect.top || e.clientY > rect.bottom) {
            this.classList.remove('drag-over');
        }
    }

    /**
     * Handle drop
     */
    function onDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        if (this === draggedItem) return;

        this.classList.remove('drag-over');

        // Move the dragged item to the placeholder position
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.insertBefore(draggedItem, placeholder);
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

        const navItems = document.querySelector('.nav-items');
        if (!navItems) return;

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

        navItems.parentNode.insertBefore(controls, navItems.nextSibling);
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
        const navItems = document.querySelector('.nav-items');
        if (!navItems) return;

        const items = navItems.querySelectorAll(':scope > .nav-item');
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
