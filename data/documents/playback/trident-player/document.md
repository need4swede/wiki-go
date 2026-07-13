---
order: 10
---

# Trident Player

Neptune's custom playback engine. Trident handles direct playback of most file formats so your backend does not have to transcode them first.

Trident is the default engine. If you ever need Apple's native player instead, switch the **Engine** in **Settings > Playback**


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

Enable **Full Video Caching** in **Settings > Playback > Advanced** for disk-backed read-ahead. Pausing lets Trident continue building a playback cushion, and seeking within cached portions avoids another download. This is a bounded per-session cache—not an offline download or a promise that the entire file will remain on the device. Use [Downloads](/browsing/home-screen/downloads) for offline viewing.
