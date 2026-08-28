---
order: 100
---

# Neptune Pro

Pro expands Neptune with intelligence built specifically for the app, richer connected metadata, adaptive playback preferences, cinematic launches, offline media, and deeper Apple-platform integrations, including named Settings Profiles.

## What Pro Includes

| Feature | What Pro Adds |
|---------|---------------|
| [Conductor Pro](/neptune-pro/conductor-pro) | Auto mode learns playback choices, and Language Rules react to live audio changes in Manual or Auto |
| [Neptune AI](/neptune-pro/neptune-ai) | Neptune's bespoke, first-party hosted intelligence provider |
| [TMDB Integration](/neptune-pro/tmdb-integration) | Richer artwork, trailers, credits, release dates, people, studios, and networks |
| [Downloads](/neptune-pro/downloads) | Original-quality or space-saving offline movies and episodes |
| [Top Shelf Customization](/neptune-pro/top-shelf-customization) | Cinematic presentation, Studio designs, section ordering, and direct Play actions on Apple TV |
| [Cinematic Loading Screens](/neptune-pro/loading-screens) | Cached library posters and backdrops with a configurable artwork source |
| [Pin Widgets](/browsing/widgets#pin-widgets-neptune-pro) | Put a native Pin on the iPhone or iPad Home Screen or Lock Screen, with direct Play for movie and episode Pins |
| [Section Widgets](/browsing/widgets#section-widgets-neptune-pro) | Rotate current media from 16 supported Home and Discover sections in a widget |
| [Settings Profiles](/personalization/profile-presets) | Build and manage personal named settings environments, select one manually, or assign one automatically per device type |
| [Native MDM Administration](/plugins/mdm#where-to-manage-it) | Operate the complete Neptune MDM admin suite directly from supported Neptune clients |

## Free and Pro

| Feature | Free | Neptune Pro |
|------------|------|-------------|
| **Playback** | Every supported codec, format, HDR profile, and subtitle type, plus iOS [Picture in Picture and Background Playback](/playback/outside-the-app) | The same complete playback engine |
| **Conductor** | Manual rules automatically select tracks and versions at playback start | Adds live Language Rule reactions in Manual or Auto; Auto also adapts and learns over time |
| **AI / LLM** | Use third-party provider with your own compute or API key | Use the integrated, official first-party Neptune AI service |
| **Metadata** | Everything supplied by your media backend | Commercial API access across detail, people, home surfaces and more |
| **Offline** | Requires a network connection to your media backend | Download and play media without a network connection |
| **Top Shelf** | Core Top Shelf presentation and content controls | Cinematic mode, Studio artwork, ordering, item limits, rich details, and Play actions |
| **Loading screen** | Neptune logo, progress, and optional launch hints on a black background | Adds cached library artwork from Spotlight, Continue, Favorites, Recently Added, or Random |
| **iOS Widgets** | Every size can open a standard Neptune Page; native Pins and in-app Home and Discover sections remain available | Adds native Pin Widgets and dynamic Section Widgets to the per-widget picker |
| **Device personalization** | Device Overrides keep individual settings local to one physical device; Free recipients can consume an explicitly Required Server Profile | Settings Profiles add personal named environments, device-local selection, in-place editing, and automatic assignments by device type |
| **Neptune MDM administration** | Use the complete Jellyfin plugin dashboard; clients receive direct managed settings, locks, and Required profiles without recipient Pro | Adds the native administrator console inside Neptune; Jellyfin admin authorization is still required |

## Plans and Devices

Neptune Pro is available as monthly and yearly subscriptions or a Lifetime purchase.
Current prices and any trial eligibility appear in Neptune's purchase screen and are handled by the App Store.

The purchase is universal across supported Neptune clients.
Buy once with the same App Store account and restore it on any supported Apple device.
Lifetime also includes access to the [Pilot program](/getting-started/installation#passengers--pilots) for preview builds of released platforms.

The **Neptune Pro** row in Settings shows the active tier.
Free users can open the purchase screen and restore purchases; monthly and yearly subscribers can open the Lifetime upgrade path.

## If You Downgrade From Pro

Neptune checks Pro access live without deleting your preferences:

- Conductor returns to Manual mode and stops applying Language Rules after live audio changes.
  Startup rules remain active, while the learned profile stays dormant and returns after reactivation.
- Neptune AI becomes unavailable, while configured bring-your-own providers remain intact.
- TMDB-only enrichment is hidden; backend-native metadata continues normally and cached enrichment is retained for later reactivation.
- Downloads and their management surfaces become unavailable.
  Existing files and progress remain on the device.
- Top Shelf falls back to its Free presentation and limits while keeping saved Pro choices for later.
- The loading screen returns to its Free black presentation and clears its launch artwork reserve.
  The artwork toggle and selected source remain saved for restoration.
- Standard iOS Page widgets continue working.
  Configured Pin and Section widgets retain their selections but show the matching locked state; restoring Pro republishes their current content without deleting the native Pin or in-app Home or Discover section.
- Personal and ordinarily assigned Settings Profiles stop applying immediately, while definitions, automatic assignments, and the device-local selection remain stored.
  Device Overrides keep working, and an explicitly Required Server Profile remains active.
  Its unlocked settings remain customizable; only explicitly locked members remain read-only.
  Restoring Pro automatically reconciles the retained personal profile underneath any active requirement.
- The native Neptune MDM console closes or locks and blocks further client-side admin actions.
  Server data, delivered policies, Settings Sync, and the Free Jellyfin plugin dashboard are unchanged.
  Use **Restore Purchases** if an active subscription or Lifetime purchase is not recognized on a device.
