---
order: 10
---

# Supported Formats

Neptune plays virtually any video or audio format directly, without requiring your server to transcode.



## Video Formats

### Hardware-Accelerated Codecs

These codecs are decoded by the Apple TV's hardware for smooth, efficient playback:

| Codec | Max Resolution | HDR Support | Notes |
|-------|---------------|-------------|-------|
| **H.265/HEVC** | 4K | HDR10, HDR10+, HLG, Dolby Vision | Modern standard for 4K content |
| **H.264/AVC** | 4K | No | Universal compatibility |
| **VP9** | 4K | HDR | YouTube, WebM files |
| **AV1** | 4K | HDR | Next-gen codec (Apple TV 4K 3rd gen only) |

### Software-Decoded Codecs

These codecs play via software decoding - best at 1080p or lower:

| Codec | Best For |
|-------|----------|
| **MPEG-4** | Older DivX/Xvid content |
| **MPEG-2** | DVDs, broadcast recordings |
| **VP8** | Older WebM files |
| **ProRes** | Professional video workflows |



## Container Support

Neptune reads all common video file formats:

| Format | Extensions | Common Use |
|--------|------------|------------|
| **Matroska** | .mkv | Blu-ray rips, anime, movies |
| **MP4** | .mp4, .m4v | Streaming downloads, iTunes |
| **WebM** | .webm | YouTube downloads |
| **AVI** | .avi | Older video files |
| **QuickTime** | .mov | Apple ecosystem |
| **Blu-ray** | .m2ts, .mts | Raw Blu-ray rips |
| **MPEG** | .mpg, .ts | Broadcast recordings, DVDs |
| **FLV** | .flv | Flash video |
| **Ogg** | .ogg, .ogv | Open container format |
| **WAV** | .wav | Uncompressed audio |



## Resolution & Quality

| Feature | Support |
|---------|---------|
| **4K Ultra HD** | Full hardware support |
| **High Frame Rate** | 24fps to 60fps |
| **10-bit Color** | Required for HDR |
| **High Bitrate** | Up to 200 Mbps |



## Audio Formats

### Lossless Audio

Premium quality audio decoded bit-perfect:

| Format | Channels | Description |
|--------|----------|-------------|
| **Dolby TrueHD** | Up to 7.1 | Blu-ray lossless standard |
| **DTS-HD Master Audio** | Up to 7.1 | DTS lossless |
| **FLAC** | Up to 8 | Free lossless audio |
| **ALAC** | Up to 8 | Apple lossless |
| **PCM** | Up to 8 | Uncompressed audio |

### Surround Sound

| Format | Channels | Description |
|--------|----------|-------------|
| **Dolby Digital Plus** | Up to 7.1 | High-quality streaming audio |
| **Dolby Digital** | 5.1 | DVD and broadcast standard |
| **DTS** | 5.1 | DTS surround |

### Standard Audio

| Format | Description |
|--------|-------------|
| **AAC** | Modern compressed audio |
| **Opus** | Efficient streaming codec |
| **MP3** | Universal compatibility |
| **Vorbis** | Open source compressed |



## Dolby Atmos

### E-AC3 Atmos (Dolby Digital Plus with Atmos)

Neptune can pass through E-AC3 Atmos audio to your receiver for full spatial audio experience. This is the same Atmos format used by streaming services.

| What You Need | Result |
|---------------|--------|
| Atmos-capable receiver | Full Dolby Atmos |
| Standard surround receiver | 7.1 surround |
| Stereo system | Stereo downmix |

### TrueHD Atmos (Blu-ray Atmos)

TrueHD Atmos from Blu-ray discs is decoded to full lossless 7.1 audio:

| What You Hear | Why |
|---------------|-----|
| Lossless 7.1 surround | Full quality base audio |
| No height channels | Spatial metadata requires proprietary decoder |

This is the same limitation as other premium players - the spatial object metadata in TrueHD Atmos requires Dolby's proprietary decoder, which isn't available to third-party apps.



## Automatic Channel Matching

Neptune automatically matches audio output to your system:

| Your Audio Setup | What You Get |
|------------------|--------------|
| **7.1 Receiver** | Full 7.1 surround |
| **5.1 Soundbar** | Downmixed to 5.1 |
| **Stereo TV** | Intelligent stereo downmix |

Downmixing preserves dialog clarity and spatial balance - nothing important gets lost.



## Subtitle Formats

### Text Subtitles

| Format | Features |
|--------|----------|
| **SRT** | Simple, universal |
| **VTT** | Web standard with positioning |
| **ASS/SSA** | Full styling - fonts, colors, effects |
| **TTML** | Broadcast standard |
| **SubViewer** | Legacy format support |
| **SAMI** | Microsoft subtitle format |

### Image Subtitles

| Format | Source |
|--------|--------|
| **PGS** | Blu-ray subtitles |
| **VobSub** | DVD subtitles |
| **DVB** | Broadcast subtitles |



## What If a Format Isn't Supported?

For the rare formats Neptune can't play directly, your Jellyfin server will automatically transcode to a compatible format. This happens transparently - you just press play.
