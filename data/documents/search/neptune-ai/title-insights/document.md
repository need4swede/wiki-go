---
order: 20
---

# Title Insights

Title Insights turns a movie or show's ordinary description into a compact, thoughtful companion: what makes it interesting, what it explores, and why it may be worth your time.

It works with any configured language-model provider. [Neptune AI](/search/neptune-ai) provides the zero-setup hosted experience with Neptune Pro.



## Opening Insights

Open a movie or show detail page and select its description card. Neptune opens the full, untruncated overview first. When a language model is available, Insights appear underneath it.

The overview remains useful even without AI, so selecting the card never leads to an empty screen.



## Insight Sections

| Section | What It Adds |
|---------|--------------|
| **Context** | A concise critical or thematic take on what makes the title notable |
| **Trivia** | Production or background facts the model is confident about |
| **Themes** | The ideas, tone, or genre conventions the title explores |
| **Similar Titles** | A short list of confident comparisons |
| **Why Watch** | The audience or mood the title may suit |

Sections only appear when they contain useful information. An obscure title may have Context and Themes without speculative trivia or comparisons.



## What Neptune Uses

The request is grounded with relevant metadata from the detail page:

- Title, media type, and release year
- Genres and rating
- Directors or creators
- Principal cast
- Studios
- The server-provided overview

Neptune asks for a structured, concise response rather than an open-ended review. The goal is to complement your server's metadata, not replace it or repeat the synopsis.



## Accuracy

Title Insights follows an accuracy-over-completeness rule. Context and Themes can be derived from the supplied metadata, but trivia and similar-title recommendations are omitted when the model is not confident.

Very new, obscure, or home-video items may therefore show fewer sections. That is intentional: a shorter grounded answer is better than invented production history.



## Availability and Privacy

Configure language models under **Settings > Deep Learning**. Neptune AI is built in with Neptune Pro; Ollama, Gemini, and OpenRouter can power the same feature with your own configuration.

An Insights request sends only the selected title's relevant metadata to the active provider. Browsing the detail page by itself does not send an AI request; generation begins when you open Insights.



## If Insights Do Not Appear

- Confirm that language models are enabled.
- Check that at least one active provider passes **Test Connection**.
- For Neptune AI, confirm that Neptune Pro is active.
- Try again if the provider timed out.
- Some uncertain sections may be intentionally omitted even when generation succeeds.
