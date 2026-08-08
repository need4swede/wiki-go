---
order: 10
---

# Settings Sync

Settings Sync keeps supported preferences consistent across Neptune clients. Change a theme on your iPhone and your Apple TV updates in real time; adjust playback settings on one device and the others pick up the change automatically.

Supported changes are backed up to the server. When you sign in on a new device, Neptune restores themes, layout, playback preferences, and other synchronized settings without requiring manual setup.

## Device-Specific Choices

You can turn Settings Sync off for a device or use [Device Overrides](/settings/device-overrides) to keep selected settings different there. Applying an override preserves that setting's current value on the device without changing the server or another device. Removing an override publishes the current local value the next time sync runs.

Device Overrides remain on the device where they were created and are not included in the server backup. See [Backup & Restore](/settings/backup) for the client-side controls.

## Settings Profiles

The synchronized document includes [Settings Profiles](/personalization/profile-presets), including their names, sparse included settings, override-clearing choices, order, and iPhone, iPad, Apple TV, and Mac assignments. The active choice remains local to each physical device, so manually switching profiles on one device does not force every device to use the same profile.

The Settings Profiles document can sync to a Free account, but personal selection and ordinary automatic assignments remain dormant until that account has Pro. Device Overrides remain Free. A matching Required assignment is managed policy and still keeps the assigned profile active. Its unlocked members remain customizable; only separate member locks are read-only. If the account later gains Pro, Neptune automatically reconciles the retained personal selection underneath any active requirement.

## Managed Policy

Managed policy is separate from the synchronized settings document. It is delivered even when ordinary Settings Sync is off, and device uploads cannot replace the personal value underneath a managed setting or delete a required profile.

[Server Profiles](/plugins/mdm/server-profiles) use this managed path without copying their definitions into personal backups. A global device assignment reaches every matching user, while an unassigned profile reaches only users an administrator explicitly adds to its scope. Later definition and lock changes update everyone in that scope.

The synchronized profile also includes native [Library Pins](/library/shortcuts), the iPhone's ordered Compass Shortcuts, and its Live Activity enabled/type preferences. iOS Home Screen and Lock Screen widget placement, size, and per-widget Page, Section, or Pin selection remain system-owned configuration on each device; they are not a single Neptune setting that MDM can replace.
