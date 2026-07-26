---
order: 20
---

# Widgets on iPhone & iPad

Neptune provides one configurable widget for the iPhone and iPad Home Screen
and Lock Screen. Every widget instance independently opens a standard Neptune
Page, shows a dynamic Section, or uses one of your [native Pins](/ios/pins).

These conventional widgets are separate from the iPhone-only Compass
[Live Activity](/ios/live-activity).



## Supported Sizes

| Placement | Sizes | System Availability |
|-----------|-------|---------------------|
| **Lock Screen** | Inline, circular, rectangular | iOS 16 or later on iPhone; iPadOS 17 or later on iPad |
| **Home Screen** | Small, medium, large | iOS or iPadOS 16 or later |

You can add several Neptune widgets and configure each one differently. There
is no global widget type or one shared widget selection.

Widget placement, size, and per-instance selection belong to that iPhone or
iPad and do not sync as one Neptune preference. The underlying native Pins and
the current account content that Neptune publishes to the widget can still
follow the profile.



## Adding a Widget

### Home Screen

1. Touch and hold the Home Screen.
2. Tap **Edit**, then **Add Widget**.
3. Find Neptune and choose a small, medium, or large widget.
4. After placing it, touch and hold the widget and choose **Edit Widget**.
5. Select its Page, Section, or Pin and the available action.

### Lock Screen

1. Touch and hold the Lock Screen and tap **Customize**.
2. Choose the Lock Screen and tap a widget area.
3. Add Neptune in the inline, circular, or rectangular position.
4. Edit the widget to choose its Page, Section, or Pin.

The editor belongs to iOS, so its exact buttons and layout may vary by system
version.

When access allows them, the choice list shows standard Pages first, dynamic
Sections second, and native Pins grouped by media or browse type. Sections use
**Open Section**. Movie and episode Pins can use **Go to Item** or **Play**.



## Pages (Free)

Every supported widget size can open a standard Neptune Page:

- Home
- Movies
- Shows
- Library
- Collections
- Discover
- Downloads
- Search
- Settings

Page widgets are available without Neptune Pro. A destination that is not
currently available, such as Discover before Seerr is connected, is checked
again when you tap it. Placing a Downloads Page widget also does not unlock
the separate Neptune Pro Downloads feature.



## Section Widgets (Neptune Pro)

A Section Widget shows current media from one of 16 supported Neptune
sections:

| Source | Section Choices |
|--------|-----------------|
| **Home** | Continue Watching, Next Up, Recently Added, Favorites, Collections, New Releases, Recommended |
| **Discover** | Trending, Popular Movies, Popular Shows, Upcoming Movies, Upcoming Shows, Now Playing, Airing This Week, Anime Movies, Anime Shows |

Discover choices appear when Seerr is connected and available to the active
profile. Home choices remain available without Seerr.

Every Section Widget requires Neptune Pro. This gate applies only to using the
dynamic section in a Home Screen or Lock Screen widget. The corresponding
Home and Discover areas inside Neptune remain available under their normal
access rules.

Neptune prepares up to five current items for each Section choice. WidgetKit
moves to the next prepared item on five-minute wall-clock slots. Five minutes
is the shortest spacing Apple recommends for conventional widget timeline
entries. Reloading the timeline does not intentionally restart the Section at
its first item.

The five-minute schedule rotates the items Neptune has already published. It
does not make the widget contact your server or fetch newly added media.
iOS controls when WidgetKit runs and displays timeline updates, so a visible
change can arrive later than the requested five-minute slot.

Tapping a Section Widget opens the exact item currently shown after Neptune
rechecks the active account, server, Pro access, and item availability.
Sections use **Open Section** and never offer direct **Play**. If the Section
is empty or its displayed item is no longer valid, the tap safely opens the
corresponding Home or Discover page.



## Pin Widgets (Neptune Pro)

A Pin Widget opens one of the native Pins belonging to the active server
account. It can target media, a person, or a library browse context.

| Pin | Available Actions |
|-----|-------------------|
| Movie or episode | **Go to Item** or **Play** |
| Other media, person, or browse Pin | **Go to Item** |

Neptune reloads the current Pin and checks the account, server, permission,
and playability when the widget is tapped. A widget never preserves an old
playback URL.

Native Pins themselves remain Free inside Neptune. Pro is required only when
a conventional widget targets a native Pin.



## Artwork and Refresh

Home Screen widgets use media artwork when Neptune has prepared it:

- Small widgets prefer poster art.
- Medium and large widgets prefer backdrop art.
- If the preferred format is unavailable, Neptune tries the other prepared
  format before using a themed glyph.
- Missing artwork never leaves the widget blank.

Section Widgets can also show the section name and playback progress.
Spoiler-protected unstarted episodes use series-level artwork instead of
episode-specific artwork. Lock Screen widgets use compact labels and symbols
rather than full poster or backdrop art.

The widget extension does not connect to your media server. The authenticated
Neptune app publishes a small, privacy-safe snapshot and pixels-only artwork,
then WidgetKit renders it even while Neptune is closed. Open Neptune after
signing in, changing accounts, adding Pins, or making a major library change
so it can refresh that snapshot. Open Neptune while connected after changing
Seerr if you want Discover choices and candidates to update. Signing out
clears the published choices and artwork.

Opening Neptune lets the app prepare newer Home and Discover content, but iOS
still decides when the refreshed widget timeline becomes visible. A widget
can therefore keep rotating an older set of up to five prepared items until
Neptune publishes again and WidgetKit accepts the update.

The shared widget data uses opaque choices, bounded labels and symbols,
availability, progress where applicable, and primitive theme colors. It does
not include credentials, playback URLs, saved-search text, or raw media,
server, and account identifiers.



## Pro Access Changes

Pin Widgets and Section Widgets are separate Pro capabilities, although every
current Neptune Pro plan includes both.

If Pro access ends:

- standard Page widgets keep working;
- a configured Pin or Section widget shows its matching locked state;
- its per-widget selection is retained; and
- restoring Pro republishes current content so the widget resumes without
  being configured again.

The original native Pin and the corresponding in-app Home or Discover surface
are never deleted.



## Settings and Troubleshooting

Open **Settings > User Preferences > Widgets** for placement guidance and the
current Pin Widgets and Section Widgets access status.

| Problem | What to Check |
|---------|---------------|
| Neptune says **Open Neptune to load choices** | Open Neptune and sign in so it can publish the current account’s options |
| Only Pages appear in **Edit Widget** | Confirm the matching Pro access, open Neptune, and try editing again |
| A Pin is missing | Confirm it still appears in Neptune for the active server account |
| A Section has no media | Open Neptune and refresh Home or Discover; the section may currently be empty |
| **Play** is unavailable | Only current movie and episode Pins support direct Play |
| Artwork is missing | Open Neptune while connected so it can prepare the current poster or backdrop |
