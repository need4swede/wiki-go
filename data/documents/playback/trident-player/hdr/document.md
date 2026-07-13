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

Trident supports all four when the codec, device, and display are compatible. Most living-room HDR is HEVC and uses Apple's hardware decoder. This page focuses on that setup, where your TV and HDMI chain decide what you actually see; on iPhone and iPad, HDR plays on the built-in display with no HDMI setup.



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
| **Profile 8.2 / 8.4** | Remuxes and streaming | Dolby Vision on compatible displays; HDR base layer otherwise |
| **Profile 8.6** | HDR10-based Dolby Vision | HDR10 base layer, avoiding the green-output issue on Apple TV |

Profile 5 outputs Dolby Vision directly. Compatible Profile 8 variants output Dolby Vision over HDMI and fall back to their base layer when Dolby Vision is unavailable.

**Profile 7** is the dual-layer format used on Blu-ray discs, and most players can only show its HDR10 base. On a Dolby Vision TV, Trident rewrites single-track Profile 7 into a compatible Dolby Vision stream while it plays, so you get real Dolby Vision from Blu-ray remuxes without any pre-conversion. Files carrying a separate enhancement-layer track play their HDR10 base layer instead.

### Fallback on Non-DV Displays

If your TV doesn't support Dolby Vision, Trident falls through to the next format your TV does support:

| If DV Not Supported | Trident Uses |
|--------------------|--------------|
| TV supports HDR10 | HDR10 |
| SDR-only TV | SDR |


## Requirements

### Apple TV 4K

All Apple TV 4K models support HDR10, HLG, and Dolby Vision. The original Apple TV HD (4th generation) does not support HDR.

### TV Requirements

- Your TV needs to support the HDR format of the content
- HDR has to be enabled on the HDMI input your Apple TV is connected to
- HDMI 2.0 or later

### HDMI Cable

For 4K HDR and Dolby Vision, use a Premium High Speed or Ultra High Speed certified HDMI cable. Poor cables cause sparkles, blackouts, or HDR failures. For 4K/60Hz HDR, Ultra High Speed is recommended.
