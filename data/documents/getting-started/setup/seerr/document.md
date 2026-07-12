---
order: 40
---

# Seerr Setup

## What is Seerr?

Seerr lets you:

- Browse trending and popular content
- Request movies and TV shows
- Track request status

You can read more about it on <a href="https://seerr.dev/" target="_blank">seerr.dev</a>

## Automatic Detection

Neptune tries to find Seerr automatically based on your Jellyfin server address:

- **IP addresses:** Checks the same IP on port 5055 (e.g., `192.168.1.100:5055`)
- **Domains:** Checks common subdomains like `seerr.yourdomain.com` and `requests.yourdomain.com`

If detected, Neptune will try to sign in via your Jellyfin credentials automatically. If it's unable to, you can always **sign in to Seerr** using your own authentication method.

## Manual Setup

**Subdomain setup:**

1. Select **Yes** when asked about subdomain hosting
2. Enter the subdomain name (e.g., `seerr`)
3. Press **Connect**

**Custom URL:**

1. Select **No, enter full URL**
2. Enter your complete Seerr address
3. Press **Connect**

## Signing In

![seerr.png](seerr.png)

Neptune supports multiple ways to sign in to Seerr:

- **Jellyfin account.** The usual choice. If your Jellyfin session can be reused, no password is needed.
- **Plex account.** Sign in with a plex.tv link code.
- **Local Seerr account.** Username and password created in Seerr itself.

Your session is saved for future use, so you only need to sign in once. If it ever expires, Neptune re-authenticates automatically where it can.

## Skipping Setup

Select **Skip for Now** if you don't have Seerr. You can configure it at any time via **Settings**, where you can also save multiple Seerr addresses and switch between them.
