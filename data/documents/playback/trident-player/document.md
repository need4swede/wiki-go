---
order: 30
---

# Trident Player

Neptune's custom video player engine, built for Apple TV.

---

## In This Section

| Page | Description |
|------|-------------|
| [Codecs](/playback/trident-player/codecs) | Video and audio format support |
| [HDR](/playback/trident-player/hdr) | High dynamic range support |
| [A/V Sync](/playback/trident-player/sync) | Audio-video synchronization |

---

## Overview

Trident provides direct playback without relying on AVPlayer:

1. **Demuxing**: FFmpeg extracts streams from containers
2. **Decoding**: Hardware-accelerated via VideoToolbox
3. **Rendering**: Metal-based with HDR color management
4. **Audio**: Pull-based engine with precise timing

---

## Key Features

| Feature | Benefit |
|---------|---------|
| Frame-accurate seeking | Precise scrubbing and skip |
| Instant subtitle switching | No delay when changing tracks |
| HDR color management | Proper tone mapping |
| Lossless audio | TrueHD, DTS-HD MA passthrough |

---

## When Trident is Used

- **Direct Play**: Trident handles the file
- **Transcode**: Server converts to compatible format

View the active player in the playback info overlay.
