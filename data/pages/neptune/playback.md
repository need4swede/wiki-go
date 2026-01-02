# Playback

Neptune features a custom video player designed specifically for tvOS, with intuitive controls and full support for audio tracks, subtitles, and chapter navigation.

---

## Starting Playback

### From the Home Screen

- **Continue Watching**: Select any item in the Continue Watching row to resume where you left off
- **Next Up**: Select an episode to start playing immediately

### From Item Details

- **Play button**: Start playback from the beginning (or resume if in progress)
- **Episode selection**: Select any episode to play it directly
- **Extras**: Select trailers, behind-the-scenes content, or other special features

---

## Player Controls

When viewing content, tap the touch surface or swipe to reveal the playback controls.

### Control Bar

The control bar appears at the bottom of the screen and includes:

| Element | Description |
|---------|-------------|
| **Progress bar** | Visual timeline showing current position and buffered content |
| **Timestamps** | Current position and total duration |
| **Title** | Now playing item name |

### Quick Actions

| Action | Control |
|--------|---------|
| **Play/Pause** | Press Play/Pause button |
| **Skip back 10s** | Swipe left on Touch Surface |
| **Skip forward 10s** | Swipe right on Touch Surface |
| **Show controls** | Tap Touch Surface |
| **Hide controls** | Wait 5 seconds (auto-hide) |
| **Exit playback** | Press Menu button |

### Scrubbing

While controls are visible:

1. Swipe left or right on the Touch Surface to scrub through the video
2. The timeline shows your target position
3. Release to seek to that position

---

## Audio and Subtitles

### Accessing Track Selection

1. During playback, show the controls (tap Touch Surface)
2. Navigate to the track selection button
3. Select to open the track picker

### Audio Tracks

The Audio tab shows all available audio tracks:

- **Language**: Track language (English, Spanish, etc.)
- **Codec**: Audio format (AAC, EAC3, TrueHD, etc.)
- **Channels**: Audio configuration (Stereo, 5.1, 7.1, Atmos)
- **Bitrate**: Audio quality
- **Default badge**: Server's default track

Select a track to switch audio immediately.

### Subtitles

The Subtitles tab shows all available subtitle tracks:

- **Off**: Disable subtitles
- **Language**: Subtitle language
- **Format**: Subtitle type (SRT, ASS, PGS, etc.)
- **Forced badge**: Forced subtitles (foreign language parts only)
- **SDH badge**: Subtitles for the deaf and hard of hearing

Select a track to enable subtitles immediately.

---

## Subtitle Customization

Customize subtitle appearance in **Settings** > **Subtitles**:

### Font Size

| Size | Description |
|------|-------------|
| Small | Compact text for minimal screen coverage |
| Medium | Balanced default size |
| Large | Easier to read from a distance |
| Extra Large | Maximum readability |

### Text Color

Choose from: White, Yellow, Green, Cyan, or Blue

### Background Style

| Style | Description |
|-------|-------------|
| None | Text only, no background |
| Shadow | Drop shadow behind text |
| Outline | Black outline around text |
| Box | Semi-transparent background box |

When using Box style, you can also adjust the **Background Opacity** from 30% to 100%.

---

## Playback Info

Access additional playback information by selecting the info button in the controls:

- **Video**: Resolution, codec, HDR format, bitrate
- **Audio**: Current audio track details
- **Subtitles**: Current subtitle track details
- **Media source**: File name and container format

---

## Skip Segments

When enabled on your Jellyfin server (via plugins like Intro Skipper), Neptune shows a **Skip** button during:

- Intros
- Credits
- Recaps
- Preview segments

Press the Skip button to jump past the segment automatically.

---

## Playback Speed

Adjust playback speed from the settings overlay:

| Speed | Use Case |
|-------|----------|
| 0.5x | Slow motion for detailed viewing |
| 0.75x | Slightly slower |
| 1.0x | Normal speed |
| 1.25x | Slightly faster |
| 1.5x | Quick viewing |
| 2.0x | Fast forward through content |

---

## Episode Auto-Play

When watching TV shows:

- Episodes automatically advance to the next episode when the current one ends
- A countdown appears before auto-play begins
- Press any button to cancel auto-play and stay on the current episode

---

## Trident Player (Experimental)

Neptune includes an experimental custom video player called **Trident** that offers improved compatibility for certain media formats.

### Enabling Trident

1. Go to **Settings** > **Playback**
2. Toggle **Trident** to Enabled

### When to Use Trident

Trident may help with:
- Files that won't play with the standard player
- Improved subtitle rendering
- Better audio track handling

**Note**: Trident is experimental and may cause playback issues with some content. If you experience problems, disable it in Settings.

---

## Troubleshooting

### Video won't play

- Check your network connection
- Try a different video to rule out file-specific issues
- Ensure the format is supported by tvOS
- Check if transcoding is working on your Jellyfin server

### No audio

- Verify audio track is selected in track picker
- Check Apple TV volume
- Try selecting a different audio track

### Subtitles not showing

- Verify subtitles are enabled in track picker
- Try a different subtitle track
- Check subtitle format compatibility

### Playback stuttering

- Check network bandwidth
- Lower quality if available (via transcoding)
- Ensure no other devices are heavily using the network
