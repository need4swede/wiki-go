---
order: 70
---

# Devices & Data

## Device Inventory

The plugin dashboard and native console list devices each user has signed in on, including available app, hardware, operating-system, settings-schema, and recent-activity details.
Devices register automatically.

This inventory is read-only.
Neptune MDM does not send device commands, remotely lock or erase a device, or manage the operating system.

## Wipe All Neptune MDM Data

The native console requires the administrator to type `WIPE` before this irreversible action.
It deletes:

- Server Defaults
- The Server Profiles library and global policy
- Users' Neptune settings backups
- Device records
- Child-account policies
- Announcements
- The uploaded settings schema
- Per-user managed-settings policies, including Required-profile assignments, explicit Server Profile scopes, and locked values

The wipe does not delete Jellyfin users or media.
It also does not delete Neptune Indexers data because Indexers is a separate plugin.
