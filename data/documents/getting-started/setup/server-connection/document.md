---
order: 10
---

# Server Connection

Connect Neptune to your Jellyfin server.

---

## Auto-Discovery

Neptune automatically scans your local network for Jellyfin servers.

**How it works:**

1. Select **Search for Servers**
2. Discovered servers appear as cards
3. Select your server to connect

**Requirements:**

- Apple TV and server on the same network
- Network discovery enabled on Jellyfin (default)

---

## Manual Entry

For remote servers or when auto-discovery doesn't find yours:

1. Select **Manual Setup** or **Enter Manually**
2. Enter server address (e.g., `jellyfin.example.com` or `192.168.1.100:8096`)
3. Press **Connect**

**Tips:**

- No need for `http://` or `https://` - Neptune detects it automatically
- Local servers: use IP and port (e.g., `192.168.1.100:8096`)
- Remote servers: use your domain name

---

## Troubleshooting

**No servers found:**

- Verify your Jellyfin server is running
- Check both devices are on the same network
- Try manual entry instead

**Connection fails:**

- Verify the server URL is correct
- Check firewall settings on your server
- Ensure the port is accessible
