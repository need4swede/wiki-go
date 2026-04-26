# Because You Watched

Recommendations based on specific movies you've watched. Each row is titled after a movie — for example, "Because You Watched Interstellar" — and shows similar titles from your library. This creates personalized discovery paths tied to your actual viewing history.



## How It Works

Because You Watched is powered entirely by the [Home Screen Sections plugin](/getting-started/setup). The plugin uses your Jellyfin watch history to identify seed movies, then returns similar items for each one.

The data flow:

1. **Fetch available sections**: Neptune queries the plugin for all available home screen sections for the current user
2. **Filter for "Because You Watched"**: Only sections with type `BecauseYouWatched` are kept
3. **Fetch recommendations**: For each section, the plugin returns a list of similar items from your library (typically 3–8 per seed movie)
4. **Display as separate rows**: Each seed movie becomes its own horizontal row on the home screen



## Data Source

| Property | Value |
|----------|-------|
| Sections endpoint | `HomeScreen/Sections` (with `userId`) |
| Items endpoint | `HomeScreen/Section/BecauseYouWatched` (with `userId` and `additionalData`) |
| Required | Home Screen Sections plugin must be installed and enabled |
| Content | Jellyfin library items similar to your watched movies |

The `additionalData` parameter is the seed movie's ID, which tells the plugin which movie to base recommendations on.



## Section Stability

Because You Watched sections can appear and disappear between refresh cycles as the plugin recalculates. To prevent visual flicker, Neptune uses a **BecauseYouWatchedTracker** that smooths out these transitions:

### Grace Period

When a section goes missing from a refresh response, it isn't immediately removed. Instead, it's kept visible for **3 consecutive refresh cycles** (about 30 seconds at the default 10-second refresh interval). If the section reappears within that window, the counter resets.

After 3 consecutive absences, the section is finally removed with an animated transition.

### Content vs Structural Changes

The tracker distinguishes between two types of updates:

| Change Type | Example | Behavior |
|-------------|---------|----------|
| **Content change** | Recommendations within a section updated | Silent update — items refresh without animation |
| **Structural change** | A new section appears or an old one is removed | Animated transition (0.35-second ease-in-out) |

This means the recommendations within a row can update smoothly in the background, but adding or removing entire rows gets a visible animation so the user notices the change.

### Sorting

Sections are sorted alphabetically by title for consistent ordering. This means "Because You Watched Alien" always appears before "Because You Watched The Matrix".



## Tab Visibility

Because You Watched is hidden on the Shows tab since it's a movie-based feature:

| Tab | Visible | What's Shown |
|-----|---------|-------------|
| **Home** | Yes | All "Because You Watched" rows |
| **Movies** | Yes | All "Because You Watched" rows |
| **Shows** | No | Hidden (tab restriction: `excludeShows`) |



## Card Type

**Poster cards** — portrait-oriented poster images displayed in a horizontal scroll row. Each row has its own title (the "Because You Watched ..." label) and contains the recommended items.



## Navigation

Selecting any recommendation card takes you to that item's detail page.



## Loading Priority

Because You Watched is loaded as a "Phase 2" section — after core sections (Continue Watching, Next Up, New Releases, Recently Added, Favorites) have completed. It runs in parallel with Coming Soon and Recommended.

On background refresh (10-second polling), it's fetched alongside all other sections.



## Graceful Degradation

| Scenario | Behavior |
|----------|----------|
| Plugin not installed | Section never appears — no error shown |
| Plugin installed but returns no sections | Section is hidden |
| Plugin returns sections but items fail to load | Individual rows with failed loads are hidden |
| Plugin disabled in Settings | Section is hidden |



## Edge Cases

- **No watch history**: The plugin has no seed movies to work with, so no sections are returned.
- **Watched movie removed from library**: The section may persist for up to 3 refresh cycles (grace period), then disappears.
- **Many seed movies**: The plugin determines how many sections to return — Neptune displays all of them. There's no client-side limit on the number of "Because You Watched" rows.
- **Recommendations overlap**: The same item can appear in multiple "Because You Watched" rows if it's similar to multiple seed movies. No cross-section deduplication is performed.
