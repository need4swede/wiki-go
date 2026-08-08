---
order: 85
---

# Device Overrides

Device Overrides lets one setting stay different on one device while the rest
of your Neptune preferences continue to sync normally.

Unlike [Settings Profiles](/personalization/profile-presets), the Neptune Pro
feature for named settings environments, a Device Override keeps one setting
on one physical device and remains Free.

For example, you can keep the **Immersive** item-detail layout on an Apple TV
and use **Minimal** on an iPhone without separating every other preference.
Device Overrides is a free feature. Creating a new override requires
[Settings Sync](/settings/backup) to be enabled, while existing overrides
remain manageable when sync is off.



## Keep a Setting on This Device

Use the shortcut on a supported setting row:

| Device | Action |
|--------|--------|
| **iPhone or iPad** | Swipe left on the setting, then tap **Keep Here** |
| **Apple TV** | Press and hold the setting, then choose **Keep on this Apple TV** |

The setting receives a **This device only** badge.

Some controls cannot host a swipe or press-and-hold action, including sliders
and reorder editors. You can manage every eligible setting from:

**Settings > User Preferences > Backup and Restore > Device Overrides**

The Device Overrides screen groups settings by their normal Settings section.
On iPhone and iPad, you can also search by setting name.



## What an Override Does

Applying an override:

- Keeps the setting's current value on this device
- Stops future changes to that setting from being uploaded by this device
- Ignores ordinary changes to that setting downloaded from other devices
- Leaves every other setting synchronized
- Does not immediately change the server or any other device

This is forward-only behavior. If the Apple TV and iPhone already have the same
value, applying an override does not give the other devices an older value or
try to reconstruct what they used previously. Their current value stays as it
is.

Overrides belong to one server account, profile, and physical device. They do
not travel inside the cloud backup. Switching profiles or servers uses that
profile's own override list.

If the active Settings Profile also contains an overridden setting, the Device
Override wins by default. Other settings in the profile continue to apply.

A profile can instead save **Replace Device Overrides** as part of its
definition. When that profile becomes active, Neptune removes only the
overrides for settings included in it, then uses its saved values. Unrelated
overrides remain. A user-initiated selection—including switching to Auto—shows
a confirmation with the number of affected overrides before anything is
removed. A later background automatic activation follows the profile's saved
choice without another prompt.



## Sync a Setting Again

To remove one override:

- Use **Sync Again** from the setting's swipe action on iPhone or iPad
- Use **Sync With Other Devices** from its Apple TV context menu
- Or remove it from the **Kept on this device** list in Device Overrides

When the override is removed, this device's current value is normally queued
for sync. It will be sent the next time Neptune can reach the server, even if
the device is offline when you remove it. If the active Settings Profile owns
that setting, its value takes over locally instead and is not uploaded as an
ordinary settings change.

Choose **Sync Everything Again** to remove every override at once. Settings
not controlled by the active named profile are queued using their current
values; profile-owned settings remain under that profile.



## Managing Overrides While Sync Is Off

The Device Overrides screen remains available when **Sync across devices** is
off.

- Existing overrides remain active.
- You can inspect or remove an existing override.
- Removing one queues its current value until sync is turned on again.
- You cannot create a new override until Settings Sync is enabled.

Deleting the cloud backup does not delete this device's overrides. Neptune also
does not immediately recreate the backup after deletion. A later local change
can create a new backup if Settings Sync is still enabled.



## Administrator Changes

A current Neptune MDM plugin supports both one-time administrator changes and
persistent locks.

When a setting is marked **Lock for User**, the server value stays locked and
wins over a Device Override. Every member of an active Required Settings
Profile does the same, as does a separately locked member of another active
profile. Neptune does not delete the Device Override in any of these cases—it
preserves it underneath and restores it when the policy is removed. A Server
Profile definition is always read-only, but an unlocked member of a
non-required Server Profile can still be changed locally by explicitly
enabling a Device Override for it.

These MDM operations are not Pro-gated for the recipient. A Jellyfin
administrator can make or lock an ordinary per-setting change from the Free
plugin dashboard, including for a Free user. Native MDM administration is the
separate Pro convenience for the administrator.

With a current [Neptune MDM](/plugins/mdm) plugin, a server administrator's
ordinary one-time change takes priority over an override for that same setting:

- The administrator's value is applied.
- The matching Device Override is removed.
- Overrides for settings the administrator did not change remain in place.

This still works if the device was offline during the change. The forced value
is applied when Neptune reconnects, even if ordinary device-to-device sync is
off.

The complete order for one setting is: directly locked server value, member of
the active Required profile or separately locked member of another active
profile, unseen one-time administrator push, explicit Device Override, active
named Settings Profile, then regular synchronized settings. A profile allowed
to replace a conflict removes that matching Device Override before this order
is evaluated. Required enforcement instead preserves the matching override as
an underlay and suppresses it only while the requirement matches.
An administrator push suppresses only the conflicting member of an active
profile until that profile field is edited or the active selection changes.
Server Defaults are a starting template used only when there is no personal
backup; they are not an administrator push. They bootstrap configured,
untouched synchronized settings once even when Settings Sync is off. A Device
Override wins over the corresponding default, omitted template values have no
opinion, and later default changes are not retroactive. The additional
empty-document guard applies specifically to adopting the template's Settings
Profiles library.

Older plugin versions still support the normal forward-only filtering, but
cannot provide the durable proof Neptune needs to clear an override after an
administrator change. Neptune shows a compatibility warning when the plugin
should be updated.



## Which Settings Can Be Overridden?

The browser includes synchronized profile settings from Appearance, Home,
Playback, Conductor, Search, Sounds, Images, Metadata, plugins, Live Activity,
and Seerr preferences where those controls are available on the device.

Device-local or temporary values do not appear. Examples include diagnostics
logging, the **Sync across devices** switch itself, and runtime-only
last-used values.

An iPhone-only setting can be kept on an iPhone even though it has no effect on
Apple TV. The preference remains part of the synchronized profile unless you
override it.



## Settings Recovery After an Upgrade

When an existing installation first upgrades to the newer settings-sync
system, Neptune compares its earlier local settings with the cloud backup. In
the uncommon case where it cannot safely determine which copy should win,
cloud settings become active and **Settings Recovery** appears under
**Backup and Restore**.

Choose **Review Which Settings to Keep**, then select:

- **Keep Cloud Settings** to keep the settings currently in use
- **Keep This Device’s Earlier Settings** to restore the retained local copy

Restoring the earlier copy makes it this device's current synchronized
configuration, so those values can update your other devices. This recovery
choice is separate from Device Overrides and normally appears only once.



## Troubleshooting

| Problem | What to check |
|---------|---------------|
| **Keep Here is disabled** | Turn on **Sync across devices**. If that switch is unavailable, confirm Neptune MDM is active |
| **A setting has no row shortcut** | Open the Device Overrides browser; sliders and reorder editors are managed there |
| **The setting is absent from the browser** | It may be device-local, unavailable on this platform, or unsupported by the current app version |
| **A profile did not change an overridden setting** | Edit the profile and enable **Replace Device Overrides**, then select it and confirm **Clear Overrides & Switch** |
| **An administrator change did not clear an override** | Update Neptune MDM and reconnect |
| **Uploads are paused to protect saved choices** | Neptune could not safely recover its local override record; leave sync paused and use Get Help before resetting app data |
