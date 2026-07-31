---
order: 40
---

# Search

## In This Section

| Page | Description |
|------|-------------|
| [Local Index Search](/search/local-index) | Instant, offline title and metadata search |
| [Semantic Search](/search/semantic-search) | Themes, moods, settings, concepts, and quotes |
| [AI Search](/search/prompt-search) | How natural-language searches join the same result grid |



## Search Smarter, Not Harder

Open the Search tab, or use [Compass](/browsing/navigation/compass) on Apple TV
or iPhone to start a search from anywhere. Type with the keyboard or use
dictation.

The Search page and result geometry stay the same for every backend. The
available search collaborators are capability-based: Jellyfin currently
supports Neptune's full local catalog synchronization, while the Emby beta
uses server search until its full local-index synchronization is connected.
Semantic and AI features that require that local catalog remain unavailable
for that Emby session rather than replacing the Search page.

| What you remember | Example | What Neptune uses |
|-------------------|---------|-------------------|
| A title or part of one | `dark kni` | Title prefix matching |
| A person | `Karl Urban` | Cast and crew index |
| A genre or studio | `A24 horror` | Indexed metadata |
| A typo | `intersteller` | Fuzzy correction |
| A theme or mood | `feel-good time travel` | Semantic catalog |
| A plot fragment | `farm boy learns magic and fights his dad` | AI Search when needed |
| Something outside your library | `new Korean thrillers` | Seerr results |

For a scene you remember from a particular series, use [Episode Finder](/neptune-ai/episode-finder) on that show's page.


## Results and Scope Tabs

Results appear in a poster grid with optional scope tabs:

| Scope | Contents |
|-------|----------|
| **Top Results** | One relevance-ranked view across your library and people, plus Seerr when enabled |
| **Movies** | Matching movies in your library |
| **Shows** | Matching series and episodes |
| **Music** | Matching music content |
| **Seerr** | Requestable movies and shows beyond your library |
| **People** | Actors, directors, writers, and other indexed credits |

Top Results is not a simple concatenation. Exact titles and names lead, strong whole-word matches outrank loose prefixes, and owned content receives a small advantage in close calls. If **Include Seerr Results in Top Results** is off, requestable titles remain available in the Seerr scope without mixing into the main grid.



## Why a Result Matched

Neptune will tell you why an item matched your search, for instances where the match isn't straightforward or obvious.

- **About time travel**
- **Set in space**
- **Matched in the plot**
- **Found by AI**

Straightforward title matches need no explanation. Results introduced by AI also carry a sparkle badge so the source is never hidden.



## Typo Correction and Dead Ends

Small typing mistakes are corrected against the vocabulary in your own library. A successful correction shows **Showing results for…** and avoids spending an AI request on a typo.

If nothing useful is found:

- **Did you mean…** reruns a likely correction.
- **Ask AI about…** forces a natural-language pass when a model is available.
- Seerr can still show requestable titles even when your library has no match.



## Before You Search

The empty Search screen shows recent searches as reusable chips. Neptune records a query only after you open one of its results, so abandoned typing does not clutter the list. History is profile-specific and can be cleared from the Search screen.


## Find a Setting

Settings has its own search, separate from media search:

- On iPhone and iPad, open **Settings** and pull down from the very top to
  reveal **Search Settings**.
- On Apple TV, select the active **Settings** tab again to open the Settings
  search keyboard.

You do not need to know Neptune's exact label. Every setting also carries
localized, invisible aliases for the words people are likely to remember. For
example, searching for `blur` finds **Hide Spoilers on Unstarted Episodes**,
while `lip sync` finds the audio-delay control. These aliases affect matching
only—they are not displayed, and they never reveal settings that are
unavailable for the current device, account, or server.



## Search Settings

Open **Settings > User Preferences > Appearance > Layouts > Search**:

| Setting | Description |
|---------|-------------|
| **Search Suggestions** | Show local-first suggestion chips while typing |
| **Filter Tabs** | Show or hide the scope tabs above results |
| **Include Seerr Results in Top Results** | Rank requestable titles alongside owned content |
| **Grid Keyboard Layout** | Compact the Apple TV results grid beside the alphabetical keyboard |
| **Auto-Focus Input** | Open with focus ready for search input |

The **AI Search** master switch and language-model providers live in **Settings > Deep Learning**. See [AI Search](/search/prompt-search) and the top-level [Neptune AI](/neptune-ai) section.


## Privacy

| Data | Where It Goes |
|------|---------------|
| Local library index | Stays on your device |
| Semantic catalog and matching | Stays on your device |
| Backend search | Goes only to your connected media server |
| Seerr search | Goes to your configured Seerr server |
| AI request | Goes to the selected provider only when the AI gate runs or you explicitly ask it |
