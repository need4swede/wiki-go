# Settings

Access Settings by selecting the gear icon in the tab menu bar or navigating to the Settings tab.



## Profiles

Manage user profiles for your Jellyfin server. See [Profiles](profiles.md) for detailed information.

- View all available profiles
- Switch between users
- Add new profiles



## Playback

Configure video playback behavior.

### Trident Player

Neptune's experimental custom video player for improved compatibility.

| Setting | Description |
|---------|-------------|
| **Enabled** | Use Trident for all playback |
| **Disabled** | Use standard AVPlayer (default) |

**Note**: Trident is experimental. If you experience playback issues, disable this option.



## Plugins

Manage Jellyfin server plugins that enhance Neptune's functionality.

### Detected Plugins

Neptune automatically detects compatible plugins on your server:

| Plugin | Status | Feature |
|--------|--------|---------|
| **Home Sections** | Detected/Not Found | Coming Soon from Radarr/Sonarr |
| **Theme Songs** | Detected/Not Found | Ambient music on series pages |

### Plugin Settings

Select a detected plugin to configure its settings:

**Theme Songs:**
- Enable/disable theme song playback
- Adjust volume level



## Deep Learning (Experimental)

Configure AI-powered features using local or cloud language models.

### Language Models

Enable natural language features like prompt-based search.

| Setting | Description |
|---------|-------------|
| **Enable Language Models** | Turn AI features on/off |
| **Primary Provider** | Choose which LLM to use |

### Supported Providers

- **OpenAI**: GPT models via API
- **Anthropic**: Claude models via API
- **Ollama**: Local models (self-hosted)
- **LM Studio**: Local models via LM Studio

### Provider Setup

1. Select **Add Provider**
2. Choose provider type
3. Enter API key or endpoint URL
4. Test connection
5. Save configuration



## Search

Configure search behavior and the local search index.

### Local Search Index

The local FTS5 index enables instant, natural language search.

| Setting | Description |
|---------|-------------|
| **Enable Local Index** | Use instant local search |
| **Resync Index** | Rebuild the entire search index |

### Prompt Search (Experimental)

When language models are enabled:

| Setting | Description |
|---------|-------------|
| **Enable Prompt Search** | Use AI for natural language queries |



## Image Cache

Manage cached images to free up storage space.

| Action | Description |
|--------|-------------|
| **Clear Cache** | Remove all cached images |
| **Cache Size** | View current cache usage |



## Developer Tools

Advanced options for troubleshooting and debugging.

| Setting | Description |
|---------|-------------|
| **Debug Logging** | Enable verbose logging |
| **Show Technical Info** | Display debug overlays |



## Server

View information about your connected Jellyfin server.

| Info | Description |
|------|-------------|
| **Server Name** | Your server's display name |
| **Server URL** | Connection address |
| **Version** | Jellyfin server version |



## Jellyseerr

Manage your Jellyseerr connection for content discovery and requests.

### Connection Status

Shows whether Jellyseerr is connected and the server URL.

### Actions

| Action | Description |
|--------|-------------|
| **Reconnect** | Re-authenticate with Jellyseerr |
| **Disconnect** | Remove Jellyseerr connection |
| **Setup** | Configure Jellyseerr (if not connected) |



## About

View app information and access support resources.

### App Information

| Info | Description |
|------|-------------|
| **Version** | Neptune app version |
| **Build** | Build number |
| **tvOS** | Operating system version |
| **Jellyfin Server** | Connected server name and version |
| **Jellyseerr** | Jellyseerr server (if connected) |

### Support

| Action | Description |
|--------|-------------|
| **Get Help** | Access support resources and documentation |
| **Diagnostics** | View system diagnostics and logs |



## Subtitle Preferences

Customize subtitle appearance during playback. Access via **Settings** or during playback.

### Font Size

| Size | Description |
|------|-------------|
| **Small** | Compact, minimal screen coverage |
| **Medium** | Default balanced size |
| **Large** | Easier to read |
| **Extra Large** | Maximum readability |

### Text Color

Choose from: White, Yellow, Green, Cyan, Blue

### Background Style

| Style | Description |
|-------|-------------|
| **None** | Text only |
| **Shadow** | Drop shadow effect |
| **Outline** | Black text outline |
| **Box** | Semi-transparent background |

### Background Opacity

When using Box style, adjust opacity from 30% to 100%.



## Home Menu

Long-press any tab in the menu bar to access the Home Menu:

### Home Screen Customization

- **Reorder sections**: Drag sections to change their order
- **Show/Hide sections**: Toggle visibility of home screen sections
- **Edit mode**: Enter drag-and-drop editing

### Quick Settings

Shortcuts to common settings without leaving the current screen.
