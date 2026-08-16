---
order: 20
---

# Playback Benchmark

Playback Benchmark tests real media from your server on the current device.
Neptune inspects each file's metadata, builds a list of applicable criteria,
plays a short isolated sample through the Trident engine, and grades the
measured experience.

Open **Settings > About > Diagnostics > Playback Benchmark**.



## Choosing Samples

Search for a movie or episode to add it to the benchmark queue. Search uses
Neptune's local library index and fuzzy title matching, so punctuation variants
such as `spiderman` and `Spider-Man` can still match.

Suggestions are optional. Select **Suggest Items to Test** when you want
Neptune to propose demanding or representative files from your library. You
can combine suggested and manually searched items in one queue.

After a title is selected, Neptune probes its current media source. Queue rows
show only the criteria that the upcoming base pass will actually exercise,
such as:

- container and resolution;
- video codec, bit depth, HDR format, or Dolby Vision profile;
- source bitrate;
- the selected default audio codec, channel layout, and Atmos metadata.

The initial pass uses the default audio track with subtitles disabled.
Alternate audio and subtitle tracks detected in the file are not presented as
tested until Neptune runs a dedicated pass for them.



## Running the Benchmark

Start the queue and let each sample complete. Neptune streams the real file
from your server and exercises the network, demuxer, decoder, audio path, and
renderer. You can cancel the current run at any time.

Benchmark playback is isolated from ordinary playback. It does not:

- change resume position or watched state;
- send playback progress reports;
- create an Activity history entry;
- publish system Now Playing information;
- teach Conductor from the diagnostic run.



## Understanding Results

Each sample receives a score out of 100 and a grade. The score uses playback
outcomes that are meaningful to the viewing experience:

| Evidence | Meaning |
|----------|---------|
| **Time to First Frame** | How long the sample took to begin rendering |
| **Buffering Events** | Stalls after startup |
| **Dropped / Late Frames** | Video frames that missed normal presentation |
| **Source Retries** | Additional source attempts when that telemetry is available |
| **Sustained Playback** | Whether playback continued advancing for the requested window |

Decoder identity and read-throughput estimates are internal telemetry; they
are not shown and do not affect the score. The criteria beneath a result are
limited to properties exercised by that specific file and pass.



## What a Grade Means

A strong result means the current device, Neptune and Trident build, server,
network route, and selected file performed well during that run. It is not a
certification for every file with the same labels.

Scores from different user-selected files are useful diagnostics but are not
standardized comparisons. Server load, Wi-Fi conditions, background device
work, thermal state, file structure, and transcoding policy can all change a
later result.



## Privacy

The queue and results remain in memory and are not stored as benchmark
history. Results exclude stream URLs, access tokens, credentials, server file
paths, and playback-session identifiers.
