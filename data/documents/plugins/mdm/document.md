---
order: 20
---

# Neptune MDM

Neptune MDM is the management extension for Jellyfin. It keeps preferences consistent across Neptune clients and gives server administrators tools for remotely managing settings, reusable profiles, announcements, child accounts, and device records.

Neptune's app and per-device preferences remain usable without the plugin. Sync and remote-management support for future backends will depend on the extension capabilities those backends provide.

> The complete Jellyfin plugin dashboard is Free. Administering Neptune MDM directly from a Neptune client requires [Neptune Pro](/neptune-pro). Receiving managed settings and using Settings Sync do not require Pro, including ordinary per-setting administrator changes and persistent **Lock for User** policies.

## Features

| What you want to do | Use | How it behaves |
|---------------------|-----|----------------|
| Cross-device backup | [Settings Sync](/plugins/mdm/settings-sync) | Keeps supported settings and personal profiles synchronized |
| Starting configuration / OOBE | [Server Defaults](/plugins/mdm/server-defaults) | Seeds settings once; later changes are not retroactive |
| Create a preset for users or devices | [Server Profiles](/plugins/mdm/server-profiles) | Keeps one server-owned definition and updates everyone in its scope |
| Change settings for an existing user | [Remote Management](/plugins/mdm/remote-management) | Sends only the selected fields and can keep individual values managed |
| Send a message inside Neptune | [Announcements](/plugins/mdm/announcements) | Targets all users or selected users and device classes |
| Apply Neptune's child restrictions | [Child Accounts](/plugins/mdm/child-accounts) | Stores explicit child-policy state for each user |
| Erase all MDM data | [Devices & Data](/plugins/mdm/devices) | Provides read-only inventory and the protected MDM wipe action |

## Where to Manage It

- **Jellyfin dashboard:** Any Jellyfin administrator can use the complete Neptune MDM dashboard for free.
- **Neptune:** A Jellyfin administrator with Neptune Pro can open **Administration** and choose **Neptune MDM** from any Neptune client.