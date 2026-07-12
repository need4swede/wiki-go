---
order: 30
---

# Conductor

Conductor picks the right audio track, subtitle track, and version every time you press Play, so you're not correcting tracks at the start of every movie.

Set it up in **Settings > User Preferences > Conductor**. A short onboarding walks you through the choices the first time.



## Modes

| Mode | Behavior |
|------|----------|
| **Manual** | Conductor follows the preferences you set below, the same way every time |
| **Auto** | Conductor also learns from what you change during playback and adapts |

In Auto mode, when you switch tracks mid-movie and keep watching, Conductor remembers. It builds preferences per show and per file: fix the subtitle track twice in a series and the rest of the season follows suit. Quality and version choices feed the same memory.



## Languages

Add the languages you understand under **Languages**, and order them by priority if you add several. Conductor uses this list to judge every track decision that follows.



## Foreign Content

**Foreign Audio** decides what happens when a title's original language isn't one of yours:

| Option | Behavior |
|--------|----------|
| **Automatic** | Balances original audio and dubs based on your languages |
| **Original** | Always the original language track |
| **Dubbed** | A dub in your language when one exists |

**Automatic Subtitles** turns subtitles on in your language when the audio is foreign, and enables forced subtitles for foreign dialogue in content you watch natively. **Prefer SDH Subtitles** picks the hearing-accessible track when available.



## Anime

Anime gets its own rule, because plenty of people who watch everything else dubbed want anime subbed:

| Option | Behavior |
|--------|----------|
| **Auto** | Follows your Foreign Audio rule |
| **Subbed** | Japanese audio with subtitles |
| **Dubbed** | Dubbed audio when available |

Neptune detects anime automatically.



## Quality and Versions

When an item has several versions (a 4K Dolby Vision remux and a 1080p encode, say), Conductor scores them against your quality preferences:

- **Preferred Resolution**: 4K or 1080p
- **Preferred Dynamic Range**: Dolby Vision, HDR, or SDR
- **Preferred Audio Quality**: Lossless + Atmos, Lossless, Atmos/DTS:X, or Standard
- **Prioritize Audio Over Video** when the two pull in different directions

The version picker marks Conductor's recommendation with a sparkle badge. Turn on **Automatic** in Quality Preferences and Conductor selects the version outright, based on what you actually watch.



## Conductor Data

In Auto mode, **View Profile Data** shows what Conductor has learned: how many series and files it's tracked, its accuracy, and your audio and subtitle profiles. You can **Run Setup Again** to redo onboarding, or **Clear Learning Data** to wipe the memory and start fresh.

Your in-player choices always win. Conductor sets the starting point; the [Playback Menu](/playback/playback-menu) overrides it any time.
