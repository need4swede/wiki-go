---
order: 10
---

# Pins

Bookmark anything in your library (movies, shows, seasons, episodes, collections, genres, studios, networks, people, tags) and surface them as categorized rows on the Library tab and in the Pins row on Home. A second variant, **timestamp shortcuts**, captures a specific moment of playback so you can jump back to it later.



## What You Can Pin

| Pin Kind | What It Bookmarks |
|----------|-------------------|
| Movie | A specific film |
| Series | A whole TV show |
| Season | One season of a show |
| Episode | One episode |
| Collection | A box set or franchise |
| Person | An actor, director, or writer's filmography |
| Genre | All content in a genre |
| Studio | All content from a studio |
| Network | All content from a TV network |
| Tag | A [Smart Tag](/library/smart-tags) theme or mood |
| Timestamp | A specific moment during playback |



## Pinning Items

### From a Detail Page

The first action button on any movie, series, season, or episode page is a **Pin** toggle. Press it once to pin the item, again to unpin. No confirmation dialog.

### Long-Press on Any Card

Hold Select on any content card across Home, Library, or Browse. A modal appears with **Pin Shortcut** or **Unpin Shortcut** alongside the played-status actions.

### From the Episode Menu

Long-press an episode card to open the episode menu. The Pin / Unpin action appears alongside Mark as Played and other quick actions.

### From a Person Page

Person pages have a **Pin** button next to the portrait. Pinning a person gives you one-tap access to their filmography.

### From a Browse Picker

When browsing by genre, studio, network, or person, long-press any of the picker cards to pin that browse view as a shortcut. For studios and networks, Neptune normalizes the name so the pin matches its TMDB equivalent when possible.



## Timestamp Shortcuts

A timestamp shortcut captures the exact moment you're watching: position plus a thumbnail of the current frame.

### Creating One

1. Start playing any movie or episode
2. Tap the touch surface to reveal player controls
3. Press the **Pin** button on the action row
4. A confirmation pill shows "Pinned at 1:23:45" for a couple of seconds

The thumbnail comes from the live frame on screen. If a live frame isn't available for any reason (rare), Neptune falls back to the corresponding trickplay tile.

### Resuming from One

Tap a timestamp shortcut card on the Library tab to open a small modal with three choices:

- **Play from [timestamp].** Jumps to the exact moment.
- **Go to Item.** Opens the item's detail page without auto-playing.
- **Remove Pin.** Deletes the shortcut and its thumbnail.

### Multiple Timestamps on One Item

If you create several timestamp shortcuts on the same movie or episode, they collapse into a single card with a small badge showing the count. Tapping it opens a horizontal carousel where each thumbnail shows its own moment, sorted chronologically. Pick the one you want to resume from.



## Where Pins Appear

Pinned items appear in two places:

- The **Shortcuts** section on the Library tab, organized into rows by category (Movies, Shows, Episodes, Collections, Actors, Directors, Genres, Studios, Networks, Tags)
- The **Pins** row on the Home screen, a flat row of everything you've pinned

| Card Style | Used For |
|------------|----------|
| Gradient with watermark icon | Genre, Studio, Network, Tag |
| Person poster | Actors, directors, writers |
| Item poster | Movie, Series, Season, Collection |
| Landscape thumbnail | Episode, Timestamp shortcut |

The Shortcuts section can be reordered or hidden via Library section customization, and the Pins row via Home customization.



## Edit Mode

Long-press any card in a shortcuts row to enter edit mode. Cards begin a gentle jiggle animation.

| Action | How |
|--------|-----|
| Move within a row | Tap to pick up, then navigate left/right to swap with neighbors |
| Move between rows | Pick up, navigate up/down to swap entire category groups |
| Remove | Press Select on a card to open its menu, then choose Unpin |
| Exit edit mode | Press Menu/Back, or focus away from the row |



## Sync Across Devices

If [Backup & Sync](/settings/backup) is enabled with the Neptune plugin, your shortcuts ride along with the rest of your settings. Pin something on one device and it shows up on every other device signed in to the same account within seconds.

> Timestamp thumbnails themselves aren't synced. Only the position is. A device that wasn't the original capturer falls back to the regular episode image when displaying a synced timestamp shortcut.



## Tips

- **Quick rewatch lists.** Pin a few favorite movies or shows for one-tap access from the Library tab.
- **Remember a moment.** Pin a memorable scene during playback so you don't have to scrub for it later.
- **Browse pins are filters.** Pinning "Sci-Fi" creates a one-tap path back to the full sci-fi browse view, including all your usual filtering.
- **Studios match TMDB.** Pinning a studio like "A24" maps to its TMDB ID where possible, so the browse view uses the same metadata as Discover.
