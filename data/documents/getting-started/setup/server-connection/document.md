---
order: 10
---

# Server Connection

To begin using Neptune, connect to a supported media server. The server can be hosted locally on the same network or remotely on a different network.

Neptune is backend-agnostic, with one shared experience across server
platforms. Jellyfin is the primary backend. Emby support is under active
development through Emby's documented API and is controlled by a normal
Neptune feature flag. Plex and additional backends remain planned.

The first onboarding screen is ordered **Jellyfin**, **Emby**, then **Plex**,
with a separate logo and card for each provider. Jellyfin remains the default.
Selecting a provider whose feature flag is off explains that it is not ready
instead of attempting to connect.

## Auto-Discovery

Neptune automatically scans your local network for supported servers.

**Requirements:**

- Your client and media server have to be on the same network
- For Jellyfin, network discovery needs to be enabled in the server settings

Neptune can also consume an Emby discovery candidate, but it
verifies the server product, version, and ID before saving it. A Jellyfin
response is never accepted as an Emby server, or vice versa.

## Manual Setup

For remote servers or when auto-discovery doesn't find your server:

1. Select **Manual Setup**
2. Enter the server address (for example, `media.example.com` or `192.168.1.100:8096`)
3. Press **Connect**

### Emby support

Neptune is an independent Emby client using Emby's documented API. The current
implementation covers local server discovery/manual URL, local account
sign-in, session restore, core browsing, and playback for supported media
sources. Signing in does not switch to a separate Emby interface: Neptune keeps
its native navigation, Home, Library, Search, and Settings experience while
provider-neutral content views talk to the active Emby runtime. Features that
have not yet been implemented for Emby are hidden through backend capability
checks instead of sending Jellyfin-specific requests to an Emby server.

## Multiple Addresses

A server can have more than one saved address (for example, a local address for home and a domain for remote access). Manage them later under that backend's section in **Settings > Change URL**. With today's Jellyfin backend, this is **Settings > Jellyfin > Change URL**. You can add addresses, reorder them, and switch between them without signing in again.

## Troubleshooting

**No servers found:**

- Verify your media server is running
- Ensure both devices are on the same network
- Try manual entry instead

**Connection fails:**

- Verify the server URL is correct
- Check firewall settings on your server
- Ensure the port is accessible
