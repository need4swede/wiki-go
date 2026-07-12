---
order: 30
---

# AI Search

When a query needs actual understanding ("farm boy learns magic and fights his dad"), Neptune hands it to a language model. AI Search is built into the same search bar as everything else: no mode to switch, no separate screen.

The easiest provider is [Neptune AI](/neptune-ai), the zero-setup hosted service included with Neptune Pro. You can also use a supported bring-your-own provider.



## How It Works

1. You type a query
2. The instant layers (local index, semantic tags) return whatever they can
3. If the results look weak and the query looks conceptual, Neptune sends it to your language model
4. A "Searching with AI" pill appears while it thinks
5. AI matches merge into your results, marked with a sparkle badge and a "Found by AI" reason pill

You can also trigger it directly: when a search comes up empty, an **Ask AI** chip appears under the results.



## Example Queries

| Query | Finds |
|-------|-------|
| "farm boy learns magic fights dad" | Star Wars |
| "movie where they shrink the scientists" | Fantastic Voyage, Innerspace |
| "cooking rat movie" | Ratatouille |
| "detective can't remember anything" | Memento |

For finding a specific episode of a show, use [Episode Finder](/neptune-ai/episode-finder) on the show's page instead.



## Setup

AI Search needs a language model. Configure one in **Settings > Deep Learning**:

1. Turn on **AI Search**
2. Add a provider and select a model
3. **Test Connection**, then set it as primary

| Provider | Type | Notes |
|----------|------|-------|
| **Neptune AI** | Hosted | Built in with Neptune Pro; no keys to manage |
| **Ollama** | Local | Runs on your own hardware, fully private |
| **Gemini** | Cloud | Bring your own API key |
| **OpenRouter** | Cloud | One key, many models |

Claude, OpenAI, and GLM appear in the provider roadmap but are not active providers yet.

Add several providers and use **Set Model Priority** to control the fallback order. If your primary is unreachable, the next one takes over. The same providers power [Episode Finder](/neptune-ai/episode-finder), [Title Insights](/neptune-ai/title-insights), [Person Insights](/neptune-ai/person-insights), and other AI features.



## Speed and Fallback

AI queries take a few seconds, depending on the provider and model. If the model times out or fails, you still get the instant results; AI Search only ever adds.



## Limitations

| Limitation | Why |
|------------|-----|
| Home videos and niche content | The model can only reason about titles it knows |
| Very new releases | May post-date the model's knowledge |
| Non-media queries | It searches your library, it isn't a chatbot |



## Privacy

Only the query text and basic result context are sent to the provider, and only when AI Search actually runs. Nothing is uploaded during normal instant searches. With a local provider like Ollama, nothing leaves your network at all.
