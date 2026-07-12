---
order: 70
---

# Backup & Restore

Keep your Neptune preferences in sync across every device signed into the same Jellyfin account. Settings, layout choices, theme picks, library shortcuts, and your customized home rows all stay aligned.

Backup & Restore is powered by the [Neptune MDM](/plugins/mdm) plugin on your Jellyfin server. Without the plugin, Neptune still works; your settings just stay device-local.



## What Gets Synced

| Category | Examples |
|----------|----------|
| Appearance | Theme, theme mode, card styles, layouts, custom theme imports |
| Home & Library layout | Section order and visibility, navigation bar, row limits |
| Playback | Engine choice, autoplay behavior, audio settings |
| Conductor | Languages, track rules, quality preferences |
| Search & AI | Search options and language model configuration |
| Sounds | Theme song volume and behavior |
| Library Shortcuts | Pinned items, browse pins, timestamp pins |

What stays device-local: diagnostics toggles, the sync switch itself, and anything tied to the specific hardware.



## Setting It Up

### During Onboarding

If the plugin is detected on your server, onboarding adds a backup step:

- **Existing backup found.** Neptune offers to restore your settings.
- **No backup found.** Neptune offers to enable sync so this device starts contributing.
- **Skip.** Continue without sync and turn it on later.

### From Settings

Go to **Settings > User Preferences > Backup and Restore**:

| Action | Result |
|--------|--------|
| **Sync across devices** | The master switch. First save uploads a fresh backup |
| **Restore from Backup** | Pulls the latest backup from the server and applies it |
| **Delete Cloud Backup** | Removes the backup from the server. Devices keep their local settings |



## How It Works

Each change on one device uploads a backup to your Jellyfin server (rapid changes batch together). The server then notifies every other signed-in device, which applies the new settings in place. No restart needed.

On launch, Neptune checks for a newer backup made elsewhere and applies it before you start browsing.

**Last write wins.** If two devices change settings at the same time, the most recent save replaces the prior one. Fine for preferences, but it isn't a merge.



## Backup Status

The screen shows when the backup was last saved and which device saved it. If sync stops working, a hint explains why (plugin not installed, pending restart, disabled).



## Privacy

| Data | Where It Lives |
|------|----------------|
| Your settings | Your Jellyfin server only |
| Authentication | Standard Jellyfin auth tokens |
| Library metadata | Never uploaded as part of sync |
| Watch history | Stays in Jellyfin's own user data, not in the backup |

Sync is scoped per server and per user. A user signed into two different servers maintains two independent backups.
