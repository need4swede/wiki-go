---
order: 50
---

# Deep Learning

Language model configuration for Neptune's AI features. None of this is required; Neptune works fully without it. With a model configured, you unlock:

- [AI Search](/search/prompt-search): conceptual queries in the search bar
- [Episode Finder](/browsing/item-details/tv-shows): find an episode by describing it
- [Insights](/browsing/item-details): trivia, context, and watch suggestions on detail pages



## AI Search

The master toggle. When on, Neptune automatically uses AI to understand complex or conceptual searches when local results look weak. When off, the sparkle features stay out of your way entirely.



## Providers

| Provider | Type | Setup |
|----------|------|-------|
| **Neptune AI** | Hosted | Built in, nothing to configure |
| **Ollama** | Local | Point at your own machine (e.g. `http://localhost:11434`) |
| **Claude** | Cloud | API key |
| **OpenAI** | Cloud | API key |
| **Gemini** | Cloud | API key |
| **OpenRouter** | Cloud | One API key, many models |
| **GLM** | Cloud | API key |

Each provider row takes a server URL where relevant, an API key, and a model, with a **Test Connection** button to verify before saving.



## Model Priority

With several providers enabled, **Set Model Priority** controls the fallback order. If your primary provider is down or times out, the next one takes over automatically.



## Privacy

AI requests contain only the query and minimal context, and they only happen when an AI feature actually runs. Local providers like Ollama keep everything on your network. See the privacy notes on [AI Search](/search/prompt-search).
