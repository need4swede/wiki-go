# Item Details

When you select a movie, TV show, or episode, Neptune displays a detailed view with all relevant information and actions.

---

## Overview

The detail view displays:

- **Backdrop**: Full-screen background image from the content
- **Logo/Title**: Official logo or text title
- **Metadata**: Year, runtime, rating, genres, quality badges
- **Overview**: Plot summary and description
- **Action buttons**: Play, menu options

---

## Movies

Movie detail pages show:

### Top Section

- **Play button**: Start playback (shows "Resume" if partially watched)
- **Progress bar**: Visual indicator of watch progress
- **Menu button**: Access additional options

### Media Information

Color-coded badges indicate video and audio quality:

**Video Badges:**
| Badge | Meaning |
|-------|---------|
| 4K (Green) | 2160p resolution |
| 1080p | Full HD resolution |
| 720p/SD | Standard definition |
| DV (Purple) | Dolby Vision HDR |
| HDR10 (Orange) | HDR10 format |
| HDR10+ (Yellow) | HDR10+ format |

**Audio Badges:**
| Badge | Meaning |
|-------|---------|
| Atmos (Blue) | Dolby Atmos immersive audio |
| DTS:X (Red) | DTS:X immersive audio |
| Lossless (Gold) | TrueHD, DTS-HD MA, or FLAC |

### Content Sections

- **Cast & Crew**: Browse actors, director, and production team
- **Extras**: Trailers, behind-the-scenes, deleted scenes, featurettes
- **Collections**: Related movie collections (e.g., "Marvel Cinematic Universe")
- **Similar**: Movies with similar themes or genres

---

## TV Shows

TV show detail pages have two modes: **Show Level** and **Season Level**.

### Show Level

When first opening a series:

- **Play button**: Resume where you left off, or start from the beginning
- **Seasons row**: Browse all available seasons
- **Show information**: Total seasons, episode count, air dates

**Selecting a Season:**
Focus on a season card and press Select to view episodes.

### Season Level

When viewing a season:

- **Back button**: Return to show overview
- **Latest button**: Jump to the most recent episode
- **Episodes list**: All episodes in the selected season

**Episode Cards show:**
- Episode thumbnail
- Title and episode number
- Air date
- Runtime
- Progress bar (if partially watched)
- Played indicator (checkmark if completed)

### Episode Actions

**Select an episode** to start playback immediately.

**Long-press an episode** to access the context menu:
- Mark as Watched / Unwatched
- Refresh metadata

### Season Actions

**Long-press a season** to access the context menu:
- Mark entire season as Watched / Unwatched
- Refresh metadata

---

## Extras / Special Features

Movies and TV shows may include special features:

| Type | Description |
|------|-------------|
| **Behind the Scenes** | Making-of content |
| **Deleted Scene** | Removed scenes |
| **Featurette** | Short documentaries |
| **Interview** | Cast/crew interviews |
| **Trailer** | Promotional trailers |
| **Clip** | Movie/show clips |
| **Short** | Short films |

Select any extra to start playback.

---

## Menu Options

Press the **Menu button** on item details to access:

### For All Items

- **Add to Favorites** / **Remove from Favorites**: Toggle favorite status
- **Mark as Watched** / **Mark as Unwatched**: Toggle played status
- **Refresh Metadata**: Trigger server-side metadata refresh

### For Admin Users

- **Manage Images**: Change poster, backdrop, or logo images
- **Advanced Refresh**: Choose refresh mode (metadata only, images, or full)

---

## Shuffle Mode (TV Shows)

For TV shows, you can enable shuffle playback:

1. On the series detail page, find the **Shuffle** button
2. Toggle shuffle On
3. Press Play to start a random episode
4. Episodes will continue in random order

Shuffle mode persists until you turn it off or leave the series detail page.

---

## Collections

When a movie belongs to a collection (e.g., "The Lord of the Rings Collection"):

1. Scroll down to the **Collections** section
2. Select the collection to view all items
3. Browse and select any movie in the collection

---

## Similar Items

The **Similar** section shows related content based on:
- Shared genres
- Similar themes
- Same actors or directors

Select any similar item to view its details.

---

## Cast & Crew

Browse the people involved in the production:

- **Actors**: Cast members with character names
- **Director**: Film/episode directors
- **Writers**: Screenplay and story credits
- **Producers**: Production team

Select a person to see their other work in your library.

---

## Theme Songs

For TV series, Neptune can play ambient theme music when viewing the detail page.

**Requirements:**
- Theme Songs plugin installed on your Jellyfin server
- Theme song available for the series

**Behavior:**
- Music starts automatically when entering series details
- Fades out when leaving or starting playback
- Loops seamlessly while browsing

Configure in **Settings** > **Plugins** > **Theme Songs**.

---

## Focus Behavior

The detail view uses intelligent focus dimming:

- The currently focused section appears at full brightness
- Other sections dim slightly (40% opacity)
- This helps you stay oriented while navigating

Navigation follows a natural flow:
- **Down** from action buttons goes to content sections
- **Up** returns to action buttons
- **Menu button** exits to the previous screen
