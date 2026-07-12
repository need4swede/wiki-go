---
order: 50
---

# Neptune AI

Neptune AI is Neptune's built-in, hosted intelligence layer. It is a product-wide capability rather than a Search feature: today it helps understand natural-language queries, recover half-remembered episodes, and add useful context to titles and people; over time, the same layer can support intelligent experiences elsewhere in Neptune.

Neptune AI is included with [Neptune Pro](/neptune-pro/neptune-ai). There are no API keys, model names, endpoints, or local servers to manage.

## In This Section

| Area | Features |
|------|----------|
| **Finding something** | [AI Search](/search/prompt-search) and [Episode Finder](/neptune-ai/episode-finder) |
| **Understanding a title** | [Title Insights](/neptune-ai/title-insights) |
| **Exploring a career** | [Person Insights](/neptune-ai/person-insights) |

## What Neptune AI Powers Today

| Feature | What It Does |
|---------|--------------|
| [AI Search](/search/prompt-search) | Understands plot fragments, concepts, and recommendation-style queries |
| [Episode Finder](/neptune-ai/episode-finder) | Describe an episode and Neptune AI finds it in your library |
| [Title Insights](/neptune-ai/title-insights) | Adds context, themes, trustworthy trivia, similar titles, and a “Why Watch” suggestion |
| [Person Insights](/neptune-ai/person-insights) | Builds a concise career story, fun facts, signature roles, collaborators, and a library-aware recommendation |

## AI Search

There is no Neptune AI search box. Use the normal Search tab and type naturally. Neptune shows instant local results first, then asks Neptune AI only when the result set is weak, empty, or clearly asks for a recommendation.

A **Searching with AI** indicator appears without taking the existing grid away. New matches are marked with a sparkle and **Found by AI**. See [AI Search](/search/prompt-search) for examples and the full handoff behavior.



## Access and Setup

1. Open **Settings > Deep Learning**.
2. Select **Neptune AI**. Free accounts see the Neptune Pro upgrade screen.
3. Ensure language models are enabled.
4. Leave Neptune AI first in **Set Model Priority**, or place another configured provider ahead of it.
5. Turn on **AI Search** if you want automatic search escalation.

Episode Finder and Insights use the active provider even if the AI Search toggle is off; that toggle controls the unified Search bar specifically.



## Neptune AI vs. Bring Your Own Model

Bring-your-own models are supported because choice matters, but they are general-purpose models connected through Neptune's provider interface. Neptune AI is different: it is the first-party intelligence system developed alongside Neptune itself, trained and tuned around Neptune's media workflows, structured feature contracts, and interaction patterns.

| | **Neptune AI** | **Bring Your Own Model** |
|---|----------------|--------------------------|
| **Relationship to Neptune** | First-party and developed as part of the Neptune experience | A compatible external model connected to Neptune |
| **Specialization** | Trained and tuned for Neptune's media language, result structures, and feature behavior | General-purpose behavior guided by Neptune's prompts at request time |
| **Feature integration** | Designed end to end with AI Search, Episode Finder, Insights, verification, confidence labels, and native result cards | Can power the same current surfaces when the model follows Neptune's expected response format |
| **Shared intelligence** | Can use Neptune's hosted query cache and other first-party intelligence assets alongside the live model | Uses the context Neptune sends for that request and the app's on-device response cache |
| **Consistency** | Neptune controls and evaluates the complete path, so features can target a known behavior | Results vary with the model, version, quantization, context limits, and provider behavior you choose |
| **New Neptune AI capabilities** | Can gain purpose-built server-side functions as Neptune AI expands beyond Search | Limited to capabilities Neptune can express through the general provider interface |
| **Reliability** | Managed provider routing can move across upstream capacity without changing the experience | Depends on the endpoints and fallback providers you configure |
| **Setup and upkeep** | Included with Neptune Pro and ready immediately; Neptune maintains the models and service | You maintain the endpoint, model, hardware, API key, quota, and compatibility |
| **Privacy and control** | Sends only the active request and its minimal context to Neptune AI | Ollama can keep inference on your network; third-party cloud providers receive requests directly |

That first-party relationship is the important difference. Neptune AI is not simply a hosted shortcut to a model Neptune also lets you configure yourself. The intelligence service and the app can evolve together: a new Neptune AI feature can introduce its own grounding, validation, cache, or server-side capability rather than being constrained to a generic completion request.

Bring-your-own providers remain useful when local-only inference, a favorite model, or direct control matters most. They are also valid fallbacks. With **Set Model Priority**, Neptune AI can lead while Ollama or another provider remains available behind it—or the order can be reversed when you prefer local inference first.



## Privacy

Neptune sends a request only when an AI-powered action runs. The request contains the prompt and the minimum relevant context—for example, a search query and candidate titles, an item's metadata, or one series' episode inventory.

Normal browsing, playback, local search, semantic matching, and library indexing do not upload your library to Neptune AI. If you prefer all inference to stay on your network, configure Ollama instead.



## Expectations

Language models can misunderstand vague memories or lack reliable knowledge of very new and obscure titles. Neptune reduces that risk by searching locally first, grounding requests with your own metadata, verifying Episode Finder answers, showing match provenance, and keeping uncertain fields empty. AI assists the experience; it never replaces your server or the local index as the source of truth.
