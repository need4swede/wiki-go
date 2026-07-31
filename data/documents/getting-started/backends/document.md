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

## Current Status

| Backend | Status | Current experience |
|---------|--------|--------------------|
| **Jellyfin 10.10+** | Primary and supported | Complete shipping integration, including the optional Neptune Plugin Suite |
| **Emby 4.9.5+** | Beta | Local sign-in, restore, Home, Library, Search, details, related media, watch-state changes, and provider-prepared playback with the live matrix still in validation |
| **Plex** | Planned | A setup card may be visible, but it remains unavailable while its complete runtime is being built |

Jellyfin appears first during setup, followed by Emby and Plex. Each choice has
its own visual identity: Jellyfin previews **Ocean**, Emby previews **Forest**,
and Plex previews **Ember**. This only chooses a useful starting theme. You can
select any Neptune theme after setup.

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

## Emby Beta

Neptune connects directly to Emby through Emby's documented API. The current
beta supports:

- local-network discovery or a manually entered address;
- local Emby username/password authentication;
- restoring the saved account;
- Home, libraries, browse, search, item details, and related media;
- favorite and watched-state changes;
- implemented provider-prepared direct, remuxed, or transcoded playback with
  progress reporting; live codec, subtitle, and long-play validation remains
  part of the beta.

Neptune does not become a separate “Emby mode” after sign-in. It keeps the same
native navigation and Settings design used elsewhere.

The following are not currently available for Emby:

- Emby Connect or television PIN authentication;
- the Jellyfin Neptune Plugin Suite;
- Settings Sync, Server Defaults, announcements, or Neptune MDM;
- native server/plugin administration;
- Neptune's provider-integrated offline download flow;
- external sidecar subtitle loading during provider-prepared direct play or
  direct stream. Embedded subtitles work, and text/external subtitle tracks on
  a prepared transcode remain selectable through server re-preparation;
- plugin-backed full-catalog indexing and cache synchronization.

Local Neptune settings continue to work. A missing plugin or administration
row on Emby is an expected capability difference, not evidence that Neptune
tried and failed to contact a Jellyfin plugin.

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
- With Emby, Neptune offers an Emby account only when that Seerr server
  advertises Emby as its media-server login. You enter credentials explicitly;
  Neptune never sends the saved Emby access token to Seerr.
- Plex and local Seerr authentication appear only when the Seerr server
  advertises those methods.

The saved Seerr session is tied to the exact backend, media server, and user.
Switching providers cannot silently restore another account's Seerr session.

## Notes for Server Administrators

The Neptune Plugin Suite and its dashboard are currently Jellyfin extensions.
Installing a Jellyfin plugin binary on Emby or Plex is neither supported nor
required for their core client experience.

For Jellyfin users, Server Defaults can seed a new Neptune profile and MDM can
manage synchronized settings. Those controls do not apply to an Emby account
until a compatible Emby-specific Neptune companion exists. Local user settings
remain available on every supported backend.

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
| A Jellyfin server is rejected after choosing Emby | Return to the backend picker and choose Jellyfin; Neptune verifies the selected server product |
| Plugin, Sync, or MDM settings are missing on Emby | These currently require the Jellyfin Neptune Plugin Suite |
| Emby Connect or a television code is missing | The current Emby beta supports local username/password accounts |
| Seerr does not offer Emby login | Confirm Seerr itself is configured to advertise Emby authentication |
| A feature disappears after switching servers | The new server, account policy, subscription, or companion may not advertise that capability |

Continue with [Server Connection](/getting-started/setup/server-connection) to
add a server or [Authentication](/getting-started/setup/authentication) for
sign-in details.
