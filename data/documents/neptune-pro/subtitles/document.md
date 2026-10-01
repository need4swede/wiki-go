---
order: 70
---

# Subtitles Pro

Subtitles Pro searches for and downloads an additional subtitle during playback, beyond whatever your media server already provides.

## Finding a Subtitle

Open the Subtitles tab of the [Playback Menu](/playback/playback-menu#subtitles) and select **Find More Subtitles**.

The search applies [Conductor](/playback/conductor)'s language and accessibility preferences automatically, including forced and SDH, so there is nothing to configure each time.

Results list language, type, and rating, with the strongest match surfaced first as the **Top Result**. On iPhone and iPad, if every configured language is already covered, or none can be matched confidently, Neptune opens this list instead of guessing.

## Real-Time Synchronization

Selecting a result downloads it, then Neptune checks the file's validity and compatibility with the exact version of the content you're playing. Using the [Trident](/playback/trident-player) engine, timing is analyzed and corrected against your current playback session in real time. The work happens automatically in the background, with a small syncing indicator while it runs.

The corrected subtitle is retained once synchronization finishes, so selecting it again later never repeats the process.

## Downloaded Subtitles

A downloaded subtitle appears directly in the ordinary Track list, labeled **Downloaded**, and plays back like any other track. Long-press it for **Delete Subtitle** to remove it from the device.

## Keep It Local, or Save to Your Server

Downloaded subtitles stay on the device by default. Turn on **Save Downloaded Subtitles to Server** under **Settings > Playback > Subtitles** to have Neptune copy future downloads to your server automatically once synchronized, or select **Save to Server** from the subtitle menu to do it for one download at a time.

A subtitle saved to your server becomes an ordinary server track, available to every other user and every other compatible client, synchronized and ready to play.

Saving may require a supported server version and an account with subtitle-management permission.
