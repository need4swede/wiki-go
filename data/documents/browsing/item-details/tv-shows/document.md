---
order: 20
---

# TV Shows

Browse series, seasons, and episodes.

## Show Level

Play starts or resumes the show using the episode Neptune has selected.
Shows without a season structure use one Episodes grouping.

### Apple TV

The show's hero has its logo, optional poster and description, Play or Resume, and an action pill.
Customize what it shows under **Settings > Account > Appearance > Layouts > Show Pages**.

Below it, Episodes has a season poster on the left and that season's episode gallery on the right.
The initial position follows your furthest watch progress; a fully watched show starts again at the beginning.

| Action | Control |
|--------|---------|
| Change season in place | Up / Down on the season poster |
| Browse episodes | Right from the poster, then Left / Right |
| Open the full season page | Select the season poster |
| Return from an inline episode to the poster | Menu / Back |
| Return to the episode you were browsing | Right from the poster |

#### Jump Within a Season

Hold Select on the inline season poster:

| Action | Where It Goes |
|--------|---------------|
| **Jump to Latest** | Your current watch position in that season: the furthest episode with resume progress, otherwise the episode after your furthest watched one |
| **Jump to Last** | The season's final displayed episode, regardless of watch history |

Earlier unwatched gaps do not pull Jump to Latest backward.
With no progress, it goes to the first available episode.
If you've reached the end, it stays at the last available episode unless another episode has resume progress.

Jump to Last can land on a missing or future episode card when those are shown.
Both actions reveal and focus the target without starting playback or changing seasons.

### iPhone and iPad

Tap a season to browse its episodes in the touch episode gallery.
Use the available gallery or list controls to find an episode, then open it for playback and other actions.

If seasons or episodes are missing from your server, Neptune can show missing or future entries with their dates when the matching options are enabled.

## Season Level

On Apple TV, a season opens with its poster, the selected episode's description, Play or Resume, a menu pill, and **›**.
Left from Play browses backward through episodes; **›** browses forward.
Down enters the season tabs and episode row.
Rest on a season tab to switch to it, or press Select to switch immediately.
Up from the episode row returns to the displayed season's tab.

The tabs' long-press **Latest** action finds the newest released episode across the show.
The inline poster's Jump to Latest stays within its displayed season and follows your watch position.

Episode cards show artwork, the episode number and title, a synopsis where allowed, runtime or time left, and watched or resume progress.
Spoiler protection applies to unstarted episodes.

## Context Menus

Long-press an episode or season for its available actions.
Apple TV uses hold Select; iPhone and iPad use touch and hold.
Administration and progress-reset actions appear only where supported and authorized.

### Episode Context Menu

| Action | Description |
|--------|-------------|
| **Mark as Played** | Mark episode as watched |
| **Mark as Unplayed** | Reset episode to unwatched |
| **Reset Progress** | Clear a partial watch without marking played |
| **Pin** | Add the episode to [Library Pins](/library/shortcuts) |
| **Change Image** | Select a new thumbnail where the server allows image administration |

### Season Context Menu

| Action | Description |
|--------|-------------|
| **Mark as Played** | Mark entire season as watched |
| **Mark as Unplayed** | Reset all episodes in the season |
| **Reset Progress** | Clear the season's supported episode resume positions |
| **Change Image** | Select a new poster where the server allows image administration |

Press **Menu** to close without taking action.

## Shuffle Mode

Can't decide what to watch?
Press **Shuffle** in the action pill and Neptune plays a random episode.
A skip prompt in the corner lets you re-roll to a different episode if you're not feeling it.
The Next Episode button keeps things random while shuffle is active.
At the end credits, the [Up Next](/playback/up-next) screen shows which episode is coming, and **Re-Shuffle** picks another.

Shuffle is per-show, so series that should stay sequential keep their order.

## Spoiler Protection

Neptune can obscure thumbnails, titles, and descriptions for episodes that are both unwatched and completely unstarted.
Once you begin an episode or mark it as watched, its details become visible.

On Apple TV, select the eye button in the action pill to change protection for the current show.
This per-show choice takes priority over the app-wide setting, so you can protect an otherwise episodic show or reveal a serialized show.

For app-wide protection, open **Settings > Account > Appearance**.
On Apple TV, the control is in the **Items** category; iPhone and iPad show it in the Appearance list.
Turn on **Hide Spoilers on Unstarted Episodes**.
Its **Auto** scope protects serialized, hybrid, and unclassified shows while leaving episodic and anthology shows visible.
**All** protects every show.

See [Cards & Backdrops](/personalization/cards-and-backdrops) for the full guide to Auto, All, show classifications, and per-show choices.

## Episode Finder

Find a specific episode by describing what happens in it.
Requires a language model; see the dedicated [Episode Finder](/neptune-ai/episode-finder) guide for its local matching, AI interpretation, verification, and confidence behavior.

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

Theme music plays when viewing series details and fades out when you leave or start playback.
On Apple TV, control volume, looping, and fade behavior in **Settings > Account > Sounds**.
On iPhone and iPad, use **Settings > Account > Audio Preferences**.
Theme songs require a server that supplies them; Neptune's current theme-song integration is Jellyfin-specific.
