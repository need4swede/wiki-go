package goldext

import (
	"strings"
)

// tableWrapperClass is the class applied to the div wrapped around every
// rendered table. The wrapper owns the card styling and the horizontal
// scrolling so narrow viewports scroll the table instead of squeezing
// columns down to a few characters wide.
const tableWrapperClass = "table-container"

// WrapTables wraps every top-level <table> element in the rendered HTML with a
// scrollable container div. Tables inside <pre> blocks are left untouched, and
// nested tables are skipped since the outermost wrapper already covers them.
// This must be called after Goldmark processing.
func WrapTables(html string) string {
	lower := strings.ToLower(html)
	if !strings.Contains(lower, "<table") {
		return html
	}

	var result strings.Builder
	result.Grow(len(html) + 128)

	pos := 0

	for pos < len(html) {
		start := indexTag(lower, pos, "<table")
		if start == -1 {
			result.WriteString(html[pos:])
			break
		}

		// Skip over <pre> blocks so raw HTML samples aren't rewritten
		if preStart := indexTag(lower, pos, "<pre"); preStart != -1 && preStart < start {
			preEnd := strings.Index(lower[preStart:], "</pre>")
			if preEnd == -1 {
				result.WriteString(html[pos:])
				break
			}
			end := preStart + preEnd + len("</pre>")
			result.WriteString(html[pos:end])
			pos = end
			continue
		}

		end := matchingTableEnd(lower, start)
		if end == -1 {
			// Unbalanced markup - leave the remainder alone
			result.WriteString(html[pos:])
			break
		}

		result.WriteString(html[pos:start])
		result.WriteString(`<div class="` + tableWrapperClass + `">`)
		result.WriteString(html[start:end])
		result.WriteString(`</div>`)
		pos = end
	}

	return result.String()
}

// matchingTableEnd returns the offset just past the </table> that closes the
// table opening at start, accounting for nested tables. Returns -1 if the
// table is never closed.
func matchingTableEnd(lower string, start int) int {
	depth := 0
	pos := start

	for pos < len(lower) {
		open := indexTag(lower, pos, "<table")
		closeIdx := strings.Index(lower[pos:], "</table>")
		if closeIdx == -1 {
			return -1
		}
		closeIdx += pos

		if open != -1 && open < closeIdx {
			depth++
			pos = open + len("<table")
			continue
		}

		depth--
		pos = closeIdx + len("</table>")
		if depth == 0 {
			return pos
		}
	}

	return -1
}

// indexTag finds the next occurrence of tag that is a real element start,
// i.e. followed by whitespace, '>' or '/' rather than more name characters.
func indexTag(lower string, from int, tag string) int {
	for pos := from; pos < len(lower); {
		idx := strings.Index(lower[pos:], tag)
		if idx == -1 {
			return -1
		}
		idx += pos

		next := idx + len(tag)
		if next >= len(lower) {
			return -1
		}
		switch lower[next] {
		case '>', '/', ' ', '\t', '\n', '\r':
			return idx
		}
		pos = next
	}
	return -1
}
