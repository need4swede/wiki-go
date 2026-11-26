---
order: 55
---

# Links & Remote Control

Neptune can open or play a specific movie, show, or episode when something outside the app asks it to.
There are two ways to ask:

- **A link.**
  Another app, a shortcut, or a home automation opens an address like `neptune://play?tmdb=603`, and Neptune takes it from there.
- **Your server's remote control.**
  On Jellyfin and Emby, Neptune shows up as a device you can play to and control from the server's own **Play On** menu and from tools like Home Assistant.

Either way, Neptune itself does the playing.
You keep resume positions, your audio and subtitle choices, chapters, skip buttons, and Direct Play, because nothing hands a raw stream to another player.

Both work on Apple TV, iPhone, and iPad.

## What Works Where

| | Jellyfin | Emby | Plex | Silo |
|---|---|---|---|---|
| **Links** | Yes | Yes | Yes | Yes |
| **Remote control from the server** | Yes | Yes | No | No |

Plex removed remote control of players from its own apps and has no replacement for other apps to use.
On Plex and Silo, use links.

## Links

A link has two spellings that mean the same thing:

| Spelling | Looks Like | Use It For |
|----------|------------|------------|
| **App link** | `neptune://play?tmdb=603` | Other apps, Shortcuts, and home automation |
| **Web link** | `https://link.neptuneplayer.com/play?tmdb=603` | Anything you tap or scan on iPhone and iPad, like a message or a note |

Web links open Neptune directly on iPhone and iPad.
If Neptune isn't installed, the link opens a short page that says so.
On Apple TV, use the app link.

### What a Link Can Do

| Action | Link Starts With | What Happens |
|--------|------------------|--------------|
| **Open** | `neptune://open?` | Opens the title's page |
| **Play** | `neptune://play?` | Starts playing it |
| **Control** | `neptune://control/` | Pauses, resumes, seeks, or stops what's playing |

### Naming the Title

You can name a title by a public catalogue number or by your server's own item ID.

| Named By | Example | Notes |
|----------|---------|-------|
| **TMDB** | `tmdb=603` | Works on every server. The number is in the title's address on themoviedb.org |
| **IMDb** | `imdb=tt0133093` | Jellyfin and Emby |
| **TVDB** | `tvdb=81189` | Jellyfin and Emby |
| **Server item ID** | `item=a982a31451450daeda02c89952e6d7cf` | The ID your server gives the item. `itemId=` works too |

A catalogue number keeps working if you rebuild your library or move to another server.
A server item ID only means something on the server it came from.

For shows, add the type, and a season and episode when you want a specific one:

| Link | What It Does |
|------|--------------|
| `neptune://open?tmdb=1396&type=series` | Opens the show's page |
| `neptune://play?tmdb=1396&type=series` | Plays your next episode |
| `neptune://play?tmdb=1396&season=2&episode=3` | Plays season 2, episode 3 |

On Plex and Silo, a TMDB link needs Neptune's [search index](/search/local-index) to have finished syncing on that device.

### Where Playback Starts

A play link resumes where you left off.
Add `t` to choose a position in seconds instead:

| Link | Starts At |
|------|-----------|
| `neptune://play?tmdb=603` | Where you left off |
| `neptune://play?tmdb=603&t=0` | The beginning |
| `neptune://play?tmdb=603&t=600` | Ten minutes in |

### Control Links

Control links act on whatever is playing.
With nothing playing, they do nothing.

| Link | What It Does |
|------|--------------|
| `neptune://control/pause` | Pauses |
| `neptune://control/resume` | Resumes |
| `neptune://control/toggle` | Pauses or resumes, whichever applies |
| `neptune://control/stop` | Stops and leaves the player |
| `neptune://control/seek?t=300` | Jumps to five minutes in |
| `neptune://control/skip?by=-30` | Skips back 30 seconds. Use a positive number to skip ahead |
| `neptune://control/next` | Plays the next episode. On iPhone and iPad this works once Up Next is showing |
| `neptune://control/previous` | Plays the previous episode (Apple TV) |

## What Neptune Does With a Request

The same rules apply to links and to your server's remote control.

| When | What Happens |
|------|--------------|
| Nothing is playing | Neptune opens or plays the title |
| Something is already playing | Neptune asks first: **Stop What's Playing?** Choose **Stop and Play** or **Keep Watching**. No answer in 30 seconds counts as Keep Watching |
| **Playback Lock** is on | The request is ignored. Resume still works, and Pause works if you allow pausing while locked |
| Neptune is at **Who's Watching?** or asking for an account PIN | The link waits until an account is open, for up to two minutes |
| No account is signed in | Nothing happens |

Pause, seek, and the other control commands never ask.
They act on the player right away.

A link always opens the title for the account that's active when it arrives.
A link never signs you in, and it can't open anything that account couldn't open on its own.

## Titles You Don't Own

When a TMDB link names something that isn't in your library and [Seerr](/discover/requests) is connected, Neptune opens that title's request page instead of telling you it's missing.

- It works for open and play links alike.
- A link to a season or an episode opens the show's request page.
- Neptune never requests anything on its own. You press **Request**.
- Child accounts, and accounts without Seerr, see a message that the title isn't in the library.

IMDb, TVDB, and server item links can't open a request page, because Seerr looks titles up by TMDB number.

## Remote Control From Your Server

On Jellyfin and Emby, Neptune registers with your server as a player that can be controlled.
It then appears in the server's **Play On** menu in the web app, and to anything else that uses the server's remote control.

Neptune is available to control while it is running with an account active.
That includes audio playing in the background and Picture in Picture on iPhone and iPad.
Once the system suspends the app, or you close it, it drops off the list.

| You Can | Details |
|---------|---------|
| **Start a title** | Plays it on that device, from where you left off or from a position the sender picks |
| **Open a title's page** | Without playing it |
| **Pause, resume, and stop** | |
| **Seek, rewind, and fast forward** | Rewind goes back 10 seconds and fast forward goes ahead 30 |
| **Next and previous episode** | Previous is Apple TV only. On iPhone and iPad, next works once Up Next is showing |
| **Switch audio and subtitle tracks** | |

Neptune doesn't keep a play queue, so **Play Next** and **Add to Queue** from the server are ignored.
Volume and menu navigation commands are ignored too. Use your TV or receiver's volume.

Who can control a device is decided by your server.
On Jellyfin, that's the remote control permissions in each user's settings.

## Devices (Neptune Pro)

**Settings > Account > Devices** shows the devices signed in to your server, who is using each one, and what it's playing.
It's available on Apple TV, iPhone, and iPad with Jellyfin and Emby.

| You Are | You See |
|---------|---------|
| Any user | Your own devices |
| A server administrator | A choice between **My Devices** and **All Users** |

Select a device that's playing to **Pause** or **Resume** it, or to **Stop** it.
On iPhone and iPad you can also swipe a device to the left for the same actions.

**Continue Here** moves what that device is playing over to the one you're holding.
It starts from the same spot, with the same version and tracks, then stops it on the other device.
If something is already playing where you are, Neptune asks first.

Each device shows one of these:

| Status | Meaning |
|--------|---------|
| **Playing** or **Paused** | The device is playing something and you can control it |
| **Can't Be Controlled** | The device is playing, but its app doesn't accept remote control |
| **Idle** | The device is signed in and nothing is playing |
| **This Device** | The one you're holding |

The list refreshes every few seconds while the page is open.
A device drops off about 16 minutes after it was last used, the same as your server's own dashboard.

Controlling other devices requires Neptune Pro on the device you're controlling from.
It's listed as **Device Control** in Neptune Pro.
The devices you control don't need Pro.
Links and remote control from your server stay free.

## Home Assistant

There are two ways to drive Neptune from Home Assistant.

### Send a Link to an Apple TV

Home Assistant's Apple TV integration can open a link on the Apple TV.
This works with every server Neptune supports.

```yaml
- action: remote.send_command
  target:
    entity_id: remote.living_room_apple_tv
  data:
    command: wakeup
- action: media_player.play_media
  target:
    entity_id: media_player.living_room_apple_tv
  data:
    media_content_type: url
    media_content_id: "neptune://play?tmdb=603"
```

Home Assistant talks to the Apple TV in a way Apple doesn't document, so this can change with tvOS updates.

### Use Your Server's Integration

With Jellyfin's Home Assistant integration, Neptune appears as a media player while it's open.
You can start a title on it by its server item ID, and pause, seek, and stop it.

```yaml
action: media_player.play_media
target:
  entity_id: media_player.living_room
data:
  media_content_id: a982a31451450daeda02c89952e6d7cf
  media_content_type: movie
```

Home Assistant's built-in Emby integration can pause, seek, and stop, but it can't start a title. Use a link for that.

## Current Limits

- A play link starts one title. Extra titles in the same link are ignored, and so is shuffle.
- Choosing a specific version works on iPhone and iPad. Apple TV plays the version it would normally pick.
- Choosing the starting audio or subtitle track from a link isn't applied yet. Switch tracks after playback starts, or let [Conductor](/playback/conductor) pick them.
- On Emby, remote control doesn't work yet while a video is playing on iPhone and iPad.
- There is no setting to turn links or remote control off.

## Privacy

A link holds only a way to name the title and, for play links, where to start.
It never holds a password, a sign-in token, your server's address, or a stream.

Web links use `link.neptuneplayer.com` only to tell your iPhone or iPad that the address belongs to Neptune.
When Neptune is installed, the link opens in the app and the site isn't visited.
The site keeps no record of the links opened on it.

## Troubleshooting

| Problem | What to Check |
|---------|---------------|
| A web link opens Safari instead of Neptune | Tap the link from a message or a note. Pasting it into Safari's address bar always stays in Safari. If you just installed Neptune, give the device a few minutes and try again |
| Safari keeps opening even after that | Touch and hold the link and choose **Open in Neptune**. iOS remembers that choice |
| Neptune opens but nothing else happens | Make sure an account is signed in and past **Who's Watching?**. A link that waited longer than two minutes is dropped |
| "Couldn't Open That Title" | The title isn't in the active account's library, the link belongs to a different server, or the server couldn't be reached. The message says which |
| A link to a show won't play an episode | Add `type=series`, or a season and episode. Without them a TMDB number is read as a movie |
| Neptune doesn't appear in **Play On** | Neptune has to be running with an account active, on a Jellyfin or Emby server, and your user needs permission to control other devices |
| A request while something is playing seems to do nothing | Look at the screen that's playing. Neptune is asking whether to stop it, and it keeps watching if nobody answers |

When something still doesn't work, use [Send Logs](/settings/diagnostics).
The report shows each link Neptune received and the step where it stopped, without recording which title it was.
