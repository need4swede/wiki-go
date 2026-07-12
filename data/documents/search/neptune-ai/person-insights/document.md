---
order: 30
---

# Person Insights

Person Insights turns a filmography into a story. It looks across a performer's or filmmaker's career, recognizes recurring patterns, and can suggest what to watch next from titles already available to you.

It works with any configured language-model provider. [Neptune AI](/search/neptune-ai) provides the zero-setup hosted experience with Neptune Pro.



## Opening Insights

Open a person page and select the biography. Neptune opens the full biography and generates Insights underneath it when a language model is available.



## Insight Sections

| Section | What It Adds |
|---------|--------------|
| **Career** | A concise narrative of the person's career arc and pivotal work |
| **Fun Facts** | Short observations and facts drawn from their career |
| **Signature Roles** | The roles, character types, or genres they return to |
| **Frequent Collaborators** | Directors, actors, or creators they repeatedly work with |
| **What to Watch Next** | An unwatched title associated with them from your library |

The recommendation is library-aware rather than a generic filmography pick. If Neptune has no suitable unwatched title, that section can be omitted.



## What Neptune Uses

The active provider receives the context needed to understand the career:

- Name, biography, birthplace, and career span when available
- Known-for information
- Their movies and shows in your library
- Watched status for those library titles
- A limited set of other known credits when available

This lets Neptune connect the person's wider career to what you can actually watch.



## Useful Ways to Explore

- Open Insights after discovering someone in a cast list.
- Use **Frequent Collaborators** to notice creative partnerships across several titles.
- Use **Signature Roles** to understand why a performer's filmography feels consistent—or surprising.
- Let **What to Watch Next** surface an unwatched title you already own.



## Availability and Privacy

Configure language models under **Settings > Deep Learning**. Neptune AI is built in with Neptune Pro; Ollama, Gemini, and OpenRouter can power the same feature with your own configuration.

An Insights request sends the selected person's relevant biography and credit context to the active provider. It does not upload the rest of your library. Use Ollama if you want inference to remain on your network.



## If Insights Do Not Appear

- Confirm that language models are enabled.
- Check that at least one active provider passes **Test Connection**.
- For Neptune AI, confirm that Neptune Pro is active.
- A sparse biography or filmography can produce fewer useful sections.
- Try again if the active provider timed out.
