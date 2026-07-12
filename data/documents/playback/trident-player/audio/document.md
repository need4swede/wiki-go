---
order: 40
---

# Lossless Audio

How Trident decodes and outputs audio.



## Supported Formats

### Lossless

| Format | Max Channels | Description |
|--------|--------------|-------------|
| **Dolby TrueHD** | 7.1 | Blu-ray lossless standard |
| **DTS-HD Master Audio** | 7.1 | DTS lossless |
| **FLAC** | 8 | Free Lossless Audio Codec |
| **ALAC** | 8 | Apple Lossless |
| **PCM** | 8 | Uncompressed audio |

### Surround

| Format | Max Channels | Description |
|--------|--------------|-------------|
| **Dolby Digital Plus** | 7.1 | Streaming surround |
| **Dolby Digital** | 5.1 | DVD and broadcast standard |
| **DTS** | 5.1 | DTS surround |

### Standard

| Format | Description |
|--------|-------------|
| **AAC** | Common compressed audio |
| **Opus** | Newer streaming codec |
| **Vorbis** | Open source compressed |
| **MP3** | Older compressed audio |



## Multi-Channel Output

Trident matches its output to whatever your audio system supports.

| Your System | What You Get |
|-------------|--------------|
| 7.1 receiver | Full 7.1 surround |
| 5.1 soundbar | Downmixed to 5.1 |
| Stereo TV | Stereo downmix |

When the source has more channels than your output, Trident downmixes. The downmix preserves dialog level and front-rear balance.



## Dolby Atmos

### E-AC3 Atmos (Streaming Atmos)

E-AC3 Atmos (Dolby Digital Plus with Atmos) can be passed through directly to compatible receivers. Turn on **EAC3-Atmos Passthrough** in **Settings > Playback > Audio**:

| Your Equipment | What You Hear |
|----------------|---------------|
| Atmos soundbar or receiver | Full Dolby Atmos with height channels |
| 7.1 receiver | 7.1 surround (Atmos decoded by receiver) |
| 5.1 system | 5.1 surround |
| Stereo | Stereo downmix |

This is the same Atmos format used by Netflix, Disney+, and other streaming services.

### TrueHD Atmos (Blu-ray Atmos)

TrueHD Atmos contains lossless 7.1 audio plus spatial object metadata. Trident decodes the lossless 7.1, but the spatial metadata requires Dolby's proprietary decoder, which isn't available to third-party apps. The same limitation applies to Infuse, Plex, and others.

| What You Hear | Details |
|---------------|---------|
| **Lossless 7.1 surround** | Bit-perfect base audio |
| **No height channels** | Spatial metadata can't be decoded by third-party apps |



## Audio Output

All audio is output at:

- **Sample rate:** 48 kHz
- **Bit depth:** 32-bit float
- **Channels:** Up to 8 (7.1)

Your receiver handles the final conversion to your speaker configuration.



## Track Switching

You can switch audio tracks during playback from the [Playback Menu](/playback/playback-menu). Tracks are pre-decoded so the switch is immediate.



## Sound Shaping

The Playback Menu's Audio tab also offers:

- **Presets**: Default, Bass, or Voice (clearer dialogue)
- **Night Mode**: compresses loud passages for late-night viewing, with an optional schedule
- **A/V Sync**: a live adjuster for nudging audio timing up to half a second either way



## Troubleshooting

### No Audio

1. Check Apple TV, receiver, and TV volume.
2. Open the track picker and confirm an audio track is selected.
3. Verify HDMI is connected.
4. If using a receiver, confirm the correct input is selected.

### Audio Out of Sync

At the start of playback, sync calibration takes 1-2 seconds.

If the issue persists:

- Try seeking to trigger a fresh calibration
- Restart playback
- Check whether the issue is specific to one file

### Audio Cuts Out Briefly

After seeking in TrueHD or DTS-HD MA, expect ~100-200ms of silence while the decoder finds a sync point. This is the format, not Neptune.

During normal playback, brief cuts usually mean the network can't keep up. Check the buffer readout in the Playback Menu's Info tab, and consider a lower quality setting for that session.

### No Surround Sound

1. Confirm your receiver is set to decode multi-channel audio.
2. In the Apple TV's own settings under **Video and Audio > Audio Output**, verify your receiver is selected.
3. Check whether the file actually has a surround track. Some files include both stereo and surround options.

### Atmos Not Working

1. Confirm your soundbar or receiver supports Atmos.
2. Check **EAC3-Atmos Passthrough** is enabled in **Settings > Playback > Audio**.
3. In the Playback Menu, select the Atmos track.
4. If your TV is in the chain, check that eARC/ARC is configured correctly.
5. Remember: TrueHD Atmos from Blu-rays cannot pass through as Atmos. Only E-AC3 Atmos passes through.
