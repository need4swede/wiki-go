# Prompt Search

LLM-powered search for complex and conceptual queries.

---

## Overview

Prompt Search uses language models to understand queries that go beyond simple keyword matching. Describe what you want to watch in plain English and Neptune finds matching content in your library.

---

## When to Use Prompt Search

| Query Type | Example | Regular Search | Prompt Search |
|------------|---------|----------------|---------------|
| **Conceptual** | "movie about a killer shark" | Partial match | Identifies "Jaws" |
| **Descriptive** | "farm boy learns magic fights dad" | No match | Identifies "Star Wars" |
| **Decade** | "90s action movies" | No filter | Year filter applied |
| **Role-specific** | "movies composed by John Williams" | All mentions | Composer-specific |
| **Watch history** | "movies I haven't seen" | No filter | Filters watched |
| **Runtime** | "short episodes under 30 min" | No filter | Runtime filter |

---

## Using Prompt Search

1. Navigate to the **Search** tab
2. Select the **sparkle button** next to the search field
3. Enter your descriptive query
4. "Thinking..." appears while the language model processes
5. Results display when ready

---

## How It Works

```
Your Query
    ↓
Language Model
    ↓
Identifies titles + Extracts filters
    ↓
Searches local index
    ↓
Applies structured filters
    ↓
Results
```

1. **Query sent to LLM**: Your natural language query goes to the configured language model
2. **Model identifies titles**: The language model uses its knowledge to recognize what you're describing
3. **Filters extracted**: Year ranges, runtime limits, watch status, and roles are parsed
4. **Library searched**: Neptune searches for identified titles in your local index
5. **Results filtered**: Structured filters narrow down the matches

---

## Example Queries

### Conceptual Searches

The language model recognizes well-known movies and shows from descriptions:

| Query | LLM Identifies |
|-------|---------------|
| "boy wizard at magic school" | Harry Potter |
| "superhero who can't die" | Deadpool, Logan |
| "robot from the future" | Terminator |
| "ship sinks on maiden voyage" | Titanic |
| "dinosaur theme park" | Jurassic Park |
| "dream within a dream" | Inception |

### Structured Filters

The language model extracts filters from your query:

| Query | Filters Applied |
|-------|-----------------|
| "80s horror" | Year: 1980-1989, Genre: Horror |
| "recent sci-fi" | Year: last 2 years, Genre: Sci-Fi |
| "movies I haven't watched" | Excludes watched content |
| "episodes under 30 minutes" | Runtime < 30 min |
| "directed by Spielberg" | Director filter |
| "long movies over 3 hours" | Runtime > 180 min |

### Compound Queries

Combine multiple criteria:

| Query | Result |
|-------|--------|
| "90s action movies I haven't seen" | Year + genre + watch filter |
| "short comedy episodes" | Runtime + genre + type filter |
| "recent horror directed by Ari Aster" | Year + genre + director |

---

## Caching

Prompt Search caches LLM responses to improve speed and reduce API costs:

| Data | Cache Duration |
|------|----------------|
| Query enhancements | 24 hours |
| Title identifications | 7 days |

Repeated or similar queries return instantly from cache.

---

## Requirements

Prompt Search requires a configured language model provider.

### Local Providers

| Provider | Description |
|----------|-------------|
| **Ollama** | Self-hosted, runs on your server |
| **LM Studio** | Desktop app with model management |

Benefits: Privacy, no API costs, works offline.

### Cloud Providers

| Provider | Description |
|----------|-------------|
| **OpenAI** | GPT models via API key |
| **Anthropic** | Claude models via API key |

Benefits: Higher quality, faster, no local hardware needed.

Configure in **Settings** > **Search** > **Deep Learning**.

---

## Fallback Behavior

When the language model is unavailable or times out:

1. Query falls back to regular FTS5 search
2. Best-effort keyword matching applied
3. No error shown—degraded gracefully

---

## Limitations

| Works Well | May Not Work |
|------------|--------------|
| Popular/classic films | Obscure indie content |
| Well-known TV series | Foreign films the model doesn't know |
| Mainstream content | Your home videos |
| Recent blockbusters | Very new releases |

For content the language model doesn't recognize, use [Semantic Search](/search/semantic-search) which includes bundled tags for 4,000+ items and can analyze additional content.

---

## Privacy

- **Local providers**: Queries never leave your network
- **Cloud providers**: Queries sent to provider's API
- **No library data sent**: Only your search query, not library contents
- **Results cached locally**: Responses stored on device only
