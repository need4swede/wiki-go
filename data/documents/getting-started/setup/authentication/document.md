---
order: 20
---

# Authentication

Authentication follows the connected backend. Jellyfin is the primary backend;
Emby uses its own documented authentication API and independently scoped
session.

## Jellyfin

### Username & Password

1. Enter your server username
2. Enter your password (leave blank if none)
3. Press **Sign In**

### Quick Connect

Follow the on-screen instructions to enter your Quick Connect auth code.
You will automatically sign in after the login has been authenticated.

**Note:** Quick Connect must be enabled on your server for this feature to work

### Session Storage

Neptune securely saves your session:

- Authentication tokens are stored in device Keychain
- Sessions persist across app restarts
- Quick profile switching without re-entering password

### Multiple Users

Everyone in your household can sign in with their own server account. Neptune shows a profile picker at launch, and each profile keeps its own watch history, theme, and preferences.

See [Profiles](/personalization/profiles) for managing multiple accounts.

## Emby

Neptune verifies the server as Emby before presenting its public-user list.
Choose a listed account or enter the exact username, then enter its local Emby
password. Passwordless accounts use the same flow with an empty password.

The resulting token is stored in the Keychain under its Emby server and
account identity. It is not converted to a Jellyfin session or reused against
Jellyfin plugin routes.

Emby Connect and television PIN authentication are not implemented. The
Emby flow does not expose Jellyfin Quick Connect as a fallback.
