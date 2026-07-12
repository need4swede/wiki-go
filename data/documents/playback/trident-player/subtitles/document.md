---
order: 50
---

# Subtitles

How Trident handles subtitle tracks.



## Supported Formats

### Text Subtitles

| Format | Features |
|--------|----------|
| **SRT** | Universal compatibility |
| **VTT** | Web standard with positioning |
| **ASS/SSA** | Full styling: fonts, colors, positioning, effects |
| **TTML** | Broadcast standard |
| **SubViewer** | Older format support |
| **SAMI** | Microsoft subtitle format |

### Image Subtitles

| Format | Source |
|--------|--------|
| **PGS** | Blu-ray subtitles |
| **VobSub** | DVD subtitles |
| **DVB** | Broadcast subtitles |

All formats render locally. The server doesn't have to burn subtitles into the video.



## Styled Subtitles

### ASS/SSA

Trident renders ASS subtitles with libass, the same renderer desktop players use, so styling comes through intact:

- **Fonts**: Custom typefaces if the file embeds them
- **Colors**: Primary, secondary, outline, and shadow colors
- **Positioning**: 9-point alignment grid plus absolute positioning
- **Effects**: Bold, italic, underline, strikethrough, borders, shadows

This is what makes anime fan-subs render the way the typesetter intended, with styled signs and on-screen text.



## Track Switching

Switch subtitle tracks during playback. All tracks (including image-based formats like PGS and VobSub) are pre-loaded, so the switch is immediate.



## Multiple Languages

If a file contains multiple subtitle tracks, Trident lists them all with:

- Language name
- Track type (Full, Signs, Forced, SDH)
- Format

Open the [Playback Menu](/playback/playback-menu) (swipe down during playback) to choose a track.



## External Subtitles

External subtitle files attached on your Jellyfin server are picked up alongside embedded tracks. They're marked **External** in the track list.



## Timing and Position

If subtitles are out of sync with the video, open the Playback Menu's Subtitles tab and use **Timing** to shift them up to 5 seconds either way while you watch. The offset applies to the current file only.

**Position** raises subtitles off the bottom edge, useful for keeping captions clear of letterbox bars or burned-in text. Styled ASS subtitles keep their typesetting anchored when repositioned.



## Character Encoding

Trident handles common encodings:

- UTF-8, UTF-16
- ISO-8859-1 (Latin)
- Big5 (Chinese Traditional)
- GB-18030 (Chinese Simplified)

If characters appear garbled, the file likely uses an unsupported encoding. Re-encoding as UTF-8 fixes most cases.



## Default Styling

For subtitle formats without their own styling, Trident applies a clean default:

- White text
- Subtle shadow for readability
- Bottom-of-screen position
- Sized for TV viewing

Customize the default in **Settings > User Preferences > Subtitle Style** (font size, color, background style, brightness, position), or from the Style drill-in right in the Playback Menu.



## Troubleshooting

### Subtitles Not Appearing

1. Check the track picker. Subtitles may be set to Off.
2. Subtitles may be timed for a different cut of the video.
3. Try a different track if the file has multiple options.

### Strange Characters

Some older subtitle files use non-standard encodings. Try:

- A different subtitle file
- An SRT version (most compatible format)
- Re-encoding the subtitle file as UTF-8

### Styling Looks Wrong

- **Font substitution**: Custom fonts may be replaced with system fonts if the file doesn't embed them.
- **Complex effects**: Some advanced ASS effects (blur, clipping, animations) render approximately.
- **SRT limitations**: SRT doesn't support styling. If you want styling, use the ASS version.

### Timing Off

- Adjust the offset under Subtitles > Timing in the Playback Menu.
- The subtitles may be timed for a different cut of the video.
