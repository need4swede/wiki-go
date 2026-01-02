package handlers

import (
	"encoding/json"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"wiki-go/internal/frontmatter"
)

// OrderItem represents a single item in the order update request
type OrderItem struct {
	Path  string `json:"path"`
	Order int    `json:"order"`
}

// SaveNavigationOrderRequest represents the request payload
type SaveNavigationOrderRequest struct {
	Items []OrderItem `json:"items"`
}

// SaveNavigationOrderResponse represents the response payload
type SaveNavigationOrderResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	Updated int    `json:"updated,omitempty"`
}

// SaveNavigationOrderHandler handles saving navigation order
// Protected by editorMiddleware in routes.go
func SaveNavigationOrderHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		json.NewEncoder(w).Encode(SaveNavigationOrderResponse{
			Success: false,
			Message: "Method not allowed",
		})
		return
	}

	// Parse request body
	var req SaveNavigationOrderRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(SaveNavigationOrderResponse{
			Success: false,
			Message: "Invalid request body",
		})
		return
	}

	if len(req.Items) == 0 {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(SaveNavigationOrderResponse{
			Success: false,
			Message: "No items provided",
		})
		return
	}

	updated := 0

	// Process each item
	for _, item := range req.Items {
		// Clean the path
		path := filepath.Clean(item.Path)
		path = strings.TrimPrefix(path, "/")

		// Build the document path
		var docPath string
		if path == "" || path == "." {
			// Root/home page
			docPath = filepath.Join(cfg.Wiki.RootDir, "pages", "home", "document.md")
		} else {
			docPath = filepath.Join(cfg.Wiki.RootDir, cfg.Wiki.DocumentsDir, path, "document.md")
		}

		// Read the current content
		content, err := os.ReadFile(docPath)
		if err != nil {
			// Skip files that don't exist
			continue
		}

		// Update the order in frontmatter
		updatedContent, err := frontmatter.UpdateOrder(string(content), item.Order)
		if err != nil {
			continue
		}

		// Write back the file
		if err := os.WriteFile(docPath, []byte(updatedContent), 0644); err != nil {
			continue
		}

		updated++
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(SaveNavigationOrderResponse{
		Success: true,
		Message: "Navigation order updated",
		Updated: updated,
	})
}
