---
order: 30
---

# Supported Media Servers

Neptune keeps the same native Home, Library, Search, playback, and Settings
experience across media-server platforms. The backend supplies the account,
library, artwork, stream, and watch-state data behind those screens.

This invariant is the [One Neptune](/getting-started/backends/one-neptune)
architecture: parallel provider data adapters are acceptable; parallel
provider interfaces are not.

Backend support is capability-based. A server can support core browsing and
playback even when an optional administration, plugin, sync, or download
feature is unavailable. Neptune hides or explains unsupported actions instead
of sending commands intended for a different server platform.

## Backends

Neptune is designed for Jellyfin, Emby, Plex, and additional media-server
backends. Availability can vary by release.

## Jellyfin

Jellyfin is Neptune's primary and most complete backend. It supports normal
server discovery and manual addresses, username/password authentication, and
Quick Connect.

The optional [Neptune Plugin Suite](/plugins) is built for Jellyfin. Depending
on which suite components are installed, it adds features such as:

- Settings Sync and backup
- Server Defaults and announcements
- [Neptune MDM](/plugins/mdm)
- faster server-side indexes
- plugin-backed Home sections and artwork tools

The app still works without the suite; those server-assisted features simply
remain unavailable.

## Plex

Plex support remains planned. Neptune already reserves a branded setup choice
and the Ember theme, but those presentation pieces do not by themselves make
Plex a usable backend. The setup card remains unavailable until
authentication, server selection, account storage, catalog, images, playback,
reporting, and both Apple-platform integrations pass the same release checks
as other backends.

## Seerr

[Seerr](/getting-started/setup/seerr) is configured independently from the
media backend.

- With Jellyfin, Neptune can reuse the supported Jellyfin sign-in path when
  the active runtime allows it.
- Plex and local Seerr authentication appear only when the Seerr server
  advertises those methods.

The saved Seerr session is tied to the exact backend, media server, and user.
Switching providers cannot silently restore another account's Seerr session.

## Notes for Server Administrators

The Neptune Plugin Suite and its dashboard are currently Jellyfin extensions.

For Jellyfin users, Server Defaults can seed a new Neptune profile and MDM can
manage synchronized settings. Local user settings remain available on every
supported backend.

Provider-side subscriptions are separate from Neptune Pro. Neptune respects a
server's feature or playback restrictions and does not use Neptune Pro to
bypass them.

## Switching and Disabled Builds

Servers and credentials are stored separately by backend, server, and user.
Accounts on two providers can safely use the same username or internal media
ID without sharing data.

If a beta backend is disabled in a particular Neptune build, the app does not
contact it or attempt a background restore. The saved connection is retained
rather than deleted, so it can be restored when support is enabled again.

## Troubleshooting

| Symptom | What to check |
|---------|---------------|
| A backend card says it is not ready | That provider is disabled in the installed Neptune build |
| A feature disappears after switching servers | The new server, account policy, subscription, or companion may not advertise that capability |

Continue with [Server Connection](/getting-started/setup/server-connection) to
add a server or [Authentication](/getting-started/setup/authentication) for
sign-in details.
