# Recommended

Personalized suggestions based on your watch history, favorites, and the directors and actors you enjoy. This section blends content from your Jellyfin library with requestable items from Jellyseerr (if connected) — so you discover both content you already have and content you might want to add.



## How Items Are Selected

Recommended content comes from up to three data sources, fetched in parallel:

### 1. Jellyfin Movie Recommendations

The Jellyfin server analyzes your watch history, favorites, and preferred directors/actors to suggest movies.

| Property | Value |
|----------|-------|
| Endpoint | `Movies/Recommendations` |
| Category limit | 3 recommendation categories |
| Items per category | Up to 6 (first 4 used) |

The server returns categorized recommendations like "Because you watched Interstellar", "Because you like Christopher Nolan", etc. Neptune takes the first 4 items from each category.

### 2. Jellyfin TV Similar Items

For TV shows, Neptune finds content similar to your currently watched series. It takes the first 3 series from your Next Up list and fetches similar shows for each:

| Property | Value |
|----------|-------|
| Endpoint | `Items/{seriesId}/Similar` |
| Limit | 4 similar items per series |
| Source series | First 3 from Next Up |

Only items of type Series are kept (episodes and movies are filtered out).

### 3. Jellyseerr Popular Items (if connected)

When Jellyseerr is configured, popular movies and TV shows are fetched as requestable suggestions:

| Property | Value |
|----------|-------|
| Endpoints | Popular Movies + Popular TV (page 1 each) |
| Limit | First 6 qualifying items per type |

**Filtering**: Jellyseerr results are excluded if they are:
- Already available or partially available in your library
- Have a pending or processing request
- Are monitored in Radarr or Sonarr (detected via the Home Screen Sections plugin)

The monitored title check fetches all upcoming titles from the Home Screen Sections plugin and builds a lookup set of `"title:year"` keys. Jellyseerr results matching these keys are filtered out to avoid suggesting content that's already being tracked.



## Deduplication

Two layers of deduplication prevent the same content from appearing twice:

1. **Library items**: Deduplicated by Jellyfin item ID — if the same movie appears in multiple recommendation categories, only the first occurrence is kept.

2. **Requestable items vs library items**: Jellyseerr results are matched against library items using a deduplication key. The key is the TMDB ID when available, or a `"title:year"` fallback. Any Jellyseerr result that matches an existing library item is removed.



## Blending

Library items and requestable items are interleaved in an alternating pattern to achieve a roughly 50/50 mix. Up to 10 items from each source are used, producing a maximum of ~20 total recommendations.

The interleaving alternates: one library item, one requestable item, one library item, and so on. If one source has fewer items than the other, the remaining items from the larger source fill in at the end.



## Badge Types

Each card shows a status badge in the top-right corner:

| Badge | Color | Meaning |
|-------|-------|---------|
| Checkmark | Green | Already in your library — selecting opens the detail page |
| Plus | Blue | Available to request — selecting opens the Jellyseerr request page |

These badges make it immediately clear whether you already own the content or need to request it.



## Tab Visibility

Recommended appears on all three tabs with content filtered by type:

| Tab | What's Shown |
|-----|-------------|
| **Home** | All recommendations — movies and shows together |
| **Movies** | Only movie recommendations |
| **Shows** | Only TV show recommendations |



## Card Type

**Poster cards** — portrait-oriented poster images (185pt wide) with a status badge overlay. Cards show the poster image, title, and year.



## Navigation

| Badge | What happens on select |
|-------|----------------------|
| Green checkmark (in library) | Opens the movie or show's detail page |
| Blue plus (requestable) | Opens the Jellyseerr detail page where you can submit a request |



## Caching

Recommended uses cache-first loading. It's loaded as a "Phase 2" section — after the core sections (Continue Watching, Next Up, New Releases, Recently Added, Favorites) have loaded. This prioritization ensures the most time-sensitive sections appear first.

Smart diffing prevents unnecessary UI updates when the recommendation list hasn't changed.



## Graceful Degradation

| Scenario | Behavior |
|----------|----------|
| Jellyseerr not connected | Shows only Jellyfin library recommendations (no requestable items) |
| No watch history | Shows Jellyseerr popular items if connected, otherwise hides the section |
| Home Screen Sections plugin not installed | Monitored title filtering is skipped — some Jellyseerr results may duplicate Radarr/Sonarr tracked items |
| All sources return empty | Section is hidden entirely |



## Edge Cases

- **New user with no history**: Jellyfin recommendations will be empty. If Jellyseerr is connected, popular items fill the section. Otherwise it's hidden.
- **Jellyseerr goes offline**: The section gracefully degrades to library-only recommendations on the next refresh.
- **All popular items already in library**: After deduplication, if no requestable items remain, the section shows library recommendations only.
