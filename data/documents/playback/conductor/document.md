---
order: 40
---

# Conductor

Conductor picks the starting audio track, subtitle track, and version every time you press Play, so you spend less time correcting tracks at the start of a movie or episode.

Set it up in **Settings > User Preferences > Conductor**. A short onboarding walks you through the choices the first time.



## Modes

| Mode | Behavior |
|------|----------|
| **Manual** | Uses your fixed language, subtitle, anime, and quality rules. With Neptune Pro, Language Rules can also react to audio changes during playback |
| **Auto** | Adds learning from your playback choices. Requires Neptune Pro |

In Auto mode, a track or version change that you keep watching becomes a learning signal. Conductor remembers an exact choice for that file, recognizes preferences across a series, and builds broader preferences for new items. A one-off override still wins immediately; Auto simply uses it to make a better starting choice next time.

If Pro is no longer active, Conductor returns to Manual behavior without deleting the learning profile.

### Conductor Pro

Auto mode resolves playback through three levels: an exact memory for the current file, a learned fingerprint for the series, then your fixed Conductor rules as the dependable fallback. Meaningful track and version changes can update that memory after you keep watching; accidental taps do not become permanent global rules.

This lets Conductor retain exceptions without flattening your taste into one preference. One anime can stay subbed while another uses its dub, a specific file can remember commentary, and new episodes can inherit a reliable language or subtitle pattern from the series.

See [Conductor Pro](/neptune-pro/conductor-pro) for the complete learning model, examples, profile controls, and Free comparison.



## Languages

Add the languages you understand under **Languages**, and order them by priority if you add several. Conductor uses this list to judge every track decision that follows.



## Foreign Content

**Foreign Audio** decides what happens when a title's original language isn't one of yours:

| Option | Behavior |
|--------|----------|
| **Automatic** | Balances original audio and dubs based on your languages |
| **Original** | Always the original language track |
| **Dubbed** | A dub in your language when one exists |

**Automatic Subtitles** turns subtitles on in your language when the audio is foreign, and enables forced subtitles for foreign dialogue in content you watch natively. **Prefer SDH Subtitles** picks a hearing-accessible track when available.



## Language Rules

Language Rules let you choose a subtitle language based on the audio language that is active. For example, a **Japanese audio → English subtitles** rule selects English subtitles whenever Conductor starts playback with Japanese audio.

Open **Settings > User Preferences > Conductor > Language Rules** to add or remove rules. Each side can match either:

- **Any Variation**, which includes every regional or script variation of that language.
- **An exact variation**, such as Latin American Spanish, Brazilian Portuguese, or Traditional Chinese.

Rules are explicit instructions rather than learned preferences:

| When the rule is evaluated | Free | Neptune Pro |
|----------------------------|------|-------------|
| **Playback starts** | Yes, in Manual or Auto | Yes, in Manual or Auto |
| **You switch audio tracks during playback** | No | Yes, in Manual or Auto |

With Neptune Pro, Conductor applies the matching rule automatically after you switch audio tracks. This does not require Auto mode and does not create a learned preference. If the requested subtitle language or exact variation is unavailable during a live switch, Neptune keeps the current subtitle selection unchanged.

Audio is resolved before subtitles at playback start. That means Anime Mode can determine whether a Language Rule matches. With Anime Mode set to **Dubbed**, an available English dub is selected first, so a Japanese → English rule does not activate. If Japanese audio is selected instead—or you switch to it during playback—the rule can select English subtitles.



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

The version picker marks Conductor's recommendation with a sparkle badge. Turn on **Automatic** in Quality Preferences to let Conductor select the recommended version outright. In Manual mode that recommendation follows your fixed rules; Auto mode can refine it from what you actually watch.



## Conductor Data

In Auto mode, **View Profile Data** shows what Conductor has learned: how many series and files it has tracked, its accuracy, and your audio and subtitle profiles. You can **Run Setup Again** to redo onboarding, or **Clear Learning Data** to wipe the memory and start fresh.

Your in-player choices always win. Conductor sets the starting point; the [Playback Menu](/playback/playback-menu) overrides it any time.
