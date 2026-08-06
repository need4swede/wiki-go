---
order: 15
---

# Profile Presets

Profile Presets are reusable settings loadouts. Switch between them whenever
you want, or assign one preset automatically to each device type so the same
profile can use different settings on iPhone, iPad, and Apple TV. Mac is
available for assigning future macOS devices.

Presets belong to the signed-in profile. Find them at:

**Settings > User Preferences > Backup and Restore > Profile Presets**

If the active backend does not provide Backup and Restore, Profile Presets
appears directly under **User Preferences** and remains local to that device.

Profile Presets require [Neptune Pro](/neptune-pro). This includes creating,
editing, deleting, manually switching, reapplying, and automatic
device-type assignments. [Device Overrides](/settings/device-overrides) remain
Free when you only need one setting to stay local to one device.



## Create a Preset

1. Choose **Create Preset**
2. Choose a starting point
3. Edit the loadout through Neptune's familiar settings categories
4. Choose **Save**, then name the preset

The starting points are:

| Starting Point | What It Copies |
|----------------|----------------|
| **Copy My Current Settings** | The settings currently in use on this device |
| **Copy Server Defaults** | The settings supplied by your server administrator |
| **Start with Neptune Defaults** | Neptune's original settings |

A starting point is only a snapshot. Changing your regular settings or Server
Defaults later does not silently rewrite the preset. **Copy Server Defaults**
is unavailable when the current server or account does not provide them.

While managing the loadout, change a setting to save that value in the preset,
or choose **Follow My Settings** to leave it out. Saving opens the name screen.
If the name is blank, Neptune chooses the first available name: **Preset**,
**Preset 2**, **Preset 3**, and so on. You then land on the new preset's edit
page.

If you try to leave after changing a draft, Neptune asks whether to save it,
discard it, or continue editing. Theme changes preview across the entire
editor, including its background, and your normal theme returns when you
leave.



## Presets Are Sparse

A preset stores only the settings you choose. It is an overlay, not a second
complete copy of your profile.

For example, an **iPhone** preset could include:

- Minimal item-detail layout
- Smaller cards
- Picture in Picture enabled

If it does not include subtitle language, theme, or Home row order, those
settings continue using the profile's current synchronized values. Switching
presets never resets settings that are not included.

Only eligible synchronized profile settings can be captured. Device-local and
temporary values, such as diagnostic logging, are not available. See
[Device Overrides](/settings/device-overrides#which-settings-can-be-overridden)
for the kinds of settings that can participate.



## Switch Manually

Open Profile Presets and choose a named preset. It takes effect immediately on
the current device; **Reapply Preset** is not a second required step.

Use **Reapply Preset** after a local tweak or
administrator push has temporarily suppressed one of its included settings.
This restores the preset's captured values without changing which preset is
selected.

Manual selection is local to that physical device:

- Applying a preset on an iPhone does not manually select it on an iPad or
  Apple TV
- **No Preset** uses the profile's regular settings on this device
- **Automatic** returns this device to its device-type assignment

The preset itself still syncs. If you edit its included values on one device,
the updated definition reaches the profile's other devices through
[Settings Sync](/settings/backup).



## Device Overrides

By default, a [Device Override](/settings/device-overrides) remains in control
when it conflicts with a preset. The preset still applies all of its other
settings.

Each preset has a **Clear Conflicting Device Overrides** switch on its edit
page:

- **Off:** conflicting Device Overrides stay in place, so the preset does not
  change those settings
- **On:** applying the preset removes only Device Overrides for settings saved
  in that preset, then applies the preset values

Unrelated Device Overrides are never removed. Turning the switch on does not
immediately change anything; its policy runs when the preset is applied.

When a manual selection or **Reapply Preset** would clear overrides, Neptune
shows how many are affected and asks you to choose **Clear & Apply** or cancel.
Automatic application follows the saved switch without another prompt.



## Make a Preset Automatic by Device Type

Each device type can have zero or one automatic preset:

| Device Type | Used By |
|-------------|---------|
| **iPhone** | iPhone |
| **iPad** | iPad |
| **Apple TV** | Apple TV |
| **Mac** | Reserved for future macOS support |

Assignments sync with the profile. A **Travel** preset assigned to iPhone
therefore becomes the automatic choice on every iPhone signed in to that
profile, while a **Living Room** preset assigned to Apple TV becomes the
automatic choice on all of its Apple TVs. Assigning another preset to the same
device type replaces the previous assignment.

A newly signed-in device starts in **Automatic** mode. If its type has no
valid assignment, no preset overlay is applied and its regular profile
settings remain unchanged. The selection stays Automatic; Neptune does not
switch it to No Preset. A manual preset or No Preset choice stays on that
physical device until you select Automatic again.



## How Presets and Sync Work Together

Settings Sync carries:

- Preset names and order
- The selected settings and captured values inside each preset
- Each preset's **Clear Conflicting Device Overrides** choice
- iPhone, iPad, Apple TV, and Mac assignments

The active choice on each physical device—Automatic, No Preset, or a
specific preset—stays local. Neptune also keeps the preset's applied values
from being uploaded as ordinary setting changes, so a phone preset cannot
overwrite an Apple TV preset through sync.

Without Settings Sync, Pro users can still use presets and assignments on the
device where they were created, but they do not travel to the profile's other
devices.

When a preset stops controlling a setting, Neptune restores the latest
synchronized value from the server. If the server has never supplied one, it
restores the value that was present before the preset took control.



## Which Value Wins?

When more than one feature affects the same setting, Neptune applies this
order:

| Priority | Source | Result |
|----------|--------|--------|
| 1 | **Individual administrator push** | The pushed value wins when delivered and suppresses the conflicting preset member |
| 2 | **Device Override** | A **This device only** value wins unless the applied preset is allowed to clear that conflict |
| 3 | **Active Profile Preset** | The preset wins only for settings it includes |
| 4 | **Current synchronized settings** | The profile's ordinary base value is used |

When **Clear Conflicting Device Overrides** is enabled, the matching overrides
are removed before the preset applies. They are no longer a competing layer;
unrelated overrides keep their normal priority.

An administrator push is different from a Server Default. A push is an
explicit change sent to an individual user. The Profile Presets supplied by
Server Defaults are only a starting library: Neptune adopts them when the user
has no personal backup and its local Profile Presets document is empty. Other
configured synchronized defaults can seed untouched values at the same
one-time bootstrap, while explicit local changes and Device Overrides win.

If an administrator pushes a setting that also has a Device Override, Neptune
applies the pushed value and removes that matching override. If the setting is
also in the active preset, Neptune suppresses only that conflicting preset
member; every unrelated member keeps applying. The suppression lasts until
you use **Reapply Preset** or change the active selection. Either action
explicitly reapplies the preset's saved value.



## Edit or Delete a Preset

Choose a preset under **Your Presets** to open its edit page:

- **Preset Name** renames it
- **Manage Preset** opens the settings saved in the loadout
- **Use Automatically On** assigns it to device types
- **Clear Conflicting Device Overrides** controls how it handles matching
  device-local choices
- **Delete Preset** removes it

Saving edits updates the preset definition; it does not select or reapply the
preset on the current device. Return to the main Profile Presets page to select
it, or use **Reapply Preset** if it is already active. Backing out with unsaved
changes shows the save-or-discard confirmation.

Deleting a preset also removes every automatic device-type assignment that
points to it. A device that selected the deleted preset manually returns to
Automatic and uses the remaining assignment for its device type, if one
exists. Otherwise the released settings return to their latest synchronized
values, or to their pre-preset values when no server value has been observed.
An Automatic device remains in Automatic mode; Neptune does not silently
change its selection to No Preset. Other presets and the profile's
synchronized base settings are not deleted.



## Server Defaults

With [Neptune MDM](/plugins/mdm), an administrator can prepare a shared
starting library of Profile Presets and choose zero or one automatic preset
for each device type. Every new user inherits that library and those
assignments when Neptune creates their settings, provided they have no
personal settings backup and Neptune's local Profile Presets document is
empty. Bootstrap also runs when ordinary Settings Sync is off; a Free user
retains the document without applying it until Pro becomes available.

The administrator can also save **Clear Conflicting Device Overrides** inside
each starting preset. If an inherited preset later applies automatically, it
uses that saved policy without a prompt and removes only matching overrides.

Server Defaults are not retroactive:

- They seed only when there is no personal backup and Neptune's local Profile
  Presets document is empty
- They do not replace presets or assignments in an existing personal backup
- After seeding, they are the user's starting personal configuration
- Explicit local non-default or dirty settings and Device Overrides remain
  local during the broader Server Defaults bootstrap
- To change an existing user, the administrator must send that user an
  individual settings push through Neptune MDM

This keeps organization-wide starting points useful without unexpectedly
rewriting configurations that existing users have already personalized.



## If Pro Access Ends

Neptune keeps your preset definitions, assignments, and the current physical
device's Automatic, No Preset, or named-preset choice. It does not delete or
rewrite them.

Preset values stop applying immediately, and the affected settings return to
their synchronized values—or the values they had before the preset took
control when no synchronized value exists. Device Overrides continue working.
When Pro access returns, Neptune automatically reconciles the saved selection;
you do not need to recreate or reselect the loadout.

An administrator can still prepare and distribute presets from Neptune MDM's
Free Jellyfin dashboard while a target user is Free. Native client
administration requires the administrator's own Pro access. In either case,
the presets remain dormant until the signed-in target user has Pro; MDM
configuration does not unlock that user's feature. The dashboard therefore
uses a general **Requires Neptune Pro** notice. The native console can be more
specific: it confirms the active account's own Pro, identifies another managed
user as needing Pro, or explains that each recipient of Server Defaults needs
Pro.
