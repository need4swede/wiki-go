---
order: 10
---

# Neptune Indexers

Neptune clients build a local database of your library that powers instant search, technical filtering, and content categorization. This is what allows search results to appear in under 50ms and lets you filter content by resolution, container format, subtitle type, and more. By default, each client builds this index independently on-device.

The Indexers plugin moves that responsibility from the client to the server. The server indexes your entire library and pushes the results to every connected Neptune client, so no device has to build its own. It also enriches music video libraries with credits, artist info, and artwork.



## What It Does

| Without Indexers | With Indexers |
|------------------|---------------|
| Each client indexes independently | Server indexes once, clients pull the result |
| New devices run a full sync on first launch | New devices import the index in seconds |
| Index speed limited by client hardware | Thousands of items indexed per second on server |
| New media indexed on next client launch | New media indexed automatically on the server |
| Search covers Jellyfin metadata only | Search index includes full cast and crew credits |



## Available Indexes

**Library Index.** Powers the Library tab's technical filters (resolution, codec, container, HDR format, subtitle language) and browse views. The server pre-computes filter facets so clients can render the filter sidebar without scanning their local database.

**Search Index.** Pre-builds the search database that Local Index Search queries against. Includes titles, genre synonyms, people, studios, and plot text. The server also fetches full cast and crew credits from TMDB, so you can search by actors, directors, and writers that Jellyfin's own metadata doesn't include. No API key needed.

**Music Index.** Enriches music video libraries and their artists. See below.

Indexes rebuild automatically when your library changes. If nothing changed, the rebuild is skipped so clients never re-download identical data.



## Music Video Libraries

If your server has music video libraries, the plugin fills in the metadata that Jellyfin normally leaves blank. Everything is written to the server's own database, so the results show up in every client, not just Neptune.

| Feature | What you get |
|---------|--------------|
| **Credits** | Full crew, cast, and featured artists for each music video, in credit order |
| **Artist info** | Biographies, genres, and artist photos |
| **Backdrops** | HD artist backgrounds applied to artists and their music videos |
| **Albums** | Empty album tags filled in automatically (existing tags are never overwritten) |
| **Album art** | Cover images for albums |

All data sources are built in and need no accounts or API keys. Remote images fetched by the plugin are labeled with their source in Jellyfin's image picker, so you can tell where each option came from.

**After installing:** run **Build Music Index** once (Dashboard > Scheduled Tasks > Neptune) to backfill your existing items. New items are enriched automatically as they're added. Re-runs are fast because results are cached.



## Configuration

Find the plugin at **Dashboard > Plugins > Neptune Indexers**. The page shows status cards for each index (last built, item count, size, build time) and offers:

| Setting | Description |
|---------|-------------|
| **Rebuild Library Index / Rebuild Search Index** | Force a rebuild on demand |
| **Auto-rebuild indexes when the library changes** | On by default |
| **Debounce window** | How long to wait after library changes before rebuilding |
| **Excluded libraries** | Leave specific libraries out of the indexes |
| **Music metadata toggles** | Turn individual enrichment features (credits, artist info, albums, album art) on or off |
| **Wipe Indexer Data** | Clear all built indexes |



## How It Works

1. The plugin scans your Jellyfin library on the server
2. Indexes are built and stored server-side
3. Neptune clients pull the pre-built index on sign-in
4. When new media is added, the server updates the index automatically
5. Clients receive incremental updates on their next session
