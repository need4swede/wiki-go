---
order: 65
---

# Up Next

When an episode reaches its end credits, Neptune gets the next one ready.
The video you're watching shrinks into a window in the corner, and the next episode fills the screen behind it with its artwork, title, and description.
A **Next Episode** button counts down to it.

This works without Neptune Pro, on Apple TV, iPad, and iPhone in landscape.

## What You See

- **The show's logo**, or its name if it has no logo.
- **The season and episode number**, and the episode's title.
- **Runtime, air date, rating, and community score**, when your server has them.
- **A short description** of the episode.
- **Next Episode**, with the countdown filling the button from left to right.

The credits keep playing in the window the whole time, so you don't miss anything.
On Apple TV, movies in a collection get the same screen, and the button says **Next Movie**.

If spoiler protection is on for the show and you haven't started the next episode, Neptune hides its thumbnail and description.
See [Spoiler Protection](/browsing/item-details/tv-shows#spoiler-protection).

## What You Can Do

| Action | Apple TV | iPhone and iPad |
|--------|----------|-----------------|
| Start the next episode now | Select **Next Episode** | Tap **Next Episode** |
| Keep watching the credits full screen | Swipe right to the video and select it, or press **Back** | Tap the video |
| Get to the progress bar | Pause | Tap the video, then tap it again |
| Leave the player | Press **Back** twice | Tap the **X** in the corner |

On Apple TV, when you pause or bring up the controls, the video grows back to full screen so you can scrub.
Close the controls and it shrinks back into its window, right where it left off.
Seeking back before the credits cancels the countdown, and it comes back when you reach the credits again.

Going back to the credits doesn't turn off autoplay.
If you keep watching until the very end, the next episode still starts.
To stop after this episode, leave the player.

## Shuffle

During [shuffle](/browsing/item-details/tv-shows#shuffle-mode), a **Re-Shuffle** button sits next to **Next Episode**.
Each press picks a different random episode, and the countdown keeps going.
Whatever is on screen when the countdown ends is what plays.
Re-Shuffle is part of the Up Next screen, so it isn't on the countdown pill.

## Background Artwork

Open **Settings > Playback > Autoplay** and choose **Up Next Background**.

| Option | What It Shows |
|--------|---------------|
| **Episode** | The next episode's thumbnail, falling back to the show's artwork (default) |
| **Series** | The show's artwork, with the episode's thumbnail only if there's nothing else |

Some older episode thumbnails are small.
Neptune softens those a little so they don't look blocky on a big screen.

## Scenes in the Credits

Some shows have a scene during or after the credits, like a sitcom's closing joke.
Neptune checks for one before the credits start, so Up Next never covers it or skips past it.

It checks these in order, and the first one that can tell decides:

| Check | What It Looks For |
|-------|-------------------|
| **Subtitles** | Spoken lines during or after the credits. Song lyrics and "subtitles by" lines don't count. |
| **Your history with the show** | Whether you stayed for the end on earlier episodes, or went straight to the next one. |
| **The sound** | Talking or laughter, compared to credits music. |
| **Timing** | More than 30 seconds of video after the credits. |

You don't need subtitles turned on.
Neptune reads them quietly in the background, and it still works if you skip ahead into the credits.

When Neptune knows where the scene ends, the countdown starts right after it and Up Next shows as usual.
When it knows there's a scene but not where it ends, you get the countdown pill in the corner and the video stays full screen.

A preview of the next episode after the credits doesn't count as a scene.
Your history with a show is kept on this device for each account, so Neptune gets it right more often after an episode or two.
The sound check only runs when Neptune plays the original file.

## When You Get the Countdown Pill Instead

You get the small countdown pill in the corner instead of the Up Next screen:

- When an episode has a scene in the credits and Neptune can't tell where it ends. See [Scenes in the Credits](#scenes-in-the-credits).
- On iPhone held upright.
- With AVPlayer selected as the player in **Settings > Playback > Player**.

## Related Settings

Countdown length, autoplay across seasons, and collections live in [Playback Settings](/settings/playback#autoplay).
