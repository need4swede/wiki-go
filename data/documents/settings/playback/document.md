---
order: 20
---

# Playback Settings

Configure video playback behavior, controls, and audio. Settings are organized into tabs: **Player**, **Controls**, **Autoplay**, **Audio**, and **Advanced**.



## Player

### Engine

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

Seeking options: **Scrub Sensitivity** (1 to 10), **Skip Interval** (5, 10, or 15 seconds), **Resume on Seek**, and **Seek Mode** (Locked, Limited, or Unlocked) with an on-screen demo of each mode.



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
| **Legacy Sync** | Alternate sync pipeline for troubleshooting |

Track selection behavior (which language and track type get picked) lives in [Conductor](/playback/conductor).



## Advanced

| Setting | Description |
|---------|-------------|
| **Prevent Screensaver on Pause** | Keep the screensaver away while paused (default off) |
| **Full Video Caching** | Cache the entire video to disk during playback. Enables pause-to-buffer (default off) |
| **De-Interlacing** | Auto, On, or Off. Removes combing artifacts from interlaced content like DVDs and broadcasts (default Auto) |
