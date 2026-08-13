---
order: 82
---

# Activity

Activity turns what you watch in Neptune into a private, useful story: an
accurate viewing history, understandable insights, and an annual Neptune
Rewind.

Open **Settings > Neptune > Activity** on Apple TV, iPhone, or iPad. The same
four areas are available on each platform:

| Area | What it shows |
|------|---------------|
| **Overview** | Active watching time, completed movies and episodes, streaks, discoveries, rewatches, calendar days, milestones, and recent activity |
| **History** | Your Neptune viewing timeline, with filters, search on iPhone/iPad, pagination, and controls for each play |
| **Insights** | Explainable patterns such as top titles, genres, busy days, device mix, and period changes |
| **Rewind** | A year-by-year sequence telling the story of what you watched |

Activity counts playback in Neptune only. It does not pretend to know what you
watched in another app before Activity was available.

## What Counts

Activity measures active wall-clock watching time while video is genuinely
advancing. Pausing, buffering, stalled playback, and seeking do not add time.
Watching at a faster speed also does not inflate your hours.

Very short accidental opens are discarded unless you made meaningful progress
or completed the item. A movie or episode counts as completed when your media
server reports it played or Neptune reaches at least 85% of its known runtime.

A day counts toward a streak after one completion or 30 active minutes. A
binge is at least three episodes of the same series with no break longer than
90 minutes.

## Sync Across Devices

Local Activity capture starts on by default. **Activity Sync starts off** and
requires your explicit choice because it uploads detailed viewing history to
your own media server.

For Jellyfin, Activity Sync requires a compatible version of the optional
[Neptune Plugin Suite](/plugins). When enabled, an offline play on Apple TV can
appear on your iPhone after both reconnect. Deletes and clear actions also
synchronize safely.

Activity Sync is independent from Settings Sync. You can enable either one,
both, or neither. On a new device, Neptune asks before joining Activity that is
already stored on your server.

Backends without an Activity Sync companion still get complete device-local
Activity.

## Privacy and Control

Activity belongs to the signed-in user:

- Neptune provides no administrator browser or per-user Activity admin API.
  As with other server data, the machine's operator can still access files on
  the server; Activity Sync is not end-to-end encrypted.
- Activity is not part of managed settings, Settings Profiles, or MDM policy.
- You can keep a play in History while excluding it from Insights and Rewind.
- You can keep the next play private before it starts or exclude the current
  play directly from the player.
- You can delete one play, remove one device's history, or clear Activity.
- If sync is on, clear can erase Activity everywhere after confirmation.
- You can export your history as JSON or CSV.
- Editing Activity does not mark media played or unplayed on your server.
- Clearing Activity does not change [Conductor](/playback/conductor) preferences or learning.

The privacy page also shows capture and sync state, queued changes, last sync,
devices represented in the ledger, and whether older imported records have
exact or approximate timing.

## Older Watch History

Earlier Neptune builds kept a small position-based Watch History. Neptune
imports those records once so they are not lost, but labels them as legacy
instead of claiming their final playback position was exact active watching
time. New Activity plays use the accurate active-time model.

## Neptune Rewind

Rewind is available for each year represented in Activity. It can include
active hours, movie/episode split, top show or movie, top genre, biggest day,
longest streak, and biggest binge.

After your first qualified play, Neptune can show an honest shorter Rewind. A
fuller story becomes available after five qualified plays and two active hours.
On iPhone and iPad, **Share Card** renders a recap image entirely on your device;
Neptune does not upload your private history merely to create it.

## Free and Pro

Activity's ownership and privacy features are Free: accurate capture,
cross-device sync, full History, Overview, core insights, annual Rewind,
deletion, clear, and export.

[Neptune Pro](/neptune-pro) adds deeper deterministic insights about comfort
viewing, taste shifts, people, weekday habits, languages, playback patterns,
and comparison evidence. If Pro ends, those advanced cards disappear without
deleting any Activity. They return from your retained history when Pro is
restored.
