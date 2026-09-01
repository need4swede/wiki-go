# Neptune

A native media client for Apple TV, iPhone, iPad, and Mac.
Neptune's architecture and experience are backend-agnostic, designed to stay familiar as support expands across media-server platforms.

## Supported Backends

Neptune is designed for Jellyfin, Emby, Plex, and additional media-server backends.
See [Supported Media Servers](/getting-started/backends) for current availability.

## Quick Start

1. [Installation](/getting-started/installation): Get Neptune on your devices
2. [Setup](/getting-started/setup): Connect to your media server
3. [Navigation](/browsing/navigation): Learn the basics
4. [Home Screen](/browsing/home-screen): Start browsing

## Documentation

### Getting Started

| Page | Description |
|------|-------------|
| [Installation](/getting-started/installation) | App Store, betas, and requirements |
| [Setup](/getting-started/setup) | Server connection, sign-in, plugins, Seerr |
| [Supported Media Servers](/getting-started/backends) | Available backends and capability differences |
| [One Neptune](/getting-started/backends/one-neptune) | One familiar page and navigation system across every backend |
| [Devices](/getting-started/devices) | Neptune on Apple TV, iPhone, iPad, and Mac |

### Browsing

| Page | Description |
|------|-------------|
| [Navigation](/browsing/navigation) | Tab bar, Compass, remote controls |
| [Widgets](/browsing/widgets) | Per-widget Pages, dynamic Sections, and native Pins |
| [Home Screen](/browsing/home-screen) | Hero spotlight, content rows, customization |
| [Item Details](/browsing/item-details) | Movies, TV shows, extras, people |
| [Collections](/browsing/collections) | Box sets and franchises |

### Library

| Page | Description |
|------|-------------|
| [Library](/library) | Full library browsing with filters and stats |
| [Pins](/library/shortcuts) | Pin items, people, genres, and timestamps |
| [Smart Tags](/library/smart-tags) | Browse by theme and mood |

### Search

| Page | Description |
|------|-------------|
| [Search](/search) | How Neptune search works |
| [Local Index](/search/local-index) | Offline instant search |
| [Semantic Search](/search/semantic-search) | Themes, moods, and quotes |
| [AI Search](/search/prompt-search) | Language model powered queries |

### Neptune AI

| Page | Description |
|------|-------------|
| [Neptune AI](/neptune-ai) | Neptune's product-wide hosted intelligence layer for Pro |
| [Episode Finder](/neptune-ai/episode-finder) | Find an episode by describing what happens |
| [Title Insights](/neptune-ai/title-insights) | Context, themes, trivia, and watch guidance |
| [Person Insights](/neptune-ai/person-insights) | Career stories and library-aware recommendations |

### Discover

| Page | Description |
|------|-------------|
| [Discover](/discover) | Browse trending content (Seerr) |
| [Browsing Discover](/discover/browsing) | Genres, eras, studios, networks, languages, anime |
| [Release Calendar](/discover/release-calendar) | Upcoming movies and TV grouped by date |
| [Themed Collections](/discover/themed-collections) | Custom keyword-driven discovery rows |
| [Requests](/discover/requests) | Request, track, and approve content |

### Playback

| Page | Description |
|------|-------------|
| [Trident Player](/playback/trident-player) | Custom video engine |
| [Player Controls](/playback/player-controls) | Scrubbing, skip segments, Up Next |
| [Playback Menu](/playback/playback-menu) | In-player audio, subtitles, video, chapters, and info |
| [Conductor](/playback/conductor) | Track and version selection, with optional Pro learning |
| [Picture in Picture & Background Playback](/playback/outside-the-app) | Continue video or audio outside Neptune on iPhone and iPad |

### Personalization

| Page | Description |
|------|-------------|
| [Profiles](/personalization/profiles) | Multi-user support |
| [Settings Profiles](/personalization/profile-presets) | Personal and server-published settings environments with device-type selection |
| [Themes](/personalization/themes) | Nine built-in themes |
| [Item Detail Layouts](/personalization/item-detail-layouts) | Detailed, Immersive, or Minimal |
| [Cards & Backdrops](/personalization/cards-and-backdrops) | Card styles and artwork behavior |

### Settings

| Page | Description |
|------|-------------|
| [Settings](/settings) | Every configuration screen, explained |
| [Settings Profiles](/personalization/profile-presets) | Named personal or server-published profiles with device-type assignments |
| [Device Overrides](/settings/device-overrides) | Keep one synchronized setting different on one device |

### Neptune Pro

| Page | Description |
|------|-------------|
| [Neptune Pro](/neptune-pro) | Plans, feature comparison, and purchase behavior |
| [Conductor Pro](/neptune-pro/conductor-pro) | Playback preferences that learn as you watch |
| [Neptune AI](/neptune-pro/neptune-ai) | Bespoke first-party intelligence with no setup |
| [TMDB Integration](/neptune-pro/tmdb) | Richer metadata, people, trailers, studios, and release dates |
| [Downloads](/neptune-pro/downloads) | Original or space-saving offline media |
| [Top Shelf Customization](/neptune-pro/top-shelf) | Cinematic Apple TV Home Screen presentation |
| [Cinematic Loading Screens](/neptune-pro/loading-screens) | Cached library artwork during launch on Apple TV, iPhone, and iPad |
| [Pin Widgets](/browsing/widgets#pin-widgets-neptune-pro) | Put native Pins on the iPhone or iPad Home Screen and Lock Screen |
| [Section Widgets](/browsing/widgets#section-widgets-neptune-pro) | Rotate current media from supported Home and Discover sections in iOS widgets |

### Backend Extensions

| Page | Description |
|------|-------------|
| [Neptune Plugin Suite](/plugins) | Optional Jellyfin extensions: Indexers, MDM, Transcoder, and Studio |
| [Indexers](/plugins/indexers) | Server-side indexing and music metadata |
| [MDM](/plugins/mdm) | Settings sync, live Server Profiles, Server Defaults, announcements, remote management |
| [Transcoder](/plugins/transcoder) | Server-managed download quality profiles |
| [Studio](/plugins/studio) | UI customization, beginning with Top Shelf design |

## Key Features

- **Trident Player**: Direct plays nearly everything (MKV, TrueHD, DTS-HD MA, ASS subtitles) with HDR10+, Dolby Vision, and on-the-fly conversion for compatible Blu-ray Profile 7 files
- **Conductor**: Picks the right audio track, subtitles, and version automatically based on your preferences
- **Hero Spotlight**: Full-bleed carousel showcasing what to watch next
- **Search that understands**: Instant offline search, semantic theme matching, and local-first AI for hard queries
- **Neptune AI**: Zero-setup Pro intelligence across Neptune, currently powering natural-language search, Episode Finder, and title and person insights
- **Seerr Integration**: Browse, request, and approve content without leaving the couch
- **Pins**: Pin movies, shows, people, genres, or even specific moments during playback, then use the same bookmarks across devices
- **iOS Widgets**: Put a Neptune Page, dynamic Section, or native Pin on the iPhone or iPad Home Screen and Lock Screen
- **Compass Live Activity**: Reach one to eight configurable shortcuts from Dynamic Island, the iPhone Lock Screen, or Neptune's in-app palette
- **Picture in Picture & Background Playback**: Keep video floating over other apps or continue audio with Lock Screen and Control Center controls
- **Cloud Backup & Sync**: Preferences, preset definitions, and device-type assignments follow you across devices, with Device Overrides for settings that should stay different on one physical device
- **Themes**: Nine built-in themes with Adaptive and Dynamic modes
- **Family Ready**: Per-profile everything, child accounts, and PIN-protected admin tools

## Requirements

| Device | Minimum |
|--------|---------|
| **Apple TV** | Apple TV 4K (2nd generation or later), tvOS 18.5+ |
| **iPhone / iPad** | iOS or iPadOS 16+ |
| **Mac** | TBD |
| **Media server** | Jellyfin 10.10 or later (currently supported) |

Optional, on any device:

- Seerr for content discovery and requests
- [Neptune Plugin Suite](/plugins) for Jellyfin sync, faster search, admin tools, and server-managed download quality profiles
- A language model for AI features
