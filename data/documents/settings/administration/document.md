---
order: 90
---

# Administration

Server administration from the couch.
With today's Jellyfin backend, admin accounts get an **Administration** entry under Profiles in Settings, covering the user-management basics that normally require the Jellyfin dashboard.
Administration is capability-specific, and future providers may offer a different set of controls.

## Passcode

Administration can be locked behind a 4-digit passcode, so kids poking around Settings can't get into the admin panel.
You'll be asked to set one up, or you can skip it.

## Neptune MDM

Jellyfin administrator accounts get a **Neptune MDM** entry inside the same Administration menu on supported Neptune clients.
The native route uses the existing passcode challenge when one is configured, then checks administrator authorization again in the app and on the server.

From the native console, an administrator can:

- view plugin status;
- create reusable Server Profiles and assign them globally by device class or only to selected users;
- edit Server Defaults or one user's Neptune settings backup;
- copy another user's effective settings into an unsaved draft;
- lock individual settings for a user, or require a Settings Profile by device type;
- inspect a user's read-only device inventory;
- set child-account policy;
- create and target announcements;
- use schema-driven controls, Settings Profiles and other structured editors, or Advanced JSON; and
- permanently wipe Neptune MDM data after typing the required confirmation.

The user and Server Defaults editors mirror Neptune's ordinary Settings hierarchy across supported clients.
Nested pages retain a managed-target reminder and edit one server-side draft; they never sign the administrator in as the selected user or alter the administrator's local preferences.
Only schema-supported remote settings appear.
Device-local actions such as launching Compass or rebuilding a cache are omitted.

Use the [Neptune MDM guide](/plugins/mdm) for the complete workflow:

| Task | Guide |
|------|-------|
| Keep a user's preferences synchronized | [Settings Sync](/plugins/mdm/settings-sync) |
| Seed the starting configuration for new users | [Server Defaults](/plugins/mdm/server-defaults) |
| Create, assign, require, or lock reusable profiles | [Server Profiles](/plugins/mdm/server-profiles) |
| Push or lock exact settings for one user | [Remote Management](/plugins/mdm/remote-management) |
| Send messages, manage child policy, or review devices | [Announcements](/plugins/mdm/announcements), [Child Accounts](/plugins/mdm/child-accounts), and [Devices & Data](/plugins/mdm/devices) |

### Availability

Plugin-dashboard, native-console, and recipient requirements are listed in the [MDM availability table](/plugins/mdm#availability).
Neptune Pro never grants Jellyfin administrator permission.

This entry manages Neptune MDM only; Neptune Indexers remains separate.

## User Management

Select any user on the server to manage their account:

### Account

| Action | Description |
|--------|-------------|
| **Set Password** | Change the user's server password |
| **Administrator** | Grant or revoke admin rights |
| **Disable Account** | Block sign-ins without deleting the account |

### Streaming

**Internet Streaming Bitrate Limit** caps the user's remote streaming quality (Unlimited, or 1 to 120 Mbps).
The limit applies account-wide, on every client they use.

### Parental Controls

Make any account a child account:

| Setting | Description |
|---------|-------------|
| **Make this a child account** | Hides Discover and the request catalog, and only shows content within the age rating, on every device they sign in on |
| **Library Access** | All libraries, or an allow-list |
| **Age Rating** | The content rating ceiling, or No Limit |

Child accounts pair with the [Neptune MDM](/plugins/mdm) plugin, which can also flag child accounts server-side so the restriction applies before the device even syncs settings.
