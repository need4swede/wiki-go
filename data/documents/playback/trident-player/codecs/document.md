---
order: 10
---

# Codec Support

Trident supports a wide range of video and audio formats.

---

## Video Codecs

| Codec | Hardware Decode | Notes |
|-------|-----------------|-------|
| H.264/AVC | Yes | Full support |
| H.265/HEVC | Yes | Including 10-bit |
| VP9 | No | Software decode |
| AV1 | Partial | Apple TV 4K 2022+ |
| MPEG-4 | Yes | Legacy support |
| MPEG-2 | Yes | DVD/broadcast |

Hardware decoding is preferred when available.

---

## Audio Codecs

**Lossless:**

| Codec | Channels |
|-------|----------|
| TrueHD | Up to 7.1 |
| DTS-HD MA | Up to 7.1 |
| FLAC | Up to 8ch |
| ALAC | Up to 8ch |

**Lossy:**

| Codec | Channels |
|-------|----------|
| EAC3 | Up to 7.1 |
| AC3 | Up to 5.1 |
| DTS | Up to 5.1 |
| AAC | Up to 7.1 |
| Opus | Up to 8ch |

---

## Automatic Downmix

When your audio device has fewer channels than the source, Trident automatically downmixes while preserving spatial positioning.
