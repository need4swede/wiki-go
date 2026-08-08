---
order: 20
---

# Neptune MDM

Neptune MDM is the management extension for Jellyfin. It keeps preferences consistent across Neptune clients and gives server administrators tools for remotely managing settings, reusable profiles, announcements, child accounts, and device records.

Neptune's app and per-device preferences remain usable without the plugin. Sync and remote-management support for future backends will depend on the extension capabilities those backends provide.

> The complete Jellyfin plugin dashboard is Free. Administering Neptune MDM directly from a Neptune client requires [Neptune Pro](/neptune-pro). Receiving managed settings and using Settings Sync do not require Pro, including ordinary per-setting administrator changes and persistent **Lock for User** policies.

## In This Section

| Page | Description |
|------|-------------|
| [Settings Sync](/plugins/mdm/settings-sync) | Keep supported preferences and personal Settings Profiles consistent across devices |
| [Remote Management](/plugins/mdm/remote-management) | Manage users and settings from Jellyfin or Neptune's native administration console |
| [Server Profiles](/plugins/mdm/server-profiles) | Create reusable settings profiles and assign them by user or device class |
| [Server Defaults](/plugins/mdm/server-defaults) | Define the starting configuration for users without a personal backup |
| [Announcements](/plugins/mdm/announcements) | Send targeted messages to Neptune users and devices |
| [Child Accounts](/plugins/mdm/child-accounts) | Apply Neptune's child-account restrictions |
| [Devices & Data](/plugins/mdm/devices) | Review registered devices and understand the MDM data wipe |

## What Neptune MDM Manages

- Synchronized settings and server backups
- Personal and server-owned Settings Profiles
- Server Defaults for first-time setup
- One-time remote changes and persistent setting locks
- Required profiles for a user and device class
- Announcements and child-account policy
- Read-only device inventory

Neptune MDM manages Neptune data only. Neptune Indexers is a separate plugin and has no status, configuration, or rebuild controls here.

## Access and Entitlements

Any Jellyfin administrator can use the complete plugin dashboard for free. A Jellyfin administrator with Neptune Pro can also open **Administration**, complete the optional Neptune passcode challenge, and choose **Neptune MDM** on iPhone, iPad, or Apple TV.

The administrator's Pro entitlement unlocks the native interface only; it does not grant Jellyfin administrator rights. Likewise, MDM can distribute settings but cannot grant Neptune Pro to a recipient. Personal Settings Profiles and ordinary automatic profile assignments require the recipient's Pro entitlement, while direct settings management and an explicit **Required** profile apply to matching Free or Pro recipients.

Neptune MDM `1.2.6.101` remains supported by the native console and does not need to be upgraded first. Neptune detects its older Settings Sync capabilities and safely handles inherited Server Defaults when an administrator makes a user's first partial change. Newer plugin capabilities are adopted automatically.
