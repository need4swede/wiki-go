---
order: 60
---

# Troubleshooting

Solutions for common playback issues.



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



### Stuttering or Choppy Playback

**For network streaming:**
- Check your connection speed to the server
- Try a wired Ethernet connection
- Enable **Full Video Caching** (Settings > Playback > Advanced) on high-latency connections

**For 4K/HDR content:**
- Ensure your network can handle the bitrate (check the Info tab in the Playback Menu)
- Drop the Quality setting in the Playback Menu if it can't



### HDR Looks Washed Out

**Enable display matching:**

Settings (Apple TV) > Video and Audio > Match Content > **Match Dynamic Range: ON**

**Check your TV:**
- Verify the HDMI input has HDR enabled
- Try a different HDMI cable (use certified high-speed)
- Check for TV firmware updates

[More HDR help →](/playback/trident-player/hdr)



### Video Freezes But Audio Continues

This usually indicates a decode error.

**Try:**
- Seeking forward or backward
- Restarting playback
- Checking if the file is corrupt



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



### Audio Out of Sync

**This is normal at the start.** Sync calibration takes 1-2 seconds.

**If it persists:**
- Try seeking to reset the sync
- Check if it happens with other files
- Restart playback



### Audio Cuts Out Briefly

**After seeking in lossless audio:**

Brief silence (~100-200ms) is normal when seeking in TrueHD or DTS-HD MA content. This is inherent to these formats.

**During playback:**
- May indicate network buffering
- Try a lower Quality setting or enable Full Video Caching



## Subtitle Issues

### Subtitles Not Showing

1. Open the Playback Menu (swipe down) and check the Subtitles tab
2. Make sure the track isn't set to "Off"
3. Try selecting a different subtitle track



### Wrong Characters or Boxes

**Encoding issue.** The subtitle file uses a non-standard character encoding.

**Try:**
- A different subtitle file for the same content
- An SRT version (most compatible format)



### Subtitles Out of Sync

**Use the Timing adjuster:**
- Open the Playback Menu and go to Subtitles > Timing
- Shift the offset while watching until dialogue lines up
- The adjustment applies to the current file only



## Transcoding Issues

### Transcode Won't Start

**Check your server:**
- Ensure your Jellyfin server has hardware transcoding configured (if available)
- Check server CPU/GPU usage. Transcoding is resource-intensive.
- Verify the server logs for transcode errors

**Check your settings:**
- Confirm Playback Mode is set to **Transcode** in Settings > Playback
- Try a lower Target Bitrate. Very high targets may cause the server to skip transcoding.

### Poor Quality in Transcode Mode

**Increase the bitrate:**
- Go to Settings > Playback and raise the Target Bitrate
- Try 40 Mbps or above for 4K, 15 Mbps or above for 1080p

**Consider Direct Play:**
- If your network can handle it, Direct Play always gives the best quality since it plays the original file without re-encoding

### Seeking Doesn't Work in Transcode Mode

Transcoded streams are delivered sequentially. You can't seek within them the same way as direct play. To jump to a different position, Neptune requests a new transcode starting from that point. This takes a moment while the server begins encoding from the new position.



## Network Issues

### Constant Buffering

**Check your network:**
- Run a speed test to your server
- Try a wired Ethernet connection
- Move closer to your WiFi router

**Adjust settings:**
- Increase buffer size in Settings
- For very slow connections, consider requesting a lower-quality transcode



### Playback Starts Then Stops

**Possible causes:**
- Network congestion
- Server overwhelmed
- Firewall blocking traffic

**Try:**
- Testing with a smaller/simpler file
- Checking your server's resource usage
- Verifying no firewall is blocking the connection



## Seeking Issues

### Seek Takes a Long Time

Large keyframes take time to decode. This is normal for complex 4K HEVC content, and heavier over remote connections. If seeking feels sluggish on a remote stream, try a lower Quality setting for the session.



### Audio Gap After Seeking

**For TrueHD/DTS-HD MA:**

Brief silence (~100-200ms) is expected. These lossless formats need to find a sync point before audio can resume.

**For other audio:**

Should be minimal. Report if it's excessive.



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

### Technical Details

The Playback Menu's **Info** tab shows a live readout of the current stream:
- Video codec, resolution, and dynamic range
- Audio format and channels
- Whether the server is direct playing or transcoding
- Buffer status and file details

You can also enable a persistent on-screen card via the **Technical Info** action button (**Settings > Playback > Controls > Action Buttons**).
