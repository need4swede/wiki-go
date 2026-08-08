---
order: 90
---

# Administration

Server administration from the couch. With today's Jellyfin backend, admin
accounts get an **Administration** entry under Profiles in Settings, covering
the user-management basics that normally require the Jellyfin dashboard.
Administration is capability-specific: Emby connections do not currently
expose user/server administration or the Neptune companion suite, and future
providers may offer a different set of controls.



## Passcode

Administration can be locked behind a 4-digit passcode, so kids poking around Settings can't get into the admin panel. You'll be asked to set one up, or you can skip it.



## Neptune MDM (Neptune Pro)

Jellyfin administrator accounts get a **Neptune MDM** entry inside the same
Administration menu on iPhone, iPad, and Apple TV. Managing from the native
app requires [Neptune Pro](/neptune-pro); Free administrators retain the
complete Jellyfin plugin dashboard. The native route uses the existing
passcode challenge when one is configured, then checks administrator
authorization again in the app and on the server. Pro never grants
administrator permission.

From the native console, an administrator can:

- view plugin status;
- create reusable Server Profiles and assign them globally by device class or
  only to selected users;
- edit Server Defaults or one user's Neptune settings backup;
- copy another user's effective settings into an unsaved draft;
- lock individual settings for a user, or require a Settings Profile by
  device type;
- inspect a user's read-only device inventory;
- set child-account policy;
- create and target announcements;
- use schema-driven controls, Settings Profiles and other structured editors, or
  Advanced JSON; and
- permanently wipe Neptune MDM data after typing the required confirmation.

The user or Server Defaults editor mirrors Neptune's ordinary Settings
hierarchy on both iPhone/iPad and Apple TV. Nested pages keep a subtle managed
target reminder visible. They edit one server-side draft and do not temporarily
sign the administrator in as the selected user or mutate the administrator's
local preferences.

The mirrored pages include the settings Neptune MDM can actually manage.
Device-local actions such as launching Compass, clearing learned state, or
rebuilding a cache are not presented as remote controls. Settings added by a
newer schema remain available under **Additional Managed Settings** until they
receive a dedicated native page.

When a selected user has no personal Neptune backup, the editor shows their
effective Server Defaults as inherited without creating personal state.
Configured synchronized defaults seed untouched settings once on the user's
first Neptune setup, even when Settings Sync is off. Explicit local changes
and Device Overrides win, and later changes to Server Defaults are not
retroactive. A Settings Profile may separately opt into replacing only its
conflicting Device Overrides when that profile is selected.

On a current Neptune MDM plugin, user targets also show durable policy
controls. **Lock for User** locks one setting without requiring a profile.
For profile-based management, first assign a profile automatically to a device
type, then enable **Require This Profile**. The user cannot disable the required
profile, and every setting included in it becomes read-only. A separate member
lock can protect selected settings while a non-required profile is active.
Removing the requirement or lock restores the personal value or Device
Override preserved underneath. Server Defaults remain a starting template and
do not offer these per-user locks.

The separate **Server Profiles** target creates a live reusable library instead
of a one-time template. An administrator can assign one profile to every
iPhone, iPad, Apple TV, or future Mac, require that assignment and thereby
enforce every included member, or lock selected members for non-required use.
A globally assigned profile reaches current and future users, including devices with
ordinary Settings Sync off. An unassigned profile remains library-only until
it is added to selected users. Users can view an assigned Server Profile but
cannot modify its server-owned definition.

The same shared definition can target only one person. Select that user, open
**Settings Profiles**, choose **Add Profile**, then select the reusable Server
Profile. With no device selected it is manual-only; choose a device under
**Apply Automatically for This User On** to activate it automatically for that
user. Its definition and inherited locks stay read-only, while **Require This
Profile** and additional per-user locks remain available. Required enforces the
complete included settings set; the extra locks also apply when the profile is
active outside that requirement. No duplicate profile is created. **Remove
from User** removes that user's scope and assignments but does not delete the
reusable Server Profile.

Profile authoring follows Neptune's normal Settings hierarchy on the plugin
dashboard, iPhone, iPad, and Apple TV. Choose a category, open the matching
Settings page, and use `+` to add a member. Single-setting groups use their
contextual name—such as **Base Theme**—while multi-setting groups such as
**Top Shelf** keep their heading.

Device inventory does not provide remote commands, locking, or erasure. The
console also does not include Neptune Indexers controls. Neptune MDM
`1.2.6.101` is supported without requiring an upgrade.

Any Jellyfin administrator can author and distribute Settings Profiles from
the Free plugin dashboard. Native authoring requires the administrator's Pro
access. A signed-in recipient needs Pro to create, edit, select, or use an
ordinary automatic profile assignment. An explicit Required assignment instead
applies to a matching Free or Pro recipient, keeps every included setting
read-only, and grants no personal Settings Profiles capability.

Ordinary per-setting remote changes and **Lock for User** are not Settings
Profiles features. They work for Free recipients, and an administrator using
the Jellyfin dashboard needs no Pro. For example, an administrator may set and
lock a Free user's Theme. Only using Neptune's native administration console
adds the administrator-side Pro requirement.

This MDM entry is a Jellyfin companion capability. It is not shown for the
Emby backend because no Neptune Emby companion currently exists.

See [Neptune MDM](/plugins/mdm) for Server Profiles, Server Defaults, Settings Profiles,
compatibility details, and the full data-wipe scope.



## User Management

Select any user on the server to manage their account:

### Account

| Action | Description |
|--------|-------------|
| **Set Password** | Change the user's server password |
| **Administrator** | Grant or revoke admin rights |
| **Disable Account** | Block sign-ins without deleting the account |

### Streaming

**Internet Streaming Bitrate Limit** caps the user's remote streaming quality (Unlimited, or 1 to 120 Mbps). The limit applies account-wide, on every client they use.

### Parental Controls

Make any account a child account:

| Setting | Description |
|---------|-------------|
| **Make this a child account** | Hides Discover and the request catalog, and only shows content within the age rating, on every device they sign in on |
| **Library Access** | All libraries, or an allow-list |
| **Age Rating** | The content rating ceiling, or No Limit |

Child accounts pair with the [Neptune MDM](/plugins/mdm) plugin, which can also flag child accounts server-side so the restriction applies before the device even syncs settings.
