---
order: 70
---

# Metadata

Neptune keeps a local metadata cache so the app opens to a fully drawn home screen instead of spinners.
With Neptune Pro, it also enriches your library with connected TMDB data your backend does not have.

## Metadata Cache

| Setting | Description |
|---------|-------------|
| **Use Cache** | Keep home screen and library data cached locally for instant loading (default on) |
| **Download Mode** | How aggressively Neptune pre-fetches: **Off**, **Minimal**, **Smart** (default), or **Full** |

The screen shows what's currently cached per section.
**Clear All Metadata** wipes the cache; it rebuilds as you browse.

Smart mode is the right choice for almost everyone: it pre-fetches what you're likely to open without downloading the entire library's metadata.

## TMDB Metadata

[Neptune Pro's TMDB Integration](/neptune-pro/tmdb-integration) fills gaps in your backend's metadata with:

- Title logos on detail pages and Seerr items
- Cast and crew with photos, beyond what the connected backend provides
- Full filmographies on [people pages](/browsing/item-details/people)
- Upcoming seasons and air dates for shows you have
- Home release dates that power [New Releases](/browsing/home-screen/new-releases) and the Spotlight

Neptune Pro users can turn **TMDB Metadata** off in **Settings → Metadata**.
The setting is on by default.

When it is off, Neptune leaves the metadata supplied by your server unchanged.
This is useful when you maintain carefully curated NFO files or prefer your server's cast, crew, artwork, and release details without Neptune layering connected metadata over them.
Neptune stops adding TMDB title logos, cast and crew, person-filmography entries, release details, and search-index enrichment.

This setting controls presentation enrichment, not every feature that uses TMDB.
Trailers, future and missing episode information, Episode Finder, and studio or network navigation remain available.
Cached enrichment is retained but stays dormant, so turning the setting back on restores it without throwing away downloaded data.

There is no personal API key to configure.
Without Pro, backend-native metadata and Neptune's free local catalogs continue normally.
The preference participates in Settings Sync and can be included in Device Overrides, Settings Profiles, and managed settings.
Use **Clear Cached Metadata** if you also want to remove enrichment already stored on the device.
