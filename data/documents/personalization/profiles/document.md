---
order: 10
---

# Profiles

Multiple user profiles with separate watch history and preferences.

## Who's Watching

At launch, Neptune shows a profile picker with everyone who has signed in on the device.
Each avatar previews that person's own theme behind it.
Pick a profile and the whole app follows: watch history, favorites, theme, layouts, home screen, everything.

Profiles also appear as avatar cards at the top of Settings, with a checkmark on the current one.

## Switching Profiles

**Saved session:** select the profile.
Switches without re-entering credentials.

**No session:** enter the password when prompted.

**Passwordless accounts:** switch without prompting.

## Adding Profiles

1. Select the **Add** card in the profiles row
2. Sign in with username and password, or Quick Connect
3. Optionally copy preferences from an existing profile as a starting point

The **Copy Preferences From** step is handy when setting up a family member who wants your layout without your watch history.

## Settings Profiles

[Settings Profiles](/personalization/profile-presets) let one account keep several named settings environments.
Normal Settings controls update the named profile when one is active, or regular synchronized settings when none is active.
Select one on a physical device, or assign at most one automatic profile to each supported device type.
Settings Profiles can be personal or published by a server administrator.

A server administrator can also publish **Server Profiles** whose shared definitions are read-only to recipients.
A profile can be the automatic choice for every device in a class or be added only to selected users.
A user's own automatic assignment is more specific.
Administrators can mark an assignment Required so it cannot be disabled or replaced.
Required controls profile selection only.
A separate Lock makes an individual member read-only, and those locks work in either optional or Required profiles.

Profile definitions and device-type assignments sync with the account.
The active manual choice stays on the physical device where it was selected, so changing profiles on one client does not force another client to switch.

A named profile is a reversible layer over the regular synchronized settings.
When it stops applying, Neptune reveals the newest synchronized baseline, or the pre-profile local values when no server value was observed.
Auto with no assigned profile uses this baseline; it does not restore a backup or reapply Server Defaults.

Creating one starts from the current device, Server Defaults, or Neptune Defaults, then opens Neptune's familiar settings editor.
Each preset can also choose whether applying it may clear only the Device Overrides that conflict with its saved settings; a user-initiated switch asks before doing so.

See [Settings Profiles availability](/personalization/profile-presets#availability) for personal, optional Server Profile, and Required-profile access rules.

## Per-Profile Features

| Feature | Description |
|---------|-------------|
| Watch history | What you've watched, Continue Watching, Next Up |
| Favorites | Your favorited content |
| Theme and appearance | Theme, mode, card styles, layouts |
| Home screen | Section order, visibility, and limits |
| Navigation bar | Tab order and visibility |
| Conductor | Language and track preferences |
| Pins | Your pinned items and browse filters |
| Settings Profiles | Personal or server-published settings environments with automatic device-type assignments |

With the [Neptune MDM](/plugins/mdm) plugin, synchronized profile data follows you to every device you sign in on.
Device-local choices—including which named profile was selected manually—stay on that physical device.
See [Backup & Restore](/settings/backup).

## Child Accounts

Server admins can mark a profile as a child account: Discover and requests disappear, and only content within the account's age rating shows, on every device.
Admins set this up in [Administration](/settings/administration), or through the MDM plugin dashboard.

## Session Management

Sessions are stored securely in the device Keychain:

- Persist across restarts
- No passwords stored locally
- Can be revoked from the media server

**Sign out:** open your profile in Settings and choose **Sign Out**.
This signs out every profile on the device, so other users will need to sign in again.

## Troubleshooting

**Profile not appearing:** check the account visibility settings in your backend.
On Jellyfin, verify that the account is marked "public."

**Can't switch:** verify network connectivity; the password may have changed.
