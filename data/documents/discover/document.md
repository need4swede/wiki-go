---
order: 60
---

# Discover

Discover turns Neptune from a window into your existing library into a place to find what comes next.
See this week's number one title, follow your requests, find out what is about to release, explore languages and decades, and request a title without leaving the app.

Discover is powered by Seerr and appears after Seerr is connected.
See [Seerr Setup](/getting-started/setup/seerr) if the tab is missing.

## In This Section

| Page | Description |
|------|-------------|
| [Browsing Discover](/discover/browsing) | Explore, genres, decades, studios, networks, languages, anime, and paginated grids |
| [Coming Soon](/discover/coming-soon) | What is releasing this week and after, with requests |
| [Themed Collections](/discover/themed-collections) | Build reusable discovery rows from any TMDB keyword |
| [Requests](/discover/requests) | Request content, track progress, and manage approvals |
| [Ask in Discover](/neptune-ai/discover-ask) | Describe what you're in the mood for and get new titles to request (Neptune Pro) |

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

### Apple TV

Discover opens on this week's number one trending title, full screen.
Its header shows **#1 in Trending this week**, the title's IMDb and Rotten Tomatoes ratings when available, its runtime and release year, and its seasons for a show.
See [Ratings](/browsing/item-details/ratings).

The header's main button depends on the title:

| Title | Button |
|-------|--------|
| In your library | **Open**, or **Play** when [Impatient Mode](/settings/home#impatient-mode) applies |
| Not in your library | **Request** |
| Already requested | **Requested**, which opens [Request & Track](/discover/requests#request--track) |

Icons beside it open **Search**, which is [Ask](/neptune-ai/discover-ask), **Coming Soon**, **Explore**, and, for request managers, **Manage Requests**.

Below the header, Discover's rows appear in this default order:

| Row | What It Surfaces |
|-----|------------------|
| [On the Way](/discover/requests#on-the-way) | Your requests that haven't arrived, with their state and download progress |
| **Top Chart: Movies** and **Top Chart: TV** | This week's ten most popular movies and shows, with ranks on the posters |
| **For You: Movies** and **For You: TV** | Recommendations from what you finished lately |
| **Highly Rated: Movies** and **Highly Rated: TV** | The best-rated movies and shows of the last year |
| **Coming Soon** | Movies coming out in the next two months |
| **New Episodes** | Your shows returning and new shows premiering this week |
| **New Anime** | This season's most popular anime, from AniList. **See All** opens the anime page |
| **Hidden Gems: Movies** and **Hidden Gems: TV** | Well-rated titles few people have found |
| **Complete Your Collections** | Films missing from collections you own |

Rows with too few titles hide themselves rather than leaving empty shelves.
You can reorder or hide rows on Apple TV.

### iPhone and iPad

Discover opens on **Today**.
It shows the date, an **Ask** field, and then, from top to bottom:

| Section | What It Surfaces |
|---------|------------------|
| **Ask** | A field that opens [Ask in Discover](/neptune-ai/discover-ask). It is marked PRO without Neptune Pro |
| **#1 This Week** | This week's top title, marked if you have it, with Request or Requested |
| **From Your Shows** | The soonest new season or episode of a show you watch, with **Request Season N** |
| **Complete the Set** | Posters for a collection you own, with a plus to request a missing part |
| **Saved for Later** | Titles you saved in the Deck |
| **On the Way** | Your requests that haven't arrived. **See All** opens Requests & Coming Soon |
| **Top Chart: Movies** and **Top Chart: TV** | Ranked strips of this week's most popular titles |
| **Rows** | For You, Highly Rated, Coming Soon, New Episodes, New Anime, and Hidden Gems |
| **Explore** | Languages, decades, themes, genres, studios, and networks |
| **Deck** | **Triage what's trending** |

Each story shows only when it has something to say.
The order of rows is fixed on iPhone and iPad.

On a wide iPad window, stories sit in two columns.

### What Each Row Means

- **For You** uses the last few titles you finished.
  Only the title's TMDB number goes to your Seerr server, to ask for recommendations.
  Titles already in your library are left out.
- **Hidden Gems** are titles critics and audiences rate highly that few people have found.
  It leaves out anime, which has its own row, and titles you own.
  It needs Neptune's ratings to have arrived.
- **Complete Your Collections** looks at collections that include something you finished or added lately.
  Films you own are marked **Owned**, and missing films appear as gray ghosts with **Request Part N**.
- **Top Chart** cards carry a frosted rank number in the corner.

### The Deck

The **Deck** is a stack of cards for going through titles quickly.
Choose a pile: **Trending**, **Coming Soon**, **Because You Watched**, or **Saved for Later** once you've saved something.
Titles you own, requested, saved, or passed are left out.

| Gesture | Result |
|---------|--------|
| **Swipe right** | Request the title. For a show, you choose seasons |
| **Swipe up** | Save for later |
| **Swipe left** | Pass |

**Request**, **Save**, and **Pass** buttons do the same, and a tap opens the title.
Saved titles stay on this device and are not synced.
Passes last for the session only.

## Exploring a Row

There are two kinds of Discover rows:

- **Title rows** contain posters.
  Select one to open its detail page.
- **Explore cards** contain genre, decade, studio, network, language, anime, or keyword choices.
  Select one to open a page that loads more items as you scroll.

Decade, language, anime, and themed-collection pages let you switch between Movies and TV Shows.

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
Track it from **On the Way** or **My Requests**.
Request managers can approve or decline without leaving Neptune, from the **Manage Requests** icon on Apple TV or the approval card on iPhone and iPad.

See [Requests](/discover/requests) for season selection, status meanings, Request & Track, cancellation, quality preferences, and administration.

## Language Preferences

Open **Settings > Account > Seerr > Seerr Preferences > Language Preferences** to filter Discover by original language.
Changing the preference refreshes all Discover rows.

This global preference is different from **Around the World**: the preference narrows the overall Discover feed, while Around the World is a deliberate browse into one language at a time.

## Refresh and Failure Behavior

Discover loads cached/preloaded content where available, refreshes while you are viewing the tab, and only replaces rows whose contents changed.
A temporary refresh failure leaves the current screen intact.

If the first load fails, Neptune shows **Unable to Load Content** with **Try Again**.
If Seerr is disconnected, the tab shows a connection screen instead of an empty catalog.

## Access and Privacy

Ordinary Discover browsing and Seerr requests are available without Neptune Pro.
[Ask](/neptune-ai/discover-ask) is part of [Neptune AI](/neptune-pro/neptune-ai) and needs Neptune Pro.
What you can request, approve, cancel, or manage is controlled by your Seerr account and server configuration.

Discover queries go to your configured Seerr server.
Neptune does not upload your media library to a separate discovery account; Seerr provides catalog, request, and availability information for the connected setup.
For You sends only the TMDB number of a title you finished to your Seerr server, to ask for recommendations.
