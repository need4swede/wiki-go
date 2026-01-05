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
| **ASS/SSA** | Full styling - fonts, colors, effects |

### Image Subtitles

| Format | Source |
|--------|--------|
| **PGS** | Blu-ray subtitles |
| **VobSub** | DVD subtitles |
| **DVB** | Broadcast subtitles |



## Styled Subtitles

### Full ASS/SSA Support

Neptune renders ASS subtitles with their intended styling:

- **Fonts** - Custom typefaces as the creator intended
- **Colors** - Colored text, outlines, and shadows
- **Positioning** - Text anywhere on screen
- **Effects** - Bold, italic, borders, shadows

No more plain white text when the subtitle creator intended something more.

### Perfect for Anime

Anime fan-subs with elaborate styling display beautifully. Karaoke effects, signs, and styled dialog all render as intended.



## Instant Track Switching

Switch subtitle tracks instantly during playback:
- Change languages on the fly
- Toggle between full subtitles and signs-only
- Turn subtitles off instantly
- No rebuffering required

Neptune pre-loads all subtitle tracks, so switching is immediate.



## Multiple Languages

If your file contains multiple subtitle tracks, Neptune shows them all:
- Language name
- Track type (Full, Signs, Forced, SDH)
- Format indicator

Select the track you want from the player controls.



## External Subtitles

Neptune supports external subtitle files from your Jellyfin server:
- Automatically detected
- Displayed alongside embedded tracks
- Marked as "External" in the track list



## Default Styling

For subtitles without built-in styling, Neptune provides clean defaults:
- Clear white text
- Subtle shadow for readability
- Positioned at the bottom of the screen
- Appropriately sized for TV viewing



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

**Complex effects** - Some advanced ASS effects may not render perfectly.

**SRT limitations** - SRT format doesn't support styling; consider using an ASS version.

### Timing Off

**Adjust delay** - Use the subtitle delay option in player controls.

**Wrong version** - Subtitles may be timed for a different cut of the video.
