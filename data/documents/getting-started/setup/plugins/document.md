---
order: 30
---

# Plugin Discovery

## Supported Plugins

| Plugin | Feature |
|--------|---------|
| **Neptune** | Companion plugin: faster startup, cloud sync of settings across devices, server-side search index |
| **Home Sections** | Shows upcoming content and provides 'Because You Watched' recommendations |
| **Theme Songs** | Downloads theme music for TV series that play on their respective pages |
| **Intro Skipper** | Skip intros, credits, and recaps during playback |

## Detection Process

After signing in, Neptune will scan your server for a list of compatible plugins. When a plugin is detected, it will automatically be enabled in Neptune.

![plugin-detection.png](plugin-detection.png)



## The Neptune Companion Plugin

Neptune ships an optional Jellyfin server plugin that unlocks features which need server-side help. **It's not required** - everything in Neptune works without it. The plugin just speeds things up and adds cross-device features.

### What it Adds

| Feature | What it does |
|---------|--------------|
| **Backup & Sync** | Cloud sync for your settings across every device on the same account |
| **Library Index Sync** | Server-side library indexing pushed to clients - faster Library tab and Browse views |
| **Search Index Sync** | Server-side pre-computation of the search index - new devices import in seconds instead of running the full local sync |

### Installing It

If onboarding detects you don't have it, Neptune offers a one-tap install step. You can also install it manually:

1. In Jellyfin Dashboard: **Plugins > Repositories > Add**
2. Paste this URL:

   ```
   https://raw.githubusercontent.com/need4swede/neptune-jellyfin/main/manifest.json
   ```

3. The Neptune plugin appears in the Catalog tab. Install it, restart your Jellyfin server, and Neptune detects it on the next sign-in.

The plugin is open source and lives at [need4swede/neptune-jellyfin](https://github.com/need4swede/neptune-jellyfin).



## No Plugins?

Neptune works great without plugins. You can install them later on your Jellyfin server - Neptune detects them automatically on your next session.



## Managing Plugins

You can manage installed plugins from **Settings** > **[Plugins](/settings/plugins)**. Here you can toggle them on or off and adjust various plugin specific options.
