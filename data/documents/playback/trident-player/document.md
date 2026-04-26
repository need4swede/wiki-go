---
order: 30
---

# Trident Player

Neptune's powerful video player delivers cinema-quality playback on your Apple TV.



## Play Anything

Trident plays virtually any video file directly from your Jellyfin server - no transcoding required. While other apps force your server to convert files on-the-fly, Neptune plays them natively, preserving every detail of your carefully curated library.

### Direct Play Everything

| Category | Supported |
|----------|-----------|
| **Containers** | MKV, MP4, AVI, MOV, WebM, M2TS, and more |
| **Video** | H.264, H.265/HEVC, VP9, AV1 with hardware acceleration |
| **Audio** | TrueHD, DTS-HD MA, FLAC, DD+, DTS, AAC, and more |
| **Resolution** | Up to 4K at 60fps |
| **Bitrate** | Up to 200 Mbps |

No more waiting for transcodes. No more quality loss. Just press play.

### Server Transcoding

When direct play isn't practical — for example, streaming remotely over a slower connection — Neptune also supports server-side transcoding. Your Jellyfin server re-encodes the video on-the-fly to fit within your chosen bitrate limit.

Configure this in **Settings > Playback > Playback Mode**. You can set a maximum streaming bitrate from 1 Mbps to 120 Mbps, letting you balance quality against available bandwidth.

Even in transcode mode, Neptune keeps audio and video perfectly synced and handles the stream smoothly.

[See all supported formats →](/playback/trident-player/codecs)



## Stunning HDR

Experience your HDR content the way it was meant to be seen. Neptune automatically detects and displays all major HDR formats with proper color management.

| Format | Description |
|--------|-------------|
| **HDR10** | Industry standard HDR with static metadata |
| **HDR10+** | Dynamic scene-by-scene optimization |
| **HLG** | Broadcast HDR |
| **Dolby Vision** | Premium dynamic HDR (Profiles 5, 7, 8, 9) |

Neptune automatically switches your TV to the correct HDR mode when playback begins. If your TV doesn't support a format, Neptune gracefully falls back to the next best option.

[Learn more about HDR →](/playback/trident-player/hdr)



## Lossless Audio

Your premium audio tracks deserve premium playback. Neptune decodes lossless audio formats that require transcoding on other apps.

| Format | Quality |
|--------|---------|
| **Dolby TrueHD** | Lossless Blu-ray audio, up to 7.1 |
| **DTS-HD Master Audio** | Lossless DTS, up to 7.1 |
| **FLAC** | Lossless compressed |
| **Dolby Digital Plus** | High-quality surround, up to 7.1 |
| **DTS** | Standard surround |

Multi-channel audio is automatically configured for your sound system - from stereo TVs to 7.1 receivers.

### Dolby Atmos

- **E-AC3 Atmos:** Full passthrough to Atmos-capable receivers
- **TrueHD Atmos:** Decoded to lossless 7.1 (height channels require proprietary decoder)

[Learn more about Audio →](/playback/trident-player/audio)



## Perfect Sync

Nothing ruins a movie like audio that doesn't match the lips. Neptune keeps audio and video perfectly aligned throughout playback.

- **Automatic calibration** at playback start
- **Continuous correction** for long movie sessions
- **Instant recovery** after seeking
- **Smooth buffering** without losing sync

You'll never notice - and that's the point.

[Learn more about Playback Quality →](/playback/trident-player/sync)



## Rich Subtitles

From simple text to beautifully styled anime subtitles, Neptune renders them all natively - no server burn-in required.

| Type | Formats |
|------|---------|
| **Text** | SRT, VTT, ASS/SSA with full styling, TTML, SubViewer, SAMI |
| **Image** | PGS (Blu-ray), VobSub (DVD), DVB (broadcast) |

ASS subtitles display with their intended styling - fonts, colors, positioning, and effects. No more plain white text when the subtitle author intended something more.

[Learn more about Subtitles →](/playback/trident-player/subtitles)



## Instant Track Switching

Switch audio or subtitle tracks instantly during playback. No rebuffering, no waiting - just immediate switching.

- Change languages on the fly
- Switch between commentary and original audio
- Toggle subtitles instantly



## Video Caching

Enable video caching in Settings to cache content to disk as it streams. Pausing playback continues downloading in the background ("pause to buffer"), so you can pre-load content before a long flight or unreliable network stretch. Seeking backward to cached portions plays instantly.



## Frame-Accurate Seeking

Scrub to exactly where you want. Neptune seeks to the precise frame you're looking for, not just the nearest keyframe.



## Frame Rate Matching

Neptune matches the display refresh rate to your content:

| Content | Display |
|---------|---------|
| Movies (24fps) | 24Hz |
| PAL content | 25Hz |
| Standard video | 30Hz |
| Sports/60fps | 60Hz |

This eliminates judder for smooth, cinema-like playback.



## In This Section

| Page | Description |
|------|-------------|
| [Codecs](/playback/trident-player/codecs) | Supported video and audio formats |
| [HDR](/playback/trident-player/hdr) | HDR and Dolby Vision support |
| [Audio](/playback/trident-player/audio) | Lossless audio and surround sound |
| [Subtitles](/playback/trident-player/subtitles) | Text and image subtitle support |
| [Playback Quality](/playback/trident-player/sync) | Smooth, synchronized playback |
| [Troubleshooting](/playback/trident-player/troubleshooting) | Common issues and solutions |
