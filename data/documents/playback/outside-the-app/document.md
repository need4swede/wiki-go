---
order: 50
---

# Picture in Picture & Background Playback

On iPhone and iPad, Neptune can keep a video session going after the app leaves the foreground in two independent ways:

- **Picture in Picture** continues video in a system-owned floating window when you go Home or switch to another app.
- **Background Playback** continues audio when Neptune is behind another app or the screen locks.

Both features are available without Neptune Pro and are on by default.
They work with streamed media and with media already [downloaded through Neptune Pro](/neptune-pro/downloads).

## Turn Them On or Off

Open **Settings > Playback > Background & Picture in Picture**:

| Setting | What It Controls |
|---------|------------------|
| **Picture in Picture** | Automatically hands the playing video to a floating window when you leave Neptune |
| **Background Playback** | Keeps audio playing while Neptune is in the background or the screen is locked |

Neptune reads both choices when a playback session starts.
If you change a toggle, stop the current video and start a new session before testing the new behavior.

## How the Settings Work Together

The toggles do not enable or disable each other:

| Picture in Picture | Background Playback | Go Home or Switch Apps | Lock the Screen |
|--------------------|---------------------|------------------------|-----------------|
| On | On | Video continues in Picture in Picture | Audio continues |
| On | Off | Video continues in Picture in Picture | Playback pauses |
| Off | On | Audio continues without a video window | Audio continues |
| Off | Off | Playback pauses | Playback pauses |

Locking the screen does not start Picture in Picture.
The **Background Playback** toggle decides what happens when you lock directly from Neptune.

Opening Control Center is not the same as fully backgrounding the app.
Playback keeps going when either continuation setting is on.
With both off, Neptune uses its normal foreground-only behavior and pauses when it becomes inactive.

## Using Picture in Picture

Start a video, then swipe Home, press the Home button, or switch to another app.
Neptune uses iOS’s automatic Picture in Picture path; there is no separate Picture in Picture button in the player.

The floating window uses the standard iOS controls:

- tap it to show or hide playback controls;
- drag it to another corner;
- pinch to resize it;
- drag it partly offscreen when you need the space;
- use Play/Pause or the skip controls;
- tap the full-screen control to return to Neptune; or
- tap Close to end Picture in Picture.

The full-screen Neptune player stays open underneath.
Returning from the floating window restores that same playback session instead of opening a new one.

If you close Picture in Picture while Neptune remains in the background, Neptune falls back to the **Background Playback** choice.
Audio continues when it is on and pauses when it is off.

## Background Playback and System Controls

With **Background Playback** on, video presentation stops when there is no Picture in Picture window, but the audio, position, and server playback session keep advancing.
Returning to Neptune rejoins the video at the current position.

Whenever a session continues outside Neptune, the Lock Screen and Control Center show the title, series name when applicable, duration, elapsed time, and available artwork.
Their transport controls support:

- Play and Pause
- Skip back by the configured **Skip Interval** (5, 10, or 15 seconds)
- Skip forward by the configured **Skip Interval**
- Scrubbing to a position

Headphone and other system media Play/Pause commands use the same session.

## Playback Limits Outside Neptune

- **Up Next does not start another item while Neptune is backgrounded.**
  When the current item finishes, the session stops cleanly.
  Return to Neptune and resume from Continue Watching.
- **Seeking a transcode requires Neptune to be active.**
  Skip and scrub commands from Picture in Picture, the Lock Screen, or Control Center may be unavailable for a transcoded stream.
  Return to the full-screen player to seek.
  Direct Play and downloaded sessions can seek outside the app.
- **App-rendered text subtitles do not appear in Picture in Picture.**
  Bitmap subtitles composited into the video frames can appear.
  Return to the full-screen player for Neptune’s text and ASS subtitle overlays.
- When Picture in Picture is enabled and supported, Trident uses its system-compatible display layer for the entire playback session so iOS can capture the video.
  This is automatic and does not change the Direct Play or Transcode choice.
- A transcoded session may briefly rebuild its video path when Neptune returns to the foreground.
  Direct Play normally rejoins without a server restart.
- Phone calls, audio-route changes, and other system interruptions can pause playback.
  Neptune follows the interruption’s resume instruction when it is safe to continue.

## Sync and Administration

The two toggles are profile preferences.
With [Backup & Restore](/settings/backup), they follow the signed-in server account to other Neptune clients.
A Jellyfin administrator can also set or push them through [Neptune MDM](/plugins/mdm).

They have no effect on Apple TV.
The Apple TV player keeps its existing foreground lifecycle even when the synchronized values are present.

## Troubleshooting

| Problem | What to Check |
|---------|---------------|
| No floating window appears | Turn on Picture in Picture before starting the session, confirm iOS allows Picture in Picture on the device, and leave Neptune with Home or app switching rather than locking the screen |
| Audio stops after locking | Turn on Background Playback, then start a new playback session |
| The Picture in Picture window closes but audio keeps playing | Background Playback is still on; turn it off before the next session if closing Picture in Picture should pause |
| Skip or scrub does nothing outside Neptune | The stream may be transcoding; return to Neptune and seek from the full-screen player |
| The next episode does not start | Up Next deliberately does not chain while the app remains backgrounded |
| Subtitles are missing from the floating window | Neptune-rendered text and ASS overlays stay in the full-screen player |
