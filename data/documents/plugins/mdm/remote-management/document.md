---
order: 40
---

# Remote Management

Server administrators can manage a user's supported synchronized Neptune settings through the plugin dashboard in Jellyfin or Neptune's native console.
The schema covers appearance, playback, search, layout, and other profile preferences while excluding device-local and runtime-only values.

Use Remote Management for exact changes or locks that apply to one user.
When the same reusable configuration should reach several users or device classes, use [Server Profiles](/plugins/mdm/server-profiles) instead.

## Administer from Neptune

On a supported Neptune client, open the existing **Administration** area, complete its passcode challenge if one is configured, and choose **Neptune MDM**.
Only Jellyfin administrator accounts see this entry.

The native console provides:

- Plugin and connection status
- Reusable Server Profiles with global device-class assignments or explicit per-user scope
- Server Defaults and individual users' settings backups
- **Copy from User**, which stages another user's effective settings as an unsaved starting point before the administrator confirms Save
- Exact settings changes that leave unrelated and future settings untouched
- Persistent per-user setting locks and independently Required Settings Profiles
- Read-only device inventory
- Child-account policy
- Announcement authoring and targeting
- Schema-driven controls, native editors for structured settings, and Advanced JSON
- A confirmation-protected wipe of all Neptune MDM data

When you choose Server Defaults or a user, the editor follows Neptune's familiar Settings hierarchy—User Preferences, Neptune, Server, Seerr, and Backup & Sync—instead of presenting one long server form.
A reminder remains on nested pages so it is always clear whose remote settings you are changing.
The editor modifies a server-managed draft; it does not sign you in as that user or change the administrator's local settings.

Only fields in Neptune's remote-management schema appear in this mirror.
Local-only actions such as launching Compass, clearing learned state, or rebuilding caches are intentionally omitted.
Other schema sections remain editable under **Additional Managed Settings**.

Navigation Bar management includes Home, Movies, Shows, Music, Library, and Discover, and Music can be selected as the startup tab.
Settings and Search stay pinned to the edges.

The optional Neptune passcode protects the menu from other people using the same device; it does not replace server authorization.
Neptune checks the active account before every operation, and the plugin separately requires elevated server authorization.

## Sending Changes

Changes push to a user's devices immediately when they are online or apply the next time they sign in.
Only the settings the administrator actually changes are sent, leaving unrelated preferences untouched.

The settings form is built from a schema uploaded by Neptune.
Native Neptune clients use stable schema destinations to mirror the familiar Settings navigation while preserving one exact remote draft across those pages.

On iPhone and iPad, remote management includes the independent [Picture in Picture and Background Playback](/ios/playback) switches under Playback.
Both default on.
A pushed change applies when the user starts the next playback session and has no playback effect on Apple TV.

An administrator's explicit change to a setting also clears a Device Override for that setting.
Only settings included in the change are affected.
The server retains the forced value so an offline device applies it after reconnecting, even when ordinary sync is off.

When no persistent policy controls a setting, an unseen administrator push wins over a Device Override, the active named Settings Profile, and regular synchronized settings.
A profile with **Replace Device Overrides** enabled first removes only its matching overrides.
The push suppresses only the conflicting member of the active profile; unrelated members continue applying.
Editing that field or changing the active selection clears the suppression.

## Persistent Locks

An ordinary administrator Save is a one-time push.
**Lock for User** is a durable policy that remains in control until an administrator removes it, and it can protect one setting without creating a Settings Profile.
For example, an administrator can set a user's Theme and keep it managed until an administrator chooses **Allow User Changes**.

For a setting present in several layers, Neptune uses this priority:

1. Directly locked server value
2. Explicitly locked member of the active Settings Profile, whether that profile is optional or Required
3. Unseen one-time administrator push
4. Device Override
5. Active Settings Profile
6. Regular synchronized setting

A Required profile is configured per user and supported device type.
Matching devices stay on Auto and cannot select or disable that profile.
Its included settings remain customizable unless they have their own Lock.
Member locks work the same way in optional profiles.
Removing a requirement restores the user's earlier profile selection; removing a lock reveals the personal setting or Device Override preserved underneath.

See [Required Profiles and Locked Settings](/plugins/mdm/server-profiles#required-profiles-and-locked-settings) for the four optional/Required and locked/unlocked combinations.

Required targeting resolves by user and device class.
It cannot select one physical device independently from another device of the same type signed in as that user; every matching device in that class receives the requirement.

An offline device continues using the last Required policy and matching definition successfully reconciled for that server, user, and device class.
Neptune never treats a merely published or ordinarily assigned profile as Required, and it does not invent values if it has never verified the matching definition.
Reconnecting reconciles changes or removal.
Switching servers, accounts, backend generations, or device classes tears down the old session's managed overlay.

On Apple TV, locked rows remain focusable so Siri Remote navigation can move through the page, but pressing Select cannot change them.
Target devices label locked controls **Managed by Your Server**.
Choosing **Allow User Changes** removes the policy and restores the preserved value.

## Availability, Authorization, and Safety

Plugin, native-console, and recipient requirements are summarized in the [MDM availability table](/plugins/mdm#availability).

If the administrator's Pro access ends while the native console is open, Neptune closes or locks it and blocks further native actions.
Existing MDM data and delivered policies remain unchanged, and dashboard management remains available.

Jellyfin administrator authorization is checked on every mutation.
Losing that authorization blocks future changes but does not erase an accepted policy.
Any currently authorized Jellyfin administrator can later change or remove server-owned policy; it is not tied to the ongoing entitlement of the person who originally saved it.

Managed profiles contain settings only.
They cannot grant Neptune Pro, promote a Jellyfin user to administrator, weaken a backend capability check, or bypass a setting's separate security, privacy, account, or MDM authorization requirement.

The native console manages Neptune MDM only.
Neptune Indexers remains separate from it on every supported client.
