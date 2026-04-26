---
order: 10
---

# Player Controls

Navigate playback with the Apple TV remote.



## Control Bar

Tap the touch surface to show controls:

- Progress bar with buffered content indicator
- Current position and duration
- Now playing title (can be hidden in settings)
- Chapter markers on the seek bar (when available)

Controls auto-hide after a configurable timeout (3, 5, or 10 seconds). You can also set controls to appear automatically when you pause. These options are in **Settings > Playback > Controls**.



## Quick Actions

| Action | Control |
|--------|---------|
| Play/Pause | Play/Pause button |
| Skip back 10s | Swipe left |
| Skip forward 10s | Swipe right |
| Show controls | Tap touch surface |
| Audio/Subtitles/Chapters | Swipe up or down |
| Exit | Menu button |

The Menu button behavior is configurable - it can either always exit the player, or dismiss the controls first and exit on the second press.



## Action Buttons

When the controls are visible, an action row sits below the timeline:

| Button | What It Does |
|--------|--------------|
| **Pin** | Capture the current moment as a [timestamp shortcut](/library/shortcuts#timestamp-shortcuts) - position plus a thumbnail of the current frame. A confirmation pill briefly shows "Pinned at [time]". |
| **Speed** | Cycle playback speed (0.5x through 2.0x) |
| **Info** | Open playback info: resolution, codec, HDR format, audio details |
| **Audio/Subs** | Quick jump to track selection |



## Track Selection (Playback Pill)

Swipe **up** or **down** during playback to open the track selection pill - a slim overlay at the top of the screen.

| Menu | What It Shows |
|------|---------------|
| **Audio** | Available audio tracks with language, codec, and channel layout |
| **Subtitles** | Subtitle tracks with language, format, and badges (Forced, SDH, External) |
| **Chapters** | Chapter list for quick navigation (when available) |

Swipe **left/right** to cycle between menus. Select a track to switch instantly - no rebuffering required. Press **Menu** or swipe down to dismiss.



## Scrubbing

With controls visible:

1. Swipe left/right to scrub through the timeline
2. Preview timestamp shows target position
3. Trickplay thumbnails show a visual preview (when available)
4. Release to seek

Faster swipes cover more distance. Seeking behavior can be customized via the Seek Mode Activation setting in **Settings > Playback > Controls**.



## Skip Segments

When the Intro Skipper plugin is installed on your Jellyfin server, a Skip button appears during:

- Intros
- Credits
- Recaps

Press Skip to jump past the segment. With **Auto Skip** enabled in **Settings > Plugins**, segments are skipped automatically without needing to press anything.



## Playback Speed

Speeds available: 0.5x, 0.75x, 1.0x, 1.25x, 1.5x, 2.0x

Resets to normal when starting new content.



## Autoplay

When an episode ends, a countdown appears before the next episode plays automatically. For collections (e.g., a movie franchise), the next movie in the series can also autoplay.

- Countdown duration is configurable (10, 20, or 30 seconds)
- Cancel during the countdown or skip ahead immediately
- Configure in **Settings > Playback > Autoplay**



## Playback Info

View technical details about the current stream:

- Resolution and codec
- HDR format
- Audio channels and codec
- File size and container
