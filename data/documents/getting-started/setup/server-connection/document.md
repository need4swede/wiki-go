---
order: 10
---

# Server Connection

To begin using Neptune, connect to a supported media server.
The server can be hosted locally on the same network or remotely on a different network.
Start by choosing your backend.
Jellyfin, Emby, and Silo connect to a server before sign-in; Plex starts with your Plex account.

## Auto-Discovery

For Jellyfin and Emby, Neptune scans the local network for servers.
Silo uses local network discovery too.
Choose a discovered server to continue to sign-in.

**Requirements:**

- Your client and media server have to be on the same network
- For Jellyfin, network discovery needs to be enabled in the server settings

## Manual Setup

For Jellyfin, Emby, and Silo, use manual setup when the server is remote or discovery does not find it:

1. Select **Manual Setup**
2. Enter the server address (for example, `media.example.com` or `192.168.1.100:8096`)
3. Press **Connect**

For Silo, enter the main server address, not its Jellyfin-compatible address.

## Plex Servers

Choose Plex and complete the on-screen account sign-in.
Then choose a Plex Home user if prompted and select an owned or shared server.
Neptune gets the connection addresses from Plex rather than local discovery or manual URL entry.
See [Authentication](/getting-started/setup/authentication#plex).

## Multiple Addresses

Where the backend supports managing addresses, open **Settings > Account > Servers > your server**.
Keep the server's home-network, Tailscale, and web addresses together in that list.

Neptune checks that an address belongs to the same server before using it.
It can switch automatically when the network changes or the current address stops responding, then return to a preferred address when it's available again.
Automatic switching waits during playback.

Open an address for its connection, edit, reorder, and delete options.
Available connection controls depend on the backend.
To use a different server, choose **Add Account** and sign in there.
