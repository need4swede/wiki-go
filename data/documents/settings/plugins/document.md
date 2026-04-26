---
order: 20
---

# Plugin Settings

## Detected Plugins

Neptune shows compatible plugins from your server:

| Plugin | Feature |
|--------|---------|
| **Neptune** | Companion plugin - cloud sync, library indexing, search index sync |
| **Home Sections** | Coming Soon and Because You Watched recommendations |
| **Theme Songs** | Ambient music on movie, collections, and series pages |
| **Intro Skipper** | Skip intros, credits, and recaps |



## Neptune Companion

The Neptune plugin runs on your Jellyfin server and powers features that need server-side help. Status appears in Settings as one of:

- **Active** - installed and reachable
- **Restart needed** - installed, waiting on a Jellyfin server restart
- **Disabled** - installed but turned off in Jellyfin
- **Not installed** - missing from the server

When the plugin is active, [Backup & Sync](/settings/backup) becomes available, and Neptune uses the server-side search and library indexes for faster startup.

See [Plugin Discovery](/getting-started/setup/plugins) for installation details.



## Home Sections

When enabled, adds two sections to your home screen:

- **Coming Soon** - Upcoming content from your \*arr stack calendars
- **Because You Watched** - Personalized suggestions based on your viewing history



## Theme Songs

When enabled, plays ambient theme music on movie, series, and collection pages.

**Settings:**

| Setting | Description |
|---------|-------------|
| **Enable** | Master toggle for theme song playback |
| **Volume** | Output level on a 1-10 scale |
| **Loop** | Repeat the theme while you stay on the page |
| **Fade** | Fade theme songs in and out smoothly when entering or leaving a page |

Theme songs stop automatically when you start playback or leave the page.



## Intro Skipper

When detected, shows skip buttons during playback for intros, credits, and recaps.

**Settings:**

- **Enable Intro Skipper** - Master toggle for the feature
- **Auto Skip** - When enabled, automatically skips detected segments without needing to press a button

When Auto Skip is off, a Skip button appears on screen during detected segments and you press it manually to jump ahead.
