---
order: 20
---

# Playback Settings

Configure video playback behavior, controls, and audio. Apple TV organizes the
screen into **Player**, **Controls**, **Autoplay**, **Audio**, and **Advanced**
tabs. iPhone and iPad present their supported controls as sections and add
**Background & Picture in Picture**.



## Player

### Engine

Apple TV lets you choose the playback engine. iPhone and iPad use Trident for
all playback, so they do not show an engine picker.

| Engine | Description |
|--------|-------------|
| **Trident** | Neptune's custom player, designed for direct play (default) |
| **AVPlayer** | Apple's native player. The server transcodes incompatible formats |

See [Trident Player](/playback/trident-player) for what Trident supports.

### Playback Mode

| Mode | Description |
|------|-------------|
| **Direct Play** | Plays the file as-is from your server. No re-encoding, no quality loss (default) |
| **Transcode** | Your server re-encodes on-the-fly to fit a target bitrate |

Choosing Transcode reveals:

| Setting | Description |
|---------|-------------|
| **Target Bitrate** | 1 to 120 Mbps. The server keeps the stream within this cap |
| **Always Transcode** | Transcode even files that fit under the cap |

You can also change quality per-session from the [Playback Menu](/playback/playback-menu)'s Video tab.

### Orientation (iPhone & iPad)

The **Orientation** picker appears directly below **Video Zoom**:

| Setting | Description |
|---------|-------------|
| **Auto** | Opens playback in the current orientation and follows normal device rotation (default) |
| **Landscape** | Always opens playback 90 degrees clockwise from portrait |

The orientation button in the player switches the current session between
portrait and that clockwise landscape direction. It works even when system
Rotation Lock is enabled and does not change the saved setting. When playback
ends, Neptune returns to the orientation used before the player opened.



## Controls

| Setting | Description |
|---------|-------------|
| **Show Controls on Pause** | Surface controls whenever playback pauses (default on) |
| **Controls Auto-Hide** | 3, 5, or 10 seconds |
| **Hide Title in Controls** | Drop the title block for a cleaner look |
| **Action Buttons** | Reorder or hide the buttons in the player controls (see [Player Controls](/playback/player-controls)) |
| **Playback Menu** | Choose which tabs appear in the in-player menu, and their order |
| **Back / Menu Button** | Always Exit, or Dismiss First |

Timeline options: **Buffer Indicator**, **Chapter Markers**, and **Seek Thumbnails** (all on by default).

Seeking options: **Scrub Sensitivity** (1 to 10; default 7), **Skip Interval** (5, 10, or 15 seconds), **Resume on Seek**, and **Seek Mode** (Locked, Limited, or Unlocked) with an on-screen demo of each mode.



## Autoplay

| Setting | Description |
|---------|-------------|
| **Autoplay Next Episode** | Advance to the next episode automatically (default on) |
| **Autoplay Collections** | Advance through movie collections too (default off) |
| **Autoplay Across Seasons** | Keep going into the next season (default on) |
| **Autoplay Countdown** | **Auto** runs the countdown for the full length of the end credits; **Fixed** uses a set duration |
| **Autoplay Countdown Duration** | 10, 20, or 30 seconds |
| **Up Next Style** | Regular or Minimal (Fixed mode only; Auto always uses the minimal pill) |
| **Skip Intro / Credits** | Show a Skip button when your server provides segment data (default on) |
| **Auto Skip** | Skip intros and credits without pressing anything (default off) |



## Audio

| Setting | Description |
|---------|-------------|
| **EAC3-Atmos Passthrough** | Pass Dolby Atmos straight to your receiver instead of decoding. Requires an Atmos-capable receiver (default off) |
| **Audio Preset** | Default, Bass, or Voice |
| **Night Mode** | Off, On, or Auto with a start and end time (10:00 PM to 7:00 AM by default) |
| **A/V Sync Offset** | Up to half a second in either direction |

Track selection behavior (which language and track type get picked) lives in [Conductor](/playback/conductor).



## Background & Picture in Picture (iPhone & iPad)

These two settings are independent and on by default:

| Setting | Description |
|---------|-------------|
| **Picture in Picture** | Automatically continues video in a floating system window when you go Home or switch apps |
| **Background Playback** | Continues audio when Neptune is behind another app or the screen is locked |

Locking the screen does not start Picture in Picture; Background Playback
controls that path. With both settings off, playback pauses when Neptune
leaves the foreground.

Changes apply to the next playback session. See
[Picture in Picture & Background Playback](/ios/playback) for the complete
four-state behavior, Lock Screen and Control Center actions, subtitle and
transcode limits, and troubleshooting.



## Advanced

| Setting | Description |
|---------|-------------|
| **Prevent Screensaver on Pause** | Keep the screensaver away while paused (default off) |
| **Full Video Caching** | Add bounded disk-backed read-ahead during playback. Enables pause-to-buffer, but is not an offline download (default off) |
| **De-Interlacing** | Auto, On, or Off. Removes combing artifacts from interlaced content like DVDs and broadcasts (default Auto) |
