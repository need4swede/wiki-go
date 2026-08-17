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
| **Overview** | A focused current-period snapshot: active watching time, comparison, completed movies and episodes, streak, viewing calendar, and factual play/day totals from the last year |
| **History** | A compact viewing ledger: movies stay individual, shows group their episode plays, and filters, search, pagination, and deletion reveal the exact evidence |
| **Insights · Pro** | A living profile of your taste, habits, discovery, playback experience, evolution, and viewing psychology |
| **Rewind · Pro** | A December year-end celebration told through cinematic, evidence-backed chapters, with completed years kept in an archive |

Activity counts playback in Neptune only. It does not pretend to know what you
watched in another app before Activity was available.

### Calendar versus History

The Viewing Calendar answers **when and how much** you watched. It shows the
current month's rhythm and rolls a selected day up by movie or show.

History answers **exactly what happened** without filling the main list with
episode rows. Movies remain individual entries. Episode plays from the same
show collapse into one show row within each date section; that row summarizes
the number of episodes, known active time, and latest episode. Select the show
to reveal its exact episode plays newest-first, then open or delete a
particular play. Imported position-only records remain visible but
do not inflate the show's active-time total.

History can combine title/series search with media type, playback result, date
range, and source-device filters. This makes it useful for questions such as
“Which movies did I finish this year on another device?” Matching plays can
continue through older months and are organized as Today,
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
your iPhone after both reconnect, and deletions synchronize safely.

There is no second Activity Sync switch or join prompt.

The companion synchronizes only Activity that Neptune recorded. It does not
backfill Jellyfin or Emby watch history, Playback Reporting data, or viewing
from other clients. Apart from the one-time import of Neptune's own older local
records described below, Activity starts fresh and grows from new Neptune
playback.

Backends without an Activity Sync companion still get complete device-local
Activity.

## Privacy and Control

Activity belongs to the signed-in user:

- Activity is not exposed through Neptune's administrator tools. As with other
  server data, the machine's operator can still access files on the server;
  Activity Sync is not end-to-end encrypted.
- Activity is not controlled by administrator-managed settings or Settings
  Profiles.
- Activity has one device-local master recording switch. It is on by default;
  turning it off stops future capture on that device without deleting History.
  The switch does not synchronize and is not administrator-managed.
- There is no per-play include/exclude control or private-next-play action.
- You can delete an individual play from History.
- Editing Activity does not mark media played or unplayed on your server.
- Activity does not change [Conductor](/playback/conductor) preferences or learning.

## Older Watch History

Earlier Neptune builds kept a small position-based Watch History. Neptune
imports those records once so they are not lost, but labels them as legacy
instead of claiming their final playback position was exact active watching
time. New Activity plays use the accurate active-time model.

## Your Viewing Profile

With Neptune Pro, **Insights** becomes a living profile rather than another
statistics dashboard or a preview of Rewind. It organizes what Neptune notices
into **Taste**, **Story Preferences**, **Habits**, **What Holds Your
Attention**, **Discovery**, **Playback Experience**, and **Evolution**. Traits
appear as your Activity grows, with supporting observations you can inspect.

The main Insights page opens with one compact route into Viewing Psychology,
followed by the deeper trait sections. Its factual trailing-year play and
active-day totals live in Overview instead of being repeated in a separate
profile-summary card.

Insights looks for deeper patterns: how broad or focused your taste is, how
weekday and weekend taste differ, which genres and creators connect your
viewing, whether you roam across release eras, countries, and languages,
whether you lean toward episodic worlds or one-sitting stories, when you tend
to watch, how quickly you return to a story world, what happens after you
sample something, whether familiar titles occupy a different part of your day,
and how your genre and movie-versus-series balance changes over time. It
can also look beyond broad genre labels to recurring themes, emotional tone,
familiar settings, story qualities that hold your attention, qualities that
recur when you rewatch, weekday-versus-weekend mood changes, and story
interests that are growing or fading. These details appear as your profile has
enough viewing history to support them; individual titles are never presented
as conclusions about you.

Insights deliberately does not repeat annual
top movies, shows, genres, people, or studios. Those celebratory winners belong
to Rewind.

### Your Viewing Psychology

Insights also connects those facts into a conservative behavioral **Big Five
profile**. It is designed to help you recognize patterns in entertainment
behavior, not to replace a validated personality questionnaire:

| Lens | What Neptune can observe |
|------|---------------------------|
| **Openness — Conventional ↔ open-minded** | Genre and narrative breadth, discovery, exploration, cultures, languages, eras, and changing taste |
| **Conscientiousness — Flexible ↔ organized** | Completion, returning after a sample, routine, continuity, and continuation tempo |
| **Extraversion — Reserved ↔ energetic** | Session depth, binges, exploration pace, and changes between viewing contexts |
| **Agreeableness — Independent ↔ cooperative** | Loyalty to story worlds and creators, familiar-title returns, and follow-through |
| **Neuroticism — Emotionally stable ↔ reactive** | Familiarity timing, rewatching, context shifts, and routine |

Every lens shows a position between two normal poles, how strongly your
Activity supports it, and the viewing observations behind it. Results evolve
as your history grows and are not population percentiles. They describe
entertainment behavior, not someone's interpersonal character, emotional
health, or entire offline personality.

When Conductor Pro Auto learning is active, Insights can also reflect your
picture-and-sound preferences and how well its choices tend to fit. Activity
cannot change Conductor preferences, and clearing one feature does not clear
the other.

Choose **Your Viewing Psychology** to enter a dedicated Neptune AI experience.
Opening Activity or the main Insights page alone does not generate anything.
Inside, **Portrait** presents an animated five-axis profile and possible viewing
motivations; **Big 5** lets you open each lens for its interpretation,
supporting observations, counterpoint, axis position, and evidence strength;
**Deeper Patterns** connects signals
that are easy to miss in separate statistics; and **Evidence** shows how much
history supports each result.

Neptune AI turns the profile into a conversational portrait, dimension
interpretations, connections, possible motivations, and distinctive tensions
that are easy to miss in separate statistics. It stays grounded in the
observations shown in Activity and does not diagnose you or claim to know your
off-screen motives.

## Neptune Rewind

Rewind is part of Activity Pro. The current year's Rewind arrives in December, when it makes sense to look
back at the year. Neptune does not present a partial August recap as a finished
annual story. Completed Rewinds remain available in your archive whenever you
want to revisit them.

The archive presents every available year as its own artwork-backed Spotlight
card instead of a row of year tabs. Choose a card to enter that year's separate
full-screen experience. The cards use the same cinematic proportions, artwork
treatment, paging, and focus or swipe behavior as Neptune's Home Spotlight, so
Rewind feels like a media experience rather than another Settings panel.

Inside, each Rewind unfolds as one horizontally paged story rather than one
dense statistics card. It opens with active time and viewing volume, then gives
individual cinematic chapters to the year's top show, movie, genre, biggest
viewing day, longest streak, biggest binge, comfort title, discoveries, person,
studio, era, language, playback style, subtitle story, and taste change when
the Activity record supports them. Every ranked chapter explains why it won
using the relevant time, plays, episodes, titles, share, or streak evidence.
Movie and show moments use their backdrop and logo when available, keep the
title visible as a fallback, and open that title when selected. Other moments
use relevant artwork from that year's viewing when available, with a cinematic
symbolic treatment when it is not. Closely related wins can share one chapter
instead of repeating the same story twice.

After your first qualified play, Neptune can show an honest shorter Rewind. A
fuller story becomes available after five qualified plays and two active hours.
On iPhone and iPad, **Share Card** renders a recap image entirely on your device;
Neptune does not upload your private history merely to create it.

## Free and Pro

Activity's ownership features are Free: accurate capture, one device-local
master recording switch, automatic cross-device continuity when supported,
Overview, complete searchable/filterable History, and individual deletion.

[Neptune Pro](/neptune-pro) adds the complete living Insights profile,
optional Conductor Pro context, explicit Neptune AI interpretation, and annual
Rewind plus the completed-year archive. If Pro ends while either Pro tab is
open, Activity returns to Overview. No Activity is deleted; the profile and
Rewinds return from retained history when Pro is restored.
