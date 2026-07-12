---
order: 10
---

# Profiles

Multiple user profiles with separate watch history and preferences.



## Who's Watching

At launch, Neptune shows a profile picker with everyone who has signed in on the device. Each avatar previews that person's own theme behind it. Pick a profile and the whole app follows: watch history, favorites, theme, layouts, home screen, everything.

Profiles also appear as avatar cards at the top of Settings, with a checkmark on the current one.



## Switching Profiles

**Saved session:** select the profile. Switches without re-entering credentials.

**No session:** enter the password when prompted.

**Passwordless accounts:** switch without prompting.



## Adding Profiles

1. Select the **Add** card in the profiles row
2. Sign in with username and password, or Quick Connect
3. Optionally copy preferences from an existing profile as a starting point

The **Copy Preferences From** step is handy when setting up a family member who wants your layout without your watch history.



## Per-Profile Features

| Feature | Description |
|---------|-------------|
| Watch history | What you've watched, Continue Watching, Next Up |
| Favorites | Your favorited content |
| Theme and appearance | Theme, mode, card styles, layouts |
| Home screen | Section order, visibility, and limits |
| Navigation bar | Tab order and visibility |
| Conductor | Language and track preferences |
| Shortcuts | Your pins |

With the [Neptune MDM](/plugins/mdm) plugin, all of it syncs to every device you sign in on. See [Backup & Restore](/settings/backup).



## Child Accounts

Server admins can mark a profile as a child account: Discover and requests disappear, and only content within the account's age rating shows, on every device. Admins set this up in [Administration](/settings/administration), or through the MDM plugin dashboard.



## Session Management

Sessions are stored securely in the device Keychain:

- Persist across restarts
- No passwords stored locally
- Can be revoked from the media server

**Sign out:** open your profile in Settings and choose **Sign Out**. This signs out every profile on the device, so other users will need to sign in again.



## Troubleshooting

**Profile not appearing:** check the account visibility settings in your backend. On Jellyfin, verify that the account is marked "public."

**Can't switch:** verify network connectivity; the password may have changed.
