---
order: 15
---

# Settings Profiles

Settings Profiles let you keep named setups such as **Blue**, **Kids**, or
**Travel**. Without a named profile, Neptune uses your regular synchronized
settings.

Find them at:

**Settings > User Preferences > Backup and Restore > Settings Profiles**

If the active backend does not provide Backup and Restore, Settings Profiles
appears directly in **User Preferences** and stays on that device.

Settings Profiles require [Neptune Pro](/neptune-pro). Individual
[Device Overrides](/settings/device-overrides) remain Free.



## The Main Rule

The normal Settings screens edit whichever settings target is active.

| Active Target | What Happens When You Change a Setting |
|---------------|-----------------------------------------|
| **No named profile** | The change syncs to devices without a named profile |
| **Blue** | Blue itself is updated, and devices using Blue receive the change |
| **Device Override** on that setting | The change stays only on this device |

There is no Reapply button. A setting change takes effect immediately and is
saved to the active target automatically.



## Create a Profile

1. Choose **Create Profile**
2. Choose a starting point
3. Edit the settings through Neptune's familiar menus
4. Choose **Save**, then name the profile

The starting points are:

| Starting Point | What It Copies |
|----------------|----------------|
| **Copy My Current Settings** | The settings currently in use on this device |
| **Copy Server Defaults** | Your administrator's settings, completed with Neptune defaults |
| **Start with Neptune Defaults** | Neptune's original settings |

The starting point is a one-time copy. It is not a permanent parent, so later
changes to Server Defaults do not silently rewrite your profile.

New profiles save a complete eligible settings snapshot across Neptune's Apple
platforms. You only see controls supported by the device you are using; values
for the other platforms are preserved.

If the name is blank, Neptune chooses **Profile**, **Profile 2**, **Profile 3**,
and so on. Leaving changed work asks whether to save or discard it. Theme
changes preview across the entire editor, and your regular theme returns when
you leave.



## Switch Profiles

Open Settings Profiles and use **Device Preset**:

- **Auto** uses the profile assigned to this device type. If there is no
  assignment, the device runs without a named profile.
- **Manual** immediately stops following Auto, uses your regular settings, and
  reveals your named profiles and Create Profile.

Switching back to Auto always asks first. If a profile is assigned, the alert
names it and confirms that your regular settings will be kept. If no profile is
assigned, the alert says that none is currently assigned and that if one is
assigned later, it will be applied automatically.

Choose a named profile such as Blue, then choose **Use on This Device**. The
same menu also offers **Edit Profile**, which opens the editor without
activating it. Choosing the active named profile offers **Stop Using on This
Device** instead.

The choice is local to the physical device. Selecting Blue on Apple TV does
not select Blue on iPhone.

The Blue definition can still sync. If both devices use Blue, changing an
eligible setting on either device updates Blue for both. If the iPhone has no
named profile, it does not receive Blue's effective values.



## What Returns When You Leave a Profile

A named profile sits over your regular settings; it does not turn its values
into your regular synchronized settings. Neptune keeps the regular values
underneath it.

For example:

1. Your regular Theme is **Ocean**.
2. You select a profile whose Theme is **Midnight**.
3. You switch to Auto, and no automatic profile is assigned.
4. The profile is removed and Theme returns to **Ocean**.

If another device changed your regular synchronized Theme to **Volcano** while
Midnight was active, Neptune returns to **Volcano** instead. If Neptune has
never received a synchronized value for a setting, it uses the local value
captured before the named profile took over.

Switching profiles does not restore your cloud backup on demand, create a
special backup, or reapply Server Defaults.



## Auto Profiles by Device Type

Each device type can have zero or one automatic profile:

| Device Type | Used By |
|-------------|---------|
| **iPhone** | iPhone |
| **iPad** | iPad |
| **Apple TV** | Apple TV |
| **Mac** | Reserved for future macOS support |

Assignments sync with your account. Every matching device in **Auto** follows
that assignment. A manual profile choice affects only that device until you
choose Auto again.

If no profile is assigned for that device type, Auto uses regular settings
without a named profile.



## Device Overrides

A [Device Override](/settings/device-overrides) keeps one setting local and
normally wins over the active Settings Profile.

Each named profile has a **Replace Device Overrides** option:

- **Off:** conflicting Device Overrides stay in control
- **On:** activating the profile removes only its conflicting Device Overrides

When a user-initiated switch would remove overrides, Neptune tells you how many
are affected and asks before continuing. This includes switching back to Auto
when its assigned profile replaces overrides. Unrelated overrides are never
removed. A later background automatic assignment follows the saved option.



## How Sync Works

Settings Sync carries:

- Profile names, order, and saved values
- The **Replace Device Overrides** choice
- Automatic iPhone, iPad, Apple TV, and Mac assignments

It does not carry the profile currently selected on a physical device.

When Blue is active, ordinary eligible changes update Blue's definition. They
are not also uploaded as regular-setting changes. This prevents an Apple TV
using Blue from overwriting an iPhone that has no named profile.

Neptune still tracks newer regular settings underneath an active named profile.
Stopping the named profile restores the latest synchronized value. If no
synchronized value has ever been received, Neptune restores the local value it
captured before the profile became active. This happens locally; it is not a
new Restore from Backup operation.

Without Settings Sync, profiles still work on the device where they were
created, but their definitions and assignments do not reach other devices.



## Which Value Wins?

For the same eligible setting, Neptune uses this order:

1. An individual administrator push
2. A Device Override
3. The active named Settings Profile
4. Regular synchronized settings

An administrator push may temporarily replace a matching profile value. Change
that setting again while the profile is active, or switch away and back, to
establish the profile value again.



## Edit or Delete a Profile

Set **Device Preset** to Manual and choose a named profile. The action menu
offers **Use on This Device** or **Edit Profile**. Edit Profile opens:

- **Profile Name**
- **Manage Profile**
- **Use Automatically On**
- **Replace Device Overrides**
- **Delete Profile**

Saving profile values updates its definition. If it is active on this device,
the new values apply immediately. Renaming a profile or changing its automatic
assignments does not switch the current device.

Deleting a profile also removes its automatic assignments. A device that had
selected it returns to Auto. Other profiles and regular settings are not
deleted.



## Server Defaults

With [Neptune MDM](/plugins/mdm), an administrator can provide a starting
Settings Profiles library and automatic assignments. Neptune copies that
library only when a new user's personal library is empty.

Server Defaults are not retroactive. After the first copy, the profiles belong
to the user and can be edited or deleted normally. Changing Server Defaults
later does not rewrite existing users. Switching to Auto with no assigned
profile does not reapply Server Defaults.

Administrators can prepare Settings Profiles from the Free Jellyfin dashboard,
but each signed-in user still needs Neptune Pro before a named profile becomes
active. MDM configuration does not grant App Store entitlement.



## If Pro Access Ends

Neptune keeps profile definitions, automatic assignments, and each device's
local selection. Named-profile values stop applying immediately and regular
settings become active. Device Overrides continue working.

When Pro returns, Neptune automatically restores the retained selection. You
do not need to recreate the profile.
