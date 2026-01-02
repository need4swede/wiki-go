# Profiles

Neptune supports multiple user profiles, allowing different family members or users to have their own personalized experience with separate watch history, favorites, and recommendations.

---

## Overview

The Profiles section in Settings displays:

- **Current user**: Highlighted with a green checkmark
- **Other profiles**: Available users from your Jellyfin server
- **Add Profile**: Button to sign in with additional accounts

---

## Viewing Profiles

Profiles appear as circular avatar cards showing:

- **Profile picture**: User's avatar from Jellyfin (or initials if none set)
- **Username**: Display name
- **Current indicator**: Green checkmark badge on active profile

---

## Switching Profiles

### Quick Switch (Saved Session)

If you've previously logged in with a profile, Neptune saves your session:

1. Select the profile you want to switch to
2. Neptune automatically switches using your saved credentials
3. Content refreshes for the new user

### Password Required

If no saved session exists:

1. Select the profile
2. Enter your Jellyfin password when prompted
3. Press **Sign In**
4. Your session is saved for future quick switches

### Passwordless Accounts

For Jellyfin accounts without passwords:

1. Select the profile
2. Neptune signs in automatically
3. No password prompt appears

---

## Adding a Profile

To add a new user profile to Neptune:

1. Scroll to the end of the profiles row
2. Select **Add Profile**
3. Choose sign-in method:
   - **Username and Password**: Enter Jellyfin credentials
   - **Quick Connect**: Use code-based authentication

### Using Quick Connect for New Profiles

1. Select **Quick Connect**
2. Note the 6-digit code displayed
3. On another device, go to Jellyfin web interface
4. Navigate to **Settings** > **Quick Connect**
5. Enter the code and approve
6. Neptune adds the profile automatically

---

## Current User Settings

Select your own profile (with the checkmark) to access user-specific settings:

- **View profile details**: See your account information
- **Manage preferences**: User-specific app settings
- **Sign out**: Remove your session from this device

---

## Profile Features

Each profile maintains separate:

| Feature | Description |
|---------|-------------|
| **Watch History** | What you've watched and progress |
| **Favorites** | Your favorited movies and shows |
| **Recommendations** | Personalized suggestions |
| **Continue Watching** | Resume points for all content |
| **Next Up** | Your TV show queue |
| **Theme** | Visual theme preference |

---

## Profile Visibility

Neptune shows profiles from multiple sources:

1. **Public Users**: Accounts visible on Jellyfin login screen
2. **Saved Sessions**: Previously logged-in accounts
3. **Current User**: Always visible even if not public

This ensures you can always switch back to accounts you've used before.

---

## Admin Features

If your account has administrator privileges, you can:

- Access all public and hidden profiles
- Manage Jellyseerr requests for other users
- View server diagnostics
- Access advanced refresh options

---

## Session Management

### Saved Sessions

Neptune securely stores authentication tokens in the device Keychain:

- Tokens are encrypted and device-specific
- Sessions persist across app restarts
- Each profile's token is stored separately

### Signing Out

To remove a saved session:

1. Select the profile
2. Choose **Sign Out** from profile settings
3. The session token is removed from Keychain
4. You'll need to re-authenticate to use that profile

### Security

- Tokens are stored securely in Apple's Keychain
- No passwords are stored locally
- Sessions can be revoked from Jellyfin server settings

---

## Troubleshooting

### Profile not appearing

- Ensure the account is set to "public" in Jellyfin settings
- Try signing in with "Add Profile" to add it manually
- Check that the account isn't disabled on the server

### Can't switch profiles

- Verify network connectivity to your Jellyfin server
- Check if the account password has changed
- Try signing out and back in

### Quick switch not working

- The saved session may have expired
- Server may have invalidated the token
- Re-enter password to create a new session
