# Custom Libraries

If you have Jellyfin libraries beyond the standard Movies and TV Shows — such as Anime, Documentaries, Kids, Music Videos, or Home Movies — they each appear as their own row on the home screen. These rows show recently added content from each custom library.



## How Libraries Are Detected

Neptune detects custom libraries by excluding libraries whose names contain common default keywords. A library is considered "custom" if its name does **not** contain any of the following (case insensitive):

- "movie"
- "tv"
- "show"
- "series"

This means libraries named "Movies", "TV Shows", "TV Series", or "Movie Collection" are treated as standard libraries and handled by the [Recently Added](../recently-added/) section. Everything else — "Anime", "Documentaries", "Kids", "Music Videos", "4K Movies" — gets its own Custom Libraries row.

**Note**: A library named "4K Movies" would be detected as a standard library (contains "movie") and would not appear as a custom library row. If you want it to appear separately, name it something like "4K Collection" or "4K Media".



## Data Source

Each custom library row independently fetches its recently added items:

| Property | Value |
|----------|-------|
| Endpoint | `Users/{userId}/Items/Latest` |
| Limit | 16 items per library |
| Scope | Per-library via `parentId` |
| Sort | Date added descending (most recent first) |



## Tab Visibility

Custom Libraries rows are only visible on the Home tab:

| Tab | Visible |
|-----|---------|
| **Home** | Yes |
| **Movies** | No (tab restriction: `homeOnly`) |
| **Shows** | No (tab restriction: `homeOnly`) |

This keeps the Movies and Shows tabs focused on their respective content types. Custom libraries, which may contain mixed or specialized content, are only shown on the general Home tab.



## Row Titles

Each row is titled with the library name as it appears in Jellyfin. For example:

- "Anime" library → "Anime" row
- "Documentaries" library → "Documentaries" row
- "Kids" library → "Kids" row

The rows appear in the order they're returned by the Jellyfin libraries endpoint.



## Card Type

**Poster cards** — portrait-oriented poster images, the same style used by Recently Added. Each card shows the item's primary poster image.



## Navigation

Selecting any card takes you to that item's detail page.



## Section Customization

Custom Libraries appears as a single entry in the section customization editor. You can hide or reorder it relative to other sections, but you cannot hide or reorder individual custom library rows — it's all or nothing.



## Edge Cases

- **No custom libraries**: The section is hidden entirely. Users with only standard "Movies" and "TV Shows" libraries won't see this section.
- **Empty custom library**: If a library has no recently added items, its row is hidden. If all custom libraries are empty, the section is hidden.
- **Many custom libraries**: Each library gets its own row. There's no limit on the number of rows, though having many can make the home screen long.
- **Library renamed**: If a standard library is renamed to something custom (e.g., "TV Shows" → "Anime"), it will start appearing as a custom library row on the next app launch.
