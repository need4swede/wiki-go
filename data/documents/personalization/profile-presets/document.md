---
order: 15
---

# Settings Profiles

Settings Profiles let you keep named setups such as **Blue**, **Kids**, or
**Travel**. **My Settings** is your normal default profile.

Find them at:

**Settings > User Preferences > Settings Profiles**

The active-profile row shows what you are editing. When Backup and Restore is
available, it also links to the same Settings Profiles screen.

Settings Profiles require [Neptune Pro](/neptune-pro). Individual
[Device Overrides](/settings/device-overrides) remain Free.



## The Main Rule

The normal Settings screens edit whichever settings profile is active.

| Active Profile | What Happens When You Change a Setting |
|----------------|-----------------------------------------|
| **My Settings** | The change syncs to devices using My Settings |
| **Blue** | Blue itself is updated, and devices using Blue receive the change |
| **Device Override** on that setting | The change stays only on this device |

Neptune shows **Editing Blue · Synced** when Blue is active and Settings Sync
is available and enabled. Otherwise it shows **Editing Blue · On This
Device**.

There is no Reapply button. A setting change takes effect immediately and is
saved to the active profile automatically.



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

Open Settings Profiles and choose:

- **Automatic** to use the profile assigned to this device type
- **My Settings** to use your ordinary settings
- A named profile such as **Blue**

The choice is local to the physical device. Selecting Blue on Apple TV does
not select Blue on iPhone.

The Blue definition can still sync. If both devices use Blue, changing an
eligible setting on either device updates Blue for both. If the iPhone uses My
Settings, it does not receive Blue's effective values.



## Automatic Profiles by Device Type

Each device type can have zero or one automatic profile:

| Device Type | Used By |
|-------------|---------|
| **iPhone** | iPhone |
| **iPad** | iPad |
| **Apple TV** | Apple TV |
| **Mac** | Reserved for future macOS support |

Assignments sync with your account. Every matching device in Automatic mode
uses that assignment. A manual profile choice affects only that device until
you choose Automatic again.

If no automatic profile is assigned, Automatic uses My Settings.



## Device Overrides

A [Device Override](/settings/device-overrides) keeps one setting local and
normally wins over the active Settings Profile.

Each named profile has a **Replace Device Overrides** option:

- **Off:** conflicting Device Overrides stay in control
- **On:** activating the profile removes only its conflicting Device Overrides

When a manual switch would remove overrides, Neptune tells you how many are
affected and asks before continuing. Unrelated overrides are never removed.
Automatic activation follows the saved option without another prompt.



## How Sync Works

Settings Sync carries:

- Profile names, order, and saved values
- The **Replace Device Overrides** choice
- Automatic iPhone, iPad, Apple TV, and Mac assignments

It does not carry the profile currently selected on a physical device.

When Blue is active, ordinary eligible changes update Blue's definition. They
are not also uploaded as My Settings changes. This prevents an Apple TV using
Blue from overwriting an iPhone using My Settings.

Neptune still tracks newer My Settings values underneath an active named
profile. Switching back to My Settings restores the latest synchronized value,
not an old value from when Blue was selected.

Without Settings Sync, profiles still work on the device where they were
created, but their definitions and assignments do not reach other devices.



## Which Value Wins?

For the same eligible setting, Neptune uses this order:

1. An individual administrator push
2. A Device Override
3. The active named Settings Profile
4. My Settings

An administrator push may temporarily replace a matching profile value. Change
that setting again while the profile is active, or switch away and back, to
establish the profile value again.



## Edit or Delete a Profile

Choose a profile under **Your Profiles** to open:

- **Profile Name**
- **Manage Profile**
- **Use Automatically On**
- **Replace Device Overrides**
- **Delete Profile**

Saving profile values updates its definition. If it is active on this device,
the new values apply immediately. Renaming a profile or changing its automatic
assignments does not switch the current device.

Deleting a profile also removes its automatic assignments. A device that had
selected it returns to Automatic. Other profiles and My Settings are not
deleted.



## Server Defaults

With [Neptune MDM](/plugins/mdm), an administrator can provide a starting
Settings Profiles library and automatic assignments. Neptune copies that
library only when a new user's personal library is empty.

Server Defaults are not retroactive. After the first copy, the profiles belong
to the user and can be edited or deleted normally. Changing Server Defaults
later does not rewrite existing users.

Administrators can prepare Settings Profiles from the Free Jellyfin dashboard,
but each signed-in user still needs Neptune Pro before a named profile becomes
active. MDM configuration does not grant App Store entitlement.



## If Pro Access Ends

Neptune keeps profile definitions, automatic assignments, and each device's
local selection. Named-profile values stop applying immediately and My
Settings becomes active. Device Overrides continue working.

When Pro returns, Neptune automatically restores the retained selection. You
do not need to recreate the profile.
