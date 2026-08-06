---
order: 10
---

# Server Connection

To begin using Neptune, connect to a supported media server.
The server can be hosted locally on the same network or remotely on a different network.

## Auto-Discovery

Neptune automatically scans your local network for supported servers.

**Requirements:**

- Your client and media server have to be on the same network
- For Jellyfin, network discovery needs to be enabled in the server settings

## Manual Setup

For remote servers or when auto-discovery doesn't find your server:

1. Select **Manual Setup**
2. Enter the server address (for example, `media.example.com` or `192.168.1.100:8096`)
3. Press **Connect**

## Multiple Addresses

A server can have more than one saved address (for example, a local address for home and a domain for remote access). Manage them later under that backend's section in **Settings > Change URL**. For Jellyfin, that would be **Settings > Jellyfin > Change URL**.
You can add addresses, reorder them, and switch between them without signing in again.
