---
order: 40
---

# Downloads

Neptune Pro lets you save movies and episodes to the current device and play them without a connection to your media server.

## Download Options

| Option | Best For | Result |
|--------|----------|--------|
| **Original quality** | Maximum quality and retaining embedded tracks | Downloads the source file without re-encoding |
| **Transcoded quality** | Saving device storage or reducing transfer size | Asks the backend to create a smaller copy at the selected profile |

Neptune includes High, Medium, and Low transcode profiles by default, while the [Neptune Transcoder](/plugins/transcoder) plugin grants a server administrator the ability to replace that ladder and decide whether Original quality is offered.

## The Offline Experience

Downloads are more than saved video files.
Neptune keeps the metadata needed to present and play them coherently offline:

- Movie and series artwork
- Episode and season organization
- Playback position and duration
- The tracks actually present in the downloaded file
- Content restrictions for the active account

Completed media appears in the Home screen's [Downloads row](/browsing/home-screen/downloads) and the device-wide **Settings > Downloads** manager.
Active transfers show progress and estimated time remaining.

## Sharing Downloads

Each account chooses who else can see its downloads in **Settings > Downloads**:

| Option | What it does |
| --- | --- |
| **Shared** | Other accounts on this device can watch your downloads |
| **Private** | Only you can see your downloads |

Before your first download, Neptune asks **Share Your Downloads?**.
Choose **Share** or **Keep Private**; your answer applies to all your downloads, including earlier ones, and Neptune asks only once for your account, on any device.
Until you answer, your downloads are shared.
If your administrator sets this for you, Neptune doesn't ask.

You always see your own downloads, plus other accounts' Shared downloads.
A child account only sees other accounts' downloads that have a rating it's allowed to watch.

With two or more accounts on the device, your downloads appear under **Your Downloads**, and other accounts' Shared downloads under **Shared by Others** with the owner's name.
Each download also says whether it's Shared or Private, and which server it came from when your downloads come from more than one.
With only one account on the device, downloads don't show Shared or Private.

Anyone who can see a Shared download can delete it, but only its owner can delete a Private one.
When you sign out, your Private downloads are removed from the device and your Shared ones stay.

Your place in a download is saved for you on this device.

## Downloads From Other Servers

Downloads from every server you've signed in to on this device appear together, and each plays from its file whatever account is active.

- When a download comes from your current account's server, Neptune also updates your progress on the server, now or the next time it can reach it.
- When it comes from another server, your progress is saved on this device only.
- If the server no longer has the item, or your account can't see it, Neptune stops sending progress for it and keeps your place on this device.

Selecting a download from another server opens its details, from the copy saved with it: the poster, overview, where it came from, and **Resume**, **Play from Beginning**, and **Delete Download**.
For a show, its downloaded episodes are listed, and each one plays.
These downloads say **Progress saved on this device**.

## Device Storage

Downloads stay on the device where they were created; they are not synced as media files to other Neptune clients.
Remove individual items from their context menu or manage the full offline library under **Settings > Downloads**.

Original files retain their embedded audio and subtitle tracks.
The initial space-saving transcode path creates one audio track and no selectable subtitle tracks, and converts HDR according to the backend's tone-mapping configuration.
