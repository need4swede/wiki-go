---
order: 10
---

# Pins on iPhone & iPad

Native Pins are Neptune’s shared bookmarks for media, people, and library browse contexts.
They belong to the signed-in server account and use the same ordered settings format across supported Neptune clients.
With Backup & Restore enabled, that ordered list follows the account across devices.

These Pins are separate from the one-to-eight **Compass Shortcuts** used by the iPhone Compass and [Live Activity](/ios/live-activity).

## Creating and Removing Pins

On iPhone or iPad:

- Open a movie, show, season, episode, collection, or music video and tap the **Pin** action.
- Touch and hold a media card, then choose **Pin** or **Unpin**.
- Pin a person from their detail page or by touching and holding their card.
- During playback, use **Pin Timestamp** in the top action row.
  It is available under **Settings > Playback > Controls > Action Buttons** and starts hidden.
- Touch and hold an existing item Pin to choose **Go to Item** or **Remove Pin**.
  Timestamp Pins also offer **Play from [time]**.

There is no separate Pins editor in iOS Settings.
New Pins join the shared order, and removing one updates every in-app Pins row.
Apple TV also offers row and category reordering from its Library Pins section.

## Where Pins Appear

| Area | Pins Shown |
|------|------------|
| **Home** | Every native Pin |
| **Movies** | Movies |
| **Shows** | Series, seasons, and episodes |
| **Music** | Music videos when the Music surface is enabled |
| **Library** | One row per Pin category, preserving the shared order |

Selecting a media Pin opens its current detail destination.
Person Pins open the person’s page.
Synced genre, studio, network, and Smart Tag Pins reopen their current library results rather than storing an old result list.

## Timestamp and Browse Pins

Apple TV can create additional browse-context Pins.
Both Apple TV and iPhone or iPad can create timestamp Pins during playback.
They remain part of the same synchronized list and appear on every signed-in device.

- Genre, studio, network, and Smart Tag Pins open a touch-native browse grid.
- Timestamp Pins remain visible with their saved time.
  If several moments belong to one movie or episode, iOS collapses them into one card.
- Pin rows keep their normal poster cards.
  Select a timestamp Pin to open the moment chooser, where saved moments use wide frames—including titles with only one saved moment.
- Multiple moments swipe with the same direct-touch, glide, and snap interaction as the episode gallery, while the selected frame supplies the sheet's blurred backdrop.
  From there you can **Play from [time]**, open the item, or remove only the selected moment.
- Removing a timestamp from its card menu removes that displayed moment; if more moments remain, the collapsed card advances to the next one.

## Sync and Ordering

With [Backup & Restore](/settings/backup) enabled, Pins sync with the rest of the profile’s settings.
A Pin added or removed on one device is applied to the other devices signed into the same server account.

Timestamp positions sync, but each captured frame image stays on the device that created it.
When you open the Pin on iPhone or iPad, Jellyfin preview tiles rebuild and cache the matching frame if its local image is missing.
A neutral placeholder remains in the chooser when the connected backend cannot provide preview tiles.

## Pins in Widgets

Pins inside Neptune are available without Neptune Pro.
[Pin Widgets](/ios/widgets#pin-widgets-neptune-pro) are a separate Pro feature that lets a conventional Home Screen or Lock Screen widget target one of those Pins.
Movie and episode Pin widgets can also be configured to **Play**.

The widget stores its own selection.
Editing or removing the underlying Pin updates any widget that refers to it.

## Native Pins vs. Compass Shortcuts

| Native Pins | Compass Shortcuts |
|-------------|-------------------|
| Bookmark library media, people, and browse contexts | Launch Pages, saved searches, libraries, media details, or playback |
| Appear in Home, Movies, Shows, Music, and Library | Appear in the iPhone Compass palette and Compass Live Activity |
| Created where an item or person appears | Edited under **Settings > User Preferences > Compass** |
| May be selected by a conventional Pin widget | Never automatically replace a widget’s Page, Section, or native Pin choice |

See [Library Pins](/library/shortcuts) for the complete cross-platform guide.
