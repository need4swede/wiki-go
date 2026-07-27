package goldext

import (
	"strings"
	"testing"
)

func TestWrapTables(t *testing.T) {
	tests := []struct {
		name  string
		input string
		want  string
	}{
		{
			name:  "no tables",
			input: "<p>Hello</p>",
			want:  "<p>Hello</p>",
		},
		{
			name:  "simple table",
			input: "<p>Intro</p>\n<table>\n<tr><td>a</td></tr>\n</table>\n<p>Outro</p>",
			want:  "<p>Intro</p>\n<div class=\"table-container\"><table>\n<tr><td>a</td></tr>\n</table></div>\n<p>Outro</p>",
		},
		{
			name:  "table with attributes",
			input: `<table class="x" id="y"><tr><td>a</td></tr></table>`,
			want:  `<div class="table-container"><table class="x" id="y"><tr><td>a</td></tr></table></div>`,
		},
		{
			name:  "two tables",
			input: "<table><tr><td>1</td></tr></table><table><tr><td>2</td></tr></table>",
			want:  `<div class="table-container"><table><tr><td>1</td></tr></table></div><div class="table-container"><table><tr><td>2</td></tr></table></div>`,
		},
		{
			name:  "nested table wrapped once",
			input: "<table><tr><td><table><tr><td>inner</td></tr></table></td></tr></table>",
			want:  `<div class="table-container"><table><tr><td><table><tr><td>inner</td></tr></table></td></tr></table></div>`,
		},
		{
			name:  "table inside pre is untouched",
			input: "<pre><code><table><tr><td>a</td></tr></table></code></pre>",
			want:  "<pre><code><table><tr><td>a</td></tr></table></code></pre>",
		},
		{
			name:  "pre followed by real table",
			input: "<pre>sample</pre><table><tr><td>a</td></tr></table>",
			want:  `<pre>sample</pre><div class="table-container"><table><tr><td>a</td></tr></table></div>`,
		},
		{
			name:  "unclosed table left alone",
			input: "<table><tr><td>a</td></tr>",
			want:  "<table><tr><td>a</td></tr>",
		},
		{
			name:  "tablet-like word is not a table tag",
			input: "<p>tables and &lt;table&gt;</p>",
			want:  "<p>tables and &lt;table&gt;</p>",
		},
		{
			name:  "uppercase tags",
			input: "<TABLE><TR><TD>a</TD></TR></TABLE>",
			want:  `<div class="table-container"><TABLE><TR><TD>a</TD></TR></TABLE></div>`,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := WrapTables(tt.input)
			if got != tt.want {
				t.Errorf("WrapTables()\n got: %q\nwant: %q", got, tt.want)
			}
		})
	}
}

func TestWrapTablesPreservesContent(t *testing.T) {
	input := "<table><thead><tr><th>Feature</th></tr></thead><tbody><tr><td>Playback</td></tr></tbody></table>"
	got := WrapTables(input)

	if !strings.Contains(got, input) {
		t.Errorf("original table markup was altered: %q", got)
	}
	if strings.Count(got, tableWrapperClass) != 1 {
		t.Errorf("expected exactly one wrapper, got: %q", got)
	}
}
