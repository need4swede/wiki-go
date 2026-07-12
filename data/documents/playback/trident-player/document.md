---
order: 40
---

# Trident Player

Neptune's video player. Trident handles direct playback of most file formats so your server doesn't have to transcode.

Trident is the default engine. If you ever need Apple's native player instead, switch the **Engine** in **Settings > Playback** (the native player leans on server transcoding for formats it can't handle, like MKV, DTS, and TrueHD).



## Direct Play

Trident plays files straight from your Jellyfin server without conversion.

| Category | Supported |
|----------|-----------|
| **Containers** | MKV, MP4, AVI, MOV, WebM, M2TS, and more |
| **Video** | H.264, H.265/HEVC, VP9, AV1 with hardware acceleration |
| **Audio** | TrueHD, DTS-HD MA, FLAC, DD+, DTS, AAC, and more |
| **Resolution** | Up to 4K at 60fps |
| **Bitrate** | Up to 200 Mbps |

### Server Transcoding

When direct play isn't practical (for example, streaming remotely over a slower connection), the server can transcode instead. Your Jellyfin server re-encodes the video on-the-fly to fit within your chosen bitrate limit.

Configure this in **Settings > Playback > Playback Mode** with a target bitrate from 1 to 120 Mbps, or change quality mid-playback from the [Playback Menu](/playback/playback-menu). Quality changes restart the stream in place without losing your position.

[See all supported formats →](/playback/trident-player/codecs)



## HDR

Trident detects and displays the major HDR formats:

| Format | Description |
|--------|-------------|
| **HDR10** | Static HDR metadata |
| **HDR10+** | Dynamic per-scene metadata |
| **HLG** | Broadcast HDR |
| **Dolby Vision** | Profiles 5 and 8 natively, plus on-the-fly conversion for Blu-ray Profile 7 |

When playback starts, Neptune switches your TV to the matching HDR mode. If your TV doesn't support a format, it falls back to the next one it does.

[Learn more about HDR →](/playback/trident-player/hdr)



## Lossless Audio

Trident decodes lossless audio formats locally instead of relying on the server to transcode them.

| Format | Quality |
|--------|---------|
| **Dolby TrueHD** | Lossless Blu-ray audio, up to 7.1 |
| **DTS-HD Master Audio** | Lossless DTS, up to 7.1 |
| **FLAC** | Lossless compressed |
| **Dolby Digital Plus** | Surround, up to 7.1 |
| **DTS** | Standard surround |

Multi-channel audio is matched to your output, from stereo TVs to 7.1 receivers.

### Dolby Atmos

- **E-AC3 Atmos**: Passthrough to Atmos-capable receivers with **EAC3-Atmos Passthrough** enabled in **Settings > Playback > Audio**.
- **TrueHD Atmos**: Decoded to lossless 7.1. Height channels require a proprietary decoder that isn't available to third-party apps.

[Learn more about Audio →](/playback/trident-player/audio)



## Audio/Video Sync

Trident calibrates audio/video sync at playback start and corrects drift during playback. Sync is restored after seeks and after buffering pauses. A live A/V sync adjuster in the Playback Menu handles files with baked-in offsets.

[Learn more about Playback Quality →](/playback/trident-player/sync)



## Subtitles

Trident renders text and image subtitles locally, so the server doesn't have to burn them into the video.

| Type | Formats |
|------|---------|
| **Text** | SRT, VTT, ASS/SSA with full styling, TTML, SubViewer, SAMI |
| **Image** | PGS (Blu-ray), VobSub (DVD), DVB (broadcast) |

ASS subtitles render through libass with their styling intact (fonts, colors, positioning, effects). Useful for anime fan-subs that rely on styled signs and dialog.

[Learn more about Subtitles →](/playback/trident-player/subtitles)



## Track Switching

Switch audio or subtitle tracks mid-playback from the [Playback Menu](/playback/playback-menu). There's no rebuffering since all tracks are pre-loaded.



## Video Caching

Enable **Full Video Caching** in **Settings > Playback > Advanced** to cache content to disk as it streams. Pausing playback continues downloading in the background ("pause to buffer"), so you can pre-load content before a long flight or unreliable network stretch. Seeking backward to cached portions plays without re-downloading.



## Frame-Accurate Seeking

Seeking jumps to the exact frame you scrub to, not just the nearest keyframe.



## Frame Rate Matching

Neptune matches the display refresh rate to your content:

| Content | Display |
|---------|---------|
| Movies (24fps) | 24Hz |
| PAL content | 25Hz |
| Standard video | 30Hz |
| Sports/60fps | 60Hz |

This avoids judder caused by mismatched refresh rates.



## De-interlacing

Interlaced sources like DVDs and broadcast recordings are de-interlaced automatically. Set **Auto**, **On**, or **Off** in **Settings > Playback > Advanced**, or per-session from the Playback Menu's Video tab.



## In This Section

| Page | Description |
|------|-------------|
| [Codecs](/playback/trident-player/codecs) | Supported video and audio formats |
| [HDR](/playback/trident-player/hdr) | HDR and Dolby Vision support |
| [Playback Quality](/playback/trident-player/sync) | Sync, buffering, seeking |
| [Audio](/playback/trident-player/audio) | Lossless audio and surround sound |
| [Subtitles](/playback/trident-player/subtitles) | Text and image subtitle support |
| [Troubleshooting](/playback/trident-player/troubleshooting) | Common issues and solutions |
