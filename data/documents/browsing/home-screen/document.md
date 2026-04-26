# Home Screen

Your personalized media hub. The home screen displays a spotlight carousel at the top followed by horizontal rows of content organized by category. Each row surfaces different aspects of your library — what you're watching, what's new, what you love, and what you might want to discover.



## Sections

The home screen is made up of the following sections, listed in default order:

| Section | Description |
|---------|-------------|
| [Spotlight](spotlight/) | Full-bleed backdrop carousel highlighting content to watch next, scored by category and recency |
| [Continue Watching](continue-watching/) | Movies and episodes you started but didn't finish, with progress bars |
| [Next Up](next-up/) | The next unwatched episode from each show you're watching |
| [New Releases](new-releases/) | Recently premiered movies and new seasons, with smart grouping and TMDB date enrichment |
| [Recently Added](recently-added/) | Content recently added to your server, with per-library rows on the Home tab |
| [Favorites](favorites/) | Movies and shows you've marked as favorites |
| [Recommended](recommended/) | Personalized suggestions blending library content with Jellyseerr requestable items |
| [Coming Soon](coming-soon/) | Upcoming content from Radarr/Sonarr calendars and Jellyseerr requests |
| [Because You Watched](because-you-watched/) | Similar titles based on specific movies you've watched (requires plugin) |
| [Custom Libraries](custom-libraries/) | Recently added items from non-standard libraries like Anime or Documentaries |



## Quick Actions

### Long Press

Long-press any content card (0.6 seconds) to pin it as a Library Shortcut for quick access from the Library tab. A modal appears confirming the action. Works on movies, shows, seasons, episodes, and collections.

### Focused Backdrop

When you navigate down and focus a card in any section, its backdrop image replaces the spotlight area at the top of the screen. This gives you a preview of the content before selecting it.



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

Spotlight always stays at the top and cannot be moved or hidden.

Section order and visibility are saved per user — each Jellyfin profile has its own layout.



## Movies & Shows Tabs

The **Movies** and **Shows** tabs work the same as the Home tab but filter content:

- **Movies tab:** Spotlight shows only new movie releases, content rows show only movies
- **Shows tab:** Spotlight shows only new episodes, content rows show only TV shows

Some sections have tab restrictions — for example, Next Up is hidden on the Movies tab since it only contains episodes, and Because You Watched is hidden on the Shows tab since it's movie-based.

If you have multiple movie or show libraries, a library picker appears at the top letting you filter by library or view all.

Switching tabs updates both the spotlight and all content sections.



## Content Cards

**Poster cards:** Movies and shows with poster art displayed vertically. Used by New Releases, Recently Added, Favorites, Recommended, Coming Soon, Because You Watched, and Custom Libraries.

**Wide cards:** Continue Watching and Next Up with wider thumbnails showing episode screenshots or movie backdrops at a landscape aspect ratio.

**Focus behavior:** Cards scale up with a white border on focus. The focused item's backdrop appears behind all content at the top of the screen.



## Background Refresh

Content refreshes automatically every 10 seconds. Each refresh fetches all sections in parallel and uses smart diffing to update only what's changed — preventing unnecessary UI flicker.

Refresh pauses during:
- Video playback
- Non-content tabs (Search, Settings, Library)
- Detail view navigation

Refresh resumes when you return to a content tab (Home, Movies, Shows, or Discover).
