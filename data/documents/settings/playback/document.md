---
order: 10
---

# Playback Settings

Configure video playback behavior, controls, audio preferences, and subtitle defaults. Settings are organized into tabs: Player, Controls, Autoplay, Audio, and Advanced.



## Player

### Engine

Choose which video engine Neptune uses:

| Engine | Description |
|--------|-------------|
| **Trident** | Neptune's custom engine for direct playback of all formats (recommended) |
| **AVPlayer** | Apple's native player - the server transcodes incompatible formats |

See [Trident Player](/playback/trident-player) for technical details on what Trident supports.

### Match Content Frame Rate

When enabled, Neptune adjusts your TV's display refresh rate to match the video frame rate for judder-free playback.

| Content | Display Refresh |
|---------|-----------------|
| Movies (23.976/24fps) | 24Hz |
| PAL content (25fps) | 25Hz |
| NTSC video (29.97/30fps) | 30Hz |
| Sports/gaming (50/60fps) | 50/60Hz |

**Recommended:** Also enable the tvOS system setting at **Settings > Video and Audio > Match Content > Match Frame Rate** for best results.

Your TV may briefly go black (1-2 seconds) when switching modes. This is normal.



## Controls

Customize how the on-screen playback controls behave.

| Setting | Description |
|---------|-------------|
| **Show Controls on Pause** | Automatically show the control bar when you pause |
| **Controls Auto-Hide** | How long controls stay visible before fading out (3, 5, or 10 seconds) |
| **Hide Title** | Hide the movie or episode title from the control bar |
| **Buffer Indicator** | Show buffered progress on the timeline |
| **Chapter Markers** | Show chapter positions on the seek bar |
| **Trickplay Thumbnails** | Show preview thumbnails while seeking (requires Trickplay data on server) |
| **Resume on Seek** | Automatically resume playback when you seek while paused |

### Seek Mode Activation

Controls how you enter seek mode on the progress bar:

| Mode | Behavior |
|------|----------|
| **Locked** | Press the touch surface to enter seek mode first |
| **Limited** | D-pad skips instantly, touch surface requires a press to enter seek |
| **Unlocked** | Both D-pad and touch surface work immediately for seeking |

### Menu Button Behavior

Controls what the Menu button does during playback:

| Mode | Behavior |
|------|----------|
| **Always Exit** | Menu button always exits the player |
| **Dismiss First** | First press hides the controls, second press exits |



## Autoplay

Control automatic playback behavior between episodes and collection items.

| Setting | Description |
|---------|-------------|
| **Autoplay Next Episode** | Automatically play the next episode when the current one ends |
| **Autoplay Collections** | Automatically play the next movie in a collection (e.g., franchise series) |
| **Countdown Duration** | How long the countdown shows before auto-playing (10, 20, or 30 seconds) |

During the countdown, you can cancel autoplay or skip ahead immediately.



## Audio Preferences

### Selection Mode

Control how Neptune picks the default audio track:

| Mode | Behavior |
|------|----------|
| **Default Track** | Use the media's primary audio as marked by the server |
| **Prefer Language** | Automatically select your preferred language |
| **Last Used** | Remember and match the last audio language you selected |

### Quality Preference

When multiple tracks exist in your preferred language, Neptune picks the best quality based on your preference:

| Preference | Prioritizes |
|------------|-------------|
| **Lossless + Atmos** | Lossless audio with immersive sound (e.g., TrueHD Atmos) |
| **Lossless** | Lossless audio quality (TrueHD, DTS-HD MA, FLAC) |
| **Atmos/DTS:X** | Immersive spatial audio regardless of lossless |
| **Standard** | No special preference |

If your preferred language isn't available, Neptune falls back to the best quality track in any language.

### Anime Mode

Special handling for anime content:

| Mode | Behavior |
|------|----------|
| **Off** | No special handling |
| **Subbed** | Auto-selects Japanese audio + your preferred subtitle language |
| **Dubbed** | Auto-selects your preferred language audio |

Neptune detects anime content automatically based on genre and metadata.

### EAC3-Atmos Passthrough

When enabled, Dolby Atmos audio in E-AC3 format is passed through directly to your AV receiver or soundbar for full spatial audio. When disabled, Atmos tracks are decoded to standard surround.

Requires an Atmos-capable receiver or soundbar connected via eARC/HDMI.



## Subtitle Preferences

### On Playback Start

Control subtitle behavior when a video begins:

| Option | Behavior |
|--------|----------|
| **Off** | No subtitles at start |
| **Forced Only** | Only show forced/signs subtitles |
| **Last Used** | Match the last subtitle language you selected |
| **Jellyfin Default** | Use the default track set by your Jellyfin server |
| **Container Default** | Use the track marked as default in the file |
| **Smart** | Automatically select based on audio language and your preferences |

### Preferred Language

The language used by Smart mode and Anime subbed mode for automatic subtitle selection.

### Language Overrides

Create rules that map audio languages to subtitle languages. For example:

- When audio is **Japanese** - show **English** subtitles
- When audio is **French** - show **Swedish** subtitles

These overrides take priority over the general preferred language setting.



## Developer Tools

Advanced troubleshooting options:

| Setting | Description |
|---------|-------------|
| Debug Logging | Enable verbose logs by category |
| Technical Info | Show debug overlays during playback |
