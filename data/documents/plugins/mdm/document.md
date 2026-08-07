---
order: 20
---

# Neptune MDM

Neptune MDM is the management extension for Jellyfin. Neptune's app and per-device preferences remain usable without it; sync and remote-management support for future backends will depend on their extension capabilities.

Neptune does not currently have an Emby companion plugin, so an Emby connection
does not expose MDM, Settings Sync, Server Defaults, announcements, or this
native administration console. Neptune never sends Jellyfin MDM routes to an
Emby server.

Neptune MDM handles settings sync, backup, personal and server-wide Settings
Profiles, Server Defaults, remote configuration, persistent enforcement, and
device inventory.
It keeps your preferences
consistent across every Neptune client on your account and gives server
administrators tools for managing users, sending announcements, and setting
up child accounts.

The complete Jellyfin plugin dashboard is Free. Administering Neptune MDM
directly from an iPhone, iPad, Apple TV, or future Mac requires
[Neptune Pro](/neptune-pro). Receiving managed settings and using Settings
Sync do not require Pro.

## Administer from Neptune (Neptune Pro)

Jellyfin administrators with Neptune Pro can operate Neptune MDM without
opening the Jellyfin dashboard. On iPhone, iPad, or Apple TV, open Neptune's existing
**Administration** area, complete its passcode challenge if one is configured,
and choose **Neptune MDM**.

The native console provides:

- plugin and connection status;
- a live Server Profiles library with automatic device-class assignments;
- Server Defaults and individual users' settings backups;
- **Copy from User**, which stages another user's effective settings as an
  unsaved starting point before the administrator confirms Save;
- exact settings changes that leave unrelated and future settings untouched;
- persistent per-user setting locks and required Settings Profiles;
- read-only device inventory;
- child-account policy;
- announcement authoring and targeting;
- schema-driven setting controls, native editors for structured settings, and
  Advanced JSON; and
- a confirmation-protected wipe of all Neptune MDM data.

When you choose Server Defaults or a user, the native editor follows the same
Settings hierarchy you already use in Neptune—User Preferences, Neptune,
Server, Seerr, and Backup & Sync—instead of presenting one long server form.
A subtle reminder stays on nested pages so it remains clear whose remote
settings you are changing. The familiar layout still edits a server-managed
draft; it does not sign you in as that user or change the administrator's own
local settings.

Only fields in Neptune's remote-management schema appear in this mirror.
Local-only actions such as launching Compass, clearing learned state, or
rebuilding caches are intentionally omitted. Forward-compatible schema
sections remain editable under **Additional Managed Settings**.

Navigation Bar management includes Home, Movies, Shows, Music, Library, and
Discover, and Music can be selected as the startup tab. Settings and Search
stay pinned to the edges. Both the plugin dashboard and Neptune's native MDM
editor preserve tabs introduced by newer clients when an administrator edits
the tabs they recognize.

Only Jellyfin administrator accounts see this entry. Neptune checks the active
account before every operation, and the plugin separately requires elevated
server authorization. The optional Neptune passcode protects the menu from
other people using the same device; it does not replace server authorization.
Pro unlocks the native interface only—it does not make an account an
administrator.

Neptune MDM `1.2.6.101` is supported by this console and does not need to be
upgraded first. Neptune detects that release's older settings-sync capability
and safely materializes inherited Server Defaults when an administrator makes
a user's first partial change. Newer plugin capabilities are adopted
automatically.

The console manages Neptune MDM only. Neptune Indexers remains a separate
plugin and has no status, configuration, or rebuild controls here. The shared
administration foundation is also ready for a future Neptune macOS interface.

Settings Profiles stay editable from the Free Jellyfin plugin dashboard. A Pro
administrator can edit them from the native console too. The dashboard shows
**Requires Neptune Pro** because it cannot inspect App Store ownership. The
native editor is contextual: your own Pro account says **Available with Your
Neptune Pro**, another account says **Managed User Needs Neptune Pro**, and
Server Profiles and Server Defaults say **Recipients Need Neptune Pro**. MDM can distribute a
settings profile, but it cannot grant anyone's App Store entitlement.

Both editors mirror the profile's settings and can save **Replace Device
Overrides**. If enabled, activating that profile removes only Device Overrides
for settings contained in it. Before clearing anything for a user-initiated
selection—including switching to Auto—the client asks first. A later
background automatic activation follows the saved policy without another
prompt.

On a current plugin, a per-user target can configure durable management:

- Use **Lock for User** on any eligible setting to keep that value locked.
- Assign a Settings Profile automatically to a device type, then enable
  **Require This Profile** so the user cannot switch it off or replace it.
- Open settings inside that profile and lock only the members that must be
  read-only. Other profile settings remain editable.

The target device labels locked controls **Managed by Your Server**. Choosing
**Allow User Changes** removes the policy and restores the user's preserved
value. Required profiles still need the target user's Neptune Pro; direct
setting enforcement does not. Older plugin versions keep their compatible
admin tools but hide these policy controls.

If the administrator's Pro access ends while the native console is open,
Neptune closes or locks it and blocks further native actions. Existing MDM
data and delivered policies are unchanged, and dashboard management remains
available.



## Settings Sync

Every supported preference you change on one device syncs to your other
Neptune clients. Change your theme on your iPhone and your Apple TV updates in
real time. Adjust playback settings on one device and every other device picks
up the change automatically.

You can turn Settings Sync off for a device or use
[Device Overrides](/settings/device-overrides) to keep only selected settings
different there. Applying an override leaves the setting's current value on
that device and does not change the server or another device. Removing it
publishes the current local value the next time sync runs. See
[Backup & Restore](/settings/backup) for the client-side controls.

Supported synchronized changes are backed up to the server. When you sign in
on a new device, Neptune restores that synchronized configuration. Themes,
layout, playback preferences, and other profile settings carry over without
manual setup. Device Overrides stay on the device where they were created and
are not included in the backup.

The synchronized profile also carries [Profile
Presets](/personalization/profile-presets): their names, sparse included
settings, override-clearing choices, order, and iPhone, iPad, Apple TV, and Mac
assignments. The active choice remains local to each physical device, so a
manual switch does not force every device to use the same preset.

The preset document can sync to a Free account, but remains dormant there.
Device Overrides remain Free. If that account later gains Pro, Neptune
automatically reconciles the retained local selection.

Managed policy is separate from that synchronized document. It is delivered
even when ordinary Settings Sync is off, and device uploads cannot replace the
personal value underneath a managed setting or delete a required profile.
The live Server Profiles library and its global device assignments use this
same managed path, so existing and future users receive updates without
copying those definitions into their personal backups.

That synchronized profile includes native [Library Pins](/library/shortcuts),
the iPhone’s ordered Compass Shortcuts, and its Live Activity enabled/type
preferences. iOS Home Screen and Lock Screen widget placement, size, and
per-widget Page/Section/Pin selection remain system-owned configuration on the
individual device; they are not a single Neptune setting for MDM to replace.



## Remote Management

Server administrators can manage a user's supported synchronized Neptune
settings through Neptune's native console or the plugin's dashboard in
Jellyfin. The schema covers appearance, playback, search, layout, and other
profile preferences while excluding device-local and runtime-only values.
The iPhone, iPad, and Apple TV consoles use stable schema destinations to
mirror Neptune's native Settings navigation while preserving one exact remote
draft across those pages.

Changes push to the user's devices immediately if they're online, or apply the next time they sign in. Only the settings you actually change are sent, so you never accidentally overwrite a user's other preferences.

The settings form is built from a schema that Neptune itself uploads, so new app releases add their new settings to the dashboard automatically. No plugin update required.

On iPhone and iPad, this includes the independent
[Picture in Picture and Background Playback](/ios/playback) switches under
Playback. Both default on. A pushed change applies when the user starts the
next playback session and has no playback effect on Apple TV.

With the current plugin protocol, an administrator's explicit change to a
setting also clears a Device Override for that setting. Only settings included
in the administrator's change are affected; unrelated overrides remain. The
forced value is retained by the server so a device that was offline still
applies it after reconnecting, even when ordinary sync is off.

When no persistent policy controls a setting, an unseen administrator push
wins over a Device Override, the active named Settings Profile, and regular
synchronized settings. A profile with **Replace Device Overrides** enabled first
removes only its matching overrides. The push suppresses only the conflicting
member of the active profile; unrelated members continue applying. Editing
that field or changing the active selection clears the suppression.

Neptune MDM `1.2.6.101` predates the newer administrator force ledger. The
native console remains compatible: when a user has no personal backup, it
materializes inherited Server Defaults before sending that user's first
partial administrator change. Existing users continue to receive only the
exact settings that changed. An upgrade is not required to use the console;
newer plugin versions add their server-side force-ledger behavior
automatically.

### Persistent Locks

An ordinary administrator Save is a one-time push. **Lock for User** is a
durable policy that remains in control until an administrator removes it. It
can be used directly on one setting without creating a Settings Profile.

For a setting present in several layers, Neptune uses this order:

1. Directly enforced server value
2. Enforced member of the active Settings Profile
3. Unseen one-time administrator push
4. Device Override
5. Active Settings Profile
6. Regular synchronized setting

A required profile is configured per user and device type: iPhone, iPad,
Apple TV, or Mac. Matching devices stay on Auto. Only marked members are
read-only, so a Kids profile can lock parental and playback choices while
still allowing the user to change its theme. If enforcement is removed,
Neptune reveals the personal setting or Device Override it preserved
underneath instead of retaining the managed value.



## Server Profiles

**Server Profiles** is the live, server-wide profile library. An administrator
creates a profile once, then can assign it automatically to every iPhone,
iPad, Apple TV, or future Mac used with that server. It applies to existing
users and future users; it is not copied into each user's personal backup.

For example, assign an **iPhone** Server Profile to iPhone while leaving the
other device classes unassigned. Every iPhone in Auto uses that profile.
Unassigned devices use their ordinary settings, initially seeded from Server
Defaults when the administrator has configured them.

Each device class has at most one global assignment. Reassigning it names the
current and replacement profiles and asks for confirmation. An assignment can
also be **Required**, which keeps matching devices on Auto. Selected profile
members can be enforced so they remain read-only and outrank Device Overrides;
unenforced members permit an explicit Device Override on that device.

Users see Server Profiles beside their personal profiles, but cannot rename,
edit, reorder, or delete the server-owned definitions. A personal automatic
assignment is more specific than an optional global assignment. A per-user
required assignment is more specific than a global required assignment.

The Free plugin dashboard can author Server Profiles. Native administration
requires the administrator's Neptune Pro access and Jellyfin administrator
authorization. Every recipient still needs Neptune Pro before a named Server
Profile can become active.



## Server Defaults

Administrators can define a starting configuration for Neptune users who have
no personal settings backup. Configured synchronized settings seed once when
Neptune first creates that user's settings, even when Settings Sync is off.
This does not turn Settings Sync on or upload a personal backup by itself. It
is a starting point, not a permanent policy. Neptune finishes this first-use
setup before trying an automatic Seerr sign-in, whether the Jellyfin user signs
in with a password or Quick Connect.

For Settings Profiles, the template can provide:

| Example | What it does |
|---------|--------------|
| Starting profile library | Gives every new user the same named settings environments |
| iPhone assignment | Makes one profile automatic on every iPhone signed in to the new account |
| iPad or Apple TV assignment | Uses a different automatic loadout on those device types |
| Mac assignment | Reserves an automatic loadout for future macOS support |
| Override-clearing choice | Lets an applied preset replace only the Device Overrides that conflict with its included settings |

Only configured values participate. A setting omitted from the template keeps
its local value, and an explicit local non-default, unsent local change, or
Device Override wins. Saved URL lists merge with URLs already recorded by the
device: administrator entries appear first and duplicates are removed. If the
user explicitly cleared a list before bootstrap, it remains empty.

That general bootstrap priority does not cancel a preset's own saved policy.
If a copied profile activates automatically with **Replace Device Overrides**
enabled, it removes only the overrides that conflict with its
included settings.

Settings Profiles add one more protection: Neptune copies the template library
and assignments only when its local Settings Profiles document is empty. This
preserves profiles created locally before the first server read. Each device
type can have zero or one automatic assignment.

When an administrator assigns a device type from one profile card to another,
the dashboard names both profiles and asks for confirmation before replacing
the existing assignment.

Selecting a user with no personal Neptune backup in Remote Management shows
their effective Server Defaults and labels the document as inherited; it does
not create a personal backup merely by viewing it. The delete action remains
unavailable until that user has personal state.

The Seerr saved-URL list is for manual switching; the active/preconfigured
Seerr endpoint is a separate setting. In the settings document,
`seerrServerURL` is active and `seerrURLs` is the saved list. Neptune still
reads the older MDM 1.2.6-era `jellyseerrURLs` saved-list name and writes both
list formats during the compatibility window. If MDM 1.2.6.101 Server Defaults
contain exactly one valid saved address and no active-address field at all,
Neptune uses that one address as active during the first setup. It does not
guess when there are multiple addresses, alter a personal backup, or override
an explicit clear.

Preset inheritance does not bypass Neptune Pro. A new Free user may receive
the starting preset library and assignments, but Neptune does not apply them
until that signed-in user has Pro. Ordinary configured Server Defaults do not
require Pro.

Defaults are not retroactive. After the one-time bootstrap completes—or once a
personal backup exists—the user keeps that configuration even if the
administrator later changes Server Defaults. To update an existing user, the
administrator must open that user in Remote Management and send an individual
settings push. Switching a device to Auto when no profile is assigned does not
run this bootstrap again or reapply Server Defaults.

Server Defaults are not persistent policy. For live server-wide behavior, use
a Server Profile. To prevent changes for only one person, target that user and
enable direct enforcement or require one of their automatic Settings Profiles.



## Announcements

Administrators can write announcement cards that appear inside Neptune on their users' devices. Each announcement shows once per device and stays dismissed after that.

Announcements support:

- A title, body text, icon, and button label
- Targeting specific users, or everyone on the server
- Targeting specific platforms and app versions
- Delivery immediately to live devices, or on next app launch
- Resending an existing announcement to devices that have already seen it

Immediate delivery uses Neptune's live server event stream. If iOS or tvOS was
suspended before it could receive the event, Neptune catches up when the app
returns to the foreground; an app that was fully closed catches up at its next
launch. Targeting and once-per-device dismissal rules are identical on every
delivery path.

**Resend Now** keeps the announcement's content and targeting, gives it a new
delivery ID, activates immediate delivery, and sends it through the same live
event stream. Neptune therefore treats it as a new announcement on every
matching device without creating a second card for the administrator to
maintain.

Useful for planned maintenance windows, new library additions, or house rules.



## Child Accounts

Administrators can mark any user as a child account. On every device that user signs in on, Neptune:

- Hides Discover and the request catalog
- Only shows content within the user's age rating

Child accounts pair with Neptune's in-app parental controls, where admins set the age rating limit and choose which libraries the account can access. See [Administration](/settings/administration) for the client-side setup.



## Wipe All Neptune MDM Data

The native console requires the administrator to type `WIPE` before this
irreversible action. It deletes Server Defaults, the Server Profiles library
and global policy, users' Neptune settings backups, device records,
child-account policies, announcements, and the uploaded settings schema.

It also deletes per-user managed-settings policies, including required-profile
assignments and enforced values.

It does not delete Jellyfin users or media. It also does not delete Neptune
Indexers data, because Indexers is a separate plugin.



## Devices

The dashboard and native console list the devices each user has signed in on,
including available app, hardware, OS, settings-schema, and recent-activity
details. Devices register automatically. This inventory is read-only: Neptune
MDM does not send device commands, remotely lock or erase a device, or manage
the operating system.
