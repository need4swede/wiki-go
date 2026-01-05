# Semantic Search

Pre-computed thematic analysis for instant conceptual search.



## Overview

Neptune ships with semantic tags for over 4,000 movies and TV shows. These tags enable instant conceptual searches like "time travel" or "feel-good" without any LLM setup required.

For items not in the bundled dataset, Neptune can generate tags using a configured language model.



## How It Works

### Bundled Tags (No LLM Required)

```
Your Library Item
    ↓
Match against bundled dataset (4,000+ items)
    ↓
Tags loaded instantly
    ↓
Ready for semantic search
```

### LLM-Generated Tags (Optional)

```
Items not in bundled dataset
    ↓
Language model analyzes item metadata
    ↓
Extracts: themes, tone, setting
    ↓
Stores tags locally
```

### Every Search

```
Your Query: "time travel"
    ↓
Instant FTS5 match on semantic tags
    ↓
Results in < 50ms
```



## Bundled Dataset

Neptune includes pre-analyzed semantic tags for:

- **4,000+ movies and TV shows**
- Popular and classic content
- Matched by TMDb ID for accuracy
- No LLM or network required

Most libraries will have significant coverage from the bundled dataset alone.



## What's in a Semantic Tag

Each item has tags describing:

| Category | Examples |
|----------|----------|
| **Themes** | time travel, heist, revenge, coming of age |
| **Tone** | dark, feel-good, suspenseful, comedic |
| **Setting** | dystopian, space, historical, suburban |
| **Keywords** | robots, magic, sports, courtroom |



## Example Searches

Semantic tags enable queries that keyword search can't handle:

| Query | Matches |
|-------|---------|
| "time travel" | Back to the Future, Interstellar, Tenet |
| "feel-good" | Forrest Gump, The Pursuit of Happyness |
| "dystopian" | The Hunger Games, Blade Runner, 1984 |
| "heist" | Ocean's Eleven, The Italian Job, Heat |
| "coming of age" | Stand By Me, The Breakfast Club |
| "fish out of water" | Crocodile Dundee, Elf, Thor |
| "slow burn" | There Will Be Blood, The Witch |
| "claustrophobic" | Buried, 127 Hours, Panic Room |



## Benefits vs Prompt Search

| Aspect | Prompt Search | Semantic Search |
|--------|---------------|-----------------|
| **Speed** | 1-3 seconds | < 50ms |
| **LLM Required** | Every search | Only for uncovered items |
| **Offline** | No | Yes |
| **API Costs** | Per search | Only for new analysis |
| **Coverage** | Model's knowledge | Your actual library |

Use both together for best results:
- Semantic Search: instant matches from tags
- Prompt Search: complex queries, filters, and fallback



## Tag Generation (Optional)

For items not covered by the bundled dataset, Neptune can generate semantic tags using a language model.

### Requirements

- Language model provider configured (Ollama, LM Studio, OpenAI, or Anthropic)
- Enable **Semantic Search** in Settings

### How It Works

1. Items without bundled tags are queued
2. Processed in batches of 5 (reduces API costs by 80%)
3. Progress shown in Settings
4. Runs in background without blocking the app

### When to Use

- You have niche or obscure content
- Your library includes recent releases not yet in bundled dataset
- You want complete coverage



## Enabling Semantic Search

### Without LLM (Bundled Tags Only)

Semantic Search works immediately using bundled tags. No configuration needed.

### With LLM Tag Generation

1. Go to **Settings** > **Search**
2. Configure a language model provider
3. Enable **Semantic Search**
4. Uncovered items will be analyzed in background

### Analysis Progress

Settings shows:
- Items covered by bundled dataset
- Items needing LLM analysis
- Analysis progress percentage



## Storage

Semantic tags are stored in:
- Local SQLite FTS5 index
- Same database as regular search index
- Survives app updates
- Bundled tags loaded on first sync



## Integration with Search

Semantic Search works alongside other search modes:

1. **You search**: "dystopian"
2. **Local Index**: Checks titles, overview, genres (instant)
3. **Semantic tags**: Checks bundled + generated tags (instant)
4. **Results merged**: Deduplicated, ranked by relevance
5. **Prompt Search** (if enabled): Enhances with LLM

All sources combine for comprehensive results.



## Per-Item Refresh

On any movie or TV show detail page:
- Access the **More** menu
- Select **Refresh Semantic Tags**
- Item re-analyzed with current language model

Useful when:
- Tags seem incorrect
- You've changed LLM providers
- Item metadata was updated
- Bundled tags are outdated



## Privacy

- Bundled tags included in app - no network needed
- LLM-generated tags stored locally on device
- Analysis queries sent to configured provider only
- No tags or results uploaded anywhere
