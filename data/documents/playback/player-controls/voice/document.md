---
order: 30
---

# Siri Voice Commands

You can control playback by asking Siri while a video is playing in Neptune.

Voice commands work on Apple TV, iPhone, and iPad.

For scrubbing, skip segments, Up Next, and other playback behavior shared by every control method, see [Player Controls](/playback/player-controls).

## Asking Siri

On Apple TV, press and hold the Siri button on the remote, say the command, then release the button.

On iPhone and iPad, say "Hey Siri" or hold the side button, then say the command.

Siri passes the command to Neptune while a video is playing, so you don't need to say "in Neptune".

## Commands

| Say | What Happens |
| --- | --- |
| "Pause" | Pauses playback |
| "Play" or "Resume" | Resumes playback |
| "Skip forward 90 seconds" | Skips ahead by the amount you say |
| "Go back 2 minutes" | Skips back by the amount you say |
| "Skip forward" or "Skip back" | Skips by your **Skip Interval** |
| "Skip to 45 minutes" | Jumps to that point in the video |
| "Start over" | Jumps to the beginning |
| "Next episode" | Plays the next episode (Apple TV) |
| "Previous episode" | Plays the previous episode (Apple TV) |

Siri understands seconds, minutes, and hours, so "Skip to 1 hour 20 minutes" and "Go back a minute" work too.

When you don't say an amount, Neptune uses **Skip Interval** in **Settings > Playback > Controls**: 5, 10, or 15 seconds (10 seconds by default).

## How Commands Behave

Skipping back past the beginning starts the video from the start.

On Apple TV, skipping forward past the end stops one second before it, so the video still finishes normally and Up Next can appear.

Commands keep the current play state, so skipping while paused moves the position and stays paused.

On transcoded streams, a skip can take a moment longer while the server restarts the stream at the new position.

On Apple TV, saying "Stop" pauses playback instead of leaving the player.

Press the Menu button to exit.

## Not Supported Yet

These commands aren't available yet:

- Subtitle and audio commands, such as "Turn on subtitles" or "What did they say?"
- Starting a title by name, such as "Play Gladiator on Neptune"
- Next and previous episode on iPhone and iPad
