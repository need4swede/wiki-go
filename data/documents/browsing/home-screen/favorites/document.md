# Favorites

Movies and shows you've marked as favorites. This section gives you quick access to content you love without having to search for it. Favoriting is done from any item's detail page — just select the heart icon.



## How Items Are Selected

Neptune fetches items you've marked as favorites from the Jellyfin server. Up to **50 items** are returned, sorted alphabetically by name. Only movies and series are included — individual episodes and seasons are not shown even if favorited (the parent series is shown instead).



## Data Source

| Property | Value |
|----------|-------|
| Endpoint | `Users/{userId}/Items` |
| Filter | `isFavorite=true` |
| Item types | Movie, Series |
| Limit | 50 items |
| Sort | Name ascending (alphabetical) |
| Recursive | Yes (searches all libraries) |



## Tab Visibility

Favorites appears on all three tabs with content filtered by type:

| Tab | What's Shown |
|-----|-------------|
| **Home** | All favorites — movies and series together |
| **Movies** | Only favorited movies |
| **Shows** | Only favorited series |



## Library Scoping

On the Movies and Shows tabs, when you select a specific library from the library picker, Favorites is re-fetched with that library's ID as a filter. This shows only favorites that belong to the selected library.

Library-scoped fetches also use a limit of 50 items.



## Card Type

**Poster cards** — portrait-oriented poster images showing the movie poster or series poster. The same card style used by Recently Added and New Releases.



## Navigation

Selecting any Favorites card takes you to that item's detail page — the movie detail page for movies, or the series detail page for shows.



## Long Press

Long-pressing any Favorites card (0.6 seconds) opens a modal to pin the item as a Library Shortcut for quick access from the Library tab.



## Caching

Favorites uses cache-first loading with stale-while-revalidate semantics. On app launch, cached favorites display immediately while a background fetch updates the list.

**Special behavior**: Unlike other sections, empty results from the server are allowed to clear the row. This handles the case where you've unfavorited everything — the section correctly disappears rather than showing stale favorites.



## Edge Cases

- **No favorites**: The section is hidden entirely.
- **Favorite added/removed**: The change appears on the next background refresh cycle (within 10 seconds).
- **Favorited episodes**: Individual episode favorites don't appear in this section — only movies and series are included.
- **Large favorite lists**: Capped at 50 items. If you have more than 50 favorites, only the first 50 alphabetically are shown.
