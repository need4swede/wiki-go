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
| [Settings Profiles](/personalization/profile-presets) | Personal configurations and optional or Required Server Profiles |
| [Device Overrides](/settings/device-overrides) | Keep individual settings different on one device |
| [Administration](/settings/administration) | User management and parental controls (admins) |
| [iOS Widgets](/ios/widgets) | Home Screen and Lock Screen Pages, Sections, and Pins |
| [iPhone Live Activity](/ios/live-activity) | Compass in Dynamic Island and on the Lock Screen |
| [iOS Playback Outside the App](/ios/playback) | Picture in Picture, background audio, and system controls |



## How Settings Is Organized

The Settings screen groups everything by scope:

**Profiles.** Avatar cards for switching users, plus **User Preferences**: your
personal appearance, [Conductor](/playback/conductor), subtitle style, sounds,
and [Backup & Restore](/settings/backup). Backup & Restore contains both
[Settings Profiles](/personalization/profile-presets), for reusable synced
configurations, and [Device Overrides](/settings/device-overrides), which keep
one otherwise synchronized setting different on the current device. On iPhone, User
Preferences also contains separate **Live Activity**, **Widgets**, and
**Compass** destinations; iPad shows **Widgets** but not the iPhone-only
Compass surfaces. Admins also get an **Administration** entry here.

**Neptune.** The [Neptune Pro](/neptune-pro) status and upgrade row, followed
by app behavior: Home, Playback, Plugins, Deep Learning, Images, Metadata. On
iPhone and iPad, Playback also owns the independent Picture in Picture and
Background Playback toggles.

**Media Server.** Your backend connection: server info, **Change URL** for
managing multiple addresses, and **Servers** for adding another server and
switching between saved servers without signing in again. This section uses
the active backend's name and exposes only the connection operations that
backend supports.

**Seerr.** Connection status, **Manage URLs**, **Seerr Preferences** (language filters and request quality), and disconnect.

**About.** Version and build info, connected services, **Get Help** (QR codes for the Discord, website, and support email), **Diagnostics**, and legal.

At the bottom: **Resync Library** clears cached content and reloads everything from your server, and **Reset Neptune** erases all app data.



## Per-Profile vs Per-Device

Nearly every preference in Neptune belongs to the signed-in profile, so each
family member gets their own setup. With Settings Sync, those profile
preferences normally follow the same user to every device. Settings Profiles
sync named configurations and the single optional automatic assignment for
each supported device type. The manually selected profile remains local. While a named profile is
active, ordinary eligible settings changes update that profile and sync to
other devices using it. Stopping a named profile returns to the normal
synchronized preferences: the newest values already observed through Settings
Sync, or the captured pre-profile local values when none were received. It does
not perform a new backup restore. A Device Override keeps one
eligible setting local to a particular server, user, and physical device
without turning off the rest of sync.

For the same setting, a directly locked server value has highest priority,
then an explicitly locked member of the active profile, an unseen one-time
administrator push, an explicit Device Override, the active Settings Profile,
and the ordinary synchronized value. A profile's optional **Replace Device
Overrides** policy removes only its matching overrides when activated; a
user-initiated switch asks for confirmation. Marking a profile Required does
not change this value order. There is no separate Reapply action. A push
suppresses only the conflicting member of the active profile until the profile
changes again.

Persistent locks can target one user or a locked member of a live Server
Profile. Matching controls are read-only and marked **Managed by Your
Server**, including when ordinary Settings Sync is off. On Apple TV they remain
focusable so Siri Remote navigation is not interrupted, but Select cannot
change them. Managed selectors display their locked value immediately, so
dependent options—such as Transcode-only playback settings—appear without the
user first touching the selector. Removing the policy restores the user's
personal setting or preserved Device Override underneath it.

Device-wide items such as the image cache are shared locally. Backend-managed
items such as parental controls and streaming limits live on the media server
and apply everywhere that user signs in; exact capabilities vary by backend.
