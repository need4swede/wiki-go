---
order: 10
---

# Video Codecs & Containers

The video formats and containers Trident plays directly without backend transcoding.
Audio formats live in [Audio](/playback/trident-player/audio), HDR behavior in [HDR & Dolby Vision](/playback/trident-player/hdr), and subtitle formats in [Subtitles](/playback/trident-player/subtitles).

## Video

### Hardware-Accelerated on Apple TV

| Codec | Max Resolution | Notes |
|-------|----------------|-------|
| **H.265/HEVC** | 4K | Standard for 4K and the primary path for [HDR and Dolby Vision](/playback/trident-player/hdr) |
| **H.264/AVC** | 4K | Universal SDR compatibility |

### Software-Decoded

| Codec | Practical Notes |
|-------|-----------------|
| **VP9** | Software-decoded on tvOS because VideoToolbox does not expose VP9. Supports files up to 4K, subject to device performance |
| **AV1** | No current Apple TV exposes hardware AV1. 1080p is the reliable target; 4K/24 at moderate bitrates can be marginal and 4K/60 is not expected to play smoothly |
| **MPEG-4** | Older DivX/Xvid content |
| **MPEG-2** | DVDs and broadcast recordings |
| **VC-1 / WMV3** | Older Blu-ray and Windows Media content |

On iPhone and iPad, AV1 hardware acceleration is used when the device exposes it.
Unsupported codecs are handed to a compatible backend for transcoding.

Interlaced content (common in DVDs and broadcast recordings) is de-interlaced automatically.
Control this with the De-interlacing option in the [Playback Menu](/playback/playback-menu).

## Video Limits

| Feature | Support |
|---------|---------|
| **Resolution** | Up to 4K |
| **Frame rate** | Up to 60 fps |
| **Bitrate** | Up to 200 Mbps |

Hardware-decoded HEVC and H.264 are the reliable path at the upper limits.
Practical VP9 and AV1 performance depends on the device, resolution, frame rate, and bitrate.

## Containers

| Format | Extensions | Common Use |
|--------|------------|------------|
| **Matroska** | .mkv | Blu-ray rips, anime |
| **MP4** | .mp4, .m4v | Streaming downloads, iTunes |
| **WebM** | .webm | Web downloads |
| **AVI** | .avi | Older video files |
| **QuickTime** | .mov | Apple ecosystem |
| **Blu-ray** | .m2ts, .mts | Raw Blu-ray rips |
| **MPEG** | .mpg, .ts | Broadcast recordings, DVDs |
| **FLV** | .flv | Flash video |

Stream-link files (`.strm`) are supported as well.

## Unsupported Formats

For a video codec or container Trident cannot play directly, a compatible backend can transcode the file to a supported format.
The transcode happens in the background and depends on the connected backend's capabilities.
