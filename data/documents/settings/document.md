---
order: 90
---

# Settings

Access Settings via the gear icon at the left edge of the tab menu bar.



## In This Section

| Page | Description |
|------|-------------|
| [Home](/settings/home) | Home screen sections, navigation bar, spotlight, libraries |
| [Playback](/settings/playback) | Engine, controls, autoplay, audio, background continuation, advanced |
| [Subtitle Style](/settings/subtitles) | Subtitle appearance |
| [Plugins](/settings/plugins) | Plugin status and management |
| [Deep Learning](/settings/deep-learning) | AI features and language model providers |
| [Images](/settings/images) | Image cache and downloads |
| [Metadata](/settings/metadata) | Metadata cache and TMDB data |
| [Backup & Restore](/settings/backup) | Sync preferences across devices |
| [Administration](/settings/administration) | User management and parental controls (admins) |
| [iOS Widgets](/ios/widgets) | Home Screen and Lock Screen Pages, Sections, and Pins |
| [iPhone Live Activity](/ios/live-activity) | Compass in Dynamic Island and on the Lock Screen |
| [iOS Playback Outside the App](/ios/playback) | Picture in Picture, background audio, and system controls |



## How Settings Is Organized

The Settings screen groups everything by scope:

**Profiles.** Avatar cards for switching users, plus **User Preferences**: your personal appearance, [Conductor](/playback/conductor), subtitle style, sounds, and backup settings. On iPhone, this also contains separate **Live Activity**, **Widgets**, and **Compass** destinations; iPad shows **Widgets** but not the iPhone-only Compass surfaces. Admins also get an **Administration** entry here.

**Neptune.** The [Neptune Pro](/neptune-pro) status and upgrade row, followed
by app behavior: Home, Playback, Plugins, Deep Learning, Images, Metadata. On
iPhone and iPad, Playback also owns the independent Picture in Picture and
Background Playback toggles.

**Media Server.** Your backend connection: server info, **Change URL** for managing multiple addresses, and **Servers** for adding another server and switching between saved servers without signing in again. This section is labeled **Jellyfin** today and will reflect the connected backend as more are supported.

**Seerr.** Connection status, **Manage URLs**, **Seerr Preferences** (language filters and request quality), and disconnect.

**About.** Version and build info, connected services, **Get Help** (QR codes for the Discord, website, and support email), **Diagnostics**, and legal.

At the bottom: **Resync Library** clears cached content and reloads everything from your server, and **Reset Neptune** erases all app data.



## Per-Profile vs Per-Device

Nearly every preference in Neptune belongs to the signed-in profile, so each family member gets their own setup. Device-wide items (like the image cache) are shared. Backend-managed items (such as parental controls and streaming limits) live on the media server and apply everywhere that user signs in; exact capabilities vary by backend.
