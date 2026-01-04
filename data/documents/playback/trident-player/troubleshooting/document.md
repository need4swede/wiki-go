---
order: 60
---

# Troubleshooting

Solutions for common playback issues.

---

## Video Issues

### Video Won't Play

**Check these first:**
- Can you reach your Jellyfin server?
- Does the content play in the Jellyfin web interface?
- Is this specific to one file or all files?

**Solutions:**
- Refresh your library in Neptune
- Try a different file to isolate the issue
- Check your server logs for errors

---

### Stuttering or Choppy Playback

**For network streaming:**
- Check your connection speed to the server
- Try a wired Ethernet connection
- Increase buffer size: Settings > Playback

**For 4K/HDR content:**
- Use the "High Quality" buffer preset
- Ensure your network can handle the bitrate

---

### HDR Looks Washed Out

**Enable display matching:**

Settings (Apple TV) > Video and Audio > Match Content > **Match Dynamic Range: ON**

**Check your TV:**
- Verify the HDMI input has HDR enabled
- Try a different HDMI cable (use certified high-speed)
- Check for TV firmware updates

[More HDR help →](/playback/trident-player/hdr)

---

### Video Freezes But Audio Continues

This usually indicates a decode error.

**Try:**
- Seeking forward or backward
- Restarting playback
- Checking if the file is corrupt

---

## Audio Issues

### No Audio

**Check these first:**
- Is your Apple TV volume up?
- Is your receiver/TV volume up?
- Is an audio track selected in player controls?

**If using a receiver:**
- Check the receiver input selection
- Verify HDMI-CEC settings
- Try a different HDMI port

---

### Audio Out of Sync

**This is normal at the start** - Give it 1-2 seconds for sync to calibrate.

**If it persists:**
- Try seeking to reset the sync
- Check if it happens with other files
- Restart playback

---

### Audio Cuts Out Briefly

**After seeking in lossless audio:**

Brief silence (~100-200ms) is normal when seeking in TrueHD or DTS-HD MA content. This is inherent to these formats.

**During playback:**
- May indicate network buffering
- Try increasing buffer size in Settings

---

## Subtitle Issues

### Subtitles Not Showing

1. Open player controls and check subtitle selection
2. Make sure subtitles aren't set to "Off"
3. Try selecting a different subtitle track

---

### Wrong Characters or Boxes

**Encoding issue** - The subtitle file uses a non-standard character encoding.

**Try:**
- A different subtitle file for the same content
- An SRT version (most compatible format)

---

### Subtitles Out of Sync

**Use subtitle delay:**
- Open player controls
- Adjust the subtitle delay setting
- Positive values delay subtitles; negative values make them earlier

---

## Network Issues

### Constant Buffering

**Check your network:**
- Run a speed test to your server
- Try a wired Ethernet connection
- Move closer to your WiFi router

**Adjust settings:**
- Increase buffer size in Settings
- For very slow connections, consider requesting a lower-quality transcode

---

### Playback Starts Then Stops

**Possible causes:**
- Network congestion
- Server overwhelmed
- Firewall blocking traffic

**Try:**
- Testing with a smaller/simpler file
- Checking your server's resource usage
- Verifying no firewall is blocking the connection

---

## Seeking Issues

### Seek Takes a Long Time

**For 4K content:**

Large keyframes take time to decode. This is normal for complex 4K HEVC content.

**For faster seeking:**

Settings > Playback > Accurate Seek: OFF

This seeks to the nearest keyframe instead of the exact frame.

---

### Audio Gap After Seeking

**For TrueHD/DTS-HD MA:**

Brief silence (~100-200ms) is expected. These lossless formats need to find a sync point before audio can resume.

**For other audio:**

Should be minimal. Report if it's excessive.

---

## Getting Help

### What to Check First

Before reporting an issue:
1. Does it happen with multiple files?
2. Does the file play correctly elsewhere (web interface, other apps)?
3. Have you tried restarting the app?

### Useful Information

When reporting issues, include:
- What you were trying to play (format, resolution, codec if known)
- What happened vs. what you expected
- Whether it's reproducible
- Any error messages you saw

### Technical Overlay

Hold Play/Pause during playback to see technical details:
- Video codec and resolution
- Audio format and channels
- Buffer status
- Frame drops (if any)
