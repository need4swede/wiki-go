---
order: 50
---

# Playback Quality

How Trident keeps audio and video in sync, manages buffers, and handles seeks.



## Audio/Video Sync

Trident uses audio as the master timing reference. Video frames are displayed at the position they should appear relative to the audio.

### Calibration

When playback begins, Trident calibrates sync for your specific output. Calibration takes 1-2 seconds and runs in the background.

### Drift Correction

Over the course of a long movie, audio and video can drift apart. Trident measures the offset continuously and corrects it as you watch.



## Buffering

Trident maintains a buffer ahead of the current position so playback continues through brief network slowdowns.

### Buffer Strategy

Buffer size adapts to your network:

| Network | Strategy |
|---------|----------|
| Fast (>50 Mbps) | Quick startup, small buffer |
| Medium | Balanced buffer size |
| Slow (<10 Mbps) | Larger buffer for stability |

### During Buffering

If playback has to pause to fill the buffer, sync stays intact. When playback resumes, audio and video are still aligned.



## Seeking

Trident seeks to the exact frame you requested, not just the nearest keyframe.

### Sync After a Seek

Sync recalibrates over the first 1-2 seconds after a seek. This is when calibration is happening rather than a problem.

### Lossless Audio

With Dolby TrueHD or DTS-HD MA, expect a brief silence (~100-200ms) after a seek while the audio decoder finds a sync point. This is a property of the format, not Neptune.



## Transcoded Streams

In Transcode mode, the server may begin sending audio slightly before video. Trident detects and compensates for the offset during calibration.



## Video Caching

With **Full Video Caching** enabled in **Settings > Playback > Advanced**, Trident caches content to disk as you stream using parallel connections. Pausing continues the download in the background, so you can pre-load ahead of a shaky network stretch. Seeking back into cached portions plays without re-downloading.



## 4K HDR

4K HDR content uses hardware decoding. Dolby Vision content plays through the same path.



## Troubleshooting

### Audio Seems Out of Sync

- Wait 1-2 seconds. Calibration runs at the start of every playback session.
- Try seeking. A seek triggers a fresh calibration.

### Frequent Buffering

- Run a speed test against your media server.
- Use Ethernet rather than Wi-Fi for high-bitrate content.
- Try **Full Video Caching** for high-latency connections.

### Stuttering

- Check your network can sustain the bitrate (the Playback Menu's Info tab shows the file's bitrate and buffer health).
- If the network can't keep up, drop the Quality setting in the Playback Menu. The stream restarts in place at the lower bitrate.
