---
order: 60
---

# Cinematic Loading Screens

Neptune's loading screen keeps the Home screen covered while its first content
is prepared. Every user gets the Neptune logo, progress indicator, and optional
loading hints. Neptune Pro can place artwork from the active profile's library
behind that sequence instead of using a plain black background.

The loading screen does not advance Home's Spotlight carousel while it is
visible, so Home still opens on its first Spotlight item.

## Artwork by Device

| Device and orientation | Artwork |
|------------------------|---------|
| Apple TV | Backdrop |
| iPhone or iPad in portrait | Poster |
| iPhone or iPad in landscape | Backdrop |

Rotating an iPhone or iPad during loading switches between the poster and
backdrop belonging to the same library item.

## Artwork Sources

Choose what Neptune keeps ready for a future launch:

| Source | Selection |
|--------|-----------|
| **Spotlight** | The first item in the current Spotlight queue |
| **Continue** | One of up to four leading candidates merged from Continue Watching and Next Up |
| **Favorites** | A random item from the active profile's favorites |
| **Recently Added** | One of the four newest available items |
| **Random** | A random item from the active profile's library |

When the selected source has no usable artwork, Neptune falls back to the first
Spotlight item when one is available. Otherwise the normal black loading screen
remains in place.

## Configuration

Open **Settings > Home > Loading Screen**.

| Setting | Availability | Behavior |
|---------|--------------|----------|
| **Display hints** | Free | Shows or hides the rotating launch messages |
| **Use library artwork** | Neptune Pro | Shows cached posters or backdrops behind the loading sequence |
| **Artwork source** | Neptune Pro | Chooses Spotlight, Continue, Favorites, Recently Added, or Random |

These are profile preferences and can also be kept different on one device
with a [Device Override](/settings/device-overrides).

## Launch Artwork Cache

Cinematic Loading Screens use a small, account-scoped launch reserve that is
separate from the ordinary image cache. They continue to work when image
caching is disabled in **Settings > Images**.

Neptune prepares up to four eligible items for each artwork shape while the app
is already running. A later cold launch reads only this local reserve; it does
not delay startup to fetch a new image. The reserve is refreshed as the chosen
source changes and removes entries that are no longer eligible, such as an item
removed from Favorites or pushed out of Recently Added. Provider image URLs
and their credentials are not stored in the reserve.

Turning off **Use library artwork** or losing Neptune Pro access removes the
launch reserve and returns to the black loading screen. The preference and
selected source remain saved, and Neptune prepares current artwork again after
Pro access is restored.
