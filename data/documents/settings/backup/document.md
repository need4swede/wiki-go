---
order: 60
---

# Backup & Sync

Keep your Neptune preferences in sync across every device signed into the same Jellyfin account. Settings, sort orders, layout choices, theme picks, library shortcuts, and your customized home rows all stay aligned.

Backup & Sync is powered by the **Neptune companion plugin** running on your Jellyfin server. Without the plugin, Neptune still works fine - your settings just stay device-local.



## What Gets Synced

| Category | Examples |
|----------|----------|
| Appearance | Theme, theme mode, backdrop hover, custom theme imports |
| Home & Library Layout | Section order and visibility, home library selection |
| Playback | Engine choice, autoplay countdown, audio/subtitle preferences, anime mode |
| Quality | Preferred resolution, dynamic range, audio quality, version auto-pick |
| Notifications | Master toggle and per-category preferences |
| Search | Local index, semantic search, prompt search, LLM provider config |
| Plugins | Theme Songs volume and behavior, Intro Skipper, Home Sections |
| Library Shortcuts | Pinned items, browse pins, timestamp pins |

What stays device-local: debug logging toggles, the sync toggle itself, and anything that depends on the specific hardware (e.g. ongoing background sync state).



## Setting It Up

### During Onboarding

If the Neptune plugin is detected on your server, onboarding adds a **Backup & Sync** step.

- **Existing backup found** - Neptune offers to restore your settings from the cloud backup.
- **No backup found** - Neptune offers to enable sync so this device starts contributing.
- **Skip** - Continue without enabling sync. You can turn it on later in Settings.

### From Settings

Go to **Settings > Profile > Preferences > Backup and Restore** to manage sync at any time.

| Action | Result |
|--------|--------|
| Enable sync | Starts syncing settings. The first save uploads a fresh backup. |
| Restore from Backup | Pulls the latest backup from the server and applies it. |
| Delete Cloud Backup | Removes the backup from the server. Other devices keep their local copy. |
| Disable sync | Stops uploads and live updates. The cloud backup is preserved. |



## How It Works

Each save on one device uploads a backup to your Jellyfin server (debounced by a few seconds so rapid changes batch together). The server then notifies every other signed-in device, which pulls the new settings and applies them in place - no restart needed.

When the app launches, Neptune checks the server for a newer backup made on another device. If found, it applies it before you start browsing.

**Last write wins.** If two devices change different settings at the same time, the most recent save replaces the prior one. This is fine for preferences but isn't a merge.



## Cloud Backup Status

Settings shows the current backup state:

- **Last updated** - relative time since the latest upload
- **Source device** - which device made the most recent change

If sync ever stops working, the page shows a hint about why (plugin not installed, plugin needs a server restart, plugin disabled, etc.).



## Privacy

| Data | Where It Lives |
|------|----------------|
| Your settings JSON | Your Jellyfin server only |
| Authentication | Standard Jellyfin auth tokens |
| Library metadata | Never uploaded as part of sync |
| Watch history | Stays in Jellyfin's user-data system, not in Neptune's backup |

Sync is scoped per server and per user. A Jellyfin user signed into two different servers maintains two independent backups.



## Without the Plugin

If the Neptune plugin isn't installed, Backup & Sync is unavailable. Settings still save locally and persist between launches - you just don't get cross-device sync. See [Plugins](/getting-started/setup/plugins) for installing the companion plugin.
