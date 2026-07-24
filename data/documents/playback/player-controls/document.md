---
order: 20
---

# Player Controls

Navigate playback with the Siri Remote. On iPhone and iPad the same controls are touch-first: tap to reveal them, drag the timeline to scrub, and the same action buttons sit in the same places.



## Control Bar

Tap the touch surface to show controls:

- Title, with the show and episode context line (hideable in settings)
- Progress bar with buffered content indicator and chapter markers
- Elapsed time on the left; the clock time your video ends and time remaining on the right
- An action button row on the right side of the title

Controls auto-hide after a configurable timeout (3, 5, or 10 seconds). By default they also appear whenever you pause and stay up until you resume. Both behaviors live in **Settings > Playback > Controls**.



## Remote Gestures

| Action | Control |
|--------|---------|
| Play/Pause | Play/Pause button |
| Skip back / forward | Press left / right on the D-pad |
| Show controls | Tap the touch surface |
| Open the Playback Menu | Swipe down |
| Exit | Menu button |

The skip interval is configurable (5, 10, or 15 seconds). The Menu button behavior is configurable too: **Always Exit** leaves playback immediately, **Dismiss First** hides the controls on the first press and exits on the second.



## Action Buttons

An action row sits beside the title when controls are visible. Three buttons show by default:

| Button | What It Does |
|--------|--------------|
| **Playback Menu** | Opens the [Playback Menu](/playback/playback-menu). Always available |
| **Pin** | Captures the current moment as a [timestamp pin](/library/shortcuts): position plus a thumbnail of the frame. A pill confirms "Pinned at [time]" |
| **Next Episode** | Jumps to the next episode (or re-rolls during shuffle) |

Four more can be enabled in **Settings > Playback > Controls > Action Buttons**: **Bitrate**, **Technical Info**, **Autoplay** (toggles autoplay for the session), and **Play / Pause**. Reorder or hide everything except the Playback Menu.



## Scrubbing

With controls visible:

1. Swipe left/right to scrub through the timeline
2. A floating thumbnail with a time pill follows the playhead
3. The current chapter name appears under the timestamps
4. Release to seek

**Seek Mode** in **Settings > Playback > Controls** decides how seeking engages:

| Mode | Behavior |
|------|----------|
| **Locked** | Click the progress bar to enter seek mode first |
| **Limited** | D-pad skips instantly; touch scrubbing requires a click |
| **Unlocked** | Both D-pad and touch work immediately (default) |

Scrub speed is adjustable with **Scrub Sensitivity**. Trident generates seek thumbnails from the actual video, so previews work even on servers without trickplay images.



## Skip Segments

When your backend provides segment data, a skip button appears at the right moment: **Skip Intro**, **Skip Credits**, **Skip Recap**, **Skip Preview**, or **Skip Ad**. On Jellyfin, segment data can come from the Intro Skipper plugin or Jellyfin 10.11 media segments; availability may differ on future backends.

- With controls hidden, the button appears as a standalone pill. Pressing Select skips even though controls are down. It dismisses itself if ignored.
- With **Auto Skip** on (**Settings > Playback > Autoplay**), segments skip without a button press.



## Up Next

When an episode ends, Up Next counts down to the next one:

- **Auto countdown (default):** the countdown runs the length of the end credits as an ambient ring, then expands for the final seconds. Long credits don't mean a long wait; short credits don't cut you off.
- **Fixed countdown:** a set 10, 20, or 30 seconds with a **Play Now** button.

Press Menu to cancel and let the credits roll. Autoplay can also carry across seasons, and through movie collections if you enable **Autoplay Collections**. All of it lives in **Settings > Playback > Autoplay**.



## Shuffle

When a series is playing in [shuffle mode](/browsing/item-details/tv-shows), a corner prompt offers **Skip Episode** to re-roll, and each episode opens with a title card telling you what you landed on.



## Screensaver

Playing video always blocks the screensaver. While paused, the system is allowed to start it unless you turn on **Prevent Screensaver on Pause** in **Settings > Playback > Advanced**.
