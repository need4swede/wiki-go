---
order: 20
---

# Authentication

Choose your media server during setup.
Sign-in methods depend on the backend.

## Jellyfin

### Username & Password

1. Enter your server username
2. Enter your password (leave blank if none)
3. Press **Sign In**

### Quick Connect

Choose **Quick Connect** and approve Neptune's displayed code from an already signed-in Jellyfin client.
Neptune continues automatically after approval.
Quick Connect must be enabled on your server.

## Emby

Connect to your Emby server, then enter your server username and password and choose **Sign In**.

For Emby Connect, choose **Sign in with Emby Connect** on the login screen.
Follow the displayed code instructions and approve the sign-in with an Emby Connect account linked to that server.
Neptune then signs you in to the selected server.

## Plex

1. Choose Plex during setup
2. On Apple TV, scan the QR code or enter the displayed code at `plex.tv/link`. On iPhone and iPad, choose **Open Sign-In Page**
3. Approve the sign-in with your Plex account
4. Choose a Plex Home user if prompted, entering that user's Plex PIN when required
5. Select an owned or shared server

Neptune gets the server list from Plex after you sign in.

## Silo

Connect to Silo's main server address.
On the login screen, use your username and password where offered, or choose **Sign in with Silo** and approve the displayed device code.

Choose a household profile if prompted.
A protected profile asks for its Silo PIN.
Each profile is saved as its own Neptune account.

Silo remains in development.
See [Supported Media Servers](/getting-started/backends#silo) for its current status.

## Session Storage

Neptune stores session tokens securely in the device Keychain and may save a sign-in password there for reauthentication.
Sessions persist across restarts, so a valid saved session lets you switch accounts without signing in again.

## Multiple Users

Everyone in your household can sign in with their own server account or supported household profile.
Each saved account keeps its own watch history, theme, and preferences.
On Apple TV, each tvOS profile also keeps its own list of accounts.

A server's profile PIN is separate from Neptune's optional Account PIN.
See [Accounts & Profiles](/personalization/profiles) for switching accounts and managing Account PINs.
