---
order: 30
---

# Compass Live Activity

On iPhone, Neptune can run [Compass](/browsing/navigation/compass) as one standard Live Activity. iOS may present that activity in Dynamic Island, on the Lock Screen, or in another system-owned Live Activity surface.

The activity and Neptune’s in-app Compass palette use the same ordered set of one to eight **Compass Shortcuts**.
They do not use your [native Pins](/library/shortcuts), and they are separate from conventional [Home Screen and Lock Screen widgets](/browsing/widgets).

## Requirements

- An iPhone running iOS 16.1 or later
- Live Activities allowed for Neptune in iOS Settings
- An authenticated Neptune browsing session

Dynamic Island requires a supported iPhone.
On other supported iPhones, the activity can still appear on the Lock Screen, and the in-app Compass palette remains available.
Compass is not available on iPad.

Compass and its Live Activity do not require Neptune Pro.
A shortcut that targets an independently gated destination, such as Downloads, still checks that destination’s current access when selected.

## Turn It On

1. Open **Settings > User Preferences > Live Activity**.
2. Turn on **Enabled**.
3. Choose **Compass** as the content type.
4. Leave Neptune after the status reports **Active** and let iOS place the activity.

Live Activities are off by default.
Enabling the setting is an explicit request to start Compass; simply opening Neptune does not turn it on.

If iOS has disabled Live Activities, Neptune offers **Open System Settings**.
If a request failed or iOS reached its activity limit, use **Retry Compass** after resolving the reported problem.

## Configure Compass Shortcuts

Open **Settings > User Preferences > Compass > Compass Shortcuts**.
The exact default order is:

1. Settings
2. Home
3. Library
4. Search

You can keep between one and eight shortcuts, drag them into a new order, and change each label and symbol.
A shortcut can:

- open Settings, Home, Movies, Shows, Library, Collections, Discover, Downloads, or Search;
- open one specific media library;
- run a saved search;
- open a media item’s details; or
- play or resume supported media.

An unavailable shortcut stays in its configured position and is checked again when selected.
From the Live Activity, a disabled shortcut opens the Compass palette so Neptune can explain the current availability problem instead of executing a stale action.
Reset restores the original four shortcuts.

## Using the Live Activity

| Surface | Action |
|---------|--------|
| Compact or minimal Dynamic Island | Tap to open Neptune’s full Compass palette |
| Expanded Dynamic Island | Touch and hold Dynamic Island, then tap a shortcut |
| Lock Screen activity | Tap a shortcut icon directly, or tap the activity header to open the palette |
| Inside Neptune | Hold exactly two fingers for 0.6 seconds anywhere in the authenticated iPhone app |

The in-app gesture works in portrait, landscape, and drill-down screens.
It is suppressed during playback so it cannot interfere with player controls.

You can also preview and open the palette from **Settings > User Preferences > Compass**, which provides a labelled alternative when an accessibility feature consumes multi-finger gestures.

## Activity Lifecycle

Dynamic Island and the Lock Screen are two presentations of the same Live Activity.
They cannot be enabled or disabled separately.

- Navigation, settings changes, backgrounding, and normal app closure preserve and update the existing activity.
- Turning **Live Activity** off, changing its content type, or signing out ends the Compass activity.
- If you or iOS dismisses it, Neptune does not silently create another one.
  Return to **Live Activity** settings and choose **Retry Compass**.
- A Live Activity can outlive the Neptune process. iOS does not provide a reliable force-quit callback, so force-quitting cannot guarantee immediate removal; dismiss the activity directly or turn the setting off first.
- iOS controls whether the activity is compact, minimal, expanded, displaced, or visible.
  Neptune cannot reserve Dynamic Island space or keep it expanded.

## Sync and Privacy

Compass Shortcuts and the Live Activity enable/type preferences can travel with [Backup & Restore](/settings/backup).
The active system session itself belongs to the individual iPhone.

The Live Activity receives only the ordered shortcut identifiers, chosen labels and symbols, current availability, selected shortcut, and primitive theme colors.
It does not receive credentials, playback URLs, account or server identifiers, media records, or saved-search queries.

Custom shortcut labels are system-visible by design.
If you put private text or a search phrase in a custom label, it can appear on the Lock Screen and be read by accessibility features.
