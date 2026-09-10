---
order: 20
---

# Playback Benchmark

Playback Benchmark plays short samples of real media from your server to measure how they perform on the current device.

To get started, open **Playback Benchmark** in the **Diagnostics** area of Settings.

## Choose What to Test

Search for a movie or episode, or select **Suggest Items to Test** to let Neptune find demanding or representative files in your library.
You can combine searched and suggested items in the same queue.

After you select a title, Neptune checks its current media source.
The queue shows the characteristics the test will exercise, which may include:

- container and resolution;
- video codec, bit depth, HDR format, or Dolby Vision profile;
- source bitrate;
- the selected default audio codec, channel layout, and Atmos metadata.

## Running the Benchmark

Start the queue and let each sample complete.
Neptune measures playback for 60 seconds after the first frame appears.
You can cancel the run at any time.

The benchmark uses an isolated player, so it does not:

- change resume position or watched state;
- send playback progress reports;
- publish system Now Playing information;
- teach [Conductor](/playback/conductor) from the diagnostic run.

## Understanding Results

Each sample receives an overall verbal result.
For a completed run with enough reliable evidence, Neptune bases the grade on three parts of the measured experience.
The **Measured Telemetry** cards show the supporting measurements.

| Result Area | What Neptune Measures |
|-------------|-----------------------|
| **Startup** | The **Timing** card shows the total wait before the first picture, including setup and player startup, followed by the observation window and playback timeline advance. Lower startup time is better. |
| **Playback Stability** | The **Continuity** card shows stall count, total stall time, the share of the run spent stalled, and the longest stall. No stalls is ideal. |
| **Smoothness** | The **Video** card shows observed frames and frame rate, dropped and late frames, and the resulting frame-loss percentage. Lower frame loss is better. |
| **Context** | The **Environment** card shows detected and effective dynamic range, thermal state, and whether Low Power Mode was active. These details do not affect the grade by themselves. |

One noticeably weak scored category can lower the overall result.
For example, a fast start does not make up for repeated stalls or dropped frames.

Dynamic range appears as the source and effective playback formats, such as **HDR10 → SDR**.
A change means the picture was adapted for the current display path, not necessarily that playback failed.
The workload badges also provide context about the container, resolution, video format, bitrate, and selected audio format without adding points to the grade.

On Apple TV, move between the cards with the Siri Remote.
On iPhone and iPad, swipe through them.
If Neptune cannot collect a value reliably, it leaves that value unavailable instead of treating it as a healthy result.

### Grade Scale

From highest to lowest, the grades are:

| Grade | General Meaning |
|-------|-----------------|
| **Flawless** | No meaningful playback issue was observed |
| **Excellent** | A very strong experience with only a minor imperfection |
| **Good** | Solid playback with a small but measurable weakness |
| **Fine** | Usable playback with a noticeable weakness |
| **Rough** | A serious startup, stalling, or smoothness problem in a run that still completed |
| **Big Oof** | The benchmark could not present or complete the sample successfully |

**Not Verified** is not a quality grade. It means the run did not collect enough reliable evidence to judge the experience.

A result applies only to that file, device, network route, and moment.
It is useful for diagnosis, but it does not certify every file with similar formats or provide a standardized comparison between different files.
Server load, network conditions, background device work, thermal state, file structure, and transcoding policy can all change a later result.

## Analyze Results with Neptune AI

Neptune Pro adds an optional **Analyze Results** button after the queue completes.
Selecting it asks [Neptune AI](/neptune-pro/neptune-ai) for a short, plain-language explanation of what the measurements would mean while watching.
A healthy run may need no action.
When the result shows a problem, Neptune AI can describe the likely symptom and suggest a sensible next check without exposing player internals.

Only bounded technical measurements from the test are sent for analysis.
Media titles, server details, URLs, file paths, and credentials stay on the device.
