---
order: 60
---

# Discover

Discover turns Neptune from a window into your existing library into a place to find what comes next.
Browse what is trending, move through genres and decades, explore international media, build your own themed collections, and request a title without leaving the app.

Discover is powered by Seerr and appears after Seerr is connected.
See [Seerr Setup](/getting-started/setup/seerr) if the tab is missing.

## In This Section

| Page | Description |
|------|-------------|
| [Browsing Discover](/discover/browsing) | Genres, eras, studios, networks, languages, anime, and paginated grids |
| [Release Calendar](/discover/release-calendar) | Upcoming movie and TV dates grouped chronologically |
| [Themed Collections](/discover/themed-collections) | Build reusable discovery rows from any TMDB keyword |
| [Requests](/discover/requests) | Request content, track progress, and manage approvals |

## Discover, Library, and Search

| Surface | Best For |
|---------|----------|
| **Discover** | Exploring content you may not own yet |
| [Library](/library) | Browsing, filtering, and organizing media already on your server |
| [Search](/search) | Finding something specific across your library, people, and Seerr |

The boundaries stay fluid.
A Discover title already in your library opens the normal playable detail page.
A title you do not own opens the same Neptune detail experience with a **Request** action instead.

## The Discover Screen

Discover is composed of configurable rows in this default order:

| Section | What It Surfaces | Where It Leads |
|---------|------------------|----------------|
| [Release Calendar](/discover/release-calendar) | Future movie releases and TV premieres | Chronological calendar |
| [Browse by Era](/discover/browsing#browse-by-era) | Movies and shows grouped by decade | Movies/TV decade browse |
| **Trending Now** | Titles attracting attention right now | Item details |
| [Studios](/discover/browsing#studios-and-networks) | Major film studios | Studio movie browse |
| **Upcoming Movies** | Movies approaching release | Item details |
| [Networks](/discover/browsing#studios-and-networks) | Streaming services and TV networks | Network show browse |
| **Upcoming TV** | New and returning television | Item details |
| **Now Playing** | Movies currently in theaters | Item details |
| **Airing This Week** | Shows with episodes airing this week | Item details |
| [Anime](/discover/browsing#anime) | Popular anime movies and series | Movies/TV anime browse |
| [World Stage](/discover/browsing#world-stage) | Media grouped by original language | Movies/TV language browse |
| [Themed Collections](/discover/themed-collections) | User-selected concepts such as Heist or Time Travel | Movies/TV keyword browse |
| [Movie Genres](/discover/browsing#genres) | Seerr's movie genre catalog | Genre movie browse |
| **Popular Movies** | Popular films | Item details |
| [TV Genres](/discover/browsing#genres) | Seerr's television genre catalog | Genre show browse |
| **Popular TV Shows** | Popular series | Item details |

Rows with no results hide themselves rather than leaving empty shelves.

## Exploring a Row

There are two kinds of Discover rows:

- **Title rows** contain posters.
  Select one to open its detail page.
- **Browse rows** contain genre, decade, studio, network, language, anime, or keyword cards.
  Select one to open a full result grid that loads more items as you scroll.

Decade, language, anime, and themed-collection pages let you switch between Movies and TV Shows.
Genre cards are already separated into Movie Genres and TV Genres; Studios browse movies, while Networks browse shows.

See [Browsing Discover](/discover/browsing) for the complete behavior.

## From Discovery to Playback or Request

Selecting a poster opens a unified detail page with artwork, overview, release information, cast, trailers, and seasons where applicable.
Neptune then adapts the primary action to the title's state:

| State | What Happens |
|-------|--------------|
| **Available** | Opens the library-backed detail page with playback controls |
| **Partially Available** | Opens the library-backed show page; missing seasons remain requestable |
| **Requested / Processing** | Shows current request and availability status |
| **Not Requested** | Offers **Request** for eligible users |
| **Future Release** | Shows the release date alongside any request option |

This promotion into the library path means a movie found through Discover behaves exactly like the same movie opened from Home once it becomes available.

## Availability and Status Badges

Cards and detail pages carry status so you do not have to remember what is already yours:

| Badge | Meaning |
|-------|---------|
| **Available in Library** | The title is on your media server and can be played |
| **Partially Available** | A show has some, but not all, seasons available |
| **Requested** | A request exists and may be awaiting approval or processing |
| **Release date** | The title has not been released yet |

The same availability vocabulary appears in Seerr search results and Home recommendations.

## Requests

Press **Request** on an unavailable title.
Movies usually submit immediately.
TV shows let you choose seasons, while users with advanced Seerr permissions can also choose a quality profile.

Your Seerr permissions determine whether a request is automatically approved or waits for an administrator.
Track it from **My Requests**; administrators receive a persistent **Manage Requests** banner at the top of Discover and can approve or decline without leaving Neptune.

See [Requests](/discover/requests) for season selection, status meanings, cancellation, quality preferences, and administration.

## Customizing Discover

Long-press the Discover tab and choose **Edit Discovery**.
The editor includes every section above.

| Action | How |
|--------|-----|
| Reorder a section | Select **Move**, then choose its position |
| Hide or show a section | Toggle its visibility control |
| Restore the original layout | Select **Restore Default** |

Section order and visibility belong to the signed-in profile.
The admin request banner is not a normal section and remains available whenever the account can manage requests.

## Language Preferences

Open **Settings > Seerr > Seerr Preferences > Language Preferences** to filter Discover by original language.
Changing the preference refreshes all Discover rows, including Trending.

This global preference is different from **World Stage**: the preference narrows the overall Discover feed, while World Stage is a deliberate browse into one language at a time.

## Refresh and Failure Behavior

Discover loads cached/preloaded content where available, refreshes while you are viewing the tab, and only replaces rows whose contents changed.
A temporary refresh failure leaves the current screen intact.

If the first load fails, Neptune shows **Unable to Load Content** with **Try Again**.
If Seerr is disconnected, the tab shows a connection screen instead of an empty catalog.

## Access and Privacy

Ordinary Discover browsing and Seerr requests are available without Neptune Pro.
What you can request, approve, cancel, or manage is controlled by your Seerr account and server configuration.

Discover queries go to your configured Seerr server.
Neptune does not upload your media library to a separate discovery account; Seerr provides catalog, request, and availability information for the connected setup.
