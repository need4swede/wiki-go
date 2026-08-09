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

A Jellyfin administrator using [Neptune MDM](/plugins/mdm) can
create a live **Server Profile** once, then assign it globally by device type
or only to selected users. Per-user profiles and assignments remain the more
specific layer. An ordinary assignment follows the recipient's normal profile
selection. Marking an assignment **Required** instead keeps matching devices on
that profile. Required does not make its settings read-only. Only members with
their own **Lock** outrank a directly conflicting Device Override.



## The Main Rule

The normal Settings screens edit whichever settings target is active. Personal
profile changes update that profile. Server-owned definitions remain
read-only, so changing an unlocked member of an active Server Profile creates
or updates a Device Override automatically. A member is read-only only when it
has an explicit server Lock; whether the profile is Required does not change
that rule.

| Active Target | What Happens When You Change a Setting |
|---------------|-----------------------------------------|
| **No named profile** | The change syncs to devices without a named profile |
| Personal **Blue** | Blue itself is updated, and devices using Blue receive the change |
| Optional **Server Profile** | Its shared definition stays server-owned; changing an unlocked setting creates a Device Override automatically |
| **Required Server Profile** | The profile stays active; changing an unlocked setting creates a Device Override automatically |
| **Locked profile member** | The setting is read-only while that profile is active |
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

The choice is local to the physical device. Selecting Blue on one Neptune
client does not select Blue on another.

If your administrator requires a personal or Server Profile for this device
type, Neptune keeps Device Preset on locked Auto. You cannot switch to Manual,
select another profile, or edit or delete the required definition. You may
still change its unlocked settings; Neptune saves those local differences as
Device Overrides. Settings with a separate Lock remain read-only. Your earlier
profile selection is kept underneath and returns if the requirement is
removed. Neptune shows the server-managed profile name and matching device
class in a read-only selection view; the active requirement cannot be replaced.

The Blue definition can still sync. If both devices use Blue, changing an
eligible setting on either device updates Blue for both. A device without a
named profile does not receive Blue's effective values.



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

Each supported device type can have zero or one automatic profile.

Assignments sync with your account. Every matching device in **Auto** follows
that assignment. A manual profile choice affects only that device until you
choose Auto again.

If no profile is assigned for that device type, Auto uses regular settings
without a named profile.

An administrator can require the automatic assignment for a specific user.
That requirement applies to every device of the matching type signed in as
that user. It does not force the same profile onto other device types.

Neptune MDM can also provide a global automatic assignment
for every user. A personal automatic assignment wins over an optional global
one. A per-user required assignment wins over a global required assignment.
Required assignments keep the device on Auto; optional assignments can still
be replaced by Manual on that physical device.

An explicit Required assignment is delivered as managed policy rather than as
a personal profile choice, so it applies independently of personal selection.
Required resolution uses the signed-in server user and device class, not one
particular physical device: a per-user requirement affects every matching
device signed in as that user.



## Device Overrides

A [Device Override](/settings/device-overrides) keeps one setting local and
normally wins over the active Settings Profile.

An administrator-locked value is the exception. A directly managed setting or
an explicitly locked member of the active profile temporarily wins over a
matching Device Override. The member lock works the same way whether the
profile is optional or Required. Neptune keeps the override underneath and
restores it if the administrator removes the lock.

A Server Profile definition is always read-only. Changing an unlocked member
creates or updates a Device Override automatically, allowing a local value
without modifying the shared definition. A Required profile may have no locked
members, some locked members, or all members locked.

Each named profile has a **Replace Device Overrides** option:

- **Off:** conflicting Device Overrides stay in control
- **On:** activating the profile removes only its conflicting Device Overrides

When a user-initiated switch would remove overrides, Neptune tells you how many
are affected and asks before continuing. This includes switching back to Auto
when its assigned profile replaces overrides. Unrelated overrides are never
removed. A later background automatic assignment follows the saved option.
Requirement alone does not delete or suppress Device Overrides. Only an
explicit Lock temporarily outranks an existing override.



## How Sync Works

Settings Sync carries:

- Profile names, order, and saved values
- The **Replace Device Overrides** choice
- Automatic device-type assignments

It does not carry the profile currently selected on a physical device.

Server requirements are delivered separately from your synchronized profile
document. They still arrive when ordinary Settings Sync is off. Device uploads
cannot delete a profile referenced by policy or replace one of its explicitly
locked values.

Server Profiles use that same managed delivery path. They are not copied into
your personal backup. Changes and removals reach every user assigned that
profile, including devices with ordinary Settings Sync off, while personal
profiles remain stored underneath.

When Blue is active, ordinary eligible changes update Blue's definition. They
are not also uploaded as regular-setting changes. This prevents a client using
Blue from overwriting another client's configuration.

Neptune still tracks newer regular settings underneath an active named profile.
Stopping the named profile restores the latest synchronized value. If no
synchronized value has ever been received, Neptune restores the local value it
captured before the profile became active. This happens locally; it is not a
new Restore from Backup operation.

Without Settings Sync, profiles still work on the device where they were
created, but their definitions and assignments do not reach other devices.

If a client goes offline after successfully reconciling a Required assignment,
it keeps using that last verified assignment and definition for the same
server, user, and device class. Neptune never guesses that a published or
ordinary assignment is Required. If it has no verified matching definition,
it applies no invented values and retries after reconnecting. Changing server,
account, backend generation, or device class releases the old session's
managed overlay.



## Which Value Wins?

For the same eligible setting, Neptune uses this order:

1. A directly locked server value
2. An explicitly locked member of the active profile, whether optional or Required
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
Profile cannot be renamed, edited, reordered, or deleted by a user. Any member
with an explicit Lock is marked **Managed by Your Server** and cannot be
changed while that profile is active. Unlocked settings remain customizable,
including in a Required profile.

The requirement controls which profile must be active on the matching device
class. Separate member locks belong to the profile itself, so those selected
members remain protected whenever that profile is active—even if it is
optional and selected manually on another device type.

Each device type can have only one automatic profile. If you assign a device
type to another profile, Neptune names the current and replacement profiles
and asks for confirmation first.



## Server Profiles

With [Neptune MDM](/plugins/mdm), administrators have a separate
**Server Profiles** library in both the Jellyfin dashboard and Neptune's native
admin console. The reusable library can contain up to 12 Server Profiles, and
a user can also keep up to 12 personal profiles.

From a recipient's perspective:

- A globally assigned Server Profile appears for every user on the matching
  device class; an administrator can instead add one only to selected users.
- An optional profile can be selected manually or used through Auto. A Required
  profile stays active on matching devices.
- Required controls profile selection. Separate per-setting Locks determine
  which values are read-only.
- The server-owned definition cannot be renamed, edited, reordered, or deleted
  by the recipient. Changing an unlocked setting creates a local Device
  Override instead.
- Later definition or Lock changes reach every user in the profile's scope.

For administrator authoring, global and per-user assignment, Lock controls,
Seerr fields, and availability rules, see the dedicated [Server
Profiles guide](/plugins/mdm/server-profiles).



## Server Defaults

With [Neptune MDM](/plugins/mdm), an administrator can provide a starting
Settings Profiles library and automatic assignments. Neptune copies that
library only when a new user's personal library is empty.

Server Defaults are not retroactive. After the first copy, the profiles belong
to the user and can be edited or deleted normally. Changing Server Defaults
later does not rewrite existing users. Switching to Auto with no assigned
profile does not reapply Server Defaults.

Administrators can prepare a starting Settings Profiles library in Server
Defaults. These remain ordinary profile definitions and assignments after the
one-time copy; a live Required assignment is separate managed policy.

Server Defaults are not persistent policy. To lock a setting, the administrator
can lock that member in a Server Profile or target a specific user in Neptune
MDM. Requiring the profile is optional and controls profile selection only.
Direct per-user locking works without a Settings Profile.



## Availability

| Capability | Requirement |
|------------|-------------|
| Device Overrides | Available without Neptune Pro |
| Create, edit, duplicate, select, or automatically assign a personal Settings Profile | [Neptune Pro](/neptune-pro) |
| Select or ordinarily assign a Server Profile | Neptune Pro for the recipient |
| Required Server Profile | Applies as managed policy regardless of the recipient's plan; personal profile controls remain unchanged |
| Administer Server Profiles | See [MDM availability](/plugins/mdm#availability) |



## If Pro Access Ends

Neptune keeps profile definitions, automatic assignments, and each device's
local selection. Personal and ordinarily assigned named-profile values stop
applying immediately and regular settings become active. Device Overrides
continue working. A matching Required Server Profile remains active because it
is managed policy, not personal preset use. Its unlocked members remain
customizable, while its explicitly locked members remain read-only.

When Pro returns, Neptune automatically reconciles the retained selection. It
becomes effective immediately when no Required assignment is active, or after
the requirement is removed. You do not need to recreate the profile.
