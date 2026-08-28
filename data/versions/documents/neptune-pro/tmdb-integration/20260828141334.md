---
order: 30
---

# TMDB Integration

Neptune Pro enriches the metadata supplied by your backend with connected TMDB data.
It fills gaps and connects titles, people, studios, networks, artwork, and release information across the app instead of limiting the improvement to one detail page.

## What It Adds

| Area | Pro Enrichment |
|------|----------------|
| **Title pages** | Logos, richer artwork, trailers, expanded cast and crew, and additional context |
| **People** | More complete filmographies, career credits, photos, and accurate “From Your Library” intersections |
| **Browse** | Resolves studio and network pages against TMDB identities while retaining backend-native matches |
| **Home and Spotlight** | Home-release dates and artwork used by New Releases and hero presentation |
| **Upcoming content** | Season and air-date context for shows in your library |
| **Search and indexing** | Additional credit data can improve person and crew discovery where available |

Enrichment is additive.
Neptune keeps the title, watch state, library membership, and playback identity anchored to your connected backend.

## Prefer Your Server's Metadata

If you maintain custom NFO files or simply prefer the metadata chosen by your server, turn off **TMDB Metadata** in **Settings → Metadata**.
This Pro setting is on by default.

With the setting off, Neptune does not layer TMDB presentation data over your server's metadata.
Title logos, expanded cast and crew, person-filmography additions, release details, and TMDB search-index enrichment are suppressed.
Your saved preference and cached enrichment are retained, so both return if you turn the setting back on.

Trailers, future and missing episode information, Episode Finder, and studio or network navigation continue working.
These features use TMDB operationally but do not replace the metadata supplied by your server.
