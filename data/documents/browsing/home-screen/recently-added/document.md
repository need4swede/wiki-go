# Recently Added

Content recently added to your Jellyfin library. Unlike [New Releases](../new-releases/) which focuses on premiere dates, Recently Added is based on when items were actually added to your server — so a classic movie added yesterday will appear here even though it premiered decades ago.



## How Items Are Selected

For each media library on your server (e.g., "Movies", "TV Shows"), Neptune fetches the most recently added items using the Jellyfin Latest Items endpoint. Up to **16 items** per library are returned, sorted by the date they were added to the server (most recent first).

LiveTV content types are excluded from all results.



## Data Source

| Property | Value |
|----------|-------|
| Endpoint | `Users/{userId}/Items/Latest` |
| Limit | 16 items per library |
| Sort | Date added descending (most recent first) |
| Scope | Per-library via `parentId` |
| User data | Enabled |



## Filtering Logic

Recently Added is aware of the [New Releases](../new-releases/) section and adjusts its content accordingly:

- **When New Releases is visible**: Items whose premiere date falls within the new release window (default: 30 days) are excluded from Recently Added. This prevents the same content from appearing in both sections.
- **When New Releases is hidden** (via section customization): All items are shown regardless of premiere date. Recently Added effectively absorbs the New Releases content so nothing is lost.

This coordination ensures clean separation between the two sections while maintaining completeness when either is hidden.



## Per-Library Rows

On the **Home tab**, if you have multiple media libraries, each library gets its own row:

- "Recently Added in Movies"
- "Recently Added in TV Shows"
- "Recently Added in Anime" (custom libraries too)

This gives you a clear view of what's new in each library without mixing content types.

On the **Movies** and **Shows** tabs, libraries of the matching type are merged into a single "Recently Added" row. When a specific library is selected via the library picker, only that library's items are shown.



## Tab Visibility

Recently Added appears on all three tabs:

| Tab | Layout |
|-----|--------|
| **Home** | Separate row per library (if multiple libraries exist) |
| **Movies** | Single merged row (movies only), filterable by library |
| **Shows** | Single merged row (shows only), filterable by library |



## Library Scoping

On the Movies and Shows tabs, the library picker lets you filter Recently Added to a specific library. When a library is selected, the row shows only items from that library's `recentlyAddedPerLibrary` data.

When "All Libraries" is selected, items from all matching libraries are merged and shown together.



## Card Type

**Poster cards** — portrait-oriented poster images. Movies show their movie poster, TV shows show their series poster, and episodes show their series poster (linking back to the parent show).



## Navigation

| What you select | Where it takes you |
|-----------------|-------------------|
| A movie | The movie's detail page |
| A show | The show's detail page |
| An episode | The show's detail page with that episode's season selected |



## Long Press

Long-pressing any Recently Added card (0.6 seconds) opens a modal to pin the item as a Library Shortcut for quick access from the Library tab.



## Caching

Recently Added uses cache-first loading with stale-while-revalidate semantics. Cached data displays immediately on launch while fresh data is fetched in the background. Smart diffing by item ID prevents unnecessary UI updates. Empty network responses never overwrite valid cached data.



## Edge Cases

- **No items in a library**: That library's row is hidden. If all libraries are empty, the entire section is hidden.
- **Single library**: On the Home tab, the row title is just "Recently Added" without the library name suffix.
- **New Releases hidden**: Recently Added shows all items including those within the new release window.
- **Large libraries**: Limited to 16 items per library to keep the row a manageable size.
