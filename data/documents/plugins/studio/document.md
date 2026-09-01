---
order: 40
---

# Neptune Studio

Neptune Studio is a Jellyfin plugin for configuring Neptune's Apple TV Top Shelf artwork.
It stores designs and rendered assets on the server.

## Top Shelf Customization

Studio supports two Apple TV Top Shelf surfaces:

| Surface | Neptune Style | Output |
|---------|---------------|--------|
| **Banners** | Inset | Wide banner artwork with a focused safe area |
| **Cinematic** | Carousel | Full-screen 16:9 artwork |

The plugin includes starter designs for both surfaces.
Administrators can create, rename, duplicate, preview, set defaults, and delete designs without editing configuration files.

## Configure a Design

After installation, open **Jellyfin Dashboard > Plugins > Neptune Studio**.

Each design can control:

- **Background source:** automatic, backdrop, or primary artwork
- **Image fitting:** focal crop, blurred fit, solid fit, or gradient fit
- **Framing:** horizontal and vertical focal points, brightness, and blur
- **Scrim:** none, solid, or a multi-stop linear gradient with a custom angle
- **Logo:** visibility, corner position, maximum width, opacity, and shadow
- **Episode and movie text:** position, width, alignment, size, weight, color, shadow, and background plate
- **Safe area:** protected edges for tvOS focus and cropping behavior

Search for a movie, series, or episode from the editor to render a live preview.
Previewing does not save or replace the final cached artwork; changes become active only after **Save**.

## Defaults and Client Choice

Studio stores separate defaults for Banners and Cinematic artwork.
Neptune clients can choose:

- Standard Neptune artwork
- The server's current default for that surface
- A specific enabled Studio design

Choosing **Server default** lets an administrator change the presentation centrally without asking every client to select a new design.

## Rendering and Cache

The render cache defaults to 512 MB and can be set to 128 MB, 512 MB, 1 GB, 2 GB, or 4 GB.
The dashboard shows its current size and render count and provides a **Clear render cache** action.
