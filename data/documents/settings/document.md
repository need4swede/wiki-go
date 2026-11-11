---
order: 90
---

# Settings

On Apple TV, open Compass and select Settings.
On iPhone and iPad, tap the Settings gear in the bottom navigation pill.

In paths such as **Settings > Account > Appearance**, Account means the banner for your signed-in account.
Open that banner to reach its preferences, servers, Seerr connection, and sign-in controls.

## In This Section

| Page | Description |
|------|-------------|
| [Home](/settings/home) | Home sections, navigation, Spotlight, libraries, and loading screens |
| [Playback](/settings/playback) | Player, controls, autoplay, skipping, audio, and subtitles |
| [Subtitle Style](/settings/subtitles) | Subtitle appearance under Playback |
| [Plugins](/settings/plugins) | Compatible server extensions and plugin management |
| [Deep Learning](/settings/deep-learning) | AI features and language model providers |
| [Images](/settings/images) | Image cache and downloads |
| [Metadata](/settings/metadata) | Metadata cache and optional TMDB enrichment |
| [Backup & Restore](/settings/backup) | Sync account preferences across devices |
| [Device Overrides](/settings/device-overrides) | Keep individual settings different on one device |
| [Administration](/settings/administration) | Server user management and parental controls |
| [Diagnostics](/settings/diagnostics) | App information, connection tests, playback benchmarks, and support logs |
| [Widgets](/browsing/widgets) | Configure each widget through the system Edit Widget sheet |
| [Compass](/browsing/navigation/compass) | Saved shortcuts, rows or pages, and live content |
| [iPhone Live Activity](/browsing/navigation/compass/live-activity) | The first Compass page in Dynamic Island and on the Lock Screen |

## Accounts

The signed-in account is the banner at the top.
Select it to open its account page.
Other accounts appear beside or below it; one appears on its own, while several open an **Accounts** list.
Choose another account to switch, or use **Add Account** for another sign-in.
See [Accounts & Profiles](/personalization/profiles).

## Your Account Page

| Group | What It Contains |
|-------|------------------|
| **Preferences** | Appearance, Conductor and Compass where available, and backup or local customization |
| **Servers** | Your account's server connection, its addresses, and supported server administration |
| **Seerr** | Sign-in, requests, saved addresses, Seerr Preferences, and disconnect |
| **Sign-In & Security** | Account PIN, automatic sign-in, account picture, and the administrator passcode where available |
| **Sign Out** | Sign out of this account on the device |

Apple TV's Preferences include **Sounds** for menu sounds and theme songs.
iPhone and iPad have **Audio Preferences** and **Quality Preferences**; iPhone also has **Live Activity** and Compass.
Subtitle appearance is under **Settings > Playback > Subtitles**.

Where the backend supports Backup and Restore, that page contains Settings Profiles and Device Overrides.
Without it, local Settings Profiles and Device Overrides remain available from the account's preferences, subject to their usual access rules.

## App Settings

The main Settings page also holds the app's settings:

| Destination | What It Contains |
|-------------|------------------|
| **Home** | Libraries, navigation, Spotlight, sections, and loading screens |
| **Playback** | Player behavior, controls, audio, subtitles, and autoplay |
| **Downloads** | Offline storage and download management |
| **Deep Learning** | AI Search and language model providers |
| **Neptune MDM** | Native managed-settings administration, when authorized |
| **Data** (Apple TV) | Metadata and Images |
| **Language** | Neptune's display language |

On iPhone and iPad, Images and Metadata are separate entries, alongside Search and supported Plugins.
On Apple TV, Plugins lives on **Account > Servers > your server**, below Administration.
Available destinations depend on the device, server capabilities, and your access.
Neptune Pro, About, Get Help, Diagnostics, and reset actions keep their own places on the main page.

## Using Settings on Apple TV

Pages sit on glass panels over softly blurred artwork.
Home, Playback, and Appearance use a category rail on the left and controls on the right.
Resting on a category opens it; Select opens it immediately.
Right enters its controls and Left returns to the rail.

For an adjustable value, Select starts adjustment, Left/Right changes it, and Select or Back finishes.
Press Up from the top to open Compass, then Down to return to where you were.

Opening Settings through Compass remembers the page you came from.
Back at the Settings root returns there; Back inside Settings first closes the current page or editor.

## Servers and Seerr

Open **Settings > Account > Servers > your server** to manage the active media connection.
Where supported, the server page lists its home, Tailscale, and web addresses and provides server administration and plugin controls.
Use Add Account to sign in to another server.
See [Server Connection](/getting-started/setup/server-connection).

Open **Settings > Account > Seerr** for that account's independent discovery and request connection.
See [Seerr Setup](/getting-started/setup/seerr).

## Resetting Neptune

**Resync Library** clears cached content and reloads it from the server.
**Reset Neptune** clears app data.
On Apple TV, choose whether to reset this tvOS profile or erase Neptune for every profile.
See [Resetting Neptune on Apple TV](/personalization/profiles#resetting-neptune-on-apple-tv).

## Per-Profile vs Per-Device

Nearly every preference in Neptune belongs to the signed-in profile, so each family member gets their own setup.
With Settings Sync, those profile preferences normally follow the same user to every device.
Settings Profiles sync named configurations and the single optional automatic assignment for each supported device type.
The manually selected profile remains local.
While a named profile is active, ordinary eligible settings changes update that profile and sync to other devices using it.
Stopping a named profile returns to the normal synchronized preferences: the newest values already observed through Settings Sync, or the captured pre-profile local values when none were received.
It does not perform a new backup restore.
A Device Override keeps one eligible setting local to a particular server, user, and physical device without turning off the rest of sync.

For the same setting, a directly locked server value has highest priority, then an explicitly locked member of the active profile, an unseen one-time administrator push, an explicit Device Override, the active Settings Profile, and the ordinary synchronized value.
A profile's optional **Replace Device Overrides** policy removes only its matching overrides when activated; a user-initiated switch asks for confirmation.
Marking a profile Required does not change this value order.
There is no separate Reapply action.
A push suppresses only the conflicting member of the active profile until the profile changes again.

Persistent locks can target one user or a locked member of a live Server Profile.
Matching controls are read-only and marked **Managed by Your Server**, including when ordinary Settings Sync is off.
On Apple TV they remain focusable so Siri Remote navigation is not interrupted, but Select cannot change them.
Managed selectors display their locked value immediately, so dependent options such as Transcode-only playback settings appear without the user first touching the selector.
Removing the policy restores the user's personal setting or preserved Device Override underneath it.

Device-wide items such as the image cache are shared locally.
Backend-managed items such as parental controls and streaming limits live on the media server and apply everywhere that user signs in; exact capabilities vary by backend.
