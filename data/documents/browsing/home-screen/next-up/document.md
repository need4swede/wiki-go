# Next Up

The next unwatched episode from each show you're currently watching. If you finished episode 3, Next Up shows episode 4. This section keeps your active shows front and center so you always know what to watch next.



## How Items Are Selected

The Jellyfin server determines which episode is "next" for each series based on your watch history. For each show where you've watched at least one episode, the server finds the first unwatched episode — either the one after your last completed episode, or the first episode if you haven't started yet.

Up to **25 items** are fetched, giving you a broad view across all your in-progress shows. The server handles the sorting, prioritizing shows you've watched most recently.



## Data Source

| Property | Value |
|----------|-------|
| Endpoint | `Shows/NextUp` |
| Limit | 25 items |
| Sort | Server-determined (recently watched shows first) |
| User data | Enabled |

**Note:** The Next Up endpoint does not support library scoping via `parentId` — this is a Jellyfin API limitation. The same set of Next Up items is shown regardless of which library is selected in the library picker.



## Tab Visibility

Next Up is hidden on the Movies tab since it only contains TV episodes:

| Tab | Visible | What's Shown |
|-----|---------|-------------|
| **Home** | Yes | All Next Up episodes |
| **Movies** | No | Hidden (tab restriction: `excludeMovies`) |
| **Shows** | Yes | All Next Up episodes |



## Card Type

**Wide landscape cards** — the same style as Continue Watching. Each card shows the episode's screenshot or thumbnail at a landscape aspect ratio. Unlike Continue Watching, there is no progress bar since these episodes haven't been started yet.



## Navigation

Selecting any Next Up episode takes you to that show's detail page with:
- The episode's season pre-selected in the season picker
- The specific episode highlighted/focused within the episode list

This means you can immediately hit play without having to navigate through seasons to find where you left off.



## Series Context

For each Next Up episode, Neptune fetches the parent series information to display the show name alongside the episode. This context is cached so it doesn't need to be re-fetched on every refresh.



## Long Press

Long-pressing any Next Up card (0.6 seconds) opens a modal to pin the parent series as a Library Shortcut for quick access from the Library tab.



## Caching

Next Up uses the same cache-first loading strategy as other sections. Cached data is displayed immediately on app launch, with a background fetch to update the list. Smart diffing compares the current and incoming item lists by ID — only triggering a UI update when the actual content changes.



## Edge Cases

- **No active shows**: The section is hidden entirely — no empty state is shown.
- **Show completed**: Once you finish the last episode of a series, it drops out of Next Up on the next refresh.
- **New season added**: If a new season is added to a show you previously finished, the first episode of the new season appears in Next Up.
- **Multiple profiles**: Each Jellyfin user has their own independent Next Up list based on their watch history.
