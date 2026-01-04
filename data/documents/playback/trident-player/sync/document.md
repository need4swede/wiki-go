---
order: 30
---

# Playback Quality

Smooth, perfectly synchronized playback - every time.

---

## Perfect Audio-Video Sync

Nothing ruins a movie like audio that doesn't match the lips. Neptune keeps audio and video perfectly aligned throughout your entire movie.

### How It Works

Neptune uses audio as the master timing reference. Video frames are displayed precisely when they should appear relative to the audio. The result is perfect lip sync from start to finish.

### Automatic Calibration

When playback begins, Neptune automatically calibrates audio-video sync for your specific setup. This takes about 1-2 seconds and happens transparently.

---

## Smooth Playback

### No Stuttering

Neptune maintains healthy buffers to ensure smooth playback even with network variability. Complex 4K content plays without stuttering or frame drops.

### Smart Buffering

Neptune buffers content intelligently:
- Quick startup for fast networks
- Larger buffers for unreliable connections
- Continuous buffering during playback to stay ahead

### During Buffering

If playback needs to pause to buffer more content, Neptune keeps audio and video in sync. When playback resumes, everything is still perfectly aligned.

---

## Seeking

### Instant Response

Seek to any point in your movie and playback resumes quickly. Neptune seeks to the exact frame you requested, not just the nearest keyframe.

### After Seeking

After seeking, it takes 1-2 seconds for sync to recalibrate. This is normal - Neptune is ensuring everything is perfectly aligned before resuming.

### Lossless Audio Note

With lossless audio formats like Dolby TrueHD, there may be a brief moment of silence (~100-200ms) after seeking while the audio decoder resyncs. This is inherent to the format.

---

## Network Streaming

### Adaptive Buffering

Neptune adapts to your network conditions:

| Network | Strategy |
|---------|----------|
| Fast (>50 Mbps) | Quick startup, small buffer |
| Medium | Balanced buffer size |
| Slow (<10 Mbps) | Larger buffer for stability |

### Handling Slowdowns

If your network slows down during playback, Neptune has buffered content ahead to keep playing. You may see brief buffering only if the slowdown persists.

---

## Premium Content

### Lossless Audio

Neptune is optimized for lossless audio formats like Dolby TrueHD. These formats require special handling, and Neptune ensures they play smoothly without stuttering.

### 4K HDR

Complex 4K HDR content plays smoothly thanks to hardware decoding and smart buffer management. Even demanding Dolby Vision content plays without issues.

---

## Troubleshooting

### Audio Seems Out of Sync

**Wait a moment** - Sync calibration takes 1-2 seconds at the start of playback.

**Try seeking** - Seeking resets the sync system and often resolves any issues.

### Frequent Buffering

**Check your network** - Run a speed test to your Jellyfin server.

**Try wired connection** - Ethernet is more reliable than WiFi for high-bitrate content.

**Increase buffer size** - Settings > Playback > Buffer Size

### Stuttering Playback

**For 4K content** - Use the "High Quality" buffer preset in Settings.

**Check network speed** - 4K content requires consistent bandwidth.

**Try lower quality** - If your network can't keep up, request a lower resolution transcode.
