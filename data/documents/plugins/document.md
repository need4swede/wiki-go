---
order: 110
---

# Neptune Plugin Suite

The Neptune Plugin Suite is the optional server extension for Jellyfin, Neptune's primary backend.
Each member handles a distinct part of the client-server relationship: **Indexers** builds shared indexes, **MDM** manages settings and devices, **Transcoder** controls download quality policy, and **Studio** provides server-backed UI customization—starting with Top Shelf artwork.

The app itself is backend-agnostic and does not require these plugins.
These plugins currently extend Jellyfin.

## In This Section

| Page | Description |
|------|-------------|
| [Indexers](/plugins/indexers) | Server-side indexing, richer search data, music metadata |
| [MDM](/plugins/mdm) | Settings sync, reusable Server Profiles, Server Defaults, announcements, and remote management |
| [Transcoder](/plugins/transcoder) | Server-managed download quality profiles and original-quality policy (coming soon) |
| [Studio](/plugins/studio) | Neptune UI and artwork customization |

## Overview

| Plugin | Purpose |
|--------|---------|
| **Neptune Indexers** | Builds library and search indexes on the server so clients don't have to, and enriches music video libraries with credits, artist info, and artwork |
| **Neptune MDM** | Syncs settings, publishes reusable Server Profiles, seeds Server Defaults, and gives admins remote management, announcements, and child accounts |
| **Neptune Transcoder** | Replaces Neptune's built-in download quality presets with a server-managed ladder and lets admins disable original-quality downloads |
| **Neptune Studio** | Provides a server-backed UI customization system for Neptune, including a visual editor and renderer for Top Shelf designs |

## Installation

If onboarding detects that the suite is not installed, Neptune offers a one-tap install step for admin accounts.
You can also install it manually:

1. In Jellyfin Dashboard: **Plugins > Repositories > Add**
2. Paste this URL:

   ```
   https://plugins.neptuneplayer.com/manifest.json
   ```

3. The currently published suite members appear in the Catalog tab.
   Install them, restart your Jellyfin server, and Neptune detects them on the next sign-in.

The repository supports Jellyfin 10.10, 10.11, and 12.0 and serves the correct build for your server version automatically.

Non-admin users can ask their server administrator to install the suite.
The plugins appear in the Jellyfin Plugin Catalog after adding the repository.

**Tip:** If your server has music video libraries, run the **Build Music Index** task once after installing (Dashboard > Scheduled Tasks > Neptune).
This backfills credits, artist info, and artwork for your existing items.
See [Indexers](/plugins/indexers) for details.

## Updates

Published suite members update through Jellyfin's normal plugin update flow and share the same version number.

That being said, the easiest way to update is through Neptune.
Navigate to **Settings > Plugins > Neptune Plugin Suite** and update the suite from there whenever a new version is released.

## Detection

Neptune detects the suite automatically after sign-in using endpoint probes.
Each plugin registers a lightweight ping route that Neptune checks to confirm the plugin is loaded and serving requests.
Status appears in **Settings** > **[Plugins](/settings/plugins)** as one of:

- **Active.**
  Installed and reachable.
- **Restart needed.**
  Installed, waiting on a Jellyfin server restart.
- **Disabled.**
  Installed but turned off in Jellyfin.
- **Not installed.**
  Missing from the server.

## Third-Party Plugins

Neptune also supports several third-party Jellyfin plugins.
These are community-maintained and detected separately from the Neptune Plugin Suite.

See [Plugin Discovery](/getting-started/setup/plugins) for the full list of compatible third-party plugins and how detection works.
