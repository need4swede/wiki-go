# Search

Neptune's search feature helps you find content quickly using instant local search and natural language queries.

---

## Overview

The Search tab provides:

- **Instant search**: Results appear as you type
- **Natural language**: Search by genre, actor, director, or composer
- **Library + Jellyseerr**: Find content in your library and discover new titles
- **Smart categorization**: Results grouped by Movies, TV Shows, Episodes, and Collections

---

## Using Search

### Basic Search

1. Navigate to the Search tab (magnifying glass icon)
2. Focus on the search field
3. Enter your search query
4. Results appear instantly as you type

### Search Query Examples

| Query | Finds |
|-------|-------|
| `spider-man` | All Spider-Man movies and shows |
| `sci-fi` | Science fiction content |
| `tom hanks` | Movies starring Tom Hanks |
| `spielberg` | Films directed by Steven Spielberg |
| `john williams` | Content with John Williams scores |
| `marvel` | Marvel Studios productions |

---

## Search Results

Results are organized into categories:

### Movies

All movies matching your search query. Shows:
- Poster image
- Title and year
- Rating (if available)

### TV Shows

All series matching your query. Shows:
- Poster image
- Series title
- Number of seasons

### Episodes

Individual episodes matching your search. Shows:
- Episode thumbnail
- Episode title
- Season and episode number
- Parent series name

Selecting an episode navigates to its series with that episode highlighted.

### Collections

Box sets and collections matching your query. Shows:
- Collection poster
- Collection name
- Number of items

### Jellyseerr Results

When Jellyseerr is connected, search also shows requestable content not yet in your library:
- Displayed separately at the bottom
- Includes movies and TV shows from TMDb
- Shows availability/request status

---

## Local Search Index

Neptune builds a local search index for instant results. This index includes:

- **Titles**: Movie and TV show names
- **Genres**: Action, Comedy, Sci-Fi, etc.
- **People**: Actors, directors, writers
- **Composers**: Film score composers (via TMDb enrichment)
- **Studios**: Production companies
- **Overviews**: Plot descriptions

### Index Benefits

- **Instant results**: No server round-trip required
- **Typo tolerance**: Partial matches and prefix search
- **Natural language**: Search by any metadata field

### Managing the Index

The search index syncs automatically:

| Trigger | Sync Type |
|---------|-----------|
| First launch | Full sync (builds complete index) |
| App launch | Incremental sync (new content only) |
| New content detected | Automatic update |
| Manual resync | Full rebuild |

To manually resync: **Settings** > **Search** > **Resync Index**

---

## Search Settings

Configure search behavior in **Settings** > **Search**:

### Local Search Index

- **Enable Local Index**: Toggle instant local search on/off
- **Resync Index**: Rebuild the search index from scratch

### Prompt Search (Experimental)

When an LLM is configured, you can enable natural language prompt search:

- Understands complex queries like "movies from the 90s with car chases"
- Processes query using AI before searching
- Shows "Thinking..." while processing

---

## Tips

- **Be specific**: "Sci-fi movies" works better than just "movies"
- **Use names**: Searching for actor or director names is very effective
- **Check Jellyseerr**: If you can't find something, it might not be in your library yet
- **Collections matter**: Search for "James Bond" to find the Bond collection
- **Episode search**: Search for episode titles to jump directly to specific episodes
