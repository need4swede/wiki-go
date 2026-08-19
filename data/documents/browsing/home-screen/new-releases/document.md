---
order: 70
---

# New Releases

Recently premiered movies and new seasons of shows.
This section highlights content that just became available, grouping items into the most useful card for each release: a movie poster for new films, a season poster for new seasons, and a series poster for brand new shows.

## How Items Are Selected

Neptune scans your library for movies, series, seasons, and episodes that premiered within the **new release window**, then groups the results so each release shows once:

- A new season of an existing show displays as a season poster
- A brand new series displays as a series poster
- Several new episodes from the same season collapse into one season card
- Seasons with no playable episodes yet are filtered out

Everything is sorted newest first.

## Configurable Window

The new release window sets how far back to look.
Change it with **New Release Threshold** in **Settings > Home > Sections**:

| Option | Description |
|--------|-------------|
| 7 days | Very recent only |
| 14 days | Tighter window for busy libraries |
| **30 days** | **Default.** A good balance for most libraries. |
| 60 days | For less frequently updated libraries |
| 90 days | Maximum. Catches slow additions. |

## Movie Release Dates

Movies rank by their **home release date** from TMDB (when they became available for streaming or digital purchase), not their theatrical premiere.
A movie that was in theaters three months ago but just hit streaming appears as a new release, which is what you actually want.
Movies without TMDB data fall back to the premiere date supplied by the connected backend.

## Tab Visibility

| Tab | What's Shown |
|-----|-------------|
| **Home** | All new releases: movies and shows together |
| **Movies** | Only new movies |
| **Shows** | Only new series, seasons, and episodes |

## Navigation

| What you select | Where it takes you |
|-----------------|-------------------|
| A movie | The movie's detail page |
| A new season | The show's detail page with that season pre-selected |
| A new series | The show's detail page |

## Relationship with Recently Added

New Releases and [Recently Added](../recently-added/) work together:

- When **New Releases is visible**: Recently Added excludes items that fall within the new release window, so the same item never appears in both rows.
- When **New Releases is hidden** (via section customization): Recently Added adopts those items back.
  No content is lost when a section is hidden.
