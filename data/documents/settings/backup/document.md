---
order: 80
---

# Backup & Restore

Keep your Neptune preferences in sync across every device signed into the same
server account. Settings, layout choices, theme picks, library pins, and your
customized home rows all stay aligned. When one setting genuinely needs to be
different on one device, [Device Overrides](/settings/device-overrides) can
keep that setting local without disabling the rest of sync. [Settings
Profiles](/personalization/profile-presets) provide named settings environments
that can be selected locally or assigned by device type with Neptune Pro.

Backup & Restore is currently powered by the Jellyfin-specific [Neptune
MDM](/plugins/mdm) plugin. Without a compatible backend extension, Neptune
still works; your settings stay device-local and Neptune does not show cloud
sync actions that cannot work. The current Emby beta has no Neptune companion,
so its local settings remain available while Backup & Restore is
capability-unavailable. Sync support for future backends will be documented as
it becomes available.



## What Gets Synced

| Category | Examples |
|----------|----------|
| Appearance | Theme, theme mode, card styles, layouts, custom theme imports |
| Home & Library layout | Section order and visibility, navigation bar, row limits |
| Playback | Engine choice, autoplay behavior, audio settings, and iOS [Picture in Picture and Background Playback](/ios/playback) toggles |
| Conductor | Languages, track rules, quality preferences |
| Search & AI | Search options and language model configuration |
| Sounds | Theme song volume and behavior |
| [Library Pins](/library/shortcuts) | Pinned items, browse Pins, timestamp Pins |
| [iPhone Compass](/ios/live-activity) | Ordered Compass Shortcuts, custom labels and symbols |
| [Live Activity](/ios/live-activity) | Enabled state and selected activity type |
| [Settings Profiles](/personalization/profile-presets) | Profile definitions, saved values, override-replacement choices, order, and device-type assignments |

What stays device-local: diagnostics toggles, the sync switch itself, and
anything tied to the specific hardware. The active Settings Profile choice is
local too: Automatic, My Settings, or a manually selected named profile can be
different on each physical device. A Device Override is also local, but it
applies to one otherwise synchronized setting. The active profile selection and
the Device Override list never travel inside the backup.

Home Screen and Lock Screen widget placement, size, and per-widget
Page/Section/Pin selection are managed by iOS on that device; they are not one
synchronized Neptune preference. The underlying native Pins and the content
Neptune publishes to an existing widget do follow the active profile.

Picture in Picture and Background Playback are synchronized preferences even
though their behavior is iPhone/iPad-only. A changed value is used when the
next playback session starts; it has no effect on Apple TV.



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
| **Settings Profiles** | With Neptune Pro, creates named settings profiles and optionally makes one automatic for each device type |
| **Restore from Backup** | Applies the latest synchronized values; the active Settings Profile choice and Device Overrides stay local |
| **Device Overrides** | Keeps selected settings local to this device while everything else syncs |
| **Delete Cloud Backup** | Removes the backup from the server. Devices keep their local settings and overrides |

[Settings Profiles](/personalization/profile-presets) is also available from
the active-profile row in User Preferences. Its definitions and one optional
automatic assignment per device type use the same Settings Sync connection.
Definitions and the local choice remain stored if Pro access ends, but no named
profile applies until Pro returns. Device Overrides remain Free.



## How It Works

With Neptune MDM, rapid local changes are briefly batched and only the settings
that changed are sent to your Jellyfin server. The server merges different
fields into the user's backup, then notifies every other signed-in device.
Those devices apply the accepted changes in place; no restart is needed.

On launch or reconnect, Neptune checks for changes made elsewhere before you
start browsing. Pending local edits are kept until the server accepts them.
If two devices change different settings, both changes can land. If they
change the same setting, the most recently accepted value wins.

For a brand-new Jellyfin profile, Server Defaults are applied before the first
automatic Seerr sign-in, even when Settings Sync is off. The onboarding page
labels this as server setup instead of offering to restore it as a personal
“Welcome Back” backup.

Settings Profile definitions and iPhone, iPad, Apple TV, and Mac assignments
sync as one document. Ordinary eligible changes update the active target: My
Settings if it is active, or the named profile definition if one is active.
The named profile's effective member values are not uploaded as separate My
Settings changes, preventing an iPhone profile from overwriting an Apple TV's
configuration. A profile's **Replace Device Overrides** choice also syncs.
Mac is reserved for future macOS support.

An active [Device Override](/settings/device-overrides) removes its setting
from ordinary uploads and downloads on that device. Removing the override
normally queues this device's current value to sync again. A profile with
**Replace Device Overrides** enabled can instead remove only its matching
overrides when activated. Manual selection asks before clearing; automatic
activation uses the saved policy.



## Deleting a Backup

Deleting the cloud backup clears the server copy but does not erase settings or
Device Overrides from your devices. Neptune will not immediately recreate the
backup just because the app launches or reconnects.

If Settings Sync remains enabled, a later local change can create a new backup
from the current synchronized settings; active overrides remain excluded. Turn
off **Sync across devices** as well if you want settings to remain local after
deletion.



## Settings Recovery After an Upgrade

When an existing installation upgrades to the newer field-level sync system,
Neptune reconciles its earlier local settings with the server backup. If the
app cannot safely tell which copy should win, cloud settings become active and
a one-time **Settings Recovery** section appears.

Choose **Review Which Settings to Keep** to keep the cloud version or restore
the retained settings from this device. Restoring the earlier copy makes it
the current synchronized configuration, so those values can update your other
devices. See [Device Overrides](/settings/device-overrides#settings-recovery-after-an-upgrade)
for more detail.



## Backup Status

The screen shows when the backup was last saved and which device saved it. If sync stops working, a hint explains why (plugin not installed, pending restart, disabled).



## Privacy

| Data | Where It Lives |
|------|----------------|
| Synchronized settings | On each device, with a backup on your Jellyfin server |
| Settings Profile definitions, override-replacement choices, and device-type assignments | In the synchronized profile backup |
| Active Settings Profile choice | On that physical device only |
| Device Override list | On that physical device only; never in the cloud backup |
| Authentication | Standard Jellyfin auth tokens |
| Library metadata | Never uploaded as part of sync |
| Watch history | Stays in Jellyfin's own user data, not in the backup |

Sync is scoped per server and per user. A user signed into two different servers maintains two independent backups.
