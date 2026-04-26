# Continue Watching

Resume movies and episodes you started but didn't finish. Each card shows a wide landscape thumbnail with a progress bar indicating how far you got.



## How Items Are Selected

The Jellyfin server's Resume Items endpoint returns media you've partially watched. Items must have between 1% and 95% playback progress — anything below 1% is considered not started, and anything above 95% is considered finished.

Up to **10 items** are fetched, sorted by the most recently watched date (most recent first). This means the movie you paused last night appears before the show you watched last week.



## Data Source

| Property | Value |
|----------|-------|
| Endpoint | `Users/{userId}/Items/Resume` |
| Limit | 10 items |
| Sort | Most recently watched first |
| Media types | Video only (excludes audio, photos) |
| User data | Enabled (provides progress percentage) |



## Tab Visibility

Continue Watching appears on **all three tabs** with content filtered by type:

| Tab | What's Shown |
|-----|-------------|
| **Home** | All resume items — movies and episodes together |
| **Movies** | Only movies you're in the middle of |
| **Shows** | Only episodes you're in the middle of |



## Library Scoping

On the Movies and Shows tabs, when you select a specific library from the library picker, Continue Watching is re-fetched with that library's ID as a filter. This means you'll only see resume items that belong to the selected library.

On the Home tab, all resume items are shown regardless of library.



## Card Type

**Wide landscape cards** — each card shows an episode screenshot or movie backdrop image at a landscape aspect ratio. A progress bar runs along the bottom edge of the card showing your playback position as a percentage.

For episodes, the card shows the episode thumbnail. For movies, the card shows the movie's backdrop image.



## Navigation

| What you select | Where it takes you |
|-----------------|-------------------|
| A movie | The movie's detail page |
| An episode | The show's detail page with that episode's season selected and the episode highlighted |

When selecting an episode, Neptune creates a navigation context that pre-selects the correct season and focuses the specific episode within that season. This means you land exactly where you left off rather than at the top of the show's page.



## Long Press

Long-pressing any Continue Watching card (0.6 seconds) opens a modal to pin the item as a Library Shortcut for quick access from the Library tab. Works for both movies and episodes (episodes pin the parent series).



## Caching

Continue Watching uses a cache-first loading strategy. On app launch, the most recent cached data is displayed immediately while a background fetch updates the list. If the fresh data differs from the cache, the row updates with a smooth transition. Empty network responses never overwrite valid cached data — so a temporary network failure won't blank out the row.



## Edge Cases

- **No resume items**: The section is hidden entirely — no empty state is shown.
- **Item finished during playback**: On the next refresh cycle (10 seconds), the item disappears from Continue Watching and may appear in the Spotlight as a suggestion for the next episode.
- **Progress exactly at 95%**: Treated as finished — the item is not shown.
- **Multiple episodes from the same show**: Each episode appears as its own card. There's no grouping or deduplication within the section.
