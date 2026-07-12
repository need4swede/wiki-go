---
order: 90
---

# Neptune Plugin Suite

The Neptune Plugin Suite is a set of optional Jellyfin server plugins that extend Neptune with features that need server-side support. The suite currently ships two plugins, **Indexers** and **MDM**, each handling a distinct part of the client-server relationship.

Both plugins are free, configure themselves, and need no API keys.



## In This Section

| Page | Description |
|------|-------------|
| [Indexers](/plugins/indexers) | Server-side indexing, richer search data, music metadata |
| [MDM](/plugins/mdm) | Settings sync, backup, announcements, and remote management |



## Overview

| Plugin | Purpose |
|--------|---------|
| **Neptune Indexers** | Builds library and search indexes on the server so clients don't have to, and enriches music video libraries with credits, artist info, and artwork |
| **Neptune MDM** | Syncs settings across devices, backs them up, and gives server admins remote management, announcements, and child accounts |



## Installation

If onboarding detects that the suite is not installed, Neptune offers a one-tap install step for admin accounts. You can also install it manually:

1. In Jellyfin Dashboard: **Plugins > Repositories > Add**
2. Paste this URL:

   ```
   https://plugins.neptuneplayer.com/manifest.json
   ```

3. Both plugins appear in the Catalog tab. Install them, restart your Jellyfin server, and Neptune detects them on the next sign-in.

The repository supports Jellyfin 10.10 and 10.11 and serves the correct build for your server version automatically.

Non-admin users can ask their server administrator to install the suite. The plugins appear in the Jellyfin Plugin Catalog after adding the repository.

**Tip:** If your server has music video libraries, run the **Build Music Index** task once after installing (Dashboard > Scheduled Tasks > Neptune). This backfills credits, artist info, and artwork for your existing items. See [Indexers](/plugins/indexers) for details.



## Updates

Both plugins update through Jellyfin's normal plugin update flow and always share the same version number. When an update appears for one, it appears for both.



## Detection

Neptune detects the suite automatically after sign-in using endpoint probes. Each plugin registers a lightweight ping route that Neptune checks to confirm the plugin is loaded and serving requests. Status appears in **Settings** > **[Plugins](/settings/plugins)** as one of:

- **Active.** Installed and reachable.
- **Restart needed.** Installed, waiting on a Jellyfin server restart.
- **Disabled.** Installed but turned off in Jellyfin.
- **Not installed.** Missing from the server.



## Third-Party Plugins

Neptune also supports several third-party Jellyfin plugins. These are community-maintained and detected separately from the Neptune Plugin Suite.

See [Plugin Discovery](/getting-started/setup/plugins) for the full list of compatible third-party plugins and how detection works.
