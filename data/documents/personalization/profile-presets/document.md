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

Personal Settings Profiles require [Neptune Pro](/neptune-pro): creating,
editing, duplicating, selecting, and configuring automatic use are all Pro
features. Individual [Device Overrides](/settings/device-overrides) remain
Free. A matching **Required** Server Profile is the one application exception:
it can be consumed by a Free recipient without unlocking any personal profile
controls.

A Jellyfin administrator using a current [Neptune MDM](/plugins/mdm) plugin can
create a live **Server Profile** once, then assign it globally by device type
or only to selected users. Per-user profiles and assignments remain the more
specific layer. Publishing a profile or assigning it as an ordinary Auto
choice does not bypass the recipient's Pro requirement. Marking an assignment
**Required** does: every included setting is then enforced on matching Free or
Pro recipients and outranks a directly conflicting Device Override.



## The Main Rule

The normal Settings screens edit whichever personal settings target is active.
Server-owned definitions are read-only. A Device Override may provide an
allowed local difference for an unlocked member of a non-required Server
Profile, but every member of an active Required profile is read-only.

| Active Target | What Happens When You Change a Setting |
|---------------|-----------------------------------------|
| **No named profile** | The change syncs to devices without a named profile |
| Personal **Blue** | Blue itself is updated, and devices using Blue receive the change |
| Optional **Server Profile** | It stays server-owned; use a Device Override for an allowed local difference |
| **Required Server Profile** | The included setting stays managed by the server and cannot be changed locally |
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

If your administrator requires a personal or Server Profile for this device
type, Neptune keeps Device Preset on locked Auto. This applies whether the
recipient is Free or Pro. You cannot switch to Manual, select another profile,
edit or delete the required definition, or change one of its included
settings. Your earlier local selection and values are kept underneath and
return if the requirement is removed. A Free recipient sees the server-managed
profile name and matching device class in a read-only view. A Pro recipient
may manage other personal profiles, but cannot override the active requirement.

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

Personal automatic assignments and optional Server Profile assignments become
effective only while the signed-in recipient has Pro. An explicit Required
assignment is managed policy and applies to a matching Free or Pro recipient.
Required resolution uses the signed-in server user and device class, not one
particular physical device: a per-user iPhone requirement affects every iPhone
signed in as that user.



## Device Overrides

A [Device Override](/settings/device-overrides) keeps one setting local and
normally wins over the active Settings Profile.

An administrator-locked value is the exception. A directly managed setting,
every member of an active Required profile, or a separately locked member of
another active profile temporarily wins over a matching Device Override.
Neptune keeps the override underneath and restores it if the administrator
removes the policy.

A Server Profile definition is always read-only. For an unlocked member of a
non-required Server Profile, explicitly enabling a Device Override permits a
local value. A Required profile enforces every included member, regardless of
its separate Lock switches.

Each named profile has a **Replace Device Overrides** option:

- **Off:** conflicting Device Overrides stay in control
- **On:** activating the profile removes only its conflicting Device Overrides

When a user-initiated switch would remove overrides, Neptune tells you how many
are affected and asks before continuing. This includes switching back to Auto
when its assigned profile replaces overrides. Unrelated overrides are never
removed. A later background automatic assignment follows the saved option.
Required enforcement does not delete Device Overrides; it suppresses only
direct conflicts and reveals the preserved override when the requirement ends.



## How Sync Works

Settings Sync carries:

- Profile names, order, and saved values
- The **Replace Device Overrides** choice
- Automatic iPhone, iPad, Apple TV, and Mac assignments

It does not carry the profile currently selected on a physical device.

Server requirements are delivered separately from your synchronized profile
document. They still arrive when ordinary Settings Sync is off and can apply
to a Free recipient. Device uploads cannot delete a profile referenced by
policy or replace one of its enforced values.

Server Profiles use that same managed delivery path. They are not copied into
your personal backup. Changes and removals reach every user assigned that
profile, including devices with ordinary Settings Sync off, while personal
profiles remain stored underneath.

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
Personal profile definitions and choices remain stored while Free, but stay
dormant unless the matching profile is explicitly Required by the server.

If a client goes offline after successfully reconciling a Required assignment,
it keeps enforcing that last verified assignment and definition for the same
server, user, and device class. Neptune never guesses that a published or
ordinary assignment is Required. If it has no verified matching definition,
it applies no invented values and retries after reconnecting. Changing server,
account, backend generation, or device class releases the old session's
managed overlay.



## Which Value Wins?

For the same eligible setting, Neptune uses this order:

1. A directly locked server value
2. A member of the active Required profile, or a separately locked member of another active profile
3. A one-time administrator push that has not yet been applied
4. A Device Override
5. The active named Settings Profile
6. Regular synchronized settings

An administrator push may temporarily replace a matching profile value. Change
that setting again while the profile is active, or switch away and back, to
establish the profile value again.

Persistent locking is different: the control stays locked until the
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
Profile cannot be renamed, edited, reordered, or deleted by a user. Every
included setting in an active Required profile is marked **Managed by Your
Server** and cannot be changed. In a non-required personal profile, settings
without a separate server lock remain editable and continue to update it
normally.

The requirement controls which profile must be active and enforces its complete
included settings set on the matching device class. Separate member locks
belong to the profile itself, so those selected members remain protected if a
non-required profile is active manually on another device type.

Each device type can have only one automatic profile. If you assign a device
type to another profile, Neptune names the current and replacement profiles
and asks for confirmation first.



## Server Profiles

On a current [Neptune MDM](/plugins/mdm) server, administrators have a separate
**Server Profiles** library in both the Jellyfin dashboard and Neptune's native
admin console. The reusable library can contain up to 12 Server Profiles, and
a user can also keep up to 12 personal profiles.

A server profile can be:

- assigned automatically to every iPhone, iPad, Apple TV, or future Mac;
- added only to selected users, with no global assignment;
- required so matching users cannot switch it off and every included member is
  enforced; and
- configured with selected locked members for non-required use that also
  outrank Device Overrides.

For example, an administrator can assign **iPhone** to all phones. A new user's
other devices use their ordinary settings, seeded by Server Defaults when
configured, while the iPhone profile remains a live managed layer. Existing
users receive it too. Global device classes are selected under **Apply
Automatically to All Users On**.

Globally assigned Server Profiles are shown for every user. Unassigned Server
Profiles remain in the reusable admin library until an administrator adds them
to selected users. Server-owned definitions cannot be edited or deleted by
users. An optional personal assignment is more specific than an optional
global assignment. Per-user required policy is more specific than global
required policy.

An administrator can also reuse one Server Profile for only one person. Open
that user in the MDM dashboard or native admin console, open **Settings
Profiles**, then choose **Add Profile**. Choose **Create New Personal Profile**
or one of the reusable Server Profiles. Adding a reusable profile inherits its
server-authored locks and does not create a duplicate. With no device selected,
it is available for manual use. **Apply Automatically for This User On** makes
it automatic on selected device types; **Require This Profile** prevents the
user from switching away. Later changes to the reusable definition still reach
that user. **Remove from User** removes the user's scope and assignments without
deleting the reusable definition. Globally assigned profiles are managed from
the Server Profiles target instead.

Administrators can author Server Profiles from the Free plugin dashboard or,
with Neptune Pro and a Jellyfin administrator account, from iPhone, iPad, or
Apple TV. The WebUI author needs Jellyfin administrator authorization but no
Neptune Pro entitlement. Recipients need Pro for manual selection and ordinary
automatic use; an explicit Required assignment applies to matching Free and Pro
recipients without granting them any additional profile capability.

To add a setting, use the same native pages and controls as Neptune Settings.
For example, open **User Preferences → Appearance**, then choose the desired
**Base Theme** normally; Neptune adds that exact choice immediately, so you do
not press Add afterward. To include the value already shown without changing
it, tap **Add Current** beneath the setting on iPhone or press and hold the
focusable setting on Apple TV and choose **Add Current**. Select **Done** to
commit the staged additions. The complete browser previews the profile's theme.
Its normal value and Lock controls then appear in the profile editor.



## Server Defaults

With [Neptune MDM](/plugins/mdm), an administrator can provide a starting
Settings Profiles library and automatic assignments. Neptune copies that
library only when a new user's personal library is empty.

Server Defaults are not retroactive. After the first copy, the profiles belong
to the user and can be edited or deleted normally. Changing Server Defaults
later does not rewrite existing users. Switching to Auto with no assigned
profile does not reapply Server Defaults.

Administrators can prepare Settings Profiles from the Free Jellyfin dashboard.
Each signed-in user still needs Neptune Pro to select one or use an ordinary
automatic assignment. MDM configuration does not grant App Store entitlement;
it only allows a Free recipient to consume a profile when the server explicitly
marks the matching assignment Required.

Server Defaults are not persistent policy. To lock a profile or one setting,
the administrator can use a Required Server Profile, which enforces all of its
included members, or target a specific user in Neptune MDM. Direct per-user
locking works without a Settings Profile and does not require that user to
have Pro.



## If Pro Access Ends

Neptune keeps profile definitions, automatic assignments, and each device's
local selection. Personal and ordinarily assigned named-profile values stop
applying immediately and regular settings become active. Device Overrides
continue working. A matching Required server profile remains enforced because
it is managed policy, not personal preset use.

When Pro returns, Neptune automatically reconciles the retained selection. It
becomes effective immediately when no Required assignment is active, or after
the requirement is removed. You do not need to recreate the profile.
