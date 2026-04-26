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

### Playback Mode

Choose how Neptune delivers video from your server:

| Mode | Description |
|------|-------------|
| **Direct Play** | Plays the file as-is from your server — no re-encoding, no quality loss (recommended) |
| **Transcode** | Your server re-encodes the video on-the-fly to fit a target bitrate |

**Direct Play** is best for most setups. Neptune's Trident engine supports virtually all formats natively, so there's no need for the server to convert anything.

**Transcode** is useful when your network can't handle the full file bitrate (e.g., remote access over the internet) or when you want to reduce bandwidth usage.

### Max Streaming Bitrate

When using Transcode mode, this controls the maximum bitrate the server targets:

| Option | Best For |
|--------|----------|
| **Auto** | Let the server decide based on the source file |
| **120 Mbps** | Near-original quality for most content |
| **80 Mbps** | High quality 4K |
| **60 Mbps** | Good quality 4K |
| **40 Mbps** | Standard 4K or high quality 1080p |
| **20 Mbps** | Good quality 1080p |
| **15 Mbps** | Standard 1080p |
| **10 Mbps** | Compressed 1080p |
| **8 Mbps** | 720p equivalent |
| **4 Mbps** | Low bandwidth |
| **2 Mbps** | Very low bandwidth |
| **1 Mbps** | Minimal bandwidth |

Lower bitrates use less network bandwidth but reduce video quality. This setting only applies in Transcode mode — Direct Play always streams the original file.

### Always Transcode

When enabled (in Transcode mode), the server will always re-encode content even if it could be played directly. This guarantees the bitrate limit is respected regardless of the source format.

When disabled, the server may still direct play files that are already below your bitrate limit and in a compatible format.



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
