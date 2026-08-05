---
order: 20
---

# TV Shows

Browse series, seasons, and episodes.



## Show Level

When first opening a series:

- **Play button**: Resume or start from the beginning
- **Seasons row**: Browse all seasons
- **Latest button**: Jump straight to the newest episode

Select a season to view its episodes. Shows without season structure get a single "Episodes" list.

If your server is missing a season or upcoming episodes that exist elsewhere, Neptune can show them greyed out with air dates and a "Not available on your server" note, so you know what's coming.



## Season Level

When viewing a season:

- **Back button**: Return to show overview
- **Episodes list**: All episodes in the season

**Episode cards show:**

- Thumbnail and title
- Episode number and air date
- Runtime and progress bar
- Checkmark if watched



## Context Menus

Long-press (hold Select) on episodes and seasons for quick actions.

### Episode Context Menu

| Action | Description |
|--------|-------------|
| **Mark as Played** | Mark episode as watched |
| **Mark as Unplayed** | Reset episode to unwatched |
| **Reset Progress** | Clear a partial watch without marking played |
| **Pin** | Add the episode to [Library Pins](/library/shortcuts) |
| **Change Image** | Select a new thumbnail (admin only) |

### Season Context Menu

| Action | Description |
|--------|-------------|
| **Mark as Played** | Mark entire season as watched |
| **Mark as Unplayed** | Reset all episodes in the season |
| **Change Image** | Select a new poster (admin only) |

Press **Menu** to close without taking action.



## Shuffle Mode

Can't decide what to watch? Press **Shuffle** in the action pill and Neptune plays a random episode. A title card announces what you landed on, and a skip prompt in the corner lets you re-roll to a different episode if you're not feeling it. The Next Episode button keeps things random while shuffle is active.

Shuffle is per-show, so series that should stay sequential keep their order.



## Spoiler Protection

Neptune can obscure thumbnails, titles, and descriptions for episodes that are
both unwatched and completely unstarted. Once you begin an episode or mark it
as watched, its details become visible.

On Apple TV, select the eye button in the action pill to change protection for
the current show. This per-show choice takes priority over the app-wide
setting, so you can protect an otherwise episodic show or reveal a serialized
show.

For app-wide protection, go to **Settings > User Preferences > Appearance**,
open the **Items** tab, then turn on **Hide Spoilers on Unstarted Episodes**.
Its **Auto** scope protects serialized, hybrid, and unclassified shows while
leaving episodic and anthology shows visible. **All** protects every show.

See [Cards & Backdrops](/personalization/cards-and-backdrops) for the full
guide to Auto, All, show classifications, and per-show choices.



## Episode Finder

Find a specific episode by describing what happens in it. Requires a language model; see the dedicated [Episode Finder](/neptune-ai/episode-finder) guide for its local matching, AI interpretation, verification, and confidence behavior.

### How to Use

1. Select **Find Episode** in the action pill
2. Describe the episode (e.g., "CPR training goes wrong")
3. Neptune searches locally, asks AI when needed, and verifies candidates against your library
4. Matches are labeled **In your library**, **Likely**, **Maybe**, **Corrected match**, **Not in library**, or **Best guess**
5. Select a playable episode to start it

If Neptune finds one verified library episode with very high confidence, it can start playback immediately.

### Example Queries

| Description | Found Episode |
|-------------|---------------|
| "They're doing a fire drill" | The Office - "Stress Relief" |
| "The one with the turkey on his head" | Friends - "The One with All the Thanksgivings" |
| "Dinner party disaster" | The Office - "Dinner Party" |

Especially useful for rewatching memorable scenes when you can't remember which episode they're from.



## Theme Songs

Theme music plays when viewing series details and fades out when you leave or start playback. Control volume, looping, and fade behavior in **Settings > User Preferences > Sounds**.
