---
order: 20
---

# Playback Benchmark

Playback Benchmark tests real media from your server on the current device.
It plays a short isolated sample through [Trident](/playback/trident-player) and grades the measured experience.

To get started, open **Settings > About > Diagnostics > Playback Benchmark**.

## Choosing Samples

Search for a movie or episode to add it to the benchmark queue.
Select **Suggest Items to Test** when you want Neptune to propose demanding or representative files from your library.
You can combine suggested and manually searched items in one queue.

After a title is selected, Neptune probes its current media source.
Queue rows show only the criteria that the upcoming base pass will actually exercise, such as:

- container and resolution;
- video codec, bit depth, HDR format, or Dolby Vision profile;
- source bitrate;
- the selected default audio codec, channel layout, and Atmos metadata.

## Running the Benchmark

Start the queue and let each sample complete.
You can cancel the current run at any time.

Benchmark playback is isolated from ordinary playback.
It does not:

- change resume position or watched state;
- send playback progress reports;
- publish system Now Playing information;
- teach [Conductor](/playback/conductor) from the diagnostic run.

## Understanding Results

Each sample receives a score out of 100 and a grade.
The score uses playback outcomes that are meaningful to the viewing experience:

| Evidence | Meaning |
|----------|---------|
| **Time to First Frame** | How long the sample took to begin rendering |
| **Buffering Events** | Stalls after startup |
| **Dropped / Late Frames** | Video frames that missed normal presentation |
| **Source Retries** | Additional source attempts when that telemetry is available |
| **Sustained Playback** | Whether playback continued advancing for the requested window |

The criteria beneath a result are limited to properties exercised by that specific file and pass.

## What a Grade Means

A strong result means the current device, network route, and selected file performed well during that run. It is not a certification for every file with the same labels.

Scores from different user-selected files are useful diagnostics but are not standardized comparisons.
Server load, network conditions, background device work, thermal state, file structure, and transcoding policy can all change a later result.

## Analyze Results with Neptune AI

Neptune Pro adds an optional **Analyze Results** button after the queue completes.
Selecting it asks [Neptune AI](/neptune-pro/neptune-ai) to explain the results of your benchmark and, when the evidence warrants it, suggests things for you to try to improve your results. This is very useful for those who may not understand the technical implications behind each factor in their test, but would still like to learn more about their results.