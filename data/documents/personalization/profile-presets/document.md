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

A Jellyfin administrator using a current [Neptune MDM](/plugins/mdm) plugin can
create a live **Server Profile** once and assign it to every iPhone, iPad,
Apple TV, or future Mac. Per-user profiles and assignments remain the more
specific layer. Administrators can require an assignment and lock only the
settings that must also override Device Overrides.



## The Main Rule

The normal Settings screens edit whichever personal settings target is active.
Server-owned profiles are read-only unless a setting has an explicit Device
Override.

| Active Target | What Happens When You Change a Setting |
|---------------|-----------------------------------------|
| **No named profile** | The change syncs to devices without a named profile |
| Personal **Blue** | Blue itself is updated, and devices using Blue receive the change |
| **Server Profile** | It stays server-owned; use a Device Override for an allowed local difference |
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

If your administrator requires a personal or Server Profile for this device type, Neptune keeps
Device Preset on locked Auto. You cannot switch to Manual, select another
profile, or delete the required profile. Your earlier local selection is kept
underneath and returns if the requirement is removed.

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

An administrator can require the automatic assignment for a specific user.
That requirement applies to every device of the matching type signed in as
that user. It does not force the same profile onto other device types.

A current Neptune MDM server can also provide a global automatic assignment
for every user. A personal automatic assignment wins over an optional global
one. A per-user required assignment wins over a global required assignment.
Required assignments lock Auto; optional assignments can still be replaced by
Manual on that physical device.



## Device Overrides

A [Device Override](/settings/device-overrides) keeps one setting local and
normally wins over the active Settings Profile.

An administrator-enforced value is the exception. A directly managed setting,
or a locked member of the active profile, temporarily wins over a matching
Device Override. Neptune keeps the override underneath and restores it if the
administrator removes enforcement.

A Server Profile definition is always read-only. For one of its unenforced
settings, explicitly enabling a Device Override permits a local value. If that
member is enforced, the server value also outranks the override.

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

Server requirements are delivered separately from your synchronized profile
document. They still arrive when ordinary Settings Sync is off. Device uploads
cannot delete a profile referenced by policy or replace one of its enforced
values.

Server Profiles use that same managed delivery path. They are not copied into
your personal backup. Changes and removals reach current users, future users,
and devices with ordinary Settings Sync off while personal profiles remain
stored underneath.

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

1. A directly enforced server value
2. An enforced setting in the active profile
3. A one-time administrator push that has not yet been applied
4. A Device Override
5. The active named Settings Profile
6. Regular synchronized settings

An administrator push may temporarily replace a matching profile value. Change
that setting again while the profile is active, or switch away and back, to
establish the profile value again.

Persistent enforcement is different: the control stays locked until the
administrator chooses **Allow User Changes**. Removing it reveals your saved
personal value instead of copying the managed value into your settings.



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

A personal profile referenced by server policy cannot be deleted. A Server
Profile cannot be renamed, edited, reordered, or deleted by a user. Settings marked
**Managed by Your Server** cannot be changed; all other settings in that
personal profile remain editable and continue to update it normally.

The requirement controls which profile must be active. Enforcement belongs to
the profile itself, so its locked members remain protected if that same profile
is active manually on another device type.

Each device type can have only one automatic profile. If you assign a device
type to another profile, Neptune names the current and replacement profiles
and asks for confirmation first.



## Server Profiles

On a current [Neptune MDM](/plugins/mdm) server, administrators have a separate
**Server Profiles** library in both the Jellyfin dashboard and Neptune's native
admin console.

A server profile can be:

- assigned automatically to every iPhone, iPad, Apple TV, or future Mac;
- required so matching users cannot switch it off; and
- configured with selected enforced members that also outrank Device
  Overrides.

For example, an administrator can assign **iPhone** to all phones. A new user's
other devices use their ordinary settings, seeded by Server Defaults when
configured, while the iPhone profile remains a live managed layer. Existing
users receive it too.

Server-owned profiles are shown alongside personal profiles but cannot be
edited or deleted by users. An optional personal assignment is more specific
than an optional global assignment. Per-user required policy is more specific
than global required policy.

Administrators can author Server Profiles from the Free plugin dashboard or,
with Neptune Pro and a Jellyfin administrator account, from iPhone, iPad, or
Apple TV. Every signed-in recipient still needs Neptune Pro before a named
profile becomes active.



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

Server Defaults are not enforcement. To lock a profile or one setting, the
administrator can use a required/enforced Server Profile or target a specific
user in Neptune MDM. Direct per-user enforcement works without a Settings
Profile and does not require that user to have Pro. A required named profile
still does.



## If Pro Access Ends

Neptune keeps profile definitions, automatic assignments, and each device's
local selection. Named-profile values stop applying immediately and regular
settings become active. Device Overrides continue working.

When Pro returns, Neptune automatically restores the retained selection. You
do not need to recreate the profile.
