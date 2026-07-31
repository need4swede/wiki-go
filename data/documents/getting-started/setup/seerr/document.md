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

Neptune tries to find Seerr automatically based on your media server address.
Automatic session reuse currently applies only to Jellyfin when the active
runtime explicitly allows it:

- **IP addresses:** Checks the same IP on port 5055 (e.g., `192.168.1.100:5055`)
- **Domains:** Checks common subdomains like `seerr.yourdomain.com` and `requests.yourdomain.com`

If detected while you are connected to Jellyfin, Neptune may try to reuse the
separately supported Jellyfin credential path. If it cannot, you can sign in
explicitly.

With an Emby connection, Neptune never silently sends your Emby token or reuses
its media-server session. It first reads Seerr's public settings and offers
**Emby account** only when that Seerr server advertises Emby as its configured
media-server login. You then enter credentials explicitly.

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

Neptune supports multiple ways to sign in to Seerr:

- **Jellyfin account.** Available when Seerr is connected to Jellyfin. If your Jellyfin session can be reused, no password is needed.
- **Emby account.** Available only when Seerr advertises Emby media-server
  login and Neptune's active backend is Emby. Credentials are entered
  explicitly.
- **Plex account.** Sign in with a plex.tv link code.
- **Local Seerr account.** Username and password created in Seerr itself.

Your session is saved for future use, so you only need to sign in once. If it ever expires, Neptune re-authenticates automatically where it can.

Neptune saves the provider with the Seerr session. A session created through
Emby is not restored after switching the active media backend to Jellyfin or
Plex.

## Active and Saved Addresses

The **Active Seerr URL** is the server Neptune connects the profile to. Saved
Seerr URLs are an ordered list for manual switching. Adding an address to the
saved list does not select it or replace the active connection.

In settings and MDM data, these are deliberately separate:
`seerrServerURL` is active, while `seerrURLs` contains saved addresses. Older
Neptune MDM data may call the saved list `jellyseerrURLs`; that compatibility
name is not normally the active endpoint. One older-plugin migration is
supported for new users: if MDM 1.2.6.101 Server Defaults have no active field
and contain exactly one valid saved address, Neptune selects that address.
With multiple saved addresses, Neptune leaves the active address unset so you
can choose explicitly.

Neptune applies a new Jellyfin user's Server Defaults before its first
automatic Seerr sign-in. This works for password and Quick Connect sign-in and
does not require Settings Sync to be enabled.

## Skipping Setup

Select **Skip for Now** if you don't have Seerr. You can configure it at any time via **Settings**, where you can also save multiple Seerr addresses and switch between them.
