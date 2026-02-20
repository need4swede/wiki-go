# Home Screen

Your personalized media hub.



## Hero Spotlight

A full-bleed backdrop display at the top showcasing content you should watch next.

### What Gets Featured

Neptune intelligently selects what to spotlight based on your viewing activity:

| Type | Badge Color | Criteria |
|------|-------------|----------|
| **Continue Watching** | Orange | Movies or episodes you started but didn't finish |
| **New Episode** | Purple | New episode from a show you're caught up on (last 7 days) |
| **New Season** | Cyan | New season of a show you've watched (last 14 days) |
| **New Series** | Teal | Brand new show added to your library (last 14 days) |
| **New Release** | Blue | Movie that just became available for home viewing (last 14 days) |
| **Recently Added** | Green | Latest additions to your library |

Items are ranked by a scoring system that prioritizes new episodes and recent activity. Movies use home release dates (streaming/digital availability) rather than theatrical premiere dates, so newly acquired movies rank correctly.

### Separate Queues per Tab

Each tab has its own spotlight queue:

- **Home:** All content types
- **Movies:** Only movie-related spotlight items
- **Shows:** Only TV show spotlight items

### Navigation

- **Left/Right swipe:** Browse between spotlight items
- **Select (click):** Enter fullscreen gallery, then select to view details
- **Auto-rotation:** Items rotate every 8 seconds

Navigation arrows appear on the left and right edges when the spotlight zone is focused.

### Visual Effects

- **Parallax scrolling:** Backdrop moves at 20% scroll speed for depth
- **Scroll fade:** Backdrop gradually fades as you scroll down
- **Crossfade transitions:** Smooth morphing between spotlight items

### Backdrop Behavior

The spotlight backdrop is always visible on Home, Movies, and Shows tabs. When you focus content cards below (like Continue Watching), the focused item's backdrop overlays the spotlight with its own image and metadata.



## Content Sections

| Section | Description | Card Style |
|---------|-------------|------------|
| **Continue Watching** | Resume movies and episodes with progress bars | Wide cards |
| **Next Up** | Next unwatched episodes from your shows | Wide cards |
| **New Releases** | Recently premiered content | Poster cards |
| **Recently Added Movies** | Latest movie additions to your library | Poster cards |
| **Recently Added Shows** | Latest show additions to your library | Poster cards |
| **Recommended** | Personalized suggestions blending your library and requestable content | Poster cards |
| **Coming Soon** | Upcoming content from Jellyseerr or Radarr/Sonarr calendars | Poster cards |
| **Because You Watched** | Suggestions based on your viewing history (plugin required) | Poster cards |
| **Custom Libraries** | Your custom Jellyfin libraries (Home tab only) | Poster cards |

### Recommended

The Recommended section provides personalized suggestions based on your watch history, favorites, and the directors and actors you enjoy. It blends content from your library with requestable items from Jellyseerr (if connected):

- Items already in your library show a **green checkmark**
- Items available to request show a **blue plus icon**

If Jellyseerr isn't connected, recommendations come from your Jellyfin library only.



## Customizing Sections

Long-press any tab in the menu bar to open the Home Menu, then select **Customize Home Screen**.

### Editing Mode

In editing mode, each section shows as a labeled placeholder card. You can:

| Action | How |
|--------|-----|
| **Move a section** | Focus it, press Move, navigate to the new position, press Move Here |
| **Hide a section** | Focus it, press Hide (section dims to indicate it's hidden) |
| **Show a section** | Focus a hidden section, press Show |
| **Save and exit** | Press Back or Done |

Hero Spotlight always stays at the top and cannot be moved or hidden.



## Movies & Shows Tabs

The **Movies** and **Shows** tabs work the same as the Home tab but filter content:

- **Movies tab:** Spotlight shows only new movie releases, content rows show only movies
- **Shows tab:** Spotlight shows only new episodes, content rows show only TV shows

Switching tabs updates both the spotlight and all content sections.



## Content Cards

**Poster cards:** Movies and shows with poster, title, progress bar.

**Wide cards:** Continue Watching and Next Up with thumbnail and episode info.

**Focus behavior:** Cards scale up with a border on focus. The focused item's backdrop appears behind all content.



## Background Refresh

Content refreshes automatically every 10 seconds. Pauses during video playback.
