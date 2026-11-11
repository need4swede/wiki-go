---
order: 10
---

# Spotlight

An artwork header showing content to watch next.
Spotlight picks from your library using watch progress, release dates, and recent activity.
It appears on Home, Movies, and Shows, plus Music on Apple TV.

## What Each Item Shows

- The show or movie logo, with a text title when no logo is available
- A badge explaining why the item is featured
- A line of facts, such as the content rating, genre, or season and episode
- A short synopsis
- Play or Resume, Details, and quick actions
- Position dots, with a filling pill for the current item

The Resume button includes a small progress track.
For an unstarted episode protected by your spoiler settings, Spotlight uses the show's description instead of revealing the episode synopsis.

## Spotlight Categories

Each item carries a badge explaining why it's featured:

| Badge | Criteria |
|-------|----------|
| **Continue** | Movies or episodes you've started but haven't finished, plus Next Up items used to fill a short rotation |
| **New Episode** | A recent episode from a continuing show you're caught up with, aired within the last week |
| **New Season** | A season that premiered within the last two weeks in a show you've watched before |
| **New Series** | A show that premiered within the last two weeks |
| **New Release** | A recent movie release, using its home-release date when TMDB enrichment is available |
| **Recently Added** | Recent library additions used to fill a short rotation |

## How Items Are Ranked

With **Automatic** priority, Neptune weighs each candidate by its release date, your watch progress, and recent activity.
New episodes and seasons of shows you watch get strong priority, followed by new movies and shows, unfinished items, and recent additions.
The final order depends on how those factors combine.

A few refinements keep the queue sensible:

- One show takes one slot, even when several episodes or reasons qualify.
- New Episode highlights focus on continuing shows and the season you're caught up with.
- A season you're already working through gives way to its next episode.
- With TMDB enrichment, new movies use their **home release date**, when they reach streaming or digital. Without it, Neptune uses the server's premiere date.

When too few items qualify, Neptune fills the remaining slots from Next Up, recent movies, and Recently Added.
Your hidden content types stay hidden during this process too.
The Spotlight Limit is a maximum; a smaller library may have fewer eligible items.

## Navigation

### Apple TV

The header has separate controls for playback and details:

| Action | Control |
|--------|---------|
| Play or resume | Select **Play** or **Resume** |
| Open details | Select the **Details** info button |
| Open quick actions | Hold Select on **Details** |
| Next item | Select **›**, or press Right from the last control |
| Previous item | Press Left from **Play**, **Resume**, or **View Details** |
| Browse the rows | Press Down |

Items wrap around when you reach either end.
Play always starts playback, and Details always opens the detail page, regardless of Impatient Mode.

When an item opens with **View Details** instead of Play, that button opens its page.
Hold Select on it for quick actions.

### iPhone and iPad

Swipe left or right across the artwork to change items.
Tap **Play** or **Resume** to watch, the **Details** info button to open the page, or **…** for quick actions.
Items that can't be played directly show **View Details** instead.

With Spotlight at the top of Home, a longer pull down on the artwork opens details when you release.
For an episode, this opens its show.
Home refreshes automatically; pull-to-refresh returns when Spotlight isn't the header.

### Auto-Rotation

Spotlight rotates automatically, and manual paging starts a fresh interval.
The current item's position pill fills as its time runs.
Rotation pauses during playback and while Neptune is in the background.
On Apple TV, it also pauses while you browse the rows or open an item's page.

## Immersive Spotlight

On Apple TV, **Settings > Home > Spotlight > Immersive Spotlight** changes how the header gives way to the rows:

| Setting | Behavior |
|---------|----------|
| **On** | Spotlight fills the screen. Down fades into the rows; Up from the first row brings Spotlight back |
| **Off** | The first row peeks in beneath the header, and the page scrolls between Spotlight and the rows |

Immersive Spotlight is on by default.
iPhone and iPad use their touch header without this switch.

## Placement and Visibility

Spotlight becomes the page header when it's the first visible section.
Move it below another section in the Home editor and it becomes a card in that position instead.
Hide the section to remove it.

On Apple TV, the card is one focus target: Left/Right changes items, Select opens details, and holding Select opens quick actions.
On iPhone and iPad, swipe to browse and touch and hold for quick actions. Tapping follows your [Impatient Mode](/settings/home#impatient-mode) setting.

See [Customizing Sections](/browsing/home-screen#customizing-sections) for moving or hiding Spotlight.

## Spotlight Content

Open **Settings > Home > Spotlight > Spotlight Content** to choose what appears:

- **New Episodes**
- **New Seasons**
- **New Movies**
- **New Shows**
- **Continue Watching**
- **Recently Added**

At least one type stays enabled.
These choices apply to Home, Movies, and Shows. Music keeps its own music-video Spotlight.

| Priority | Behavior |
|----------|----------|
| **Automatic** | Neptune ranks items using release dates, watch progress, and recent activity |
| **Custom** | Types near the top lead the rotation and appear more often, while leaving room for the other enabled types |

On Apple TV, use **Move** to change a type's position in Custom priority, then **Done** to save.
Back asks whether to save or discard unsaved changes.
On iPhone and iPad, use the toggles and drag handles; changes save as you make them.

## Per-Tab Queues

Each content tab builds its own Spotlight:

| Tab | What's Included |
|-----|-----------------|
| **Home** | Movies, episodes, seasons, and shows from the enabled content types |
| **Movies** | Movies only |
| **Shows** | Episodes, seasons, and shows only |
| **Music** (Apple TV) | Music videos only |

## Settings

**Settings > Home > Spotlight** controls:

| Setting | Description |
|---------|-------------|
| **Spotlight Content** | Choose content types and Automatic or Custom priority |
| **Spotlight Limit** | Maximum items in the rotation, default 8. Apple TV offers 4, 6, 8, 10, or 12; iPhone and iPad offer 4, 8, or 12 |
| **Immersive Spotlight** | Apple TV only. Choose the full-screen fade or the scrolling header |

Spotlight choices follow your account when [Settings Sync](/plugins/mdm/settings-sync) is enabled.
