---
order: 20
---

# Neptune MDM

Neptune MDM is the management extension for Jellyfin. It keeps preferences and the signed-in user's private Activity consistent across Neptune clients, and gives server administrators tools for remotely managing settings, reusable profiles, announcements, child accounts, and device records.

Neptune's app and per-device preferences remain usable without the plugin. Sync and remote-management support for future backends will depend on the extension capabilities those backends provide.

## Features

| What you want to do | Use | How it behaves |
|---------------------|-----|----------------|
| Cross-device backup | [Settings Sync](/plugins/mdm/settings-sync) | Keeps supported settings and personal profiles synchronized |
| Private viewing-history continuity | [Activity](/activity) | Synchronizes the signed-in user's Activity automatically when supported; administrators cannot browse it |
| Starting configuration / OOBE | [Server Defaults](/plugins/mdm/server-defaults) | Seeds settings once; later changes are not retroactive |
| Create a preset for users or devices | [Server Profiles](/plugins/mdm/server-profiles) | Keeps one server-owned definition and updates everyone in its scope |
| Change settings for an existing user | [Remote Management](/plugins/mdm/remote-management) | Sends only the selected fields and can keep individual values managed |
| Send a message inside Neptune | [Announcements](/plugins/mdm/announcements) | Targets all users or selected users and device classes |
| Apply Neptune's child restrictions | [Child Accounts](/plugins/mdm/child-accounts) | Stores explicit child-policy state for each user |
| Erase all MDM data | [Devices & Data](/plugins/mdm/devices) | Provides read-only inventory and the protected MDM wipe action |

## Where to Manage It

- **Jellyfin dashboard:** Open the Neptune MDM plugin page from the server dashboard.
- **Neptune:** Open **Administration** and choose **Neptune MDM** from any Neptune client.

## Availability

Administration and receiving managed configuration have separate access rules:

| Area | Who can use it |
|------|----------------|
| Neptune MDM dashboard in Jellyfin | Any Jellyfin administrator |
| Neptune's native MDM console | Jellyfin administrators with [Neptune Pro](/neptune-pro) |
| Settings Sync, Device Overrides, Server Defaults, managed settings and locks, announcements, and child policy | All Neptune users on the server |
| Personal Settings Profiles and optional Server Profiles | Neptune Pro users |
| Required Server Profiles | Any user included in the requirement |

A Required profile controls which profile is active. It does not unlock personal profile features or make settings read-only; individual **Lock** controls do that.
