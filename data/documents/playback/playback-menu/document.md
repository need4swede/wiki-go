---
order: 30
---

# Playback Menu

The in-player menu for everything about the current stream.

On Apple TV, choose **Audio**, **Subtitles**, **Video**, **Chapters**, or **Info** from the action row.
On iPhone and iPad, tap **Playback Menu**.

| Category | What's Inside |
|-----|---------------|
| **Audio** | Track selection, sound presets, Night Mode, A/V sync |
| **Subtitles** | Track selection, style, timing, position |
| **Video** | Quality, zoom, de-interlacing |
| **Chapters** | Jump to a chapter |
| **Info** | Codec, bitrate, and stream details |

Chapters appears when the item has chapters and permits seeking.
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

The Playback Menu uses tabs for Audio, Subtitles, Video, Chapters, and Info.
Tap a tab to switch categories, then tap a track or setting to change it.
Tap outside the menu to return to the video.

You can also add separate Audio and Subtitles buttons for quick track changes.
See [Touch Controls](/playback/player-controls/touch#action-buttons).

## Customizing the Menu

Reorder or hide categories in **Settings > Playback > Controls > Playback Menu**.
This controls the menu's category order and visibility.

The buttons beside the title have their own **Action Buttons** editor in the same settings section.
On Apple TV, Audio and Subtitles cannot be hidden.
On iPhone and iPad, Playback Menu cannot be hidden.

## Audio

**Track** lists every audio track with its codec and channel layout ("TrueHD Atmos • 7.1").
Choose another track without leaving the player.

**Preset** applies an EQ profile: **Default**, **Bass** for more low end, or **Voice** for clearer dialogue.

**Night Mode** tames loud music and effects so late-night viewing doesn't wake the house.
Set it to **On**, or **Auto** to engage on a schedule (10:00 PM to 7:00 AM by default, adjustable in Settings).

**A/V Sync** opens a live adjuster so you can move audio earlier or later while watching, up to half a second in either direction.
On Apple TV, each nudge is 10 ms. Up/right raises the value and down/left lowers it; the touch surface works too.
Select or Back confirms the adjustment and returns to the menu.
The setting persists for future playback.

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

**De-interlacing** controls combing removal for interlaced sources like DVDs and TV broadcasts: **Auto** engages when frames are flagged interlaced, **On** forces it, **Off** never de-interlaces.
Available on the Trident engine.

## Chapters

The chapter list opens at the chapter you're currently in.
On Apple TV, a large preview shows the focused chapter, its start time, and where it falls in the video.
The current chapter is marked **Now Playing**.
The list beneath it shows chapter numbers and start times.

Selecting a chapter on Apple TV seeks straight there and closes the menu.

On iPhone and iPad, chapters appear in a scrolling thumbnail list.
Tap a chapter to seek there. The menu stays open so you can keep browsing.

## Info

A live technical readout of the current stream: engine, container, video codec and dynamic range (down to the Dolby Vision profile), audio codec and channels, subtitle details, whether the server is direct playing or transcoding, buffer health, and file details.
On Apple TV, Info starts with the essentials.
Select **More Info** for the full technical readout, including encoding details, track counts, chapters, and file metadata.
Press Back to return to the essentials.

The optional **Technical Info** action button on Apple TV shows an on-screen card if you want stream details visible while watching.
