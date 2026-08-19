---
order: 20
---

# Touch Controls

iPhone and iPad use touch-first player controls.
Tap the video to reveal or hide the controls, then use the timeline and action buttons directly.
For scrubbing, skip segments, Up Next, and other playback behavior shared with Apple TV, see [Player Controls](/playback/player-controls).

## Touch Gestures

A single tap anywhere on the video shows the controls when they are hidden and hides them when they are visible.

Turn on **Settings > Playback > Controls > Double Tap to Skip** to add directional seeking:

- rapidly double-tap the left third of the video to skip backward;
- rapidly double-tap the right third of the video to skip forward; and
- use **Skip Interval** in the same settings section to choose 5, 10, or 15 seconds (10 seconds by default).

The double-tap gesture takes priority over the single tap, so its first tap does not accidentally show or hide the controls.
A brief icon confirms the skip direction.
Repeated double taps continue from the last requested position, even while the video is still catching up to the previous seek.

## Action Buttons

The touch player’s top row is configurable under **Settings > Playback > Controls > Action Buttons**.
Its defaults are:

| Button | What It Does |
|--------|--------------|
| **Playback Menu** | Opens audio, subtitle, chapter, quality, and related session controls. It can be moved but never hidden |
| **Rotate** | Switches between portrait and one landscape direction |
| **Video Zoom** | Cycles through Fit, Adaptive, and Fill. iPad cycles between Fit and Fill |

On iPhone, **Adaptive** can use more landscape screen space while keeping the visible picture clear of the Dynamic Island or camera area.
It automatically keeps narrower video such as 4:3 centered when expanding it would provide no benefit.
See [Playback Settings](/settings/playback#video-zoom) for a comparison of all three modes.

**Pin Timestamp** is also available and starts hidden.
Enabling it captures the current playback position plus a local frame thumbnail, then syncs the Pin metadata with your other devices.
You can reorder every action and hide any action except Playback Menu.

## Orientation

The Rotate action behaves as follows:

- From portrait, it rotates 90 degrees clockwise into landscape.
- From either landscape direction, it returns to portrait.

It does not rotate endlessly through every screen direction.
The choice lasts only for the current playback session, so it is useful when system Rotation Lock is enabled without changing **Settings > Playback > Player > Orientation**.
See [Playback Settings](/settings/playback) for the Auto and Landscape startup options.

## Outside-App Controls

With [Picture in Picture](/ios/playback#using-picture-in-picture) enabled, leaving Neptune during playback opens a system floating window automatically.
Tap it for Play/Pause and skip controls, or return to Neptune with its full-screen control.
Neptune does not add a separate Picture in Picture button to the in-app player.

With [Background Playback](/ios/playback#background-playback-and-system-controls) enabled, the Lock Screen and Control Center show Now Playing information with Play/Pause, 15-second skips, and position scrubbing.
Seeking a transcode from outside Neptune may be unavailable; return to the full-screen player for that seek.
