---
order: 120
---

# Coming Soon

Upcoming content you're tracking: movies and shows that haven't been released yet or are still on their way to your server.
The section pulls from your Radarr and Sonarr calendars (via the Home Screen Sections plugin) and from your Seerr requests.

**Requirement:** Coming Soon only appears when Seerr is connected.

## Where Items Come From

**Primary: Home Screen Sections plugin.**
When the [plugin](/getting-started/setup/plugins) is installed, Coming Soon shows what your Radarr and Sonarr calendars are waiting on: monitored movies awaiting release and upcoming episodes of tracked shows.

**Fallback: Seerr requests.**
Without the plugin, the section shows your pending Seerr requests instead, so it works either way.

When both are available, plugin items are enriched with TMDB artwork and synopses through Seerr for better looking cards.

## What Cards Show

Poster cards with the title, release date, a countdown ("In 3 days", "Tomorrow"), and an episode label like "S3E5" for shows.
Items are sorted nearest release first.

A show with several episodes airing the same day takes one slot, not several.

## Navigation

Selecting a card opens the Seerr detail page with full metadata, request status, and availability.
Items already tracked by Radarr or Sonarr hide the request button since they're on their way regardless.

## Tab Visibility

| Tab | What's Shown |
|-----|-------------|
| **Home** | All upcoming items |
| **Movies** | Only upcoming movies |
| **Shows** | Only upcoming shows |

When something becomes available, it leaves Coming Soon on the next refresh and shows up in New Releases or Recently Added instead.
