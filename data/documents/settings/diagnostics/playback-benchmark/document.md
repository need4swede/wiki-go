---
order: 20
---

# Playback Benchmark

Playback Benchmark tests real media from your server on the current device.
It plays a short isolated sample and grades the measured experience.

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

Each sample receives one overall verbal grade. The result also separates the experience into categories so you can see what influenced it:

| Category | What It Tells You |
|----------|-------------------|
| **Startup** | The total wait before the first picture appeared. Lower is better. |
| **Playback Stability** | Whether playback stalled after it started and, if so, for how long. No stalls is ideal. |
| **Smoothness** | How many observed video frames were dropped, shown with the frame-loss percentage. Lower is better. |
| **Dynamic Range** | The source format and the format actually displayed, such as **HDR10 → SDR**. A change means the picture was adapted for the current display path; it is not automatically a playback failure. |

The badges beneath the result describe the workload that was tested, including the file's container, resolution, video format, source bitrate, and selected audio format. They provide context for the result rather than adding points to the grade.

## Measured Telemetry

The **Measured Telemetry** cards provide more detail about the run. On Apple TV, move between the cards with the Siri Remote. On iPhone and iPad, swipe through them.

| Card | Measurements |
|------|--------------|
| **Timing** | End-to-end startup, the portion spent starting playback, setup before playback began, the observation window, and how far the playback timeline advanced |
| **Continuity** | Stall count, total stall time, the share of the run spent stalled, and the longest individual stall |
| **Video** | Observed frames and frame rate, dropped and late frames, and the resulting frame-loss percentage |
| **Environment** | Detected and effective dynamic range, the device's thermal state, and whether Low Power Mode was active |

These measurements are observations from this one run. If Neptune could not reliably collect a value on the current device, it will not treat the missing measurement as proof that playback was healthy.

## What a Grade Means

The grade summarizes startup, playback stability, and smoothness. One noticeably weak category can lower the overall result; a fast start does not cancel out stalls or dropped frames. Dynamic range and the workload badges describe what happened, but are not quality grades by themselves.

From highest to lowest, the grade tiers are:

| Grade | General Meaning |
|-------|-----------------|
| **Flawless** | No meaningful playback issue was observed |
| **Excellent** | A very strong experience with only a minor imperfection |
| **Good** | Solid playback with a small but measurable weakness |
| **Fine** | Usable playback with a noticeable weakness |
| **Rough** | A serious startup, stalling, or smoothness problem in a run that still completed |
| **Big Oof** | The benchmark could not present or complete the sample successfully |

**Not Verified** is not a quality grade. It means the run did not collect enough reliable evidence to judge the experience.

A strong result means the current device, network route, and selected file performed well during that run. It is not a certification for every file with the same labels.

Results from different user-selected files are useful diagnostics but are not standardized comparisons.
Server load, network conditions, background device work, thermal state, file structure, and transcoding policy can all change a later result.

## Analyze Results with Neptune AI

Neptune Pro adds an optional **Analyze Results** button after the queue completes.
Selecting it asks [Neptune AI](/neptune-pro/neptune-ai) to turn the measurements into a short, plain-language explanation of what they would mean while watching. A healthy run may simply need no action. When the result shows a problem, Neptune AI can explain the likely symptom and suggest a sensible next check without exposing player internals.

Only bounded technical measurements from the test are sent for analysis. Media titles, server details, URLs, file paths, and credentials stay on the device.
