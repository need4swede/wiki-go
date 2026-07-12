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

Trident combines bounded packet buffers with network read-ahead. It starts once enough audio and video are ready, raises its buffering target after repeated stalls where appropriate, and keeps the network reader focused near the playhead. A buffer can absorb jitter, but it cannot make a file stream continuously when the connection's sustained throughput is below the file's bitrate.

### During Buffering

If playback has to pause to fill the buffer, sync stays intact. When playback resumes, audio and video are still aligned.



## Seeking

Trident seeks to the exact frame you requested, not just the nearest keyframe.

### Sync After a Seek

Sync recalibrates over the first 1-2 seconds after a seek. This is when calibration is happening rather than a problem.

### Lossless Audio

With Dolby TrueHD or a DTS-family track, a very brief silence can occur after a seek while the decoder finds a sync point.



## Transcoded Streams

In Transcode mode, the server may begin sending audio slightly before video. Trident detects and compensates for the offset during calibration.



## Video Caching

With **Full Video Caching** enabled in **Settings > Playback > Advanced**, Trident adds a bounded disk-backed cache to its read-ahead path. Pausing continues to build a cushion, and seeking within cached portions avoids downloading those bytes again. On Apple TV the default target is 250 MB ahead with a 2 GB per-session cache window; older data is evicted as needed, and low free space triggers earlier eviction. This is not an offline download.



## 4K HDR

4K HEVC HDR content uses Apple's hardware decoder. Dolby Vision conversion and output ride that same HEVC playback path. AV1 is software-decoded on current Apple TV models, including HDR AV1.



## Troubleshooting

### Audio Seems Out of Sync

- Wait 1-2 seconds. Calibration runs at the start of every playback session.
- Try seeking. A seek triggers a fresh calibration.

### Frequent Buffering

- Run a speed test against your media server.
- Use Ethernet rather than Wi-Fi for high-bitrate content.
- Try **Full Video Caching** to build more read-ahead on a high-latency or uneven connection.

### Stuttering

- Check your network can sustain the bitrate (the Playback Menu's Info tab shows the file's bitrate and buffer health).
- If the network can't keep up, drop the Quality setting in the Playback Menu. The stream restarts in place at the lower bitrate.
