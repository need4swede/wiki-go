---
order: 20
---

# Player Controls

Navigate playback with the Siri Remote. On iPhone and iPad the equivalent
controls are touch-first: tap to reveal them and drag the timeline to scrub.
Platform-only actions are called out below.



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



## iPhone & iPad In-Player Controls

The touch player’s top row is configurable under **Settings > Playback >
Controls > Action Buttons**. Its defaults are:

| Button | What It Does |
|--------|--------------|
| **Playback Menu** | Opens audio, subtitle, chapter, quality, and related session controls. It can be moved but never hidden |
| **Rotate** | Switches between portrait and one landscape direction |
| **Fit / Fill** | Fits the whole picture or fills the screen |

**Pin Timestamp** is also available and starts hidden. Enabling it captures
the current playback position plus a local frame thumbnail, then syncs the Pin
metadata with your other devices. You can reorder every action and hide any
action except Playback Menu.

The Rotate action behaves as follows:

- From portrait, it rotates 90 degrees clockwise into landscape.
- From either landscape direction, it returns to portrait.

It does not rotate endlessly through every screen direction. The choice lasts
only for the current playback session, so it is useful when system Rotation
Lock is enabled without changing **Settings > Playback > Player >
Orientation**. See [Playback Settings](/settings/playback)
for the Auto and Landscape startup options.



## iPhone & iPad Outside-App Controls

With [Picture in Picture](/ios/playback#using-picture-in-picture) enabled,
leaving Neptune during playback opens a system floating window automatically.
Tap it for Play/Pause and skip controls, or return to Neptune with its
full-screen control. Neptune does not add a separate Picture in Picture button
to the in-app player.

With [Background Playback](/ios/playback#background-playback-and-system-controls)
enabled, the Lock Screen and Control Center show Now Playing information with
Play/Pause, 15-second skips, and position scrubbing. Seeking a transcode from
outside Neptune may be unavailable; return to the full-screen player for that
seek.



## Apple TV Action Buttons

On Apple TV, an action row sits beside the title when controls are visible.
Three buttons show by default:

| Button | What It Does |
|--------|--------------|
| **Playback Menu** | Opens the [Playback Menu](/playback/playback-menu). Always available |
| **Pin** | Captures the current moment as a [timestamp pin](/library/shortcuts): position plus a thumbnail of the frame. A pill confirms "Pinned at [time]" |
| **Next Episode** | Jumps to the next episode (or re-rolls during shuffle) |

Four more can be enabled in **Settings > Playback > Controls > Action Buttons**: **Bitrate**, **Technical Info**, **Autoplay** (toggles autoplay for the session), and **Play / Pause**. Reorder or hide everything except the Playback Menu.

iPhone/iPad and Apple TV store separate action layouts, so platform-only
buttons never appear on the wrong device. Both layouts participate in Settings
Sync, Settings Profiles, Device Overrides, and administrator management.



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

Scrub speed is adjustable with **Scrub Sensitivity**.

### Where Seek Previews Come From

Neptune has two sources and uses whichever fits the item:

| Source | When It Is Used |
|--------|-----------------|
| **Backend preview images** | Your backend provides native preview images for the item. Neptune downloads the available sprite sheets and reads tiles out of them |
| **Live extraction** | Everything else. Trident decodes frames from the video itself while you scrub |

Trickplay is faster on remote connections, since one downloaded sheet covers
roughly a hundred scrub positions instead of a fresh seek per preview. HDR and
Dolby Vision sheets are not assumed to have correct color: some servers
already tone-map them to SDR, while others can place HDR values in an
SDR-labelled image. Neptune checks the sheet once, leaves correctly converted
images alone, and sends affected tiles through the same HDR-to-SDR color path
used for live extraction. This avoids both washed-out previews and double tone
mapping.

Live extraction generates a preview directly from the video when native
images are missing, incomplete, disabled, or cannot be loaded. It needs no
pre-generated artwork from the backend, which is why it remains the fallback.

Neptune switches between them per item, and per position within an item. A
partly generated trickplay set covers the beginning of a movie with tiles and
the rest with live frames.

**Settings > Playback > Controls > Timeline > Trickplay** controls this and is
on by default. Turn it off to always extract live frames. Nothing changes for
items where your backend provides no native preview images.

Neptune uses this same source order for every backend that exposes native
preview images. On Jellyfin, enable trickplay in the server's library settings
and let it process your library. Neptune picks the images up on the next
playback with no further setup.



## Skip Segments

When your backend provides segment data, a skip button appears at the right moment: **Skip Intro**, **Skip Credits**, **Skip Recap**, **Skip Preview**, or **Skip Ad**. On Jellyfin, segment data can come from the Intro Skipper plugin or Jellyfin 10.11 media segments; availability may differ on future backends.

- With controls hidden, the button appears as a standalone pill. Pressing Select skips even though controls are down. It dismisses itself if ignored.
- With **Auto Skip** on (**Settings > Playback > Autoplay**), segments skip without a button press.



## Up Next

When an episode ends, Up Next counts down to the next one:

- **Auto countdown (default):** the countdown runs the length of the end credits as an ambient ring, then expands for the final seconds. Long credits don't mean a long wait; short credits don't cut you off.
- **Fixed countdown:** a set 10, 20, or 30 seconds with a **Play Now** button.

Press Menu to cancel and let the credits roll. Autoplay can also carry across seasons, and through movie collections if you enable **Autoplay Collections**. All of it lives in **Settings > Playback > Autoplay**.

On iPhone and iPad, Up Next does not start a fresh playback session while
Neptune remains backgrounded. The finished session stops and can be continued
from Continue Watching after you return.



## Shuffle

When a series is playing in [shuffle mode](/browsing/item-details/tv-shows), a corner prompt offers **Skip Episode** to re-roll, and each episode opens with a title card telling you what you landed on.



## Screensaver

Playing video always blocks the screensaver. While paused, the system is allowed to start it unless you turn on **Prevent Screensaver on Pause** in **Settings > Playback > Advanced**.
