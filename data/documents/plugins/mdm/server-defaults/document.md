---
order: 20
---

# Server Defaults

Server Defaults define the starting configuration for Neptune users who do not yet have a personal settings backup.
Configured synchronized settings seed once when Neptune first creates that user's settings, even when Settings Sync is off.

This process does not turn Settings Sync on or upload a personal backup by itself.
It is a starting point rather than permanent policy.
Neptune completes first-use setup before attempting automatic Seerr sign-in, whether the Jellyfin user signs in with a password or Quick Connect.

## Profile Templates

Server Defaults can provide a starting Settings Profiles document:

| Example | What It Does |
|---------|--------------|
| Starting profile library | Gives every new user the same named settings environments |
| Device-type assignments | Makes different profiles automatic for supported device types |
| Override-clearing choice | Lets an applied profile replace only the Device Overrides that conflict with its included settings |

Only configured values participate.
An omitted setting keeps its local value, and an explicit local non-default, unsent local change, or Device Override wins.
Saved URL lists merge with URLs already recorded by the device: administrator entries appear first and duplicates are removed.
If the user explicitly cleared a list before bootstrap, it remains empty.

That general bootstrap priority does not cancel a profile's saved policy.
If an automatically activated copied profile has **Replace Device Overrides** enabled, it removes only overrides that conflict with its included settings.

Neptune copies the template library and assignments only when the local Settings Profiles document is empty, preserving profiles created locally before the first server read.
Each device type can have zero or one automatic assignment.
When an administrator moves a device type from one profile card to another, the dashboard names both profiles and asks for confirmation before replacing the existing assignment.

## Inherited Defaults

Selecting a user with no personal Neptune backup in Remote Management shows their effective Server Defaults and labels the document as inherited.
Viewing it does not create a personal backup, and the delete action remains unavailable until that user has personal state.

The Seerr saved-URL list is for manual switching, while the active or preconfigured Seerr endpoint is separate.
In the settings document, `seerrServerURL` is active and `seerrURLs` is the saved list.

Server Defaults profile inheritance is not Required policy.
It can seed a starting profile library and assignments, but those remain ordinary profile choices rather than managed requirements.
A live Required assignment is delivered separately, and profile members remain customizable unless the administrator also locks them.

## When Defaults Apply

Defaults are not retroactive.
After the one-time bootstrap completes—or once a personal backup exists—the user keeps that configuration even if the administrator later changes Server Defaults.
To update an existing user, open that user in Remote Management and send an individual settings push.
Switching a device to Auto when no profile is assigned does not run bootstrap again or reapply Server Defaults.

Server Defaults are not persistent policy.
For reusable live configuration, use a [Server Profile](/plugins/mdm/server-profiles) and assign it globally by device type or add it only to selected users.
Mark an automatic assignment Required when the user must stay on that profile.
To prevent changes to individual settings, Lock those members separately or use direct per-user locking in [Remote Management](/plugins/mdm/remote-management).
