---
order: 30
---

# Supported Media Servers

Neptune uses the same Home, Library, Search, playback, and Settings pages across media servers.
Your server supplies the accounts, library, artwork, streams, and watch history.
See [One Neptune](/getting-started/backends/one-neptune) for what stays the same when you switch.

## Backends

| Backend | Status | Connection |
|---------|--------|------------|
| **Jellyfin** | Supported | Local discovery or a server address |
| **Emby** | Supported | Local discovery or a server address |
| **Plex** | Supported | Sign in with Plex, then choose a server |
| **Silo** | In development, enabled in the current build | Local discovery or Silo's main server address |

Availability can vary by installed version.
Optional features depend on what the server and account support.
An unavailable plugin, sync, administration, or download feature does not stop ordinary browsing and playback.

## Jellyfin

Choose Jellyfin, find your server or enter its address, then sign in with a username and password or Quick Connect.

The optional [Neptune Plugin Suite](/plugins) adds features such as:

- Settings Sync and backup
- Server Defaults and announcements
- [Neptune MDM](/plugins/mdm)
- Faster server-side indexes
- Plugin-backed Home sections and artwork tools

Neptune works without the suite.

## Emby

Choose Emby, find your server or enter its address, then sign in with your Emby server username and password.
You can also choose **Sign in with Emby Connect** and approve the displayed code for an account linked to that server.

Emby uses Neptune's normal browsing, search, details, and player.
The Jellyfin Neptune Plugin Suite does not install on Emby, so its companion features, including Settings Sync and Neptune MDM, are unavailable.
Local Neptune preferences and a separately configured Seerr connection remain available.

## Plex

Choose Plex and follow the on-screen code sign-in.
On Apple TV, scan the QR code or enter the code at `plex.tv/link`.
On iPhone and iPad, use **Open Sign-In Page**.

Choose a Plex Home user when prompted, enter that user's Plex PIN if required, then select an owned or shared server.
Neptune gets the server's addresses from Plex.

Plex supports movie and TV libraries, collections, search, and Neptune's player.
Plex Music, Live TV/DVR, and Plex's cloud Discover and Watchlist are not offered.
Server subscriptions and permissions still determine which server features are available.
The Jellyfin Neptune Plugin Suite is unavailable on Plex.

## Silo

Silo is enabled while its integration is still in development.
Choose Silo and find the server locally or enter its main address.
Use the native Silo address, not its Jellyfin-compatible address.

Sign in with a username and password where offered, or approve the on-screen device code.
Choose a household profile and enter its Silo PIN if required.
That profile becomes the saved Neptune account.

Silo uses the same Neptune browsing and playback pages.
Its available features follow the server's capabilities; the Jellyfin Neptune Plugin Suite is unavailable.

## Seerr

[Seerr](/getting-started/setup/seerr) is configured independently from the media backend.
Neptune offers only the sign-in methods that the Seerr server advertises:

- **Jellyfin:** can reuse a supported Jellyfin sign-in when available.
- **Emby:** asks for explicit credentials when Seerr is configured for Emby.
- **Plex or local Seerr account:** available when enabled by that Seerr server.

The saved Seerr session belongs to the selected media account.
Switching accounts does not reuse another account's session.

## Notes for Server Administrators

The Neptune Plugin Suite and its dashboard are Jellyfin extensions.
For Jellyfin users, Server Defaults can seed a new Neptune profile and MDM can manage synchronized settings.
Local user settings remain available on every supported backend.

Provider subscriptions are separate from Neptune Pro.
Neptune Pro does not bypass your server's playback restrictions or permissions.

## Switching and Disabled Builds

Use **Add Account** in Settings to add another server or backend.
Each account keeps its own credentials, watch history, and preferences.
See [Accounts & Profiles](/personalization/profiles).

If a backend is disabled in a particular build, Neptune retains its saved connection without trying to contact it.
It can be used again when that backend is enabled.

## Troubleshooting

| Symptom | What to check |
|---------|---------------|
| A backend card says it is not ready | That backend is disabled in the installed Neptune build |
| Plex shows no usable server | The selected Plex user needs access to a reachable media server |
| Silo rejects an address | Use Silo's main address, not its Jellyfin-compatible listener |
| A feature disappears after switching servers | Check the server's capabilities, account permissions, and subscription |

Continue with [Server Connection](/getting-started/setup/server-connection) or [Authentication](/getting-started/setup/authentication) for setup instructions.
