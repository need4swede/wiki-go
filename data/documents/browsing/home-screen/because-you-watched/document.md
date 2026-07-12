---
order: 90
---

# Because You Watched

Recommendations based on specific movies you've watched. Each row is titled after a movie (for example, "Because You Watched Interstellar") and shows similar titles from your library. This creates personalized discovery paths tied to your actual viewing history.

**Requirement:** the [Home Screen Sections plugin](/getting-started/setup/plugins) must be installed on your server.



## How It Works

The plugin looks at your watch history, picks seed movies, and returns similar items from your library for each one. Every seed movie becomes its own row, typically with a handful of recommendations, sorted alphabetically so rows keep a consistent order.

Rows come and go as the plugin recalculates. Neptune smooths this out: a row that momentarily disappears from the data is kept on screen briefly rather than flickering away, and recommendations within a row update silently while whole rows animate in and out.



## Tab Visibility

| Tab | Visible |
|-----|---------|
| **Home** | Yes |
| **Movies** | Yes |
| **Shows** | No (movie-based feature) |



## Navigation

Selecting any card opens that item's detail page.



## When Things Aren't Working

| Scenario | Behavior |
|----------|----------|
| Plugin not installed | Section never appears |
| No watch history yet | No seed movies, so no rows |
| A watched movie leaves your library | Its row disappears shortly after |

The same title can appear in more than one row if it's similar to several movies you've watched.
