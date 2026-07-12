---
order: 30
---

# Plugin Discovery

Server plugins are backend-specific. The integrations on this page are for Jellyfin. Neptune itself works without them, and plugin support for future backends will be documented separately.

## Compatible Plugins

### Neptune Plugin Suite

| Plugin | Feature |
|--------|---------|
| **[Neptune Indexers](/plugins/indexers)** | Server-side library and search indexing |
| **[Neptune MDM](/plugins/mdm)** | Settings sync, backup, and remote management |
| **[Neptune Transcoder](/plugins/transcoder)** | Server-managed download quality profiles (coming soon) |

See [Neptune Plugin Suite](/plugins) for full details on what each plugin does and how to install them.

## One-Tap Install

If you sign in with an admin account and the Neptune Plugin Suite isn't installed, onboarding offers to install it for you. One tap adds the repository, installs every currently published suite member, and walks you through the server restart. Transcoder will join that same install flow when its public rollout begins.

### Third-Party Plugins

| Plugin | Feature |
|--------|---------|
| **Home Screen Sections** | Shows upcoming movies and TV shows from your Radarr and Sonarr calendars |

Theme songs (music that plays on TV series pages) are a built-in Neptune feature and need no plugin. Control them in **Settings** under **Sounds**.

Intro skipping is also a native feature. Media segments (the markers for when an intro/outro occurs) are needed for Neptune to perform these actions - but the ability to skip an intro does not require a plugin in itself.

## No Plugins?

Neptune works without any server plugins. Jellyfin users can install them later, and Neptune picks them up on the next session.

## Managing Plugins

You can manage installed plugins from **Settings** > **[Plugins](/settings/plugins)**. Here you can toggle them on or off and adjust various plugin-specific options.
