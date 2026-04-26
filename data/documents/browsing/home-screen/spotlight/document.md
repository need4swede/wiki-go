# Spotlight

A full-bleed backdrop display at the top of the home screen showcasing content you should watch next. The spotlight intelligently selects and ranks items from your library based on your viewing activity, release dates, and engagement — so the most relevant content always appears first.



## Spotlight Categories

Each spotlight item is tagged with a colored badge explaining why it's featured:

| Type | Badge | Icon | Criteria |
|------|-------|------|----------|
| **Continue Watching** | Orange | `play.circle` | Movies or episodes you started but didn't finish (1–95% progress) |
| **New Episode** | Purple | `sparkles.tv` | New episode from a show you're watching (aired in the last 7 days) |
| **New Season** | Cyan | `play.tv` | New season of a show you've previously watched (premiered in the last 14 days) |
| **New Series** | Teal | `star.fill` | Brand new show added to your library (premiered in the last 14 days) |
| **New Release** | Blue | `film` | Movie that just became available for home viewing (last 14 days) |
| **Recently Added** | Green | `plus.circle` | Fallback — latest additions to your library when no other categories apply |



## How Scoring Works

Every candidate item receives a numeric score. The highest-scoring items appear first in the carousel. The score is built from three components:

**Base score** — determined by the category:

| Category | Base Score | Rationale |
|----------|-----------|-----------|
| New Episode | 60 | Shows you're actively watching get top priority |
| New Season | 58 | You've watched before and there's fresh content |
| New Release (movie) | 55 | Fresh content you haven't seen |
| New Series | 55 | Fresh content, equal priority with movies |
| Continue Watching | 45 | Important but shouldn't dominate over new content |
| Recently Added | 30 | Lowest priority fallback |

**Recency bonus** — how recently the content was released or premiered:

| Released | Bonus |
|----------|-------|
| Today | +30 |
| 1–3 days ago | +20 |
| 4–7 days ago | +10 |
| 8–14 days ago | +5 |
| 15+ days ago | +0 |

**Engagement bonus** — only applies to Continue Watching items, based on when you last watched:

| Last Watched | Bonus |
|--------------|-------|
| Today | +20 |
| 1–3 days ago | +10 |
| 4–7 days ago | +5 |
| 8+ days ago | +0 |

**Penalties** — applied to New Episode items in specific cases:

| Condition | Penalty |
|-----------|---------|
| Series has ended | -10 |
| You're not on the latest season | -20 |

Items with the same score are tie-broken by the most recently watched date (more recent wins).

### Scoring Examples

| Item | Calculation | Score |
|------|-------------|-------|
| New episode of Fallout released today | 60 + 30 | **90** |
| New episode of Daniel Tiger released 1 day ago | 60 + 20 | **80** |
| New season of The Daily Show (premiered 2 days ago) | 58 + 20 | **78** |
| Movie released 2 days ago | 55 + 20 | **75** |
| New season of Primal (premiered 4 days ago) | 58 + 10 | **68** |
| Continue watching Samurai Jack (watched today) | 45 + 20 | **65** |
| Movie released 8 days ago | 55 + 5 | **60** |
| New series premiered 10 days ago | 55 + 5 | **60** |
| Continue watching The Croods (watched 2 days ago) | 45 + 10 | **55** |



## Selection Rules by Category

Each category has specific criteria that determine whether an item qualifies:

**Continue Watching** — Must have between 1% and 95% progress. Score is boosted by how recently you watched.

**New Episode** — The episode (or the show's latest episode) must have aired within the last 7 days. Two penalties may apply: -10 if the series has ended, and -20 if you're not on the latest season. If the episode is E1 of a season and that show also has a "New Season" release, the episode is redirected to the New Season category instead (since you haven't started the new season yet).

**New Season** — The season must have premiered within the last 14 days, and you must have watch history on the series (at least one episode watched). The item is excluded if you're actively mid-season — detected by your Next Up episode being E2 or later, or your last watched date being after the season premiere. It's also excluded if you've already watched all episodes. If your Next Up episode is E1, the new season badge is allowed because you haven't started it yet.

**New Series** — The show must have premiered within the last 14 days and the premiere date must be in the past (not future-dated).

**New Release (Movie)** — Requires a verified home release date from TMDB (streaming or digital availability). Movies without TMDB data are excluded entirely. The home release date is what determines scoring — not the theatrical premiere date — so a movie that was in theaters 3 months ago but just hit streaming will rank as new.

**Recently Added** — Used as a fallback when no items qualify for the other categories. The first few Next Up episodes and recently added movies are promoted with lower scores to ensure the spotlight always has something to show.



## Movie Home Release Dates

Movies have two release dates: a theatrical premiere and a home release (when it becomes available to stream or buy digitally). Using the theatrical date would incorrectly rank movies as "old" when they just became available to watch at home.

Neptune fetches home release dates from TMDB for each movie in your library:

1. Looks up the movie's TMDB ID (stored in Jellyfin provider metadata)
2. Fetches release dates from the TMDB API
3. Finds the US region digital release (type 4), falling back to physical release (type 5)
4. Caches the result for 7 days

Movies without a TMDB home release date are excluded from the spotlight. This prevents a flash/disappear issue where a movie would briefly appear using its premiere date, then vanish once TMDB data loads and reveals it doesn't qualify.

The spotlight queue waits for TMDB enrichment to complete before building — so the carousel is built once with accurate data rather than showing a temporary incorrect queue.



## Deduplication

If multiple items from the same TV series qualify (e.g., both a Continue Watching episode and a New Episode from the same show), only the highest-scoring one is kept. This prevents the same show from taking up multiple carousel slots. Movies are never deduplicated — each movie stands on its own.



## Queue Size

The spotlight carousel displays up to 8 items by default. This limit is configurable in Settings with options of 4, 8, or 12 items. Items are sorted by score and truncated to this limit after deduplication.



## Separate Queues per Tab

Three independent spotlight queues are built simultaneously, one for each content tab:

| Tab | What's Included |
|-----|-----------------|
| **Home** | All categories — movies, episodes, series, continue watching |
| **Movies** | Continue watching (movies only) and new movie releases |
| **Shows** | Continue watching (episodes only), new episodes, new seasons, and new series |

When you switch tabs, the spotlight immediately switches to that tab's queue.



## Queue Stability

On app launch with stale cached data, the spotlight builds immediately from cache for instant display. A background refresh then fetches fresh data and rebuilds the queue once it completes. This ensures a single smooth transition rather than showing a temporary queue that gets replaced seconds later.

The queue is rebuilt on:
- Fresh app launch (no cache)
- Stale cache launch (after background refresh completes)
- Manual/force refresh
- Background polling when content actually changes



## Navigation

- **Left/Right swipe:** Browse between spotlight items
- **Select (click):** Enter fullscreen gallery, then select to view details
- **Auto-rotation:** Items rotate every 8 seconds (timer resets on manual navigation)

Navigation arrows appear on the left and right edges when the spotlight zone is focused.



## Visual Effects

- **Parallax scrolling:** Backdrop moves at 20% scroll speed for depth
- **Scroll fade:** Backdrop gradually fades as you scroll down (starts at 500pt, fully faded by 2000pt)
- **Crossfade transitions:** 0.8-second crossfade between spotlight items (previous image fades out while new image fades in)



## Backdrop Behavior

The spotlight backdrop is always visible on Home, Movies, and Shows tabs. When you focus content cards below (like Continue Watching), the focused item's backdrop overlays the spotlight with its own image and metadata. When focus returns to the spotlight zone, the hover backdrop clears and the spotlight backdrop becomes visible again.



## Spotlight Metadata

Each spotlight item displays:
- A colored badge with the category label and icon (e.g., "New Episode" in purple)
- The show or movie logo (falls back to text title if no logo is available)
- A metadata row with genre, season/episode info, air date, rating, and community score
- Media info pills showing resolution, HDR format, audio format, and file size
- Position dots indicating which item you're viewing in the carousel



## Settings

| Setting | Options | Default |
|---------|---------|---------|
| Spotlight queue size | 4, 8, or 12 items | 8 |
| Auto-rotation | On/Off | On |

The spotlight section always stays at the top of the home screen and cannot be moved or hidden via section customization.
