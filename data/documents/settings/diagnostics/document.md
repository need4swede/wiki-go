---
order: 100
---

# Diagnostics

Diagnostics helps you inspect Neptune, test the connection to your media
server, verify real playback, and send a support report when something goes
wrong. Open **Settings > About > Diagnostics** on Apple TV, iPhone, or iPad.

On Apple TV, Diagnostics opens as a dedicated menu whose four rows are peers.
On iPhone and iPad, the same destinations and Send Logs action appear together
in the Diagnostics section of Settings.



## Available Tools

| Tool | What It Does |
|------|--------------|
| **Info** | Shows read-only details about the app, device, active theme, media server, plugins, caches, library, and playback configuration |
| [Network Speed Test](/settings/diagnostics/network-speed-test) | Measures sustained download performance from your active media server to this device |
| [Playback Benchmark](/settings/diagnostics/playback-benchmark) | Tests real files from your library through Neptune's playback engine and grades the experience |
| **Send Logs** | Builds and uploads a sanitized diagnostic report for troubleshooting |



## Info

Info is a snapshot of the configuration Neptune is currently using. It is
useful when comparing two devices or checking which server, plugin, player,
quality, subtitle, cache, and layout settings are active. The page does not
change settings.



## Send Logs

Use **Send Logs** when troubleshooting or when Neptune support asks for a
report. Neptune collects recent app and playback diagnostics, adds relevant
device and configuration state, sanitizes the complete report, and uploads it
only after you explicitly activate the action.

Authentication tokens, passwords, cookies, URL query values, and email
addresses are redacted before upload. Sending logs does not include media
files and does not change playback progress or watched state.

If Settings is unavailable, Apple TV also offers the diagnostic sender during
setup through the Play/Pause button. On iPhone and iPad, an exact three-finger
hold for about 0.6 seconds opens the diagnostic sheet outside playback.



## What the Tests Measure

The two tests answer different questions:

- **Network Speed Test** measures the server-to-device transfer route. It does
  not decode or render video.
- **Playback Benchmark** exercises that route plus the container, codecs,
  selected audio track, decoder, and renderer.

A fast network result can therefore coexist with a poor playback benchmark,
and a healthy playback benchmark can still vary with a different file,
server load, or Wi-Fi conditions.
