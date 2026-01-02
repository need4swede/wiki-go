# Home Screen

The home screen is your personalized media hub, featuring a curated selection of content tailored to your viewing habits.

---

## Hero Spotlight

At the top of the home screen, the Hero Spotlight carousel showcases content you should watch next. Large backdrop images with logos rotate automatically, highlighting:

- **Next episodes** from shows you're actively watching
- **Recently added content** matching your preferences
- **Content you've started** but haven't finished

### Interacting with the Spotlight

- Focus on the carousel and press **Select** to enter gallery mode
- In gallery mode, browse all spotlight items in a fullscreen horizontal scroll
- Press **Select** on any item to view its details
- Press **Menu** to exit gallery mode

---

## Content Sections

The home screen displays content in horizontal scrolling rows. Each section serves a specific purpose:

### Continue Watching

Resume movies and TV episodes you've started but haven't finished. Shows your progress bar indicating how much you've watched.

### Next Up

The next unwatched episode from each TV series you're watching. Neptune prioritizes:
1. Shows where you're "caught up" (next episode is the latest available)
2. Shows you've watched most recently

### New Releases

Recently premiered content in your library, including:
- Movies released within the last few months
- New episodes from ongoing series
- New seasons of shows you follow

### Recently Added Movies

The latest movies added to your Jellyfin library, regardless of release date.

### Recently Added Shows

The latest TV shows and series added to your library.

### Recommended

Personalized suggestions based on your viewing history. When Jellyseerr is connected, this includes recommendations from both your library and requestable content.

### Coming Soon

Upcoming releases you've requested through Jellyseerr. Shows estimated release dates and current status.

**Requires:** Jellyseerr connection

### Because You Watched

Movie recommendations based on films you've recently watched. Each row shows similar movies to a specific title.

**Requires:** Home Sections plugin

### Custom Libraries

Any additional libraries you've created in Jellyfin beyond the standard Movies and TV Shows collections.

---

## Customizing Your Home Screen

You can personalize which sections appear and their order.

### Accessing Customization

1. Long-press any tab in the menu bar to open the Home Menu
2. Select **Customize Home Screen**
3. Or navigate to **Settings** > **Home Screen**

### Show/Hide Sections

Toggle the visibility of any section. Hidden sections won't appear on your home screen but can be re-enabled at any time.

### Reorder Sections

Drag sections up or down to change their position on the home screen. The Hero Spotlight always remains at the top.

### Section Availability

Some sections only appear on specific tabs:

| Section | Home | Movies | Shows |
|---------|------|--------|-------|
| Hero Spotlight | Yes | Yes | Yes |
| Continue Watching | Yes | Yes | Yes |
| Next Up | Yes | No | Yes |
| New Releases | Yes | Yes | Yes |
| Recently Added Movies | Yes | Yes | No |
| Recently Added Shows | Yes | No | Yes |
| Recommended | Yes | Yes | Yes |
| Coming Soon | Yes | Yes | Yes |
| Because You Watched | Yes | Yes | No |
| Custom Libraries | Yes | No | No |

---

## Content Cards

### Poster Cards

Used for movies and TV shows. Display:
- Poster image
- Title (on focus)
- Progress bar (if partially watched)

### Wide Cards

Used for Continue Watching and Next Up. Display:
- Backdrop/thumbnail image
- Episode title and number
- Series name
- Progress bar

### Focus Behavior

When you focus on a card:
- Card scales up slightly
- White border appears
- Additional details may appear
- Background may update to show item backdrop (if enabled in settings)

---

## Background Refresh

Neptune automatically refreshes content in the background:

- **Polling interval**: Every 10 seconds
- **Smart updates**: Only UI elements that changed are updated
- **Playback aware**: Refresh pauses during video playback

New content appears automatically without needing to manually refresh.

---

## Tips

- **Quick resume**: Focus on Continue Watching and press Play to immediately resume playback
- **Explore recommendations**: The Recommended section often surfaces hidden gems in your library
- **Keep it clean**: Hide sections you don't use for a cleaner home screen
