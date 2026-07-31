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
- edit Server Defaults or one user's Neptune settings backup;
- inspect a user's read-only device inventory;
- set child-account policy;
- create and target announcements;
- use schema-driven controls, Profile Presets and other structured editors, or
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
retroactive.

Device inventory does not provide remote commands, locking, or erasure. The
console also does not include Neptune Indexers controls. Neptune MDM
`1.2.6.101` is supported without requiring an upgrade.

Profile Presets remain editable for administrators. The Free dashboard uses
**Requires Neptune Pro**. In the native editor, your own entitled account says
**Available with Your Neptune Pro**, another account says **Managed User Needs
Neptune Pro**, and Server Defaults say **Recipients Need Neptune Pro**. The
preset document can be distributed to any user, but only a signed-in target
user with Pro can apply it manually or automatically. Native authoring also
requires the administrator's Pro access.

This MDM entry is a Jellyfin companion capability. It is not shown for the
Emby backend because no Neptune Emby companion currently exists.

See [Neptune MDM](/plugins/mdm) for Server Defaults, Profile Presets,
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
