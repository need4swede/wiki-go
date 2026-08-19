---
order: 50
---

# Deep Learning

Language model configuration for Neptune's AI features.
None of this is required; Neptune works fully without it.
[Neptune AI](/neptune-ai) is the built-in, zero-setup hosted provider included with Neptune Pro; supported bring-your-own providers keep the same features available without Pro.

With a model configured, you unlock:

- [AI Search](/search/prompt-search): conceptual queries in the search bar
- [Episode Finder](/neptune-ai/episode-finder): find an episode by describing it
- [Title Insights](/neptune-ai/title-insights): context, themes, trivia, and watch suggestions
- [Person Insights](/neptune-ai/person-insights): career patterns, collaborators, and library-aware recommendations

## AI Search

The master toggle.
When on, Neptune automatically uses AI to understand complex or conceptual searches when local results look weak.
When off, the sparkle features stay out of your way entirely.

## Providers

| Provider | Type | Setup |
|----------|------|-------|
| **Neptune AI** | Hosted | Neptune Pro; built in, nothing to configure |
| **Ollama** | Local | Point at your own machine (e.g. `http://localhost:11434`) |
| **Gemini** | Cloud | API key |
| **OpenRouter** | Cloud | One API key, many models |

Each provider row takes a server URL where relevant, an API key, and a model, with a **Test Connection** button to verify before saving.

Claude, OpenAI, and GLM are visible as planned providers but are not active yet.

## Model Priority

With several providers enabled, **Set Model Priority** controls the fallback order.
If your primary provider is down or times out, the next one takes over automatically.

## Privacy

AI requests contain only the prompt and minimal context, and they only happen when an AI feature actually runs.
Local providers like Ollama keep everything on your network.
See [Neptune AI privacy](/neptune-ai#privacy) and the privacy notes on [AI Search](/search/prompt-search).
