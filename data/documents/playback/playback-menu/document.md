---
order: 30
---

# Playback Menu

The in-player menu for everything about the current stream.

On Apple TV, choose **Audio**, **Subtitles**, **Video**, **Chapters**, **Episodes**, or **Info** from the action row.
On iPhone and iPad, tap **Audio**, **Subtitles**, **Video**, **Chapters**, **Episodes**, or **Info** in the controls.

| Category | What's Inside |
|-----|---------------|
| **Audio** | Track selection, sound presets, Night Mode, A/V sync |
| **Subtitles** | Track selection, style, timing, position |
| **Video** | Quality, playback speed, zoom, de-interlacing |
| **Chapters** | Jump to a chapter |
| **Episodes** | Play another episode of the show |
| **Info** | Codec, bitrate, and stream details |

Chapters appears when the item has chapters and permits seeking.
Episodes appears while an episode is playing.
Available options depend on your device and the current stream.

## Apple TV

Glass cards open on the right, with the category name above them.
A downward swipe while the controls are hidden opens the menu at Audio.
The title, action row, and timeline get out of the way while you use the menu.

| Control | Action |
| --- | --- |
| Left / Right | Switch categories |
| Up / Down | Move through the rows |
| Select | Choose a track, apply an option, or expand a setting |
| Back | Collapse expanded options, then close the menu |

Audio and Subtitles open at the active track, with their settings beneath the track list.
Selecting a setting reveals its options in place.
Choose an option to apply it; the list stays open so you can try another.
Select the setting again or press Back to collapse it.

Long track lists group additional choices by language.
Your current track and preferred languages stay close to the top, while **Other Languages** expands the rest.
Back collapses an open language group before closing the menu.

Switching categories keeps your place in each one.
Closing the menu returns focus to the action for the category you were using.

## iPhone and iPad

The categories sit together in one pill in the player controls.
Tap one to open it in a glass column at the side of the screen, so the picture stays visible.
Tap another category, or swipe across the column, to switch.
Tap the close button or the picture to return to the video.

Choose which buttons show, and in what order, in [Touch Controls](/playback/player-controls/touch#action-buttons).

## Customizing the Menu

Reorder or hide categories in **Settings > Playback > Controls > Playback Menu**.
This controls the menu's category order and visibility.

The buttons beside the title have their own **Action Buttons** editor in the same settings section.
Audio and Subtitles cannot be hidden on Apple TV, iPhone, or iPad.

## Audio

**Track** lists every audio track with its codec and channel layout ("TrueHD Atmos • 7.1").
Choose another track without leaving the player.

**Preset** applies an EQ profile: **Default**, **Bass** for more low end, or **Voice** for clearer dialogue.

**Night Mode** tames loud music and effects so late-night viewing doesn't wake the house.
Set it to **On**, or **Auto** to engage on a schedule (10:00 PM to 7:00 AM by default, adjustable in Settings).

**A/V Sync** opens a live adjuster so you can move audio earlier or later while watching, up to half a second in either direction.
On Apple TV, each nudge is 10 ms. Up/right raises the value and down/left lowers it; the touch surface works too.
Select or Back confirms the adjustment and returns to the menu.
On iPhone and iPad, a slim slider opens at the side of the screen.
The setting persists for future playback, on every device.

On Apple TV, hold Select on a setting for reset options.

## Subtitles

**Track** lists subtitle tracks with **Forced**, **SDH**, and **External** badges, plus an Off entry.

**Find More Subtitles** searches for an additional subtitle beyond what the server provides and downloads it to the device, synchronized to the exact playback. Part of [Subtitles Pro](/neptune-pro/subtitles).

**Style** adjusts appearance without leaving playback: font size, text color, background style, and brightness.
The same options live in [Subtitle Style](/settings/subtitles) settings.

**Timing** opens a live offset adjuster (up to 5 seconds either way in 0.1 s steps) for subtitle files that don't quite line up.
For server subtitle tracks, the offset lasts for the current playback session.
Downloaded subtitles keep their timing adjustment with the local file.

**Position** raises or lowers subtitles with a guide line showing where they'll rest.
Handy for keeping captions out of burned-in credits or letterbox bars.

## Video

**Quality** switches between Direct Play and the bitrate ladder (120 Mbps down to 1 Mbps).
Each option says whether it means direct playing or transcoding for the current file.
Changing quality restarts the stream in place: same position, same tracks, no kick-out to the menu.

**Zoom** changes how the picture uses the display and applies instantly.
iPhone offers **Fit**, **Adaptive**, and **Fill**; iPad and Apple TV offer **Fit** and **Fill**.
Adaptive uses extra landscape space when suitable while keeping the visible picture clear of the Dynamic Island or camera area.
See [Playback Settings](/settings/playback#video-zoom) for a full comparison.

**Playback Speed** offers 0.5×, 0.75×, Normal, 1.25×, 1.5×, 1.75×, and 2×.
It applies at once without restarting the stream, and voices keep their pitch.
The speed lasts for the current player session and carries to the next episode.
It isn't saved to Settings, so each new player starts at Normal.
Playback Speed works on every server, for streamed and downloaded videos.

- Dolby Atmos only plays at Normal speed. At any other speed the track plays as surround sound with a short audio restart, and Atmos returns when you go back to Normal.
- Watch Together always plays at Normal. The row says it isn't available during Watch Together.
- Pre-rolls play at Normal. Your speed applies to the feature that follows.
- A slow connection can rebuffer sooner at higher speeds.

**De-interlacing** controls combing removal for interlaced sources like DVDs and TV broadcasts: **Auto** engages when frames are flagged interlaced, **On** forces it, **Off** never de-interlaces.
Available on the Trident engine.

## Chapters

The chapter list opens at the chapter you're currently in.
On Apple TV, a large preview shows the focused chapter, its start time, and where it falls in the video.
The current chapter is marked **Now Playing**.
The list beneath it shows chapter numbers and start times.

Selecting a chapter on Apple TV seeks straight there and closes the menu.

On iPhone and iPad, chapters appear in a scrolling thumbnail list with each chapter's name and start time along the bottom of its image.
The chapter you're in is marked.
Tap a thumbnail to seek there. The menu stays open so you can keep browsing.

## Episodes

Pick another episode without leaving the player.
The list shows the show's seasons in order, with Specials last.
It opens on the next episode, with the episode you're watching just above it marked **Now Playing**.
If you're at the end of a season, it opens on the next season's heading.
During [shuffle](/browsing/item-details/tv-shows#shuffle-mode), it opens on the episode that's playing.

Only the season you're watching starts expanded.
Select another season's heading to show its episodes, and select it again to collapse it.
Episodes without a file on the server are left out.
When you're watching from downloads, only finished downloads are listed.

On Apple TV, a large picture of the focused episode sits above the list with its number, title, and length.
Each row shows the episode number and title, then **Now Playing**, a watched mark, or the runtime.
On iPhone and iPad, episodes appear in a scrolling list of wide pictures with each title along the bottom, the current one outlined, and a progress bar for anything you've started.

Selecting an episode closes the menu and plays it in the same player.
Selecting the episode that's already playing just closes the menu.
Episodes works the same on Jellyfin, Emby, Plex, and Silo.

## Info

A live technical readout of the current stream: engine, container, video codec and dynamic range (down to the Dolby Vision profile), audio codec and channels, subtitle details, whether the server is direct playing or transcoding, buffer health, and file details.
On Apple TV, iPhone, and iPad, Info starts with the essentials.
Select **More Info** for the full technical readout, including encoding details, track counts, chapters, and file metadata.
Press Back to return to the essentials.

The optional **Technical Info** action button on Apple TV shows an on-screen card if you want stream details visible while watching.
