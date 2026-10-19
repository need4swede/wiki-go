---
order: 60
---

# Skip Intros

Neptune shows a **Skip** button during intros, recaps, end credits, and previews.
Select it to jump to where the segment ends, or let Neptune skip for you.

This works without Neptune Pro, on Apple TV, iPhone, and iPad.

## Turn It On or Off

Open **Settings > Playback > Autoplay**:

| Setting | What It Does |
|---------|--------------|
| **Skip Intro / Credits** | Shows a Skip button when Neptune has timestamps for what you're watching (default on) |
| **Auto Skip** | Skips the segment as soon as it starts, without showing the button (default off) |

On iPhone and iPad, the same two settings are called **Show Skip Buttons** and **Skip Automatically**, under **Intros & Credits**.

Turning off **Skip Intro / Credits** turns off every source below.

## Where the Timestamps Come From

Neptune looks in two places and combines what it finds.
You don't need to set anything up for either one.

**Your server comes first.**
If your Jellyfin server has segments, from Jellyfin 10.11 media segments or a plugin like Intro Skipper, Neptune uses them.
On Emby, Neptune uses the intro and credits markers Emby saves with each episode.
Your server measured these on your own file, so they always win.

**TheIntroDB fills in the rest.**
[TheIntroDB](https://theintrodb.org) is a free, community-built database of intro, recap, credits, and preview timestamps.
When your server has nothing for a segment, Neptune asks TheIntroDB.
This means Skip Intro works on shows and movies your server has never analyzed, even if you have no plugins installed.

If your server has an intro but no credits, you get your server's intro and TheIntroDB's credits.
Neptune never shows two buttons for the same intro.

## Downloads

When you [download](/neptune-pro/downloads) an episode or movie, Neptune saves its timestamps with it.
The Skip button still works when you watch offline.

Downloads made before Neptune 1.4 don't have saved timestamps.
Download them again to add them.

## When There's No Skip Button

Not every title has timestamps yet.
TheIntroDB is built by people who add them, so newer or less popular shows may be missing.

Neptune also skips the lookup when it can't be sure it has the right episode.
This happens when a show uses an episode order TheIntroDB doesn't support, such as some anime or a custom episode group.
Showing no button is better than skipping part of the wrong episode.

If a Skip button lands a little early or late, your copy may be a different cut than the one people timed.
Neptune sends your file's runtime so TheIntroDB can pick the closest version, but PAL releases and streaming title cards can still shift things by a few seconds.

When the only timestamps TheIntroDB has were taken on a much longer or shorter cut, such as an extended edition, Neptune keeps just the intro or recap at the very start.
Credits and anything later in the file are skipped, because on a different cut they could land in the middle of a scene.

## Privacy

To look up timestamps, Neptune sends TheIntroDB the show or movie ID, the season and episode number, and the file's runtime.
Like any website, TheIntroDB also sees your IP address.
Neptune doesn't send your name, account, server address, or anything about your library.

Results are kept on your device for a day, so replaying an episode doesn't look it up again.

## Supporting TheIntroDB

Neptune is a proud sponsor of TheIntroDB.
Every timestamp in it was added by someone who sat through an intro so the rest of us don't have to, and sponsoring it is our way of saying thanks and helping keep it free.

Skip Intro with TheIntroDB is free for every Neptune user, with no Pro subscription and nothing to install on your server.

If a show you watch is missing timestamps, you can add them at [theintrodb.org](https://theintrodb.org).
They become available in Neptune once they're accepted.

You can find TheIntroDB's credit in **Settings > About > Acknowledgements**.
