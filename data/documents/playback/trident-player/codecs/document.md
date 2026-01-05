---
order: 10
---

# Supported Formats

Neptune plays virtually any video or audio format directly, without requiring your server to transcode.



## Video Formats

### Modern Codecs

| Codec | What It's Used For |
|-------|-------------------|
| **H.265/HEVC** | 4K movies, HDR content, modern Blu-ray rips |
| **H.264/AVC** | Standard HD content, streaming services |
| **VP9** | YouTube downloads, WebM files |
| **AV1** | Next-gen streaming, highly efficient compression |

All support hardware acceleration for smooth playback with minimal battery impact.

### Legacy Codecs

| Codec | What It's Used For |
|-------|-------------------|
| **MPEG-4** | Older DivX/Xvid content |
| **MPEG-2** | DVDs, broadcast recordings |
| **VC-1** | Windows Media Video, early Blu-rays |



## Container Support

Neptune reads all common file formats:

| Format | Extensions |
|--------|------------|
| **Matroska** | .mkv, .mk3d, .mka |
| **MP4** | .mp4, .m4v |
| **WebM** | .webm |
| **AVI** | .avi |
| **QuickTime** | .mov |
| **Blu-ray** | .m2ts, .mts |
| **DVD** | .vob, .mpg |



## Resolution & Quality

| Feature | Support |
|---------|---------|
| **4K Ultra HD** | Full support |
| **8K** | Decode supported |
| **High Frame Rate** | Up to 60fps |
| **10-bit Color** | Full HDR support |



## Audio Formats

### Lossless Audio

Preserve every bit of your premium audio tracks.

| Format | Description |
|--------|-------------|
| **Dolby TrueHD** | Blu-ray lossless audio, up to 7.1 channels |
| **DTS-HD Master Audio** | DTS lossless, up to 7.1 channels |
| **FLAC** | Free lossless audio, up to 8 channels |
| **ALAC** | Apple lossless |
| **PCM** | Uncompressed audio |

### Surround Sound

| Format | Description |
|--------|-------------|
| **Dolby Digital Plus (E-AC3)** | High-quality surround, up to 7.1 |
| **Dolby Digital (AC3)** | Standard 5.1 surround |
| **DTS** | DTS 5.1 surround |

### Standard Audio

| Format | Description |
|--------|-------------|
| **AAC** | Modern compressed audio |
| **Opus** | Efficient modern codec |
| **MP3** | Universal compatibility |
| **Vorbis** | Open source compressed |



## Automatic Channel Matching

Neptune automatically matches audio to your system:

| Your Audio | What You Get |
|------------|--------------|
| **7.1 Receiver** | Full 7.1 surround |
| **5.1 Soundbar** | Downmixed to 5.1 |
| **Stereo TV** | Downmixed to stereo |

Downmixing preserves dialog clarity and spatial positioning - nothing important gets lost.



## Dolby Atmos

### How Atmos Works in Neptune

Dolby Atmos includes both a base surround track and spatial object metadata. Neptune fully decodes the base track:

| Atmos Format | What You Hear |
|--------------|---------------|
| **TrueHD Atmos** | Full lossless 7.1 audio |
| **DD+ Atmos** | Full 7.1 surround |

The spatial object metadata requires proprietary decoding not available to third-party apps. This is the same limitation as other premium players like Infuse.



## Subtitle Formats

### Text Subtitles

| Format | Features |
|--------|----------|
| **SRT** | Simple, universal compatibility |
| **VTT** | Web standard with basic styling |
| **ASS/SSA** | Full styling - fonts, colors, positioning |

### Image Subtitles

| Format | Source |
|--------|--------|
| **PGS** | Blu-ray subtitles |
| **VobSub** | DVD subtitles |
| **DVB** | Broadcast subtitles |



## What If a Format Isn't Supported?

For the rare formats Neptune can't play directly, your Jellyfin server will automatically transcode to a compatible format. This happens transparently - you just press play.
