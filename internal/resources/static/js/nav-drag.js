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
        // Check if button already exists
        if (document.querySelector('.reorder-nav-btn')) return;

        // Find the sidebar footer buttons container
        const footerButtons = document.querySelector('.sidebar-footer-buttons');
        if (!footerButtons) return;

        // Create reorder button (styled like other footer buttons)
        const reorderBtn = document.createElement('button');
        reorderBtn.className = 'sidebar-footer-btn reorder-nav-btn';
        reorderBtn.innerHTML = '<i class="fa fa-sort"></i>';
        reorderBtn.title = 'Reorder pages';
        reorderBtn.setAttribute('aria-label', 'Reorder navigation');

        reorderBtn.addEventListener('click', toggleReorderMode);

        // Insert at the beginning of the buttons container
        footerButtons.insertBefore(reorderBtn, footerButtons.firstChild);
    }

    /**
     * Toggle reorder mode on/off
     */
    function toggleReorderMode() {
        reorderMode = !reorderMode;
        const navItemsContainer = document.querySelector('.nav-items');
        const reorderBtn = document.querySelector('.reorder-nav-btn');

        if (reorderMode) {
            enableReorderMode(navItemsContainer, reorderBtn);
        } else {
            disableReorderMode(navItemsContainer, reorderBtn);
        }
    }

    /**
     * Enable reorder mode
     */
    function enableReorderMode(navItemsContainer, reorderBtn) {
        if (!navItemsContainer) return;

        navItemsContainer.classList.add('reorder-mode');
        reorderBtn.classList.add('active');
        reorderBtn.title = 'Exit reorder mode';

        // Create placeholder element
        placeholder = document.createElement('div');
        placeholder.className = 'nav-item-placeholder';

        // Make ALL nav items draggable (including nested ones)
        const allItems = navItemsContainer.querySelectorAll('.nav-item');
        allItems.forEach(item => {
            makeItemDraggable(item);
        });

        // Setup drag events on all containers (main + nested .nav-children)
        setupContainerEvents(navItemsContainer);
        navItemsContainer.querySelectorAll('.nav-children').forEach(container => {
            setupContainerEvents(container);
        });

        // Show save/cancel controls
        showReorderControls(navItemsContainer);
    }

    /**
     * Setup dragover and drop events on a container
     */
    function setupContainerEvents(container) {
        container.addEventListener('dragover', onContainerDragOver);
        container.addEventListener('drop', onContainerDrop);
        container.dataset.dragContainer = 'true';
    }

    /**
     * Remove drag events from a container
     */
    function removeContainerEvents(container) {
        container.removeEventListener('dragover', onContainerDragOver);
        container.removeEventListener('drop', onContainerDrop);
        delete container.dataset.dragContainer;
    }

    /**
     * Disable reorder mode
     */
    function disableReorderMode(navItemsContainer, reorderBtn) {
        if (!navItemsContainer) return;

        navItemsContainer.classList.remove('reorder-mode');
        reorderBtn.classList.remove('active');
        reorderBtn.title = 'Reorder pages';

        // Remove container events
        removeContainerEvents(navItemsContainer);
        navItemsContainer.querySelectorAll('.nav-children').forEach(container => {
            removeContainerEvents(container);
        });

        // Remove draggable from items and clean up events
        const items = navItemsContainer.querySelectorAll('.nav-item');
        items.forEach(item => {
            item.removeAttribute('draggable');
            item.classList.remove('dragging', 'drag-over');
            item.removeEventListener('dragstart', onDragStart);
            item.removeEventListener('dragend', onDragEnd);
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
        // Stop propagation to prevent parent items from also starting to drag
        e.stopPropagation();

        draggedItem = this;
        draggedItemParent = this.parentNode;

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
        e.stopPropagation();
        this.classList.remove('dragging');

        // Remove placeholder from DOM
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }

        // Remove all drag-over classes
        document.querySelectorAll('.nav-item.drag-over').forEach(item => {
            item.classList.remove('drag-over');
        });

        draggedItem = null;
        draggedItemParent = null;
    }

    /**
     * Get the immediate nav-item children of a container
     */
    function getContainerItems(container) {
        // For .nav-items, get direct children
        // For .nav-children, get direct children
        return Array.from(container.querySelectorAll(':scope > .nav-item:not(.dragging)'));
    }

    /**
     * Handle dragover on a container - determines where to show placeholder
     */
    function onContainerDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';

        if (!draggedItem) return;

        const container = this;

        // Only allow dropping within the same parent container
        // (i.e., can't move items between different hierarchy levels)
        if (container !== draggedItemParent) return;

        const items = getContainerItems(container);

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
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }

        // Insert placeholder at the right position
        if (insertBefore) {
            container.insertBefore(placeholder, insertBefore);
        } else {
            // Append at the end
            const lastNavItem = items[items.length - 1];
            if (lastNavItem) {
                container.insertBefore(placeholder, lastNavItem.nextSibling);
            } else {
                container.appendChild(placeholder);
            }
        }
    }

    /**
     * Handle drop on a container
     */
    function onContainerDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!draggedItem || !placeholder) return;

        const container = this;

        // Only allow dropping within the same parent container
        if (container !== draggedItemParent) return;

        // Move the dragged item to the placeholder position
        if (placeholder.parentNode === container) {
            container.insertBefore(draggedItem, placeholder);
            placeholder.parentNode.removeChild(placeholder);
            hasChanges = true;
            updateSaveButtonState();
        }
    }

    /**
     * Show reorder controls (save/cancel buttons)
     */
    function showReorderControls(navItemsContainer) {
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
     * Collect order data from all levels of navigation
     */
    function collectAllOrderData() {
        const orderData = [];
        const navItemsContainer = document.querySelector('.nav-items');
        if (!navItemsContainer) return orderData;

        // Process items at each level
        function processContainer(container, depth = 0) {
            const items = container.querySelectorAll(':scope > .nav-item');
            items.forEach((item, index) => {
                const link = item.querySelector(':scope > a');
                if (link) {
                    orderData.push({
                        path: link.getAttribute('href'),
                        order: (index + 1) * 10
                    });
                }

                // Process nested children
                const childContainer = item.querySelector(':scope > .nav-children');
                if (childContainer) {
                    processContainer(childContainer, depth + 1);
                }
            });
        }

        processContainer(navItemsContainer);
        return orderData;
    }

    /**
     * Save the new order to the server
     */
    async function saveOrder() {
        const orderData = collectAllOrderData();

        if (orderData.length === 0) {
            return;
        }

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
