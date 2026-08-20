---
order: 100
---

# Diagnostics

Diagnostics helps you inspect Neptune, test the connection to your media server, verify real playback, and send a support report when something goes wrong. You can view the available Diagnostics options from **Settings > About > Diagnostics**.

## Available Tools

| Tool | What It Does |
|------|--------------|
| [Info](/settings/diagnostics#info) | Shows read-only details about the app configuration and device |
| [Network Speed Test](/settings/diagnostics/network-speed-test) | Measures sustained download performance from your active media server to this device |
| [Playback Benchmark](/settings/diagnostics/playback-benchmark) | Tests real files from your library and grades startup, stability, and smoothness |
| [Send Logs](#send-logs) | Builds and uploads a sanitized diagnostic report for troubleshooting |

## Info

Info is a snapshot of the configuration Neptune is currently using.
It is useful when comparing two devices or checking which server, plugin, player, quality, subtitle, cache, and layout settings are active.
The page does not change settings.

## Send Logs

Use **Send Logs** when troubleshooting or when Neptune support asks for a report.
Neptune collects recent app and playback diagnostics, sanitizes the complete report, and uploads it only after you explicitly activate the action.

Authentication tokens, passwords, cookies, URL query values, and email addresses are redacted before upload.
Sending logs does not include media files and does not change playback progress or watched state.

If Settings is unavailable, Apple TV also offers the diagnostic sender during setup through the [Compass](/browsing/navigation/compass#send-logs).
On iPhone and iPad, an exact three-finger hold for about 0.6 seconds opens the diagnostic sheet outside playback.

## What the Tests Measure

The two tests answer different questions:

- **Network Speed Test** measures the server-to-device transfer route.
  It does not decode or render video.
- **Playback Benchmark** plays a real sample from your library and measures how quickly it starts, whether it stalls, and whether the video remains smooth.

A fast network result can therefore coexist with a poor playback benchmark, and a healthy playback benchmark can still vary with a different file, server load, or Wi-Fi conditions.
