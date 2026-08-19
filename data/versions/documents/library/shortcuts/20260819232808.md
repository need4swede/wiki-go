---
order: 10
---

# Pins

Bookmark media, people, and library browse contexts, then reach them from categorized Library rows or the Pins row on Home.
Native Pins use the same ordered, account-scoped settings format across supported Neptune clients; Backup & Restore can synchronize that list between them.

A second variant, **timestamp Pins**, captures a specific Apple TV playback moment so you can return to it later.

## What You Can Pin

| Pin Kind | What It Bookmarks |
|----------|-------------------|
| Movie | A specific film |
| Series | A whole TV show |
| Season | One season of a show |
| Episode | One episode |
| Collection | A box set or franchise |
| Music Video | One music video |
| Person | An actor, director, or writer's filmography |
| Genre | All content in a genre |
| Studio | All content from a studio |
| Network | All content from a TV network |
| Tag | A [Smart Tag](/library/smart-tags) theme or mood |
| Timestamp | A specific moment during playback |

## Pinning Items

### On iPhone and iPad

- Tap **Pin** on a media or person detail page.
- Touch and hold a movie, show, season, episode, collection, music video, or person card and choose **Pin** or **Unpin**.
- Touch and hold an existing Pin card and choose **Remove Pin**.

iOS does not have a separate Pins settings editor.
It preserves the shared order while adding and removing Pins where their targets already appear.
Browse-context and timestamp Pins created on Apple TV remain usable on iPhone and iPad.

See [Pins on iPhone & iPad](/ios/pins) for the touch-specific guide.

### On Apple TV

#### From a Detail Page

The first action button on any movie, series, season, or episode page is a **Pin** toggle.
Press it once to pin the item, again to unpin.
No confirmation dialog.

#### Long-Press on Any Card

Hold Select on any content card across Home, Library, or Browse.
A modal appears with **Pin** or **Unpin** alongside the played-status actions.

#### From the Episode Menu

Long-press an episode card to open the episode menu.
The Pin / Unpin action appears alongside Mark as Played and other quick actions.

#### From a Person Page

Person pages have a **Pin** button next to the portrait.
Pinning a person gives you one-tap access to their filmography.

#### From a Browse Picker

When browsing by genre, studio, network, or person, long-press any picker card to pin that browse view.
For studios and networks, Neptune normalizes the name so the Pin matches its TMDB equivalent when possible.

## Timestamp Pins

A timestamp Pin captures the exact moment you're watching: position plus a thumbnail of the current frame.

### Creating One

Timestamp Pin creation currently uses the Apple TV player:

1. Start playing any movie or episode on Apple TV.
2. Tap the touch surface to reveal player controls.
3. Press the **Pin** button on the action row.
4. A confirmation pill shows “Pinned at 1:23:45” for a couple of seconds.

The thumbnail comes from the live frame on screen.
If a live frame is not available, Neptune falls back to the corresponding trickplay tile.

### Resuming from One

On Apple TV, select a timestamp Pin card on the Library tab to open three choices:

- **Play from [timestamp].**
  Jumps to the exact moment.
- **Go to Item.**
  Opens the item's detail page without auto-playing.
- **Remove Pin.**
  Deletes the Pin and its thumbnail.

On iPhone and iPad, synchronized timestamp Pins appear with their saved time and open the current media destination.
Creating a new saved moment and choosing exact timestamp playback remain Apple TV actions.

### Multiple Timestamps on One Item

On Apple TV, several timestamp Pins for the same movie or episode collapse into one card with a count badge.
Selecting it opens a chronological carousel of saved moments.

On iPhone and iPad, the moments also collapse into one card.
Removing that card removes every timestamp Pin for the item.

## Where Pins Appear

| Area | What It Shows |
|------|---------------|
| **Home** | Every native Pin |
| **Movies** | Movie Pins |
| **Shows** | Series, season, and episode Pins |
| **Music** | Music-video Pins when the Music surface is enabled |
| **Library** | Pins grouped into ordered category rows |

| Card Style | Used For |
|------------|----------|
| Gradient with watermark icon | Genre, Studio, Network, Tag |
| Person poster | Actors, directors, writers |
| Item poster | Movie, Series, Season, Collection, Music Video |
| Landscape thumbnail | Episode, Timestamp Pin |

The Pins section can be reordered or hidden through Library customization, and the Pins row through Home customization.

## Edit Mode

Apple TV provides an edit mode for reordering the shared Pins list.
Long-press any card in a Library Pins row to enter it; cards begin a gentle jiggle animation.

| Action | How |
|--------|-----|
| Move within a row | Select a card, then navigate left or right to swap with its neighbors |
| Move between rows | Select a card, then navigate up or down to swap category groups |
| Remove | Press Select on a card to open its menu, then choose Unpin |
| Exit edit mode | Press Menu/Back, or focus away from the row |

iPhone and iPad preserve this synchronized order but do not provide a separate reorder screen.

## Sync Across Devices

If [Backup & Restore](/settings/backup) is enabled with the Neptune plugin, your Pins travel with the rest of the profile's settings.
Pin something on one device and it appears on the others signed into the same server account.

> Timestamp thumbnails themselves are not synced.
> Only the position is.
> A device that did not capture the frame falls back to the item's normal artwork.

## Pins, Widgets, and Compass

These related features do not share one configuration:

| Feature | Uses Native Pins? | Configuration |
|---------|-------------------|---------------|
| Neptune’s Home and Library rows | Yes | Pin or unpin items where they appear |
| [Conventional iOS widgets](/ios/widgets) | May select one native Pin; every widget has its own choice | iOS **Edit Widget** sheet |
| [iPhone Compass Live Activity](/ios/live-activity) | No; it uses a separate one-to-eight Compass Shortcuts deck | **Settings > User Preferences > Compass** |

Pins inside Neptune are Free.
Standard Page widgets are also Free; targeting a native Pin or dynamic Section from a conventional widget requires Neptune Pro.

## Tips

- **Quick rewatch lists.**
  Pin favorite movies or shows for one-tap access.
- **Remember a moment.**
  Pin a memorable Apple TV playback scene instead of scrubbing for it later.
- **Browse Pins are filters.**
  Pinning “Sci-Fi” creates a one-tap path back to the current sci-fi browse view, including the usual filtering.
- **Studios match TMDB.**
  Pinning a studio such as “A24” maps to its TMDB ID where possible, so the browse view uses the same metadata as Discover.
