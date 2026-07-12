---
order: 60
---

# Next Up

The next unwatched episode from each show you're currently watching. If you finished episode 3, Next Up shows episode 4. This section keeps your active shows front and center so you always know what to watch next.



## How Items Are Selected

For each show where you've watched at least one episode, Neptune uses the connected backend's next-up data to find the first unwatched episode: usually the one after your last completed episode, or the first episode of a newly added season. Shows you've watched most recently come first.

Two settings in **Settings > Home > Sections** shape the row:

| Setting | Description |
|---------|-------------|
| **Next Up** | How many episodes to show |
| **Next Up Cutoff** | Drop shows you haven't touched in a while (30, 90, 180, or 365 days, or never) |

The cutoff keeps a show you abandoned two years ago from sitting in the row forever.



## Tab Visibility

| Tab | Visible |
|-----|---------|
| **Home** | Yes |
| **Movies** | No (episodes only) |
| **Shows** | Yes |

With the current Jellyfin backend, Next Up shows the same episodes regardless of which library is selected in the library picker. This is a Jellyfin limitation and may differ with future backends.



## Card Type

**Wide landscape cards**, the same style as Continue Watching. Each card shows the episode's screenshot or thumbnail. There's no progress bar since these episodes haven't been started yet.



## Navigation

Selecting a Next Up episode takes you to the show's detail page with the season pre-selected and the episode highlighted. You can hit play right away without digging through seasons.



## Long Press

Long-press any card to pin the show as a [Library Shortcut](/library/shortcuts) or mark the episode played.



## Behavior Notes

- The section is hidden when you have no active shows.
- Finishing a series drops it out of Next Up on the next refresh.
- When a new season lands for a show you finished, its first episode appears here.
- Every profile has its own independent Next Up list.
