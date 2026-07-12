---
order: 10
---

# Home Screen

The home screen shows a spotlight carousel at the top followed by horizontal rows of content. Each row covers a different category: what you're watching, what's new, your favorites, and recommendations.



## Sections

The home screen is made up of the following sections, listed in default order:

| Section | Description |
|---------|-------------|
| [Spotlight](spotlight/) | Full-bleed backdrop carousel highlighting what to watch next |
| Libraries | Your media libraries as artwork cards |
| [Continue Watching](continue-watching/) | Movies and episodes you started but didn't finish, with progress bars |
| Pins | Your pinned movies, shows, people, and genres |
| [Next Up](next-up/) | The next unwatched episode from each show you're watching |
| [New Releases](new-releases/) | Recently premiered movies and new seasons |
| [Recently Added](recently-added/) | Content recently added to your server, with per-library rows |
| [Favorites](favorites/) | Movies and shows you've marked as favorites |
| Collections | Your box sets, with a See All card into the full collections browse |
| [Recommended](recommended/) | Personalized suggestions, optionally blended with Seerr titles |
| [Coming Soon](coming-soon/) | Upcoming releases you've requested |
| [Because You Watched](because-you-watched/) | Similar titles based on movies you've watched (requires plugin) |

The **Pins** row mirrors your [Library Shortcuts](/library/shortcuts). Pin anything with a long press and it shows up here; long-press a pin to remove it.



## Quick Actions

Long-press any content card to open the quick actions modal:

- **Mark as Played** or **Mark as Unplayed**
- **Reset Progress** (for items in progress)
- **Pin Shortcut** or **Unpin Shortcut**

### Focused Backdrop

When you navigate down and focus a card in any section, its backdrop image replaces the spotlight area at the top of the screen. This gives you a preview of the content before selecting it.



## Customizing Sections

Long-press any tab in the menu bar and select **Edit Home Screen**. The editor shows every section as a labeled card:

| Action | How |
|--------|-----|
| **Move a section** | Focus it, press Move, pick the new position |
| **Hide a section** | Focus it, press the eye button |
| **Show a section** | Focus a hidden section, press the eye button again |
| **Start over** | Press Restore Default |
| **Save and exit** | Press Done or Back |

Section order and visibility are saved per profile. Each server account has its own layout.

For finer control, **Settings > Home** sets row limits (Continue Watching, Next Up, Recently Added, Recommended), the new-release window, library card options, and more. See [Home Settings](/settings/home).



## Movies & Shows Tabs

The optional **Movies** and **Shows** tabs work the same as the Home tab but filter content:

- **Movies tab:** Spotlight shows only movies, content rows show only movies
- **Shows tab:** Spotlight shows only shows, content rows show only TV content

Some sections are restricted by tab. Next Up is hidden on the Movies tab because it only contains episodes, and Because You Watched is hidden on the Shows tab because it's movie-based. Libraries, Pins, and Collections appear on the Home tab only.

If you have multiple movie or show libraries, a library picker appears at the top letting you filter by library or view all.



## Content Cards

**Poster cards:** Movies and shows with poster art displayed vertically. Used by New Releases, Recently Added, Favorites, Recommended, Coming Soon, and Because You Watched.

**Wide cards:** Continue Watching and Next Up use wider thumbnails showing episode screenshots or movie backdrops at a landscape aspect ratio.

**Focus behavior:** Cards scale up with a highlight border on focus. The focused item's backdrop appears behind all content at the top of the screen.



## Background Refresh

Content refreshes automatically while you browse. Each refresh updates only the rows whose content has changed, so the screen never jumps under you. Refresh pauses during playback and on non-content tabs, then resumes when you return.
