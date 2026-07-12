---
order: 20
---

# HDR & Dolby Vision

How Trident handles HDR content.



## Supported Formats

| Format | Description | Dynamic Metadata |
|--------|-------------|------------------|
| **HDR10** | 4K HDR standard | Static (per-movie) |
| **HDR10+** | Samsung's enhanced HDR | Dynamic (per-scene) |
| **HLG** | Broadcast HDR | None (backwards compatible) |
| **Dolby Vision** | Dynamic HDR | Dynamic (per-frame) |

All four are decoded with hardware acceleration on supported devices. This page focuses on the living-room setup, where your TV and HDMI chain decide what you actually see; on iPhone and iPad, HDR simply plays on the built-in display with no setup.



## Detection and Switching

When you press play on HDR content:

1. Trident reads the HDR format from the video stream.
2. Your Apple TV switches your TV to the matching HDR mode.
3. The TV displays at the format's intended brightness and color.

For HDR10 content, Trident also passes through mastering display metadata (SMPTE ST 2086 and CTA-861.3 brightness levels) so your TV can tone-map for its peak brightness.



## Display Mode Switching

When HDR playback starts, your TV may go black for 1-2 seconds while it switches modes. This is the TV reconfiguring its display pipeline.

### Required tvOS Setting

For HDR mode switching to work, enable:

**Settings > Video and Audio > Match Content > Match Dynamic Range**

Without this, HDR content still plays but your TV stays in SDR mode and the picture looks washed out.



## Dolby Vision

Trident supports the major Dolby Vision profiles:

| Profile | Common Sources | How It Plays |
|---------|----------------|--------------|
| **Profile 5** | Streaming services | Full Dolby Vision |
| **Profile 7** | Blu-ray rips and remuxes | Converted to Dolby Vision on the fly (see below) |
| **Profile 8** | Remuxes, streaming | Full Dolby Vision |

For Profiles 5 and 8, Trident outputs full Dolby Vision over HDMI. Your TV will report "Dolby Vision" when receiving the stream.

**Profile 7** is the dual-layer format used on Blu-ray discs, and most players can only show its HDR10 base. On a Dolby Vision TV, Trident rewrites single-track Profile 7 into a compatible Dolby Vision stream while it plays, so you get real Dolby Vision from Blu-ray remuxes without any pre-conversion. Files carrying a separate enhancement-layer track play their HDR10 base layer instead.

### Fallback on Non-DV Displays

If your TV doesn't support Dolby Vision, Trident falls through to the next format your TV does support:

| If DV Not Supported | Trident Uses |
|--------------------|--------------|
| TV supports HDR10 | HDR10 |
| TV supports HLG only | HLG |
| SDR-only TV | SDR |



## Frame Rate Matching

Trident also matches the display refresh rate to the content frame rate:

| Content | Display Refresh | Notes |
|---------|-----------------|-------|
| Movies (23.976/24fps) | 24Hz | Cinema motion |
| PAL content (25fps) | 25Hz | European TV |
| NTSC video (29.97/30fps) | 30Hz | US TV standard |
| Sports/gaming (50fps) | 50Hz | |
| High frame rate (59.94/60fps) | 60Hz | Sports, gaming |

This avoids the judder that happens when frame rates don't divide evenly into the display refresh rate.

Enable in **Settings > Playback > Match Content Frame Rate**. For best results, also enable the tvOS setting at **Settings > Video and Audio > Match Content > Match Frame Rate**.



## Requirements

### Apple TV 4K

All Apple TV 4K models support HDR10, HLG, and Dolby Vision. The original Apple TV HD (4th generation) does not support HDR.

### TV Requirements

- Your TV needs to support the HDR format of the content
- HDR has to be enabled on the HDMI input your Apple TV is connected to
- HDMI 2.0 or later

### HDMI Cable

For 4K HDR and Dolby Vision, use a Premium High Speed or Ultra High Speed certified HDMI cable. Poor cables cause sparkles, blackouts, or HDR failures. For 4K/60Hz HDR, Ultra High Speed is recommended.



## Troubleshooting

### Colors Look Washed Out

1. Check the Apple TV setting **Match Dynamic Range** is on.
2. Check HDR is enabled on the HDMI input on your TV.
3. Try a certified high-speed HDMI cable.
4. Check your TV's HDR indicator if it has one.

### Screen Goes Black During Playback

Brief blackouts at the start of HDR content are mode switching. If they persist mid-playback:

- Try a different HDMI cable
- Check for TV firmware updates
- Try a different HDMI port
- Temporarily disable Match Dynamic Range to isolate the issue

### HDR Badge Not Showing

If content should be HDR but the indicator doesn't appear:

- The file may have missing or incorrect HDR metadata
- Try a different encode of the same content
- Some TVs suppress the HDR indicator under certain settings

### Dolby Vision Not Activating

1. Check your TV supports Dolby Vision.
2. In **Settings > Video and Audio > Format**, verify Dolby Vision is listed as the output format.
3. Some TVs only support DV on specific HDMI ports.
4. Verify the file actually contains Dolby Vision metadata.
