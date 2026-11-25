---
order: 50
---

# Ratings

Neptune shows ratings from IMDb, Rotten Tomatoes, Metacritic, and Letterboxd next to your titles.
They also decide how rows such as **Greatest Hits** and **Critics' Picks** are ranked.

Ratings are free, work on every supported media server, and don't need Seerr.

## The Sources

| Source | What You See |
|--------|--------------|
| **IMDb** | The rating out of 10, with the vote count where there is room |
| **Rotten Tomatoes** | The critics' score as a percentage |
| **Metacritic** | The critics' score |
| **Letterboxd** | The rating out of 5 |

A title shows only the sources that have a score for it.
Until Neptune has the scores for a title, the rating from your server stays in place.

## Where They Appear

| Place | What Shows |
|-------|------------|
| **Movie and show pages** | One rating per source. On Apple TV, these fill the **Ratings** details. On iPhone and iPad, they appear as rating tiles |
| **Home Spotlight** | An IMDb column in the facts strip. For an episode, it shows the show's rating |
| **Discover** | IMDb and Rotten Tomatoes on the number one title's header |
| **Search** | On Apple TV, the IMDb rating in a result's details. On iPhone and iPad, "IMDb · Rotten Tomatoes" under a movie or show poster |

The ratings are not part of the short line of facts under a title, such as its year and runtime.

## Rows That Use Ratings

- **Greatest Hits** on [set pages](/library/set-pages) ranks titles by audience ratings, once enough people have voted.
- **Critics' Picks** on set pages and Discover's Explore pages ranks titles by critics' scores, and only appears when enough critics have reviewed them.
- **Hidden Gems** on set pages and in Discover favors titles with high scores that few people have rated.
- **Best Rated** is a sort in See All on set pages. On Discover's Explore pages, the **Critics** sort orders by critics' scores.

Without scores, these rows hide, or fall back to the rating from your server.

## How Neptune Gets Scores

Neptune looks up scores for the movies and shows in your library once a day, using each title's TMDB number.
Scores are kept on the device and refreshed about every 30 days.
A newly seen title can take a little while to get its scores.

Ratings use Neptune's own service, so you don't need an account or key for any rating source.
