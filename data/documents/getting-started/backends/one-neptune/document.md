---
order: 10
---

# One Neptune

One Neptune is Neptune's promise that changing media servers does not change
the app around your media.

Jellyfin, Emby, Plex, and future supported servers use the same Neptune Home,
Movies, Shows, Library, Search, item-detail, player, navigation, onboarding,
and Settings experience. Your available content can differ by server, and an
individual server feature can be unavailable, but Neptune does not replace its
normal pages with a generic or reduced provider interface.

## What can differ

A media backend can require its own:

- discovery and server-address rules;
- sign-in methods;
- network requests and data conversion;
- stream negotiation and playback reporting;
- server-side capabilities, subscriptions, or optional companion software.

For example, Jellyfin can use the optional Neptune Plugin Suite, while Emby
does not currently offer Neptune's plugin-backed Settings Sync, Server
Defaults, MDM, or administration features. Those rows are hidden or explained
individually. They do not change Home, Library, Search, details, playback, or
navigation.

Seerr is configured independently, so Discover follows the connected Seerr
service rather than the selected media backend.

## What stays the same

The same Neptune pages own:

- Home's Spotlight carousel, section ordering, cards, Continue Watching, Next
  Up, recent items, favorites, collections, and libraries;
- Movies and Shows filtering;
- the Library landing page, full-library grid, ordering, and navigation;
- Search input, recent searches, empty states, scopes, cards, and animations;
- item-detail layouts, artwork, metadata, actions, seasons, episodes, extras,
  and similar items when supplied by the server;
- Trident playback and Neptune's normal player controls;
- platform navigation, themes, focus or touch behavior, and Settings.

When a server cannot perform one operation, Neptune gates that control rather
than replacing the page.

Provider responses are normalized at the data boundary before they reach
Neptune's lists, focus system, or navigation. Repeated media rows keep the
first server-ordered value and remain isolated by backend, server, and account.
Credits are different: one person may legitimately appear more than once for
different roles, so each credit remains visible with its own presentation
identity.

Playable versions and tracks also remain separate choices even if a server
returns duplicate or missing source IDs or repeated stream indices. Neptune
uses its own occurrence identity for the picker without changing the raw value
the server needs when playback starts.

Home keeps an account-qualified local snapshot so returning to Neptune can
paint validated rails and libraries immediately while stale data refreshes in
place. Playback servers can negotiate different URLs and headers, including a
replacement sequential stream for seek, quality, or track changes, while the
visible Neptune player and controls stay the same.

Backend support must preserve Neptune's existing stability as well as its
appearance. Async results are accepted only while their backend generation,
page, filter, season, and playback operation are still current. Adding a
backend must not make an older request overwrite a newer screen or weaken the
established Jellyfin launch, focus, navigation, or playback lifecycle.

## Onboarding

Each backend can have its own logo, authentication, and starting theme. After
login, everyone continues through Neptune's universal setup steps. A
Jellyfin-only companion installation step is skipped for Emby, but Trident,
Seerr, preferences, information, and the welcome showcase remain.

Completion is remembered separately for each backend. Completing Jellyfin
setup does not skip a user's first Emby or future Plex tour, and a completed
backend tour is not repeated every time that user returns.

## Future backends

Plex will use these same pages when its runtime is ready. A logo, login flow,
or generic catalog is not considered backend support by itself. Neptune only
advertises operations backed by tested provider capabilities, while preserving
one familiar application around them.

See [Supported Media Servers](/getting-started/backends) for the current
backend and capability status.
