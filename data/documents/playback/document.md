---
order: 70
---

# Playback

Everything from pressing Play to choosing tracks and scrubbing.

## In This Section

| Page | Description |
|------|-------------|
| [Trident Player](/playback/trident-player) | Neptune's direct-play engine, supported formats, HDR, audio, and subtitles |
| [Player Controls](/playback/player-controls) | Transport bar, scrubbing, skip segments, Up Next |
| [Playback Menu](/playback/playback-menu) | The in-player menu: audio, subtitles, video, playback speed, chapters, episodes, info |
| [Pre-Rolls](/playback/pre-rolls) | Cinema bumpers and trailers before a movie, from your server or NeXroll |
| [Conductor](/playback/conductor) | Track and version selection, with Pro live Language Rules and optional Auto learning |
| [Picture in Picture & Background Playback](/playback/outside-the-app) | Continue video or audio outside the iPhone and iPad app |
| [Skip Intros](/playback/skip-intros) | Skip buttons for intros, recaps, credits, and previews, from your server and TheIntroDB |
| [Up Next](/playback/up-next) | The next episode's screen at the end credits, with a countdown |

## Playback Modes

Everything plays in [Trident](/playback/trident-player), Neptune's own player, on Apple TV, iPhone, and iPad.

On iPhone and iPad, **Settings > Playback > Player > Orientation** can leave playback on Auto or always start it in clockwise Landscape.
The in-player orientation button switches the current session between portrait and landscape, including while system Rotation Lock is enabled.

The **Playback Mode** setting decides how the file reaches the player:

- **Direct Play.**
  Plays the original file from your server with no re-encoding or quality loss.
- **Transcode.**
  Asks a compatible backend to re-encode the video to your target bitrate.
  Useful when the connection cannot sustain the source bitrate.

You can also change quality mid-playback from the [Playback Menu](/playback/playback-menu) without losing your place, and change the speed from 0.5× to 2× under **Video > Playback Speed**.

See [Playback Settings](/settings/playback) for configuration details.

## Starting Playback

**From Home:** Select Continue Watching or Next Up items.

**From Details:** Press Play, pick a version if the item has several, or select an episode.

When playback starts, [Conductor](/playback/conductor) picks the audio track, subtitle track, and preferred version from your preferences.
Neptune Pro can apply Language Rules after live audio changes in Manual or Auto, and Auto mode can also learn from choices you make while watching.

## During Playback

On Apple TV, lightly tap the Siri Remote surface without clicking to reveal the progress bar and controls without selecting one.
Physically click the surface when no onscreen control is focused to pause or resume; after navigating focus onto a control, the same click activates that control instead.
This works with both the original black Siri Remote's glass surface and the clickpad on newer remotes.
See [Siri Remote Controls](/playback/player-controls/siri-remote) for progress-bar clicks and the actionable Skip Intro/Credits exception.

On iPhone and iPad, tap the video to reveal the progress bar and controls.

On Apple TV, choose **Audio**, **Subtitles**, **Video**, **Chapters**, **Episodes**, or **Info** from the action row to open that category on the right.
A downward swipe while controls are hidden opens Audio.
On iPhone and iPad, tap **Audio**, **Subtitles**, **Video**, **Chapters**, **Episodes**, or **Info** in the controls to open that category in a column at the side.
See [Playback Menu](/playback/playback-menu) for track selection, picture options, chapters, episodes, and stream info.

## When Playback Is Loading or Fails

While a video starts, or reloads after a quality or track change, Neptune shows a small animation instead of a spinner.
It is one of four, picked at random: a ripple, rising bubbles, water sloshing in a porthole, or a compass needle.
On iPhone and iPad it only appears if loading takes a moment, so quick changes show nothing.

If the file can't be played on your device, Neptune asks the server for a converted version once and continues from the same place, with a short note on screen.
If the connection drops or the stream stalls, the player stays open, shows **Reconnecting**, and keeps trying to reopen the stream at the same place for up to about two minutes.
Downloaded videos are never reloaded this way.

If playback still can't continue, an error appears with **Retry** beside **Dismiss**.
Retry starts the same title again at the place it stopped.
A stream that ends well before the end of the title is not marked watched, and the next episode does not start.
Neptune reopens it at the same place first, and shows an error if that doesn't help.

## Leaving Neptune on iPhone or iPad

**Picture in Picture** can move the video into a floating system window when you go Home or switch apps.
**Background Playback** can instead keep the audio playing when Neptune is behind another app or the screen locks.
The two settings are independent and on by default under **Settings > Playback**.

Lock Screen and Control Center controls provide Play/Pause, 15-second skips, and scrubbing.
Up Next deliberately stops at the end of the current item while Neptune is backgrounded.
See [Picture in Picture & Background Playback](/playback/outside-the-app) for setup and the complete behavior matrix.

## Auto-Play

TV shows advance to the next episode when one finishes.
At the end credits, the video shrinks into a corner and the next episode fills the screen with a countdown.
See [Up Next](/playback/up-next).
Movies in a collection can also auto-advance.
Configure behavior in **Settings > Playback > Autoplay**.
See [Playback Settings](/settings/playback#autoplay) for details.
