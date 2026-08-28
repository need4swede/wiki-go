---
order: 20
---

# Playback Settings

Configure video playback behavior, controls, and audio.
Apple TV organizes the screen into **Player**, **Controls**, **Autoplay**, **Audio**, and **Advanced** tabs. iPhone and iPad present their supported controls as sections and add **Background & Picture in Picture**.

## Player

### Engine

Apple TV lets you choose the playback engine. iPhone and iPad use Trident for all playback, so they do not show an engine picker.

| Engine | Description |
|--------|-------------|
| **Trident** | Neptune's custom player, designed for direct play (default) |
| **AVPlayer** | Apple's native player. The server transcodes incompatible formats |

See [Trident Player](/playback/trident-player) for what Trident supports.

### Playback Mode

| Mode | Description |
|------|-------------|
| **Direct Play** | Plays the file as-is from your server. No re-encoding, no quality loss (default) |
| **Transcode** | Your server re-encodes on-the-fly to fit a target bitrate |

Choosing Transcode reveals:

| Setting | Description |
|---------|-------------|
| **Target Bitrate** | 1 to 120 Mbps. The server keeps the stream within this cap |
| **Always Transcode** | Transcode even files that fit under the cap |

You can also change quality per-session from the [Playback Menu](/playback/playback-menu)'s Video tab.

### Video Zoom

**Video Zoom** controls how the picture uses the screen.
You can choose a default under **Settings > Playback > Player**, then change it at any time from the player’s **Video > Zoom** menu.

| Mode | Available On | What It Does |
|------|--------------|--------------|
| **Fit** | iPhone, iPad, and Apple TV | Shows the entire picture, centered. Black bars may appear when the video and screen have different shapes. |
| **Adaptive** | iPhone | In landscape, uses more of the display when it can while keeping the visible picture clear of the Dynamic Island or camera area. Narrower video, including 4:3, stays centered when enlarging it would not help. |
| **Fill** | iPhone, iPad, and Apple TV | Fills the display from edge to edge by cropping part of the picture. On iPhone, the picture may extend behind the Dynamic Island or camera area. |

Adaptive makes the decision separately for each video.
If centered Fit is the best presentation for a particular title, the selected mode still remains Adaptive and will adjust again for the next video.

### Orientation (iPhone & iPad)

The **Orientation** picker appears directly below **Video Zoom**:

| Setting | Description |
|---------|-------------|
| **Auto** | Opens playback in the current orientation and follows normal device rotation (default) |
| **Landscape** | Always opens playback 90 degrees clockwise from portrait |

The orientation button in the player switches the current session between portrait and that clockwise landscape direction.
It works even when system Rotation Lock is enabled and does not change the saved setting.
When playback ends, Neptune returns to the orientation used before the player opened.

## Controls

| Setting | Description |
|---------|-------------|
| **Show Controls on Pause** | Surface controls whenever playback pauses (default on) |
| **Controls Auto-Hide** | 3, 5, or 10 seconds |
| **Double Tap to Skip** | On iPhone and iPad, rapidly double-tap the left or right side of the video to skip backward or forward (default on) |
| **Skip Interval** | Move 5, 10, or 15 seconds with each skip action (default 10 seconds) |
| **Hide Title in Controls** | Drop the title block for a cleaner look |
| **Action Buttons** | Reorder or hide the buttons in the player controls (see [Player Controls](/playback/player-controls)) |
| **Playback Menu** | Choose which tabs appear in the in-player menu, and their order |
| **Back / Menu Button** | Always Exit, or Dismiss First |

On iPhone and iPad, a single tap anywhere on the video toggles the controls.
When **Double Tap to Skip** is on, a rapid double tap on the left third skips backward and one on the right third skips forward.
The double tap does not also trigger the single-tap control action.
See [Touch Controls](/playback/player-controls/touch#touch-gestures) for the complete gesture behavior.

**Action Buttons** defaults to **Playback Menu, Rotate, Video Zoom** on iPhone and iPad.
**Pin Timestamp** is available but hidden until you enable it.
Playback Menu cannot be disabled, although it can be moved.
Apple TV keeps its own action list and defaults, so device-specific controls do not cross into the wrong player.

Action order and visibility sync as separate platform settings.
Each can be kept on one device with a Device Override, saved in a Settings Profile, or managed and locked by a Neptune MDM administrator.

Timeline options: **Buffer Indicator**, **Chapter Markers**, **Seek Thumbnails**, and **Trickplay** (all on by default).

**Trickplay** decides where seek previews come from.
Leave it on and Neptune uses native preview images exposed by your backend, falling back to extracting frames from the video itself for anything those images do not cover.
Turn it off and Neptune always extracts its own frames.
It only appears while **Seek Thumbnails** is on, since that setting decides whether previews show at all.
HDR and Dolby Vision previews use the same color-normalization path on either source, without reprocessing server images that are already correct.
See [Player Controls](/playback/player-controls) for the platform-specific control guides.

iPhone and iPad place their supported timeline options in the **Controls** section.
Siri Remote behavior and the remaining Apple TV-only controls do not appear there.

Other seeking options: **Scrub Sensitivity** (1 to 10; default 7), **Resume on Seek**, and **Seek Mode** (Locked, Limited, or Unlocked) with an on-screen demo of each mode.

## Autoplay

| Setting | Description |
|---------|-------------|
| **Autoplay Next Episode** | Advance to the next episode automatically (default on) |
| **Autoplay Collections** | Advance through movie collections too (default off) |
| **Autoplay Across Seasons** | Keep going into the next season (default on) |
| **Autoplay Countdown** | **Auto** runs the countdown for the full length of the end credits; **Fixed** uses a set duration |
| **Autoplay Countdown Duration** | 10, 20, or 30 seconds |
| **Up Next Style** | Regular or Minimal (Fixed mode only; Auto always uses the minimal pill) |
| **Skip Intro / Credits** | Show a Skip button when your server provides segment data (default on) |
| **Auto Skip** | Skip intros and credits without pressing anything (default off) |

## Audio

| Setting | Description |
|---------|-------------|
| **EAC3-Atmos Passthrough** | Pass Dolby Atmos straight to your receiver instead of decoding. Requires an Atmos-capable receiver (default off) |
| **Audio Preset** | Default, Bass, or Voice |
| **Night Mode** | Off, On, or Auto with a start and end time (10:00 PM to 7:00 AM by default) |
| **A/V Sync Offset** | Up to half a second in either direction |

Track selection behavior (which language and track type get picked) lives in [Conductor](/playback/conductor).

## Background & Picture in Picture (iPhone & iPad)

These two settings are independent and on by default:

| Setting | Description |
|---------|-------------|
| **Picture in Picture** | Automatically continues video in a floating system window when you go Home or switch apps |
| **Background Playback** | Continues audio when Neptune is behind another app or the screen is locked |

Locking the screen does not start Picture in Picture; Background Playback controls that path.
With both settings off, playback pauses when Neptune leaves the foreground.

Changes apply to the next playback session.
See [Picture in Picture & Background Playback](/playback/outside-the-app) for the complete four-state behavior, Lock Screen and Control Center actions, subtitle and transcode limits, and troubleshooting.

## Advanced

| Setting | Description |
|---------|-------------|
| **Prevent Screensaver on Pause** | Keep the screensaver away while paused (default off) |
| **Full Video Caching** | When paused, cache the remaining video to disk (default off) |
| **De-Interlacing** | Auto, On, or Off. Removes combing artifacts from interlaced content like DVDs and broadcasts (default Auto) |

Ordinary caching remains active with **Full Video Caching** off and keeps a bounded working window for the current playback session.
With the setting on, pausing lets Neptune cache toward the end of the video using safe available storage.
It preserves a safe free-space margin, removes only already-watched cache blocks when more room is needed, and automatically resumes after storage headroom recovers.
The video does not need to fit in full before caching starts.

Full Video Caching is available on Apple TV, iPhone, and iPad.
On iPhone and iPad, leaving Neptune releases the extended cache back to its ordinary playback window.
Returning to the same paused session resumes caching.
A normal player close removes the temporary cache immediately, and Neptune cleans up an orphan on its next launch if an abrupt termination prevented normal close.

This is not an offline download.
Use [Downloads](/browsing/home-screen/downloads) for persistent offline viewing.
