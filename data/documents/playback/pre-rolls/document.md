---
order: 67
---

# Pre-Rolls

Pre-Rolls play short clips before a movie or episode, like the bumpers and trailers you see before a film in a theater.
They are off by default and work without Neptune Pro, on Apple TV, iPhone, and iPad.

Neptune does not store or manage the clips.
You set up the files, categories, and schedules on your server or in NeXroll, and Neptune plays what they provide.

## Turn Them On

Open **Settings > Playback > Pre-Rolls** and turn on **Enable Pre-Rolls**.

| Setting | What It Does |
|---------|--------------|
| **Enable Pre-Rolls** | Plays bumpers and trailers before a feature (default off) |
| **Play Before** | **Movies Only**, **Movies & Episodes**, or **All Videos** (default Movies Only) |
| **Skip When Resuming** | Goes straight to the feature when you resume something you started (default on) |
| **Skip on Auto-Play** | Skips them when the next episode plays on its own (default on) |
| **Maximum Pre-Rolls** | How many play before each feature: 1, 2, 3, 5, or Unlimited (default 3) |
| **Skip Behavior** | When the Skip button appears: **Skip Anytime**, **After 5 Seconds**, or **Theater Mode (No Skip)** (default Skip Anytime) |
| **Show Notification Badge** | Shows a counter such as Pre-Roll 1 of 3, and the title that plays next (default off) |

The Sources section appears once Pre-Rolls is on.

## Where Pre-Rolls Come From

| Source | What It Is |
|--------|------------|
| **From Server** | The pre-rolls set up on your media server (default on) |
| **From NeXroll** | Pre-rolls from your NeXroll server (default on) |

When both are on, Neptune asks NeXroll first, then your server.

| Server | What **From Server** Uses |
|--------|---------------------------|
| **Jellyfin** | Your server's intros plugin |
| **Emby** | Your server's intros |
| **Plex** | The cinema trailers set up in Plex |
| **Silo** | Silo does not support pre-rolls at this time. Use NeXroll |

If your server can't provide pre-rolls, the page says so.

## Connect NeXroll

NeXroll is a separate self-hosted server for managing pre-rolls.
It works with every server Neptune supports.

Neptune connects on its own when it can.
On Jellyfin with the NeXroll Intros plugin, it picks up your NeXroll address and API key automatically.
Otherwise it looks for NeXroll on the same machine as your media server and fills in the address it finds.

To connect by hand, choose **NeXroll Server** and enter the address and API key.
On Apple TV, a QR code opens NeXroll's dashboard on your phone so you can copy the key.
Once connected, the row shows the NeXroll version and a **Disconnect** button.

Your NeXroll API key stays on the device.
It isn't included in backups or diagnostic logs.

## While a Pre-Roll Plays

A **Skip** button appears according to **Skip Behavior**.
**Skip** moves to the next pre-roll, and **Skip All** goes straight to the feature.
In **Theater Mode**, there is no Skip button and the pre-rolls play through.

With **Show Notification Badge** on, a badge reads **Pre-Roll 1 of 3**, or **Trailer 1 of 3**, with **Up next** and the feature's title.

Pre-rolls play at normal speed, even if you chose another [Playback Speed](/playback/playback-menu#video).
Your speed applies to the feature that follows.

Pre-rolls stay out of your Activity history, don't teach [Conductor](/playback/conductor), and never change what is marked watched.
If a pre-roll can't load, or the source takes too long to answer, Neptune moves on to the next one or straight to the feature.

## Related

- [Playback Settings](/settings/playback)
- [Skip Intros](/playback/skip-intros)
- [Up Next](/playback/up-next)
