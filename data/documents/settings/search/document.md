---
order: 30
---

# Search Settings

Configure search behavior and LLM-powered features.

---

## Local Search Index

Neptune maintains a local FTS5 index for fast, offline-capable search.

| Setting | Description |
|---------|-------------|
| **Enable Local Index** | Use local search instead of server API |
| **Resync Index** | Rebuild the entire search index |

### When to Resync

- Library metadata was updated outside Neptune
- Search results seem incomplete or incorrect
- After major library changes (bulk imports, deletions)

---

## Semantic Search

Conceptual search using pre-computed thematic tags.

| Setting | Description |
|---------|-------------|
| **Enable Semantic Search** | Search by themes, tone, and concepts |
| **Tag Generation** | Enable LLM analysis for uncovered items |

### Bundled Tags

Neptune ships with semantic tags for **4,000+ movies and TV shows**. These work immediately with no LLM configuration required.

### LLM Tag Generation

For items not in the bundled dataset, Neptune can generate tags using a language model:

1. Configure a language model provider
2. Enable tag generation in settings
3. Uncovered items analyzed in background
4. Progress shown in settings

### When to Enable LLM Generation

- You have niche or obscure content
- Your library includes very recent releases
- You want complete coverage beyond bundled dataset

---

## Deep Learning

Configure language model providers for Prompt Search and Semantic Search.

### Enable Language Models

Master toggle for all LLM features. When disabled:

- Prompt Search button hidden
- Semantic analysis paused
- Regular FTS5 search still works

### Prompt Search

When enabled, the sparkle button appears in Search for LLM-powered queries.

| Setting | Description |
|---------|-------------|
| **Enable Prompt Search** | Show LLM search option |

---

## Supported Providers

| Provider | Type | Best For |
|----------|------|----------|
| **Ollama** | Local | Privacy, no API costs |
| **LM Studio** | Local | Privacy, no API costs |
| **OpenAI** | Cloud | Quality, reliability |
| **Anthropic** | Cloud | Quality, reliability |

### Local Providers

Run language models on your own hardware:

- **Ollama**: Easy setup, many models available
- **LM Studio**: GUI-based, model management

Benefits: No API costs, data stays local, works offline.

### Cloud Providers

Use hosted language model services:

- **OpenAI**: GPT models via API key
- **Anthropic**: Claude models via API key

Benefits: Higher quality, no local hardware needed.

---

## Adding a Provider

1. Select **Add Provider**
2. Choose provider type
3. Enter configuration:
   - **Local**: Endpoint URL (e.g., `http://localhost:11434`)
   - **Cloud**: API key
4. Select model
5. **Test Connection** to verify
6. Save

---

## Provider Settings

| Setting | Description |
|---------|-------------|
| **Endpoint URL** | Server address for local providers |
| **API Key** | Authentication for cloud providers |
| **Model** | Which model to use |
| **Primary** | Set as default provider |

---

## Recommended Models

### For Ollama

| Model | Size | Notes |
|-------|------|-------|
| `llama3.2` | 3B | Fast, good balance |
| `mistral` | 7B | Higher quality |
| `qwen2.5` | 7B | Good multilingual |

### For OpenAI

| Model | Notes |
|-------|-------|
| `gpt-4o-mini` | Fast, cost-effective |
| `gpt-4o` | Highest quality |

---

## Troubleshooting

### "No results" with Prompt Search

- Check provider is connected (test connection)
- Verify model is responding
- Try simpler queries first
- Check if content exists in library

### Semantic Search not working

- Ensure analysis has completed (check progress)
- Language models must be enabled
- Provider must be configured and reachable

### Slow analysis

- Local models depend on hardware
- Cloud models are generally faster
- Analysis runs in background, won't block app
