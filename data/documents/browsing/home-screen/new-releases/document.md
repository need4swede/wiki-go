# New Releases

Recently premiered movies and new seasons of shows. This section highlights content that just became available, using smart grouping to show the most useful representation of each new addition — a movie poster for new films, a season poster for new seasons, and series posters for brand new shows.



## How Items Are Selected

New Releases uses a multi-API approach, fetching four types of content in parallel from the Jellyfin server:

| Type | Limit | What it finds |
|------|-------|---------------|
| Movies | 16 | Recently premiered movies |
| Series | 16 | Brand new shows added to the library |
| Seasons | 16 | New seasons of existing shows |
| Episodes | 32 | Individual new episodes (used for grouping) |

All four requests run simultaneously for performance. Results are filtered to items with a premiere date within the configured **new release window** and not in the future.

LiveTV content types are excluded from all results.



## Configurable Window

The new release window determines how far back to look for new content. This is configurable in Settings:

| Option | Description |
|--------|-------------|
| 7 days | Very recent only |
| 14 days | Default in older versions |
| **30 days** | **Default** — a good balance for most libraries |
| 60 days | For less frequently updated libraries |
| 90 days | Maximum — catches slow additions |

Items with a premiere date older than the window are excluded. The window is measured from the current date.



## Smart Grouping

Raw API results are processed through smart grouping logic to show the most useful card for each piece of new content:

**New season of an existing show** — If a season's premiere date falls within the window and the season has at least one playable episode (verified via an API check), it's displayed as a season poster. This is the most common case for ongoing series.

**Brand new series** — If the entire series is new (premiered within the window), it's displayed as a series poster rather than individual season/episode cards.

**Multiple episodes from the same season** — When several episodes from the same season appear in the results, they're collapsed into a single season poster card to avoid clutter.

**Single episode** — Standalone episodes that don't fit the above patterns are displayed using their season's poster.

Empty seasons (no episodes yet) are filtered out to avoid showing cards that lead to empty detail views.



## TMDB Home Release Dates

Movies receive special treatment. Instead of using the theatrical premiere date (which could be months ago), Neptune fetches the **home release date** from TMDB — when the movie became available for streaming or digital purchase.

The enrichment process:
1. For each movie in the results, look up the TMDB ID from Jellyfin's provider metadata
2. Fetch release dates from the TMDB API
3. Find the US region digital release (type 4), falling back to physical release (type 5)
4. Use this date for sorting and window filtering instead of the premiere date
5. Cache results for 7 days to minimize API calls

TMDB requests are rate-limited (batches of 10 with 250ms delays) to stay within TMDB's rate limits of 40 requests per second.

This means a movie that was in theaters 3 months ago but just hit streaming services will correctly appear as a new release.



## Sorting

All items are sorted by **premiere date descending** (newest first). Movies use their TMDB home release date when available. A secondary sort by item ID provides stable ordering for items with the same date.



## Tab Visibility

New Releases appears on all three tabs with content filtered by type:

| Tab | What's Shown |
|-----|-------------|
| **Home** | All new releases — movies and shows together |
| **Movies** | Only new movies |
| **Shows** | Only new series, seasons, and episodes |



## Card Type

**Poster cards** — portrait-oriented poster images. Movies show their movie poster, seasons show their season poster, and series show their series poster. This differs from Continue Watching and Next Up which use wide landscape cards.



## Navigation

| What you select | Where it takes you |
|-----------------|-------------------|
| A movie | The movie's detail page |
| A new season | The show's detail page with that season pre-selected and the first unwatched episode highlighted |
| A new series | The show's detail page |



## Relationship with Recently Added

New Releases and [Recently Added](../recently-added/) work together:

- When **New Releases is visible**: Recently Added excludes items that fall within the new release window. This prevents the same movie or season from appearing in both sections.
- When **New Releases is hidden** (via section customization): Recently Added adopts those items back, showing everything regardless of premiere date. This ensures no content is lost when a section is hidden.



## Caching

New Releases uses cache-first loading. On app launch, cached results display immediately while fresh data is fetched in the background. Smart diffing prevents unnecessary UI updates when the content hasn't changed.



## Edge Cases

- **No new content**: The section is hidden entirely.
- **Season with no episodes**: Filtered out — only seasons with at least one playable episode are shown.
- **Movie without TMDB data**: Uses the Jellyfin premiere date as a fallback for sorting and window filtering.
- **Future-dated items**: Excluded — only items with premiere dates in the past are shown.
