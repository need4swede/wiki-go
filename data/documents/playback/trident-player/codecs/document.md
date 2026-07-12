---
order: 10
---

# Supported Formats

The video, audio, and subtitle formats Trident plays directly without server-side transcoding.



## Video

### Hardware-Accelerated

These codecs decode on the Apple TV's video hardware:

| Codec | Max Resolution | HDR Support | Notes |
|-------|---------------|-------------|-------|
| **H.265/HEVC** | 4K | HDR10, HDR10+, HLG, Dolby Vision | Standard for 4K content |
| **H.264/AVC** | 4K | No | Universal compatibility |
| **VP9** | 4K | HDR | YouTube, WebM files |
| **AV1** | 4K | HDR | Apple TV 4K 3rd gen only |

### Software-Decoded

These play through software decoding. They're best at 1080p or lower because software decoding can't sustain 4K real-time on Apple TV hardware:

| Codec | Best For |
|-------|----------|
| **MPEG-4** | Older DivX/Xvid content |
| **MPEG-2** | DVDs, broadcast recordings |
| **VP8** | Older WebM files |
| **ProRes** | Professional video workflows |

Interlaced content (common in DVDs and broadcast recordings) is de-interlaced automatically. Control this with the De-interlacing option in the [Playback Menu](/playback/playback-menu).



## Containers

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

Stream link files (.strm) are supported too.



## Resolution & Quality

| Feature | Support |
|---------|---------|
| **4K Ultra HD** | Hardware decode |
| **High Frame Rate** | 24fps to 60fps |
| **10-bit Color** | Required for HDR |
| **High Bitrate** | Up to 200 Mbps |



## Audio

### Lossless

| Format | Channels | Description |
|--------|----------|-------------|
| **Dolby TrueHD** | Up to 7.1 | Blu-ray lossless standard |
| **DTS-HD Master Audio** | Up to 7.1 | DTS lossless |
| **FLAC** | Up to 8 | Free lossless audio |
| **ALAC** | Up to 8 | Apple lossless |
| **PCM** | Up to 8 | Uncompressed audio |

### Surround

| Format | Channels | Description |
|--------|----------|-------------|
| **Dolby Digital Plus** | Up to 7.1 | Streaming surround |
| **Dolby Digital** | 5.1 | DVD and broadcast standard |
| **DTS** | 5.1 | DTS surround |

### Standard

| Format | Description |
|--------|-------------|
| **AAC** | Common compressed audio |
| **Opus** | Newer streaming codec |
| **MP3** | Older compressed audio |
| **Vorbis** | Open source compressed |



## Dolby Atmos

### E-AC3 Atmos (Dolby Digital Plus with Atmos)

E-AC3 Atmos can be passed through to your receiver untouched. This is the same Atmos format used by streaming services. Enable **EAC3-Atmos Passthrough** in **Settings > Playback > Audio**.

| What You Need | Result |
|---------------|--------|
| Atmos-capable receiver | Full Dolby Atmos |
| Standard surround receiver | 7.1 surround |
| Stereo system | Stereo downmix |

### TrueHD Atmos (Blu-ray Atmos)

TrueHD Atmos from Blu-ray discs is decoded to lossless 7.1:

| What You Hear | Why |
|---------------|-----|
| Lossless 7.1 surround | The base audio is fully decoded |
| No height channels | Spatial metadata requires Dolby's proprietary decoder, which isn't licensed to third-party apps |

The same limitation applies to other third-party players.



## Channel Output

Trident matches its output to whatever your audio system supports:

| Your Audio Setup | What You Get |
|------------------|--------------|
| **7.1 Receiver** | 7.1 surround |
| **5.1 Soundbar** | Downmixed to 5.1 |
| **Stereo TV** | Stereo downmix |

Downmixes preserve dialog level and front-rear balance.



## Subtitles

### Text

| Format | Features |
|--------|----------|
| **SRT** | Universal compatibility |
| **VTT** | Web standard with positioning |
| **ASS/SSA** | Full styling: fonts, colors, effects |
| **TTML** | Broadcast standard |
| **SubViewer** | Older format support |
| **SAMI** | Microsoft subtitle format |

### Image

| Format | Source |
|--------|--------|
| **PGS** | Blu-ray subtitles |
| **VobSub** | DVD subtitles |
| **DVB** | Broadcast subtitles |



## Unsupported Formats

For formats Trident can't play directly, your Jellyfin server transcodes the file to a compatible format. The transcode happens in the background.
