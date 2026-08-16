---
order: 10
---

# Network Speed Test

Network Speed Test measures download performance from your active media server
to the current Neptune device. It uses the same authenticated route Neptune
uses for playback; it is not a general internet speed test and does not test
upload speed.

Open **Settings > About > Diagnostics > Network Speed Test**. Search for a
movie, show, or episode, select the file you want to measure, then select
**Start Speed Test**. Selecting a show opens its seasons and episodes so you
can choose the exact episode file. Neptune requires an explicit file selection
so the source of the result is always clear. Once a file is selected, search
results collapse; use **Change Test File** to pick something else.



## How the Test Works

Neptune uses a directly streamable movie or episode in your library as the byte
source. A show itself is only a library container, so Neptune asks you to pick
a season and episode before starting. Choose the title with the same local fuzzy library search used by
Playback Benchmark, including punctuation variants such as `spiderman` and
`Spider-Man`. The title shown under **Test File from Your Library** is not a
public test server or bundled sample.

The transfer runs for up to five minutes or until the selected file ends. You
can select **Stop Test** at any time after data begins arriving; Neptune treats
the bytes, elapsed time, latency, and graph collected so far as a completed
result. Downloaded bytes are discarded: Neptune does not
decode the file, start a playback session, report progress, change watched
state, or add an Activity entry.



## Live Graph

The graph plots rolling throughput throughout the transfer, updating about
four times per second. This makes brief drops and an unstable connection
visible instead of reducing the entire test to one number.

The large number on the Results screen is the average download speed across
the complete measurement window. It will not necessarily match the last point
on the graph, which represents only the most recent interval.



## Understanding Results

| Result | Meaning |
|--------|---------|
| **Download Speed** | Average server-to-device throughput for the complete test |
| **Time to First Byte** | How long the server and route took to begin returning file data |
| **Data Transferred** | How much of the selected file was read during the test |
| **Transfer Duration** | The measured data-transfer window |
| **File Bitrate** | The selected file's average source bitrate, when the server provides it |
| **Recommended Streaming Limit** | 70% of the measured average, leaving room for bitrate spikes and protocol overhead |

The recommendation is guidance only. Neptune does not automatically change
playback quality or streaming limits after a test.

Source or throughput headroom is intentionally not shown. **Recommended
Streaming Limit** communicates the useful safety margin without requiring you
to interpret a multiplier.



## Analyze Results with Neptune AI

The test, graph, metrics, and recommended limit are Free. Neptune Pro adds an
optional **Analyze Results** button after the test completes. Selecting it asks
[Neptune AI](/neptune-pro/neptune-ai) for a network-focused explanation of
connection responsiveness, first-byte delay, sustained speed, whole-run
stability, and useful next checks.

This action always uses Neptune AI; it does not silently send the diagnostic to
a bring-your-own model. Network analysis may explain technical values, but it
does not claim to measure video decoding, rendering, frame pacing, A/V sync, or
the viewing experience. Even a five-minute ceiling cannot prove long-term
reliability or identify a specific Wi-Fi, server, or proxy problem without
supporting measurements.



## Interpreting the Graph

- A consistently high line usually indicates a stable route.
- Large repeated drops can point to Wi-Fi interference, a busy server, a
  constrained reverse proxy, or an unstable remote connection.
- High throughput with a slow Time to First Byte can indicate server or proxy
  response delay rather than a lack of sustained bandwidth.

Results can change with server load, Wi-Fi conditions, VPN or proxy routing,
and other traffic. Use [Playback Benchmark](/settings/diagnostics/playback-benchmark)
when you also need to test demuxing, decoding, audio, and rendering.



## Privacy

The stream URL, access token, server file path, and response bytes are not
stored in the result or diagnostic logs. Only aggregate latency and final
throughput are logged. The live graph remains in memory for the current result
and is not saved as test history.

Neptune AI receives a bounded set of technical measurements only after you
select **Analyze Results**: average and rolling throughput, first-byte delay,
duration, transferred byte count, device class, and the test file's bitrate
when known. The media title and item identifier, server identity, URL, token,
path, and credentials stay on the device. The analysis is not saved as test
history.
