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
| **Overview** | A focused current-period snapshot: active watching time, comparison, completed movies and episodes, streak, and viewing calendar |
| **History** | Your exact viewing ledger, with date sections, filters, search on iPhone/iPad, pagination, and controls for each play |
| **Insights** | Explainable patterns such as top titles, genres, busy days, device mix, habits, and changing tastes |
| **Rewind** | A year-by-year favorites story with annual totals shown once rather than repeated as separate cards |

Activity counts playback in Neptune only. It does not pretend to know what you
watched in another app before Activity was available.

### Calendar versus History

The Viewing Calendar answers **when and how much** you watched. It shows the
current month's rhythm and rolls a selected day up by movie or show.

History answers **exactly what happened**. It keeps every qualified play as an
individual, manageable record and can combine title/series search with media
type, playback result, date range, and source-device filters. This makes it
useful for questions such as “Which movies did I finish this year on another
device?” and for correcting or removing a particular record. Matching plays
can continue through older months and are organized as Today,
Yesterday, Earlier in the current month, then month-and-year sections. Empty
sections are omitted, so a play never appears under more than one heading.

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

Activity records locally as a native part of Neptune. When the active backend
provides a compatible Neptune backup/sync companion, Neptune automatically
keeps the signed-in account's Activity consistent across its devices.

For Jellyfin, this requires a compatible version of the optional
[Neptune Plugin Suite](/plugins). An offline play on Apple TV can appear on
your iPhone after both reconnect, and per-play changes synchronize safely.

Activity uses a dedicated growing-ledger protocol behind the scenes rather
than putting watch history inside the settings backup JSON. There is no second
Activity Sync switch or join prompt.

Backends without an Activity Sync companion still get complete device-local
Activity.

## Privacy and Control

Activity belongs to the signed-in user:

- Neptune provides no administrator browser or per-user Activity admin API.
  As with other server data, the machine's operator can still access files on
  the server; Activity Sync is not end-to-end encrypted.
- Activity is not an administrator-managed setting, Settings Profile member,
  or field in the settings backup payload.
- You can keep a play in History while excluding it from Insights and Rewind.
- You can exclude the current play directly from the player.
- You can delete an individual play from History.
- Editing Activity does not mark media played or unplayed on your server.
- Activity does not change [Conductor](/playback/conductor) preferences or learning.

## Older Watch History

Earlier Neptune builds kept a small position-based Watch History. Neptune
imports those records once so they are not lost, but labels them as legacy
instead of claiming their final playback position was exact active watching
time. New Activity plays use the accurate active-time model.

## Neptune Rewind

Rewind is available for each year represented in Activity. Its introduction
summarizes active hours, qualified plays, and the movie/episode split once.
The rest of the story concentrates on distinctive annual favorites such as
your top show, movie, genre, and biggest binge.

After your first qualified play, Neptune can show an honest shorter Rewind. A
fuller story becomes available after five qualified plays and two active hours.
On iPhone and iPad, **Share Card** renders a recap image entirely on your device;
Neptune does not upload your private history merely to create it.

## Free and Pro

Activity's ownership features are Free: accurate capture, automatic
cross-device continuity when supported, full History, Overview, core insights,
annual Rewind, and per-play controls.

[Neptune Pro](/neptune-pro) adds deeper deterministic insights about comfort
viewing, taste shifts, people, weekday habits, languages, playback patterns,
and comparison evidence. If Pro ends, those advanced cards disappear without
deleting any Activity. They return from your retained history when Pro is
restored.
