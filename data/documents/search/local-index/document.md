---
order: 10
---

# Local Index Search

Instant, offline search powered by a database on your device.

## Overview

Neptune keeps a full-text index of your library on the device, so searches return as you type without a round trip to the server.
It's always on and needs no setup.

| Aspect | Local Index | Backend Search |
|--------|-------------|---------------------|
| **Speed** | Instant | Noticeable delay |
| **Offline** | Yes | No |
| **Typo tolerance** | "spidermn" still finds Spider-Man | Exact match |
| **Genre synonyms** | "sci-fi" finds Science Fiction | Exact only |
| **People search** | Cast and crew, with credits data | Often incomplete |

Backend Search behavior can vary by server capability, while Neptune keeps the same Search page and interaction design.
The richer on-device index is used only when the active backend can synchronize the required catalog safely; otherwise, Neptune uses server search.

## What's Indexed

| Category | Examples |
|----------|----------|
| **Titles** | Original titles, sort names, and variants ("spiderman", "spider man") |
| **Genres** | With synonyms: "scary" finds Horror, "romcom" finds romantic comedies |
| **People** | Cast, directors, writers |
| **Studios and networks** | Production companies and broadcasters |
| **Plot** | Full descriptions and overviews |
| **Ratings and years** | "PG-13", "2024" |

Movies, shows, episodes, music videos, collections, and home videos are all covered.

## Smart Matching

- **Prefix matching:** "spi" starts finding Spider-Man
- **Fuzzy matching:** small typos don't break results
- **Accent folding:** "cafe" matches "café"
- **Name normalization:** "johnwilliams" finds John Williams

## Keeping the Index Fresh

The index updates automatically as your library changes.
With the [Neptune Indexers](/plugins/indexers) plugin installed, the server pre-builds the index and clients import it in seconds, complete with full TMDB cast and crew credits.
A new device gets working search on first sign-in instead of running a long initial sync.

If search results ever look out of step with your library, **Resync Library** on the main Settings page rebuilds everything from the server.
