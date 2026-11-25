---
order: 10
---

# Siri Remote

Apple TV uses the Siri Remote to reveal, navigate, and operate the in-player controls.

For scrubbing, skip segments, Up Next, and other playback behavior shared with touch devices, see [Player Controls](/playback/player-controls).

## Remote Controls

Lightly tap the Siri Remote surface without pressing it down to show controls.

Use the glass touch surface on the original black remote or the clickpad on newer Siri Remotes.

This touch-only gesture reveals the controls without selecting or highlighting one:

- Title, with the show and episode context line (hideable in settings)
- Progress bar with buffered content indicator and chapter markers
- Elapsed time on the left; the clock time your video ends and time remaining on the right
- An action button row on the right side of the title

Controls auto-hide after a configurable timeout (3, 5, or 10 seconds).

By default they also appear whenever you pause and stay up until you resume.

Both behaviors live in **Settings > Playback > Controls**.

## Remote Gestures

| Control | Action |
| --- | --- |
| Play/Pause button | Play/Pause |
| Physically click the touch surface or clickpad | Pause or resume when no control is focused |
| Press left / right on the D-pad | Skip back / forward |
| Lightly tap the touch surface without clicking | Take a peek at the controls |
| Navigate focus onto it, then click | Use an onscreen control |
| Swipe down while controls are hidden | Open the Playback Menu at Audio |
| Menu button | Step back in a menu, dismiss controls, or leave playback |

When a **Skip Intro** or **Skip Credits** prompt appears with the controls hidden, click the touch surface to skip that segment.
Otherwise, clicking without a control focused pauses or resumes playback.

The Menu button behavior is configurable:

**Always Exit** leaves playback immediately, while **Dismiss First** hides the controls on the first press and exits on the second.

## Touch to Fast Forward

Rest a finger anywhere on the touch surface, without pressing, for about half a second to scan the title.
The picture pauses and the controls come up.
The timeline moves forward with a preview and the speed beside the time.
Nothing is heard while it scans.

| Action | Result |
| --- | --- |
| Lift your finger | Neptune waits a moment, then plays from where the scan reached |
| Touch again before it plays | Carry on faster from the same place |
| Click the right edge | Faster |
| Click the left edge | Slower, then rewind |
| Select or Play/Pause | Play from the current spot at once |
| Menu | Cancel and return to where you started |

The speeds are numbered 1 to 4, and they move through the title at 10, 30, 120, and 200 seconds per second.
Each new touch steps to the next speed you picked in settings, 2 and 4 by default.
A scan stops at either end of the title.

Turn it off, or choose the speeds, in **Settings > Playback > Controls**.
See [Playback Settings](/settings/playback#controls).

## Action Buttons

On Apple TV, an action row sits beside the title when controls are visible.

Six buttons show by default:

| Button | What It Does |
| --- | --- |
| **Audio** | Opens audio tracks, sound presets, Night Mode, and A/V sync |
| **Subtitles** | Opens subtitle tracks, Off, style, timing, and position |
| **Video** | Opens quality, zoom, and de-interlacing |
| **Chapters** | Opens the chapter list at your current chapter. Appears when chapters and seeking are available |
| **Info** | Shows the current stream's technical details |
| **Pin** | Captures the current moment as a [timestamp pin](/library/shortcuts): position plus a thumbnail of the frame. A pill confirms "Pinned at \[time\]" |

Audio, Subtitles, Video, Chapters, and Info open the [Playback Menu](/playback/playback-menu) on the right side of the screen.
Left/right switches categories, up/down moves through the rows, and Select applies a choice.
Back closes expanded options before closing the menu and returning to the action row.

The Subtitles icon fills while subtitles are on.
It also shows progress while Neptune downloads a subtitle or checks its timing, then confirms the result.

Six more buttons can be enabled in **Settings > Playback > Controls > Action Buttons**:

| Button | What It Does |
| --- | --- |
| **Next Episode** | Skips to the next episode, or picks another during shuffle. Appears for episodes and is disabled when there's nothing next |
| **Bitrate** | Opens the streaming quality picker |
| **Technical Info** | Shows codec and stream information over the video |
| **Autoplay** | Toggles autoplay for the session |
| **Play / Pause** | Pauses or resumes from the action row |
| **Lock** | Locks the player so only Lock and Play/Pause remain |

**Lock** locks the player for a child.
Only Lock and Play/Pause stay, and the lock lasts through the next episodes until the player closes.
Up Next still plays the next episode.
To unlock, highlight and hold Select on Lock until its ring fills, then answer a question such as **What is seven times eight?**
A wrong answer brings a new question, and three wrong answers in a row wait 30 seconds.
**Allow Pausing When Locked** in **Settings > Playback > Controls** decides whether Play/Pause works while locked (default on).

See [Playback Settings](/settings/playback#autoplay) for the autoplay behavior and related settings.

You can reorder every action and hide any action except Audio and Subtitles.

iPhone/iPad and Apple TV store separate action layouts, so platform-only buttons never appear on the wrong device.

Both layouts participate in Settings Sync, Settings Profiles, Device Overrides, and administrator management.
