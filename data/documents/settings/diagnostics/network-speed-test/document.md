---
order: 10
---

# Network Speed Test

The **Network Speed Test** measures download performance from your active media server to the current Neptune device.
It uses the same authenticated route Neptune uses for playback; it is not a general internet speed test and does not test upload speed.

To get started, open **Settings > About > Diagnostics > Network Speed Test**.
Search for a movie or show, select the file you want to measure, then select **Start Speed Test**.
> Selecting a show opens its seasons and episodes so you can choose the exact episode file.

## How the Test Works

Neptune uses a directly streamable movie or episode in your library as the byte source.
The transfer runs for up to five minutes or until the selected file ends.
You can select **Stop Test** at any time after data begins arriving.
Downloaded bytes are discarded.

Results can change with server load, network conditions, VPN or proxy routing, and other traffic.
Use [Playback Benchmark](/settings/diagnostics/playback-benchmark) when you also need to test demuxing, decoding, audio, and rendering.

## Live Graph

The graph plots rolling throughput throughout the transfer, updating about four times per second.
This makes brief drops and an unstable connection visible instead of reducing the entire test to one number.

The large number on the Results screen is the average download speed across the complete measurement window.
It will not necessarily match the last point on the graph, which represents only the most recent interval.

## Understanding Results

| Result | Meaning |
|--------|---------|
| **Download Speed** | Average server-to-device throughput for the complete test |
| **Time to First Byte** | How long the server and route took to begin returning file data |
| **Data Transferred** | How much of the selected file was read during the test |
| **Transfer Duration** | The measured data-transfer window |
| **File Bitrate** | The selected file's average source bitrate, when the server provides it |
| **Recommended Streaming Limit** | 70% of the measured average, leaving room for bitrate spikes and protocol overhead |

> The recommendation is guidance only.
> Neptune does not automatically change playback quality or streaming limits after a test.

## Analyze Results with Neptune AI

[Neptune AI](/neptune-pro/neptune-ai) can provide an analysis of your test results and, when the evidence warrants it, suggests things for you to try to improve your results. This is very useful for those who may not understand the technical implications behind each factor in their test, but would still like to learn more about their results.