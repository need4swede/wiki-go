# Coming Soon

Upcoming content you're tracking — movies and shows that haven't been released yet or are still being downloaded. This section pulls from Radarr/Sonarr calendars (via the Home Screen Sections plugin) and Jellyseerr requests to show you what's on the horizon.



## How Items Are Selected

Coming Soon draws from two data sources, with the plugin taking priority:

### Primary: Home Screen Sections Plugin

When the [Home Screen Sections plugin](/getting-started/setup) is installed, it provides upcoming content from your Radarr and Sonarr calendars:

| Property | Value |
|----------|-------|
| Endpoints | `HomeScreen/Section/UpcomingMovies` + `HomeScreen/Section/UpcomingShows` |
| Source | Radarr calendar (movies) + Sonarr calendar (shows) |

These are items already monitored in your *arr stack — movies waiting for release and upcoming episodes of tracked shows.

### Fallback: Jellyseerr Requests

When the plugin returns empty results or isn't installed, Coming Soon falls back to Jellyseerr:

| Property | Value |
|----------|-------|
| Source | Your pending Jellyseerr requests |
| Content | Movies and shows you've requested that aren't yet available |

This ensures the section has content even without the plugin, as long as Jellyseerr is configured.



## Jellyseerr Enrichment

When the plugin is the primary data source and Jellyseerr is also connected, plugin items are enriched with TMDB metadata from Jellyseerr. For each plugin item, Neptune searches Jellyseerr by title and year to get:

- TMDB overview/synopsis
- High-quality poster image URL (from TMDB CDN)
- Backdrop image URL

This enrichment improves the visual quality of plugin-sourced cards, which otherwise only have poster URLs from Radarr/Sonarr.



## Deduplication

TV shows with multiple episodes airing on the same day are deduplicated — only one entry per series per day is kept. This prevents a show with 3 episodes releasing on the same day from taking up 3 slots.

The deduplication key is `"title:date"`. Movies are never deduplicated.



## Sorting

Items are sorted by **display date ascending** (nearest release first). Within the same date, items are sorted alphabetically by title for stable ordering. This means the movie releasing tomorrow appears before the one releasing next month.



## Image Priority

Card poster images are resolved in priority order:

| Priority | Source | When used |
|----------|--------|-----------|
| 1 | TMDB CDN | When Jellyseerr enrichment provides a `posterPath` |
| 2 | Plugin poster URL | From Radarr/Sonarr metadata (`providerIds.radarrPoster` or `sonarrPoster`) |
| 3 | Jellyfin server | When the plugin provides a relative URL, prepended with the server base URL |

TMDB posters are preferred because they're high-resolution and consistently formatted. Plugin poster URLs are used as a fallback.



## Tab Visibility

Coming Soon appears on all three tabs with content filtered by type:

| Tab | What's Shown |
|-----|-------------|
| **Home** | All upcoming items — movies and shows together |
| **Movies** | Only upcoming movies |
| **Shows** | Only upcoming shows |

**Requirement**: The section only appears if Jellyseerr is connected. If Jellyseerr is not configured, Coming Soon is hidden entirely — even if the Home Screen Sections plugin is installed.



## Card Type

**Poster cards** — portrait-oriented poster images (220pt wide) with a status badge, title, release date, and countdown text. For TV shows, the episode label (e.g., "S3E5") is also displayed.

Each card shows a countdown like "In 3 days" or "Tomorrow" to indicate when the content will be available.



## Navigation

Selecting any Coming Soon card opens the Jellyseerr detail page for that item, showing full metadata, request status, and availability information.

For items sourced from the plugin (already monitored in Radarr/Sonarr), the request button is hidden since the content is already being tracked.



## Stable Identity

Coming Soon items use stable IDs derived from *arr metadata (Radarr movie ID, Sonarr episode/series ID) rather than title-based keys. This ensures consistent identity across refresh cycles — items don't flicker or jump positions when the data updates.



## Caching

Coming Soon is loaded as a "Phase 2" section, after core sections complete. It uses cache-first loading with background refresh. Smart diffing prevents unnecessary UI updates.



## Edge Cases

- **Jellyseerr not configured**: The entire section is hidden, regardless of plugin status.
- **Plugin not installed, Jellyseerr connected**: Shows pending Jellyseerr requests as the fallback source.
- **Both plugin and Jellyseerr connected**: Plugin is primary, enriched with Jellyseerr metadata.
- **No upcoming items**: Section is hidden entirely.
- **Item becomes available**: On the next refresh cycle, the item is removed from Coming Soon (it would then appear in New Releases or Recently Added instead).
