---
order: 85
---

# Device Overrides

Device Overrides lets one setting stay different on one device while the rest
of your Neptune preferences continue to sync normally.

Unlike [Settings Profiles](/personalization/profile-presets), which provide
named settings environments, a Device Override keeps one setting on one
physical device.

For example, you can keep the **Immersive** item-detail layout on one device
and use **Minimal** on another without separating every other preference.
Creating a new override requires [Settings Sync](/settings/backup) to be
enabled when you use **Keep Here** manually, while existing overrides remain
manageable when sync is off. Editing
an unlocked setting in an active Server Profile is the exception: Neptune
creates the Device Override automatically so it can preserve the server-owned
definition.



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

This is forward-only behavior. If two devices already have the same value,
applying an override does not give the other device an older value or try to
reconstruct what it used previously. Its current value stays as it is.

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
- You cannot create a new override manually with **Keep Here** until Settings
  Sync is enabled. Changing an unlocked setting in an active Server Profile can
  still create its Device Override automatically.

Deleting the cloud backup does not delete this device's overrides. Neptune also
does not immediately recreate the backup after deletion. A later local change
can create a new backup if Settings Sync is still enabled.



## Administrator Changes

Neptune MDM supports both one-time administrator changes and
persistent locks.

When a setting is marked **Lock for User**, the server value stays locked and
wins over a Device Override. An explicitly locked member of the active
Settings Profile does the same whether that profile is optional or Required.
Neptune does not delete the Device Override in either case—it preserves it
underneath and restores it when the lock is removed. Requirement controls
which profile stays active; it does not lock that profile's members.

A Server Profile definition itself remains server-owned. Changing one of its
unlocked settings creates or updates a Device Override automatically, so the
user can customize the active profile without rewriting the shared definition.

With [Neptune MDM](/plugins/mdm), a server administrator's
ordinary one-time change takes priority over an override for that same setting:

- The administrator's value is applied.
- The matching Device Override is removed.
- Overrides for settings the administrator did not change remain in place.

This still works if the device was offline during the change. The forced value
is applied when Neptune reconnects, even if ordinary device-to-device sync is
off.

The complete order for one setting is: directly locked server value,
explicitly locked member of the active profile, unseen one-time administrator
push, explicit Device Override, active named Settings Profile, then regular
synchronized settings. A profile allowed to replace a conflict removes that
matching Device Override before this order is evaluated. Marking a profile
Required does not change this value priority.
An administrator push suppresses only the conflicting member of an active
profile until that profile field is edited or the active selection changes.
Server Defaults are a starting template used only when there is no personal
backup; they are not an administrator push. They bootstrap configured,
untouched synchronized settings once even when Settings Sync is off. A Device
Override wins over the corresponding default, omitted template values have no
opinion, and later default changes are not retroactive. The additional
empty-document guard applies specifically to adopting the template's Settings
Profiles library.

## Which Settings Can Be Overridden?

The browser includes synchronized profile settings from Appearance, Home,
Playback, Conductor, Search, Sounds, Images, Metadata, plugins, Live Activity,
and Seerr preferences where those controls are available on the device.

Device-local or temporary values do not appear. Examples include diagnostics
logging, the **Sync across devices** switch itself, and runtime-only
last-used values.

An iPhone-only setting can be kept on an iPhone even though it has no effect on
other device types. The preference remains part of the synchronized profile
unless you override it.

## Troubleshooting

| Problem | What to check |
|---------|---------------|
| **Keep Here is disabled** | Turn on **Sync across devices**. If that switch is unavailable, confirm Neptune MDM is active |
| **A setting has no row shortcut** | Open the Device Overrides browser; sliders and reorder editors are managed there |
| **The setting is absent from the browser** | It may be device-local or unavailable on this device type |
| **A profile did not change an overridden setting** | Edit the profile and enable **Replace Device Overrides**, then select it and confirm **Clear Overrides & Switch** |
| **Uploads are paused to protect saved choices** | Neptune could not safely recover its local override record; leave sync paused and use Get Help before resetting app data |
