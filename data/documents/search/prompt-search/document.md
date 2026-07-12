---
order: 30
---

# AI Search

When a query needs actual understanding ("farm boy learns magic and fights his dad"), Neptune hands it to a language model. AI Search is built into the same search bar as everything else: no mode to switch, no separate screen.



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

For finding a specific episode of a show, use [Episode Finder](/browsing/item-details/tv-shows) on the show's page instead.



## Setup

AI Search needs a language model. Configure one in **Settings > Deep Learning**:

1. Turn on **AI Search**
2. Add a provider and select a model
3. **Test Connection**, then set it as primary

| Provider | Type | Notes |
|----------|------|-------|
| **Neptune AI** | Hosted | Built in, no keys to manage |
| **Ollama** | Local | Runs on your own hardware, fully private |
| **Claude** | Cloud | Bring your own API key |
| **OpenAI** | Cloud | Bring your own API key |
| **Gemini** | Cloud | Bring your own API key |
| **OpenRouter** | Cloud | One key, many models |
| **GLM** | Cloud | Bring your own API key |

Add several providers and use **Set Model Priority** to control the fallback order. If your primary is unreachable, the next one takes over. The same providers power [Episode Finder](/browsing/item-details/tv-shows), [Insights](/browsing/item-details), and other AI features.



## Speed and Fallback

AI queries take a few seconds, depending on the provider and model. If the model times out or fails, you still get the instant results; AI Search only ever adds.



## Limitations

| Limitation | Why |
|------------|-----|
| Home videos and niche content | The model can only reason about titles it knows |
| Very new releases | May post-date the model's knowledge |
| Non-media queries | It searches your library, it isn't a chatbot |



## Privacy

Only the query text and basic library context are sent to the provider, and only when AI Search actually runs. Nothing is uploaded during normal instant searches. With a local provider like Ollama, nothing leaves your network at all.
