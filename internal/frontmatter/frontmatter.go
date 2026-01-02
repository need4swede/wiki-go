package frontmatter

import (
	"bytes"
	"strings"

	"gopkg.in/yaml.v3"
)

// Metadata represents the frontmatter data structure
// This can be expanded with additional fields in the future
type Metadata struct {
	Layout string `yaml:"layout,omitempty"`
	Order  *int   `yaml:"order,omitempty"` // Order for navigation sorting (lower = first)
}

// Parse extracts and parses frontmatter from markdown content
// Returns the parsed metadata and the content without frontmatter
func Parse(content string) (Metadata, string, bool) {
	var metadata Metadata

	// Check if the content starts with frontmatter delimiter
	if !strings.HasPrefix(content, "---\n") {
		return metadata, content, false
	}

	// Find the closing delimiter
	endDelimIndex := strings.Index(content[4:], "\n---")
	if endDelimIndex == -1 {
		return metadata, content, false
	}

	// Extract the frontmatter content
	fmContent := content[4 : 4+endDelimIndex]

	// Parse the frontmatter as YAML
	err := yaml.Unmarshal([]byte(fmContent), &metadata)
	if err != nil {
		return metadata, content, false
	}

	// Remove frontmatter from content
	remainingContent := content[4+endDelimIndex+4:]
	// Remove any leading newlines
	remainingContent = strings.TrimLeft(remainingContent, "\n")

	return metadata, remainingContent, true
}

// HasFrontmatter checks if content has frontmatter
func HasFrontmatter(content string) bool {
	if !strings.HasPrefix(content, "---\n") {
		return false
	}

	endDelimIndex := strings.Index(content[4:], "\n---")
	return endDelimIndex != -1
}

// Extract returns just the frontmatter as a string
func Extract(content string) string {
	if !strings.HasPrefix(content, "---\n") {
		return ""
	}

	endDelimIndex := strings.Index(content[4:], "\n---")
	if endDelimIndex == -1 {
		return ""
	}

	return content[4 : 4+endDelimIndex]
}

// Add adds or updates frontmatter in content
func Add(content string, metadata Metadata) (string, error) {
	// Remove existing frontmatter if present
	_, contentWithoutFM, hasFM := Parse(content)
	if !hasFM {
		contentWithoutFM = content
	}

	// Marshal metadata to YAML
	var buf bytes.Buffer
	encoder := yaml.NewEncoder(&buf)
	encoder.SetIndent(2)
	if err := encoder.Encode(metadata); err != nil {
		return content, err
	}

	// Construct new content with frontmatter
	return "---\n" + buf.String() + "---\n\n" + contentWithoutFM, nil
}

// UpdateOrder updates or adds the order field in frontmatter
// This preserves existing frontmatter fields while updating only the order
func UpdateOrder(content string, order int) (string, error) {
	// Parse existing frontmatter
	existingMeta, contentWithoutFM, hasFM := Parse(content)

	if !hasFM {
		contentWithoutFM = content
	}

	// Update the order field
	existingMeta.Order = &order

	// Marshal metadata to YAML
	var buf bytes.Buffer
	encoder := yaml.NewEncoder(&buf)
	encoder.SetIndent(2)
	if err := encoder.Encode(existingMeta); err != nil {
		return content, err
	}

	// Construct new content with updated frontmatter
	return "---\n" + buf.String() + "---\n\n" + contentWithoutFM, nil
}