---
order: 15
---

# Quality Preferences

Configure how Neptune selects the best version of your content when multiple versions are available (e.g., a movie with both a 4K Dolby Vision copy and a 1080p SDR copy).



## Video Preferences

### Preferred Resolution

Choose your preferred video resolution:

| Option | Description |
|--------|-------------|
| **4K** | Prefer 2160p when available |
| **1080p** | Prefer 1080p - useful for slower networks or older TVs |

### Preferred Dynamic Range

Choose your preferred HDR format:

| Option | Description |
|--------|-------------|
| **Dolby Vision** | Prefer Dolby Vision for the best dynamic range |
| **HDR** | Prefer HDR10, HDR10+, or HLG |
| **SDR** | Prefer standard dynamic range |



## Audio Preferences

### Preferred Audio Quality

Choose your preferred audio quality when multiple tracks are available:

| Option | Description |
|--------|-------------|
| **Lossless + Atmos** | Prefer lossless audio with immersive spatial sound |
| **Lossless** | Prefer lossless audio (TrueHD, DTS-HD MA, FLAC) |
| **Atmos/DTS:X** | Prefer immersive audio regardless of lossless |
| **Standard** | No special preference |



## Priority

### Prioritize Audio Over Video

Controls the balance between audio and video quality when scoring versions:

- **On** - Audio quality is weighted more heavily. Neptune will prefer a 1080p version with TrueHD Atmos over a 4K version with standard stereo
- **Off** - Video quality is weighted more heavily. Neptune will prefer higher resolution and better HDR over audio quality



## Automatic Selection

### Auto-pick Versions

When enabled, Neptune automatically selects the version that best matches your preferences without showing a picker.

When disabled, you'll see a version picker before playback starts so you can manually choose which version to play.



## How Scoring Works

When multiple versions of the same content exist, Neptune scores each one based on your preferences. It considers resolution, HDR format, audio codec, and surround format, then applies your priority weighting to pick the winner.

The settings page shows a live example comparing different versions so you can see how your preferences affect the selection.
