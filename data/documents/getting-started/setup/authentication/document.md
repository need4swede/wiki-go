---
order: 20
---

# Authentication

## Username & Password

![server-login-auth.png](server-login-auth.png)

1. Enter your Jellyfin username
2. Enter your password (leave blank if none)
3. Press **Sign In**

## Quick Connect

![server-login-quick.png](server-login-quick.png)

Follow the on-screen instructions to enter your Quick Connect auth code.
You will automatically sign in after the login has been authenticated.

**Note:** Quick Connect must be enabled on your server for this feature to work

## Session Storage

Neptune securely saves your session:

- Authentication tokens are stored in device Keychain
- Sessions persist across app restarts
- Quick profile switching without re-entering password

## Multiple Users

Everyone in your household can sign in with their own Jellyfin account. Neptune shows a profile picker at launch, and each profile keeps its own watch history, theme, and preferences.

See [Profiles](/personalization/profiles) for managing multiple accounts.
