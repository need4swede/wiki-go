# Local Index Search

Instant, offline-capable search powered by a local database.



## Overview

Neptune builds a complete search index on your device, enabling sub-50ms searches without any network calls. Unlike native Jellyfin search which queries the server API, Local Index Search works entirely offline and returns results as you type.



## Local Index vs Server API

| Aspect | Local Index Search | Native Jellyfin API |
|--------|-------------------|---------------------|
| **Speed** | < 50ms | 200-500ms+ |
| **Network** | Not required | Required |
| **Offline** | Yes | No |
| **Typo tolerance** | Prefix matching | Exact match |
| **Genre synonyms** | "sci-fi" → "Science Fiction" | Exact only |
| **Name variants** | "spiderman" → "Spider-Man" | Limited |
| **Composer search** | Enriched via TMDb | Often missing |



## How It Works

### Initial Sync

On first launch, Neptune syncs your entire library:

```
Jellyfin Server
    ↓
Fetch all items with metadata
    ↓
Extract searchable text
    ↓
Build SQLite FTS5 index
    ↓
Store on device
```

### Every Search

```
Your Query
    ↓
Local FTS5 database (on device)
    ↓
Results in < 50ms
```

No network calls. No server load. Instant results.



## What Gets Indexed

Every item in your library is indexed with:

| Field | Example |
|-------|---------|
| **Title** | "Spider-Man: No Way Home" |
| **Title variants** | "Spider Man No Way Home", "spidernowayHome" |
| **Original title** | Foreign language originals |
| **Genres** | "Action", "Adventure", "Sci-Fi" |
| **Genre synonyms** | "scary" → Horror, "funny" → Comedy |
| **Cast** | "Tom Holland", "tomholland" |
| **Directors** | "Jon Watts", "jonwatts" |
| **Writers** | Screenwriters and story credits |
| **Composers** | Enriched from TMDb via Jellyseerr |
| **Studios** | "Marvel Studios", "Sony Pictures" |
| **Plot** | Full overview/description text |
| **Tags** | User and server tags |



## Smart Matching

### Prefix Matching

Type partial words and still find results:

| You Type | Matches |
|----------|---------|
| "spi" | Spider-Man, Spies in Disguise |
| "bat" | Batman, The Batman, Batman Begins |
| "john" | John Wick, Johnny English |

### Name Normalization

Person names match regardless of spacing:

| You Type | Matches |
|----------|---------|
| "johnwilliams" | John Williams |
| "christophernolan" | Christopher Nolan |
| "tomhanks" | Tom Hanks |

### Genre Synonyms

Common variations are automatically expanded:

| You Type | Also Matches |
|----------|--------------|
| sci-fi | Science Fiction |
| scifi | Science Fiction |
| scary | Horror |
| funny | Comedy |
| doc | Documentary |
| animated | Animation |
| romcom | Romance, Comedy |

### Accent Folding

Diacritics are normalized for easier typing:

| You Type | Matches |
|----------|---------|
| cafe | café |
| naive | naïve |
| resume | résumé |



## FTS5 Technology

Neptune uses SQLite FTS5 (Full-Text Search 5), the same technology that powers search in:

- Apple Mail
- Apple Notes
- Firefox
- Many high-performance search applications

### Why FTS5?

| Feature | Benefit |
|---------|---------|
| **BM25 ranking** | Most relevant results first |
| **Prefix queries** | Partial word matching |
| **Unicode tokenizer** | Multi-language support |
| **Phrase matching** | "john williams" as phrase |
| **Boolean queries** | AND/OR logic |



## Composer Enrichment

Jellyfin often lacks composer data because TMDb returns producers before composers, and the data gets truncated.

When Jellyseerr is connected, Neptune enriches the index:

1. During sync, items are matched to TMDb
2. Full credits fetched including composers
3. Composer names added to search index
4. "John Williams" now finds all his scores



## Sync Behavior

### Automatic Sync

| Event | Action |
|-------|--------|
| First launch | Full library sync |
| App launch | Incremental sync (new/changed items) |
| New content detected | Background update |

### Manual Resync

Force a complete rebuild in **Settings** > **Search** > **Resync Index**.

Use when:
- Search results seem incomplete
- Library metadata was bulk-updated
- Switching between servers

### Sync Progress

During sync, a banner shows progress. Search works during sync but results may be incomplete until finished.



## Storage

The search index is stored locally on your Apple TV:

| Library Size | Approximate Index Size |
|--------------|----------------------|
| 500 items | ~5 MB |
| 2,000 items | ~20 MB |
| 10,000 items | ~100 MB |

The index persists across app updates and restarts.



## Enabling/Disabling

Local Index Search is enabled by default. To disable:

1. Go to **Settings** > **Search**
2. Toggle **Enable Local Index** off
3. Search will fall back to Jellyfin API

Disabling is useful if:
- You prefer server-side search
- Storage space is limited
- You want to test API search behavior



## Troubleshooting

### "No results" for items you know exist

- Wait for initial sync to complete
- Try **Resync Index** in Settings
- Check if the item type is searchable (movies, shows, episodes)

### Search feels slow

- Verify Local Index is enabled
- If disabled, search uses network API calls
- Large libraries may need more sync time initially

### Missing composer results

- Connect Jellyseerr for TMDb enrichment
- Resync after connecting Jellyseerr
- Some items may lack TMDb matches
