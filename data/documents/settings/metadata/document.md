---
order: 70
---

# Metadata

Neptune keeps a local metadata cache so the app opens to a fully drawn home screen instead of spinners. With Neptune Pro, it also enriches your library with connected TMDB data your backend does not have.



## Metadata Cache

| Setting | Description |
|---------|-------------|
| **Use Cache** | Keep home screen and library data cached locally for instant loading (default on) |
| **Download Mode** | How aggressively Neptune pre-fetches: **Off**, **Minimal**, **Smart** (default), or **Full** |

The screen shows what's currently cached per section. **Clear All Metadata** wipes the cache; it rebuilds as you browse.

Smart mode is the right choice for almost everyone: it pre-fetches what you're likely to open without downloading the entire library's metadata.



## TMDB Data

[Neptune Pro's TMDB Integration](/neptune-pro/tmdb-integration) fills gaps in your backend's metadata with:

- Title logos on detail pages and Seerr items
- Cast and crew with photos, beyond what the connected backend provides
- Full filmographies on [people pages](/browsing/item-details/people)
- Upcoming seasons and air dates for shows you have
- Home release dates that power [New Releases](/browsing/home-screen/new-releases) and the Spotlight

There is no personal API key to configure. Without Pro, backend-native metadata and Neptune's free local catalogs continue normally. Cached TMDB data can be cleared here separately if something looks stale; new lookups re-fetch on demand while Pro is active.
