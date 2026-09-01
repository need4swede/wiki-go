---
order: 40
---

# Plugin Settings

Check plugin status and manage compatible backend extensions from inside the app.
The options below describe Jellyfin's Neptune Plugin Suite; future backends may expose different extension options.

## Neptune Plugin Suite

The suite row shows a live status badge:

| Status | Meaning |
|--------|---------|
| **Active** | Installed and reachable |
| **Pending Restart** | Installed, waiting on a Jellyfin server restart |
| **Setup Incomplete** | Partially installed |
| **Partially Disabled** | One of the plugins is turned off in Jellyfin |
| **Build Incompatible** | The installed version doesn't match your Jellyfin version |
| **Not Installed** | Missing from the server |

Selecting the row shows version details (installed, latest available, release date) and, for admin accounts, management actions:

| Action | Description |
|--------|-------------|
| **Install Plugin / Update Plugin** | Install or update the suite from inside Neptune |
| **Install Specific Version** | Roll back to an earlier release |
| **Restart Server** | Reboot Jellyfin to finish an install. Active streams will be disconnected |

When the suite is active, [Backup & Restore](/settings/backup) becomes available and Neptune uses server-side [indexes](/plugins/indexers) for faster startup and richer search.
The [Transcoder](/plugins/transcoder) member defines download quality options, while [Studio](/plugins/studio) provides server-backed UI customization, beginning with Top Shelf artwork.

## Home Screen Sections

The third-party plugin powering [Coming Soon](/browsing/home-screen/coming-soon) and [Because You Watched](/browsing/home-screen/because-you-watched).
When detected, it appears here with an enable toggle.

## Where Other Plugin Options Went

- **Intro Skipper** behavior (Skip button and Auto Skip) lives in **Settings > Playback > Autoplay**
- **Theme songs** are a built-in feature, controlled in **Settings > User Preferences > Sounds** (enable, volume, loop, fade)
