---
order: 50
---

# Subtitles

Beautiful subtitle rendering for every format.



## Supported Formats

### Text Subtitles

| Format | Features |
|--------|----------|
| **SRT** | Simple, universal compatibility |
| **VTT** | Web standard with positioning |
| **ASS/SSA** | Full styling - fonts, colors, positioning, effects |
| **TTML** | Broadcast standard |
| **SubViewer** | Legacy format support |
| **SAMI** | Microsoft subtitle format |

### Image Subtitles

| Format | Source |
|--------|--------|
| **PGS** | Blu-ray subtitles |
| **VobSub** | DVD subtitles |
| **DVB** | Broadcast subtitles |

All subtitle formats are rendered directly by Neptune - no server processing or burn-in required.



## Styled Subtitles

### Full ASS/SSA Support

Neptune renders ASS subtitles with their intended styling:

- **Fonts** - Custom typefaces as the creator intended
- **Colors** - Primary, secondary, outline, and shadow colors
- **Positioning** - Text anywhere on screen (9-point alignment grid + absolute positioning)
- **Effects** - Bold, italic, underline, strikethrough, borders, shadows

No more plain white text when the subtitle creator intended something more.

### Perfect for Anime

Anime fan-subs with elaborate styling display beautifully. Signs, styled dialog, and on-screen text all render as intended.



## Instant Track Switching

Switch subtitle tracks instantly during playback:
- Change languages on the fly
- Toggle between full subtitles and signs-only
- Turn subtitles off instantly
- No rebuffering required

Neptune pre-loads all subtitle tracks, so switching is immediate - including image-based formats like PGS and VobSub.



## Multiple Languages

If your file contains multiple subtitle tracks, Neptune shows them all:
- Language name
- Track type (Full, Signs, Forced, SDH)
- Format indicator

Select the track you want from the playback pill (swipe up/down during playback).



## External Subtitles

Neptune supports external subtitle files from your Jellyfin server:
- Automatically detected
- Displayed alongside embedded tracks
- Marked as "External" in the track list



## Subtitle Delay

Adjust subtitle timing during playback if subtitles are out of sync with the video:
- **Positive delay** displays subtitles later
- **Negative delay** displays subtitles earlier



## Character Encoding

Neptune handles multiple character encodings automatically:
- UTF-8, UTF-16
- ISO-8859-1 (Latin)
- Big5 (Chinese Traditional)
- GB-18030 (Chinese Simplified)

If characters appear garbled, the subtitle file may use an unsupported encoding. Re-encoding as UTF-8 resolves most issues.



## Default Styling

For subtitles without built-in styling, Neptune provides clean defaults:
- Clear white text
- Subtle shadow for readability
- Positioned at the bottom of the screen
- Appropriately sized for TV viewing

Customize default appearance in **Settings** > **Subtitles** (font size, color, background style, opacity).



## Troubleshooting

### Subtitles Not Appearing

1. **Check track selection** - Make sure subtitles aren't set to "Off"
2. **Check timing** - Subtitles may be for a different version of the video
3. **Try a different track** - If the file has multiple options

### Strange Characters

**Encoding issue** - Some older subtitle files use non-standard encoding. Try:
- A different subtitle file
- SRT format (most compatible)
- Re-encoding the subtitle as UTF-8

### Styling Looks Wrong

**Font substitution** - Custom fonts may be replaced with system fonts.

**Complex effects** - Some advanced ASS effects (blur, clipping, animations) may render with approximations.

**SRT limitations** - SRT format doesn't support styling; consider using an ASS version.

### Timing Off

**Adjust delay** - Use the subtitle delay option in the playback pill.

**Wrong version** - Subtitles may be timed for a different cut of the video.
