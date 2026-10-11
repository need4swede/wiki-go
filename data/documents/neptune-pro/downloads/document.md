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

Selecting any download opens its normal page: a movie's detail page, or a show's page with its episodes. Online, the page is the same as anywhere else in Neptune. Offline, or for a download from another server, Neptune fills it from what was saved with the download, including the show, its seasons and the episodes of each downloaded season, and plays the file on your device.

Artwork travels with the download too. An episode saves its show's poster, backdrop and logo, the season posters and the thumbnails of the other episodes in its season, so pages look the same for every account on the device, even accounts on other servers. When the artwork changes on the download's server, Neptune updates the saved copies the next time an account on that server opens Neptune, and every account sees the new artwork. Downloads saved by an earlier version get the show details and artwork they're missing the same way.

### What you can play

Pages for your downloads look like any other page, so Neptune shows what will play:

- Downloaded episodes show your iPhone, iPad or Apple TV symbol, and episodes still downloading show their progress.
- When you're offline, or the show was downloaded from another server, episodes you haven't downloaded are grayed out and say **Not Available**. You can still read their details.
- Each season shows how many of its episodes are downloaded.
- The show's Play button plays your next downloaded episode. On iPhone and iPad it names it, for example **Play S2E4**.
- **Downloaded Episodes** on a show's page lists every episode you've downloaded or are downloading, by season. Tap an episode to open it, or Play to watch it.
- Opening a show from Downloads takes you to the season of the episode you'll play next.
- When an episode ends offline, the next one plays only if it's downloaded. Otherwise playback stops, so you never miss an episode.

If you open a show downloaded from another server, **Download Episodes** explains that the episodes came from another server. To download more of it, switch to an account on that server.
Downloads from another server say **Progress saved on this device**.

Your progress is your own: another account's place in a shared download never shows or resumes for you.

## Device Storage

Downloads stay on the device where they were created; they are not synced as media files to other Neptune clients.
Remove individual items from their context menu or manage the full offline library under **Settings > Downloads**.

Original files retain their embedded audio and subtitle tracks.
The initial space-saving transcode path creates one audio track and no selectable subtitle tracks, and converts HDR according to the backend's tone-mapping configuration.
