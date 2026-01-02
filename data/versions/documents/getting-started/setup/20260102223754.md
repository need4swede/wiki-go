---
order: 10
---

# Neptune Initial Setup

Neptune features a guided setup designed to make onboarding as easy as possible. During this process, you will connect to your Jellyfin server, sign in with your account, and optionally configure additional features like Jellyseerr integration.

---

## Connecting to Your Jellyfin Server

When you first launch Neptune, you'll be greeted with a welcome screen that introduces the app. After pressing **Continue**, Neptune will guide you through connecting to your Jellyfin server.

You have two options for connecting:

- **Search for Servers** - Neptune will automatically scan your local network for Jellyfin servers
- **Manual Setup** - Enter your server address manually

### Auto-Discovery

Neptune can automatically discover Jellyfin servers running on your local network. When you select **Search for Servers**, Neptune broadcasts a discovery request and displays any servers it finds.

**How it works:**

1. Neptune scans your local network for Jellyfin servers
2. Discovered servers appear as cards showing the server name and address
3. Select your server to connect

**Requirements:**

- Your Apple TV and Jellyfin server must be on the same local network
- Your Jellyfin server must have network discovery enabled (enabled by default)

**If no servers are found:**

- Ensure your Jellyfin server is running and accessible
- Verify both devices are connected to the same network
- Try the **Manual Setup** option instead

### Manual Server Entry

If auto-discovery doesn't find your server, or if your server is hosted remotely, you can enter the address manually.

**To connect manually:**

1. Select **Manual Setup** or **Enter Manually**
2. Enter your server address (e.g., `jellyfin.example.com` or `192.168.1.100:8096`)
3. Press **Connect**

**Tips:**

- You don't need to include `http://` or `https://` - Neptune will detect the correct protocol automatically
- For local servers, use the IP address and port (e.g., `192.168.1.100:8096`)
- For remote servers, use your domain name (e.g., `jellyfin.mydomain.com`)

---

## Signing In

Once connected to your server, you'll need to sign in with your Jellyfin account.

### Username and Password

The standard way to sign in:

1. Enter your Jellyfin username
2. Enter your password (leave blank if your account has no password)
3. Press **Sign In**

### Quick Connect

Quick Connect lets you sign in without typing your password on the TV. This is especially convenient when using the Apple TV remote.

**To use Quick Connect:**

1. Select **Quick Connect** on the sign-in screen
2. Neptune displays a 6-digit code
3. On another device (phone, tablet, or computer):
   - Open your Jellyfin web interface
   - Go to **Settings** > **Quick Connect**
   - Enter the code shown on your TV
   - Approve the connection request
4. Neptune automatically signs you in once approved

**Note:** Quick Connect must be enabled on your Jellyfin server. If you see an error, ask your server administrator to enable it in the server settings.

---

## Plugin Discovery

After signing in, Neptune automatically checks your Jellyfin server for supported plugins. These plugins unlock additional features within Neptune.

**Currently supported plugins:**

| Plugin | Feature |
|--------|---------|
| **Home Sections** | Shows upcoming movies and TV shows from your Radarr and Sonarr calendars in the "Coming Soon" row |
| **Theme Songs** | Plays ambient theme music when viewing TV series details |

**What happens during plugin discovery:**

1. Neptune scans your server for installed plugins
2. Detected plugins are displayed with a green "Detected" badge
3. Press **Continue** to proceed

**If no plugins are detected:**

That's perfectly fine! Neptune works great without any plugins. You can install plugins on your Jellyfin server at any time and Neptune will automatically detect them on your next sign-in.

**Managing plugins:**

All detected plugins can be enabled or disabled at any time in **Settings** > **Plugins**.

---

## Connecting to Jellyseerr (Optional)

After plugin discovery, Neptune offers to connect to Jellyseerr if available. Jellyseerr integration enables the **Discover** tab, where you can browse trending content and request new movies and TV shows.

### What is Jellyseerr?

Jellyseerr is a companion application for Jellyfin that lets you:

- Browse trending, popular, and upcoming movies and TV shows
- Request content to be added to your library
- Track the status of your requests

### Automatic Detection

Neptune will try to automatically detect your Jellyseerr server based on your Jellyfin server address:

- **For IP addresses:** Neptune checks for Jellyseerr on port 5055 (e.g., `192.168.1.100:5055`)
- **For domains:** Neptune checks for a `jellyseerr` subdomain (e.g., `jellyseerr.mydomain.com`)

If detected, you'll see **Login to Jellyseerr** as an option.

### Manual Setup

If Jellyseerr isn't auto-detected, you can set it up manually:

**For subdomain setups:**

1. When asked "Is Jellyseerr hosted as a subdomain?", select **Yes**
2. Enter just the subdomain name (e.g., `jellyseerr` for `jellyseerr.mydomain.com`)
3. Press **Connect**

**For custom URLs:**

1. Select **No, enter full URL**
2. Enter your complete Jellyseerr address
3. Press **Connect**

### Signing In to Jellyseerr

Neptune uses your Jellyfin credentials to authenticate with Jellyseerr:

1. Your Jellyfin username is pre-filled
2. Enter your Jellyfin password
3. Press **Sign In**

Your session is saved, so you won't need to sign in again.

### Skipping Jellyseerr

If you don't have Jellyseerr or prefer not to set it up now, select **Skip for Now**. You can always configure Jellyseerr later in **Settings**.

---

## Choosing Your Theme

The final step of setup lets you personalize Neptune's appearance by choosing a visual theme.

**Available themes:**

| Theme | Description |
|-------|-------------|
| **Ocean** | Deep blue underwater aesthetic with animated light rays and particles (default) |
| **Midnight** | Deep purples and dark blues |
| **Mint** | Fresh teal and purple tones |
| **Void** | True black for OLED displays - maximizes contrast and saves power |
| **Nordic** | Cool grays and icy blues |
| **Volcano** | Warm reds and oranges |

**To choose a theme:**

1. Navigate between themes using the Apple TV remote
2. The background updates in real-time as you browse
3. Select your preferred theme and press **Continue**

**Changing your theme later:**

Your theme can be changed at any time in **Settings** > **Appearance**.

---

## Setup Complete

After choosing your theme, setup is complete and you'll be taken to the Neptune home screen. From here, you can:

- Browse your media library
- Continue watching where you left off
- Discover new content (if Jellyseerr is configured)
- Access settings to customize your experience

Welcome to Neptune!
