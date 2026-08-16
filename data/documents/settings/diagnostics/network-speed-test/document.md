---
order: 10
---

# Network Speed Test

Network Speed Test measures download performance from your active media server
to the current Neptune device. It uses the same authenticated route Neptune
uses for playback; it is not a general internet speed test and does not test
upload speed.

Open **Settings > About > Diagnostics > Network Speed Test**, then select
**Start Speed Test**.



## How the Test Works

Neptune automatically finds a directly streamable movie or episode in your
library and uses that file as the byte source. The title shown under **Test
File from Your Library** is not a public test server or bundled sample.

The transfer runs for approximately 10 seconds and can read up to 512 MB. It
may finish earlier if it reaches that safety ceiling or the selected source
ends. Downloaded bytes are discarded: Neptune does not decode the file, start
a playback session, report progress, change watched state, or add an Activity
entry.



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
| **Source Headroom** | How many times the measured average exceeds the selected file's average bitrate |

The recommendation is guidance only. Neptune does not automatically change
playback quality or streaming limits after a test.



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
