---
order: 20
---

# Neptune MDM

Neptune MDM is the management extension for Jellyfin. Neptune's app and per-device preferences remain usable without it; sync and remote-management support for future backends will depend on their extension capabilities.

Neptune MDM handles settings sync, backup, and remote device management. It keeps your preferences consistent across every Neptune client on your account and gives server administrators tools for managing users, sending announcements, and setting up child accounts.



## Settings Sync

Every change you make on one device syncs to all your other Neptune clients. Change your theme on your iPhone and your Apple TV updates in real time. Adjust playback settings on one device and every other device picks up the change automatically.

Each device can opt out of sync individually if you want to keep its settings separate. See [Backup & Restore](/settings/backup) for the client-side controls.

All settings changes are backed up to the server. When you sign in on a new device, Neptune restores your full configuration from the backup. Themes, layout, playback preferences, and everything else carry over without manual setup.

That synchronized profile includes native [Library Pins](/library/shortcuts),
the iPhone’s ordered Compass Shortcuts, and its Live Activity enabled/type
preferences. iOS Home Screen and Lock Screen widget placement, size, and
per-widget Page/Section/Pin selection remain system-owned configuration on the
individual device; they are not a single Neptune setting for MDM to replace.



## Remote Management

Server administrators can manage any user's Neptune settings through the plugin's dashboard in Jellyfin. Every setting available in Neptune (appearance, playback, search, layout, and more) can be configured remotely.

Changes push to the user's devices immediately if they're online, or apply the next time they sign in. Only the settings you actually change are sent, so you never accidentally overwrite a user's other preferences.

The settings form is built from a schema that Neptune itself uploads, so new app releases add their new settings to the dashboard automatically. No plugin update required.

On iPhone and iPad, this includes the independent
[Picture in Picture and Background Playback](/ios/playback) switches under
Playback. Both default on. A pushed change applies when the user starts the
next playback session and has no playback effect on Apple TV.



## Server Defaults

Administrators can define default settings that apply to all new Neptune users on the server:

| Example | What it does |
|---------|--------------|
| Default theme | New users launch Neptune with your chosen theme |
| Transcode settings | Set a default bitrate cap or force transcoding for all users |
| Pre-filled server URLs | New users skip manual entry for their Jellyfin and Seerr servers |

Server defaults override Neptune's built-in defaults. Existing users are not affected, only new accounts that sign in after the defaults are configured.



## Announcements

Administrators can write announcement cards that appear inside Neptune on their users' devices. Each announcement shows once per device and stays dismissed after that.

Announcements support:

- A title, body text, icon, and button label
- Targeting specific users, or everyone on the server
- Targeting specific platforms and app versions
- Delivery immediately to live devices, or on next app launch

Useful for planned maintenance windows, new library additions, or house rules.



## Child Accounts

Administrators can mark any user as a child account. On every device that user signs in on, Neptune:

- Hides Discover and the request catalog
- Only shows content within the user's age rating

Child accounts pair with Neptune's in-app parental controls, where admins set the age rating limit and choose which libraries the account can access. See [Administration](/settings/administration) for the client-side setup.



## Devices

The dashboard lists the devices each user has signed in on, so you can see where Neptune is installed across your server. Devices register automatically. No setup needed.
