---
order: 40
---

# Lossless Audio

Premium audio playback for your premium content.



## Supported Formats

### Lossless Audio

Preserve every bit of your Blu-ray audio tracks:

| Format | Max Channels | Description |
|--------|--------------|-------------|
| **Dolby TrueHD** | 7.1 | Blu-ray lossless standard |
| **DTS-HD Master Audio** | 7.1 | DTS lossless |
| **FLAC** | 8 | Free Lossless Audio Codec |
| **ALAC** | 8 | Apple Lossless |
| **PCM** | 8 | Uncompressed audio |

### Surround Sound

| Format | Max Channels | Description |
|--------|--------------|-------------|
| **Dolby Digital Plus** | 7.1 | High-quality streaming audio |
| **Dolby Digital** | 5.1 | DVD and broadcast standard |
| **DTS** | 5.1 | DTS surround |

### Standard Audio

| Format | Description |
|--------|-------------|
| **AAC** | Modern compressed audio |
| **Opus** | Efficient modern codec |
| **MP3** | Universal compatibility |



## Multi-Channel Support

Neptune automatically detects your audio system and configures output appropriately.

### Automatic Configuration

| Your System | What You Get |
|-------------|--------------|
| 7.1 Receiver | Full 7.1 surround sound |
| 5.1 Soundbar | Optimized 5.1 mix |
| Stereo TV | Intelligent stereo downmix |

### Quality Downmixing

When your system has fewer channels than the source, Neptune creates an intelligent downmix that:
- Preserves dialog clarity
- Maintains spatial balance
- Keeps bass response appropriate

Nothing important gets lost.



## Dolby Atmos

### E-AC3 Atmos (Streaming Atmos)

Neptune passes through E-AC3 Atmos (Dolby Digital Plus with Atmos) to compatible receivers for the full spatial audio experience:

| Your Equipment | What You Hear |
|----------------|---------------|
| Atmos soundbar or receiver | Full Dolby Atmos with height effects |
| 7.1 receiver | 7.1 surround (Atmos decoded by receiver) |
| 5.1 system | 5.1 surround |
| Stereo | Stereo downmix |

This is the same Atmos format used by Netflix, Disney+, and other streaming services. If your equipment supports Atmos, Neptune delivers it.

### TrueHD Atmos (Blu-ray Atmos)

TrueHD Atmos contains both lossless 7.1 audio and spatial object metadata. Neptune decodes TrueHD to full lossless 7.1:

| What You Hear | Details |
|---------------|---------|
| **Lossless 7.1 surround** | Bit-perfect audio quality |
| **No height/object audio** | Spatial metadata requires proprietary decoder |

**Why?** The spatial object metadata in TrueHD Atmos requires Dolby's proprietary decoder, which isn't licensed to third-party apps. This is the same limitation as Infuse, Plex, and other premium players.

**The good news:** You still get lossless 7.1 audio quality - better than any lossy format. Only the height channels are missing.



## Audio Quality

### Bit-Perfect Playback

Neptune decodes lossless audio formats to preserve maximum quality:
- No re-encoding or compression
- Full dynamic range preserved
- All channels decoded at source quality

### Output Format

All audio is output at:
- **Sample rate:** 48 kHz
- **Bit depth:** 32-bit float
- **Channels:** Up to 8 (7.1)

Your receiver handles final conversion to your speaker configuration.



## Instant Track Switching

Switch between audio tracks instantly during playback:
- Change languages without interruption
- Switch to commentary tracks
- No rebuffering required

Neptune pre-decodes audio tracks so switching is immediate.



## Troubleshooting

### No Audio

1. **Check volume** - Apple TV, receiver, and TV volume
2. **Check audio track** - Ensure a track is selected in player controls
3. **Check connections** - Verify HDMI is connected properly
4. **Check receiver input** - Make sure correct input is selected

### Audio Delayed or Out of Sync

**At playback start** - Give it 1-2 seconds for sync to calibrate. This is normal.

**Persistent sync issues:**
- Try seeking to reset the sync system
- Restart playback
- Check if the issue affects other files

### Audio Cuts Out Briefly

**After seeking (TrueHD/DTS-HD MA):**

Brief silence (~100-200ms) after seeking is normal for lossless formats. These formats need to find a sync point before audio can resume.

**During normal playback:**
- May indicate network buffering
- Try increasing buffer size in Settings

### No Surround Sound

1. **Check your receiver** - Verify it's set to decode multi-channel audio
2. **Check Apple TV settings** - Settings > Video and Audio > Audio Output should show your receiver
3. **Check audio track** - Some files have both stereo and surround tracks

### Atmos Not Working

1. **Check equipment** - Your soundbar/receiver must support Atmos
2. **Check audio track** - Select the Atmos track in player controls
3. **Check eARC/ARC** - Some TVs require eARC for Atmos passthrough
4. **E-AC3 only** - TrueHD Atmos from Blu-rays cannot pass through as Atmos
