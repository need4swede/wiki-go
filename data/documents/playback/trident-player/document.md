---
order: 10
---

# Trident Player

Neptune's custom playback engine. Trident handles direct playback of most file formats so your backend does not have to transcode them first.

Trident is the default engine on Apple TV and the only engine on iPhone and
iPad. On Apple TV, you can switch to Apple's native player with **Engine** in
**Settings > Playback**.


## In This Section

| Page | Description |
|------|-------------|
| [Video Codecs & Containers](/playback/trident-player/codecs) | Hardware and software video decoding, containers, and de-interlacing |
| [HDR & Dolby Vision](/playback/trident-player/hdr) | Formats, profiles, display switching, fallbacks, and setup |
| [Audio](/playback/trident-player/audio) | Codecs, channels, lossless audio, Atmos, output, and sound controls |
| [Subtitles](/playback/trident-player/subtitles) | Text and image formats, styling, timing, encoding, and track behavior |



## Direct Play and Transcoding

Trident plays supported files directly from your media server without conversion. The [Video Codecs & Containers](/playback/trident-player/codecs), [Audio](/playback/trident-player/audio), and [Subtitles](/playback/trident-player/subtitles) pages are the authoritative format references.

When direct play is not practical—for example, when a remote connection cannot sustain the source bitrate—a compatible backend can transcode instead. The backend re-encodes the stream on the fly to fit your chosen bitrate limit.

Configure this in **Settings > Playback > Playback Mode** with a target bitrate from 1 to 120 Mbps, or change quality mid-playback from the [Playback Menu](/playback/playback-menu). Quality changes restart the stream in place without losing your position.


## During Playback

Switch audio or subtitle tracks mid-playback from the [Playback Menu](/playback/playback-menu). Track changes happen in place without restarting the video stream.

Eligible remote direct-play videos use a temporary disk cache even when **Full
Video Caching** is off. Ordinary caching keeps a bounded working window for the
current playback session, which supports read-ahead and instant seeking within
cached portions.

Enable **Full Video Caching** in **Settings > Playback > Advanced** to continue
caching toward the end of the video while playback is paused. Neptune uses as
much safe storage as is currently available; the rest of the video does not
need to fit before caching begins. It preserves a safe amount of free space
and, when necessary, removes the oldest already-watched cache blocks to make
room for new video farther ahead. Upcoming cached video is not removed for
this. If no safe space can be reclaimed, caching waits without interrupting
playback and resumes when enough storage becomes available again.

The cache value under **Info > Player** shows how much media is currently
cached. It can grow, plateau, or remain roughly steady while old watched data
is replaced with new data ahead. It is not a free-storage counter.

The cache is temporary and is deleted when the player closes. It is not an
offline download and does not guarantee that an oversized video will remain
cached in full. Use [Downloads](/browsing/home-screen/downloads) for offline
viewing.

On iPhone and iPad, Trident also powers
[Picture in Picture and Background Playback](/ios/playback). Picture in
Picture uses the system video window, while background-only sessions continue
audio and rejoin the video when Neptune returns to the foreground.
