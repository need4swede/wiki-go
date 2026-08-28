---
order: 40
---

# Cards & Backdrops

Fine-tune how much artwork Neptune shows and how content cards present themselves.
Both live in **Settings > User Preferences > Appearance**.

## Backdrops

The **Backdrops** tab controls the artwork behind everything:

| Setting | Description |
|---------|-------------|
| **Show Backdrops on Hover** | Focus a card anywhere and its backdrop takes over the top of the screen. Turn off for a calmer browse |
| **Theme Opacity** | How strongly your theme tints backdrops. Low values let artwork shine through; high values keep the theme's color dominant |

On iPhone and iPad there is a third setting, **Framing**, because a widescreen backdrop and an upright screen are opposite shapes.
It also unlocks placing an individual backdrop by hand.

**Settings > User Preferences > Appearance > Backdrops > Framing**

| Mode | What you get |
|------|--------------|
| **Smart** | Neptune looks at the picture on your device, finds the subject, and aims the crop at it, then pulls back so more of the frame stays visible. Default. |
| **Fill Screen** | Edge to edge, cropped from the centre. The original Neptune look. |

Smart mode reads the image entirely on your device.
Nothing is uploaded, no account or API key is involved, and it works the same on a library you are browsing offline.
Faces win when there are any, and Neptune falls back to the picture's overall centre of attention when there are none.

Framing follows your profile through Backup & Restore, and a server administrator can set a default for it from the Neptune plugin dashboard.
Apple TV is unaffected: a television is already the shape backdrops are made for, so it keeps filling the screen.

### Repositioning a Backdrop by Hand

Automatic framing is a good guess, not a verdict.
On any movie or show page, in all three detail layouts—Detailed, Immersive, and Minimal:

1. **Touch and hold the backdrop.** It lifts, the page stops scrolling, and the fade at the artwork's edges thins out so you can see where the picture actually ends.
2. **Drag** to move the picture sideways or up and down, and **pinch** to change how much of it is shown.
3. **Tap** anywhere to lock it in.

Neptune stores that placement for that specific image and uses it every later time the image appears.
It carries across all three detail layouts, iPhone and iPad, and both orientations.
Layouts show different amounts of the artwork, so a shorter hero may not be able to shift a picture quite as far as a full-screen one; returning to a roomier layout restores the original framing.

While an image is lifted, **Reset framing** returns that image to automatic framing.
Pinching outward stops once the whole backdrop is visible, so nothing is hidden from you.

By default a backdrop sits at the very top of the page.
Drag it downward and a dark gradient fills in above it, so the clock and battery have something to sit on.

Backdrops you place by hand are part of **Backup & Restore**.
Only the position is saved, never a copy of the artwork.
Automatic framings are recalculated on the device and are not backed up.
**Reset Repositioned Backdrops** clears every hand-placed framing at once.

If a server administrator replaces a title's artwork, Neptune works out a fresh automatic framing.
A placement you made by hand is kept; use **Reset framing** if it no longer suits the replacement.

## Cards

The **Items** tab decides what each card looks like:

| Setting | Description |
|---------|-------------|
| **Series Cards** | Episode image, background art, or thumbnail |
| **Movie Cards** | Backdrop or thumbnail style |
| **Use Series Posters for Season Cards** | One consistent poster across a show's seasons |
| **Thumbnail Title** | Text or logo on thumbnails |
| **Title toggles** | Show or hide series, episode, and movie titles on thumbnails, and the episode number |
| **Remove Leading Zero** | "E5" instead of "E05" |

## Spoiler Controls

| Setting | Description |
|---------|-------------|
| **Hide Spoilers on Unstarted Episodes** | Obscure episode artwork and spoiler-sensitive details until you begin watching |
| **Scope** | Choose **Auto** for structure-aware protection or **All** for every show |
| **Missing Episodes & Seasons** | Show placeholders for episodes your server doesn't have: off, future episodes only, or everything missing |

### Hide Spoilers

Turn on **Hide Spoilers on Unstarted Episodes** when thumbnails, titles, or descriptions might reveal what happens next.
Neptune obscures those details anywhere the episode appears, including episode lists and detail pages.

Protection applies only while an episode is both unwatched and completely unstarted.
Starting playback, resuming an episode, or marking it as watched reveals its details.
If you later clear its progress and mark it unwatched, it can be protected again.

This setting does not block playback or remove the basic navigation details you need to find an episode.

### Auto or All

After enabling Hide Spoilers, choose how broadly it should apply:

| Scope | Behavior |
|-------|----------|
| **Auto** | Protects shows where later episode details are more likely to reveal an ongoing story |
| **All** | Protects unstarted episodes in every show, regardless of story structure |

**Auto** is the best fit for most mixed libraries.
It keeps protection on for plot-driven shows while leaving self-contained shows easy to browse.
Neptune classifies each show by how its episodes tell a story:

| Show structure | What it means | Auto behavior |
|----------------|---------------|---------------|
| **Serialized** | One continuing story develops across episodes | Protected |
| **Hybrid** | Standalone episodes share longer plots or character arcs | Protected |
| **Episodic** | Most episodes tell a self-contained story | Visible |
| **Anthology** | Episodes or seasons tell separate stories | Visible |
| **Unclassified** | Neptune does not yet have a confident classification | Protected as a safe fallback |

For example, Auto can protect the next episode of a mystery without blurring every untouched episode of a sitcom, game show, or other self-contained series.
You do not need to classify shows yourself.

Choose **All** if you prefer the most consistent protection or do not want story structure to affect the result.

### Per-Show Choices

The eye control on a series page changes spoiler protection for that show only.
Use it when Auto makes the wrong choice for your viewing habits:

- Protect an episodic show whose thumbnails still reveal too much
- Reveal a serialized show you do not mind browsing freely

The per-show choice takes priority over the app-wide setting until you change it again.
See [TV Shows](/browsing/item-details/tv-shows) for the series-page controls.
