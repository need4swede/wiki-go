---
order: 10
---

# Pins

Bookmark media, people, and library browse contexts, then reach them from categorized Library rows or the Pins row on Home.
Native Pins use the same ordered, account-scoped settings format across supported Neptune clients; Backup & Restore can synchronize that list between them.

A second variant, **timestamp Pins**, captures a specific playback moment so you can return to it later.

## What You Can Pin

| Pin Kind | What It Bookmarks |
| --- | --- |
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

### From a Detail Page

Use the **Pin** action on any movie, series, season, episode, collection, music video, or person detail page.
Select it once to pin the item and again to unpin it.

### From a Card or Browse Picker

Long-press a content card to open its quick actions and choose **Pin**, **Unpin**, or **Remove Pin**.
This works for media, people, and browse cards.
The same action on an episode card opens its episode menu.

When browsing by genre, studio, network, or person, long-press a picker card to pin that browse view.
For studios and networks, Neptune normalizes the name so the Pin matches its TMDB equivalent when possible.

Use the same Pin action on a person page to save that person's filmography.

The shared Pins order is preserved across devices while you add and remove Pins where their targets appear.

## Timestamp Pins

A timestamp Pin captures the exact moment you're watching: position plus a thumbnail of the current frame.

### Creating One

Start playback, open the player controls, and choose **Pin Timestamp**.
If it is hidden, add it under **Settings > Playback > Controls > Action Buttons**.
A confirmation shows the saved time.

The thumbnail comes from the live frame on screen.
If a live frame is not available, Neptune falls back to the corresponding trickplay tile.

### Resuming from One

Open a timestamp Pin from the Library tab to choose one of three actions:

- **Play from \[timestamp\].**
  Jumps to the exact moment.
- **Go to Item.**
  Opens the item's detail page without auto-playing.
- **Remove Pin.**
  Deletes the Pin and its thumbnail.

Timestamp Pins remain visible with their saved time.
If several moments belong to one movie or episode, Neptune collapses them into one card.
Open that card to see the chronological moment chooser, where saved moments use wide frames—even when there is only one saved moment.
The selected frame supplies the sheet's blurred backdrop.
From the chooser you can **Play from [time]**, open the item, or remove only the selected moment.

### Multiple Timestamps on One Item

Several timestamp Pins for the same movie or episode collapse into one card with a count badge.
Selecting it opens a chronological carousel of saved moments.
Removing a timestamp from its card menu removes the displayed moment; if more moments remain, the collapsed card advances to the next one.

## Where Pins Appear

| Area | What It Shows |
| --- | --- |
| **Home** | Every native Pin |
| **Movies** | Movie Pins |
| **Shows** | Series, season, and episode Pins |
| **Music** | Music-video Pins when the Music surface is enabled |
| **Library** | Pins grouped into ordered category rows |

Selecting a media Pin opens its current detail destination, while Person Pins open the person's page.
Genre, studio, network, and Smart Tag Pins reopen their current library results rather than storing an old result list.

| Card Style | Used For |
| --- | --- |
| Gradient with watermark icon | Genre, Studio, Network, Tag |
| Person poster | Actors, directors, writers |
| Item poster | Movie, Series, Season, Collection, Music Video |
| Landscape thumbnail | Episode, Timestamp Pin |

The Pins section can be reordered or hidden through Library customization, and the Pins row through Home customization.

## Edit Mode

The Library Pins row provides an edit mode for reordering the shared Pins list.
Long-press any card in the row to enter it; cards begin a gentle jiggle animation.

| Action | How |
| --- | --- |
| Move within a row | Select a card, then navigate left or right to swap with its neighbors |
| Move between rows | Select a card, then navigate up or down to swap category groups |
| Remove | Press Select on a card to open its menu, then choose Unpin |
| Exit edit mode | Press Menu/Back, or focus away from the row |

Clients without a separate reorder screen still preserve the shared order while you add and remove Pins where they appear.

## Sync Across Devices

If [Backup & Restore](/settings/backup) is enabled with the Neptune plugin, your Pins travel with the rest of the profile's settings.
Pin something on one device and it appears on the others signed into the same server account.

Timestamp positions sync, but each captured frame image stays on the device that created it.
When you open a timestamp Pin, Jellyfin preview tiles rebuild and cache the matching frame if its local image is missing.
A neutral placeholder remains in the chooser when the connected backend cannot provide preview tiles.

## Pins in Widgets

Pins inside Neptune are available without Neptune Pro.
[Pin Widgets](/browsing/widgets#pin-widgets-neptune-pro) are a separate Pro feature that lets a conventional Home Screen or Lock Screen widget target one of those Pins.
Movie and episode Pin widgets can also be configured to **Play**.

The widget stores its own selection.
Editing or removing the underlying Pin updates any widget that refers to it.

## Native Pins and Compass Shortcuts

Native Pins bookmark media, people, and library browse contexts and appear in Neptune's content rows.
The iPhone Compass uses a separate one-to-eight set of Compass Shortcuts, which can also appear in its [Live Activity](/browsing/navigation/compass/live-activity).
Compass Shortcuts do not replace Native Pins or a widget's independent Page, Section, or Pin selection.
