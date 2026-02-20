---
order: 20
---

# HDR & Dolby Vision

Experience your HDR content the way it was meant to be seen.



## Supported Formats

Neptune supports all major HDR formats with full hardware acceleration:

| Format | Description | Dynamic Metadata |
|--------|-------------|------------------|
| **HDR10** | Industry standard for 4K HDR | Static (per-movie) |
| **HDR10+** | Samsung's enhanced HDR | Dynamic (per-scene) |
| **HLG** | Broadcast HDR standard | None (backwards compatible) |
| **Dolby Vision** | Premium dynamic HDR | Dynamic (per-frame) |



## Automatic Detection

Neptune automatically detects HDR content and configures playback appropriately. When you press play on an HDR movie:

1. Neptune identifies the HDR format from the video stream
2. Your Apple TV tells your TV to switch to the correct HDR mode
3. Colors and brightness are displayed as the filmmaker intended

No manual configuration required. Neptune also preserves HDR10 mastering display metadata (SMPTE ST 2086 and CTA-861.3 brightness levels), enabling your TV to tone-map accurately for its peak brightness.



## Display Mode Switching

Neptune instructs your Apple TV to switch your TV to the correct display mode for each type of content.

### What You'll See

When HDR playback starts, your TV may briefly go black (1-2 seconds) as it switches modes. This is normal - your TV is reconfiguring its display pipeline for HDR.

### Required Setting

For automatic HDR switching to work, enable this Apple TV setting:

**Settings > Video and Audio > Match Content > Match Dynamic Range**

Without this setting, HDR content will still play but may appear washed out because your TV stays in SDR mode.



## Dolby Vision

### Premium Picture Quality

Dolby Vision provides frame-by-frame optimization for the best possible picture. Neptune fully supports:

| Profile | Description | Common Sources |
|---------|-------------|----------------|
| **Profile 5** | Single-layer HDR10 base | Streaming services |
| **Profile 7** | Dual-layer with HDR10 base | Some streaming (plays HDR10 base layer) |
| **Profile 8** | Single-layer, multiple bases | Blu-ray remuxes, streaming |
| **Profile 9** | AV1 video with DV | Next-gen content |

Neptune outputs full Dolby Vision over HDMI for Profiles 5 and 8. Your TV will display "Dolby Vision" when receiving DV content. Profile 7 files play their HDR10 base layer in full quality.

### Automatic Fallback

If your TV doesn't support Dolby Vision, Neptune automatically provides the best alternative:

| If DV Not Supported | Neptune Uses |
|--------------------|--------------|
| TV supports HDR10 | Falls back to HDR10 |
| TV supports HLG only | Falls back to HLG |
| SDR only TV | Falls back to SDR |

You get the best quality your TV can display, automatically.



## Frame Rate Matching

Neptune also matches the display refresh rate to your content for judder-free playback:

| Content | Display Refresh | Notes |
|---------|-----------------|-------|
| Movies (23.976/24fps) | 24Hz | Cinema-like motion |
| PAL content (25fps) | 25Hz | European TV |
| NTSC video (29.97/30fps) | 30Hz | US TV standard |
| Sports/gaming (50fps) | 50Hz | Smooth action |
| High frame rate (59.94/60fps) | 60Hz | Sports, gaming |

This eliminates the judder that occurs when frame rates don't divide evenly into the display refresh rate.

Enable frame rate matching in **Settings > Playback > Match Content Frame Rate**. For best results, also enable the tvOS system setting at **Settings > Video and Audio > Match Content > Match Frame Rate**.



## Requirements

### Apple TV 4K

All Apple TV 4K models support:
- HDR10
- HLG
- Dolby Vision

The original Apple TV HD (4th generation) does not support HDR.

### TV Requirements

For full HDR support, your TV should:
- Support the HDR format of your content
- Have HDR enabled on the connected HDMI input
- Be connected via HDMI 2.0 or later

### HDMI Cable

For reliable 4K HDR and Dolby Vision:
- Use **Premium High Speed** or **Ultra High Speed** certified HDMI cables
- Poor or damaged cables can cause HDR failures, sparkles, or blackouts
- For 4K/60Hz HDR, Ultra High Speed cables are recommended



## Troubleshooting

### Colors Look Washed Out

1. **Check Apple TV settings** - Ensure "Match Dynamic Range" is ON
2. **Check TV input settings** - Make sure HDR is enabled on the HDMI input your Apple TV uses
3. **Check your cable** - Try a certified high-speed HDMI cable
4. **Check TV display mode** - Some TVs show an HDR indicator when receiving HDR signal

### Screen Goes Black During Playback

Brief blackouts when starting HDR content are normal - your TV is switching modes. If it persists:
- Try a different HDMI cable
- Check for TV firmware updates
- Try a different HDMI port on your TV
- Temporarily disable "Match Dynamic Range" to test

### HDR Badge Not Showing

If content should be HDR but doesn't show the HDR indicator:
- The file may have incorrect or missing HDR metadata
- Try a different encode of the same content
- Some TV settings can suppress the HDR indicator

### Dolby Vision Not Activating

1. **Verify your TV supports Dolby Vision** - Check TV specs
2. **Check Apple TV settings** - Settings > Video and Audio > Format should show Dolby Vision
3. **Check HDMI port** - Some TVs only support DV on specific HDMI ports
4. **Check content** - Verify the file actually contains Dolby Vision metadata
