---
order: 10
---

# Compass

Compass gets you to pages, libraries, searches, and media without backing out through every screen.
Apple TV uses a compact pill and an expanded palette.
iPhone offers three styles: a Sidebar, a Pill, and a Dial.
It also has an optional [Live Activity](/browsing/navigation/compass/live-activity).
iPad keeps its own navigation pill and has no Compass.
Compass is unavailable during video playback.

## Apple TV Compass

Press **Play/Pause** while browsing.
The top-right pill names the page you're on and opens into a row of shortcuts, with your current destination highlighted when it's in that row.

| Action | Control |
|--------|---------|
| Open Compass | Press Play/Pause |
| Move between shortcuts | Left / Right |
| Change rows | Up / Down |
| Open a shortcut | Select |
| Expand to the full palette | Press Play/Pause again, or select **Show All** |
| Close the palette | Play/Pause or Menu / Back |
| Close the compact pill | Menu / Back |

The expanded palette shows your rows together, with artwork and progress on supported media shortcuts.
Choosing a shortcut closes Compass and opens its destination.
An unavailable shortcut keeps its place and explains why it can't open when selected.

Turn on **Always Expand Compass** in its settings to go straight to the palette.

### Navigation from the Top of a Page

Press Up from a page's topmost control to open the compact pill on its Navigation row.
Left/Right moves through the pages, Select opens one, and Down closes Compass and returns focus to the page.
This path stays compact even with Always Expand Compass enabled.
Play/Pause expands it into the full palette.

Back at a page's root also opens Compass unless your Exit App setting says to leave Neptune.

### Switch Accounts

With more than one account on this Apple TV profile, press Up from the compact pill's first row.
**Switch Account** shows the other accounts, most recently used first.
Select one to switch, or press Down to return to shortcuts.

The expanded palette has an account control too.
An account PIN is still required when that account has one.

### Search from Anywhere

Select Search to open the search keyboard, then type or dictate.
Neptune opens Search with your query.

### Send Logs

Select the diagnostic info button, or hold Play/Pause for one second while browsing or in Compass.
The sender asks you to confirm, then shows a reference code when the upload completes.
See [Diagnostics](/settings/diagnostics#send-logs).

## Rows, Pages, and Shortcuts

Compass calls them **rows** on Apple TV and **pages** on iPhone.
You can have up to 12, with up to eight saved shortcuts in each ordinary row or page.
Each can have its own name and icon.

A shortcut can open:

- a Neptune page;
- a specific library;
- a saved search;
- a media item's details; or
- supported direct playback.

The **Navigation** row is always the first row, on Apple TV and iPhone.
It holds the app's pages together, including the page you're on.
Its pages can be reordered and renamed, but can't be removed or moved to another row.
Nothing can be placed above it.
Optional pages still follow your navigation visibility settings and account access.
You can add separate copies of page shortcuts to other rows.

Compass Shortcuts are separate from [Pins](/library/shortcuts).
Pins bookmark library content; Compass holds the quick routes you choose.

## Live Content

A row or page can fill itself with current content:

| Type | What It Shows |
|------|---------------|
| **Recently Viewed** | The last 20 media detail pages you opened, newest first |
| **Home Section** | Continue Watching, Next Up, Favorites, New Releases, Recently Added, Recommended, Collections, Libraries, or one of your Custom Sections |

Live rows contain their source's items instead of saved shortcuts.
Each source can be added once, and the first row or page stays a shortcut page.
Apple TV shows up to 20 live items in the palette and five in the compact pill; iPhone shows up to eight per live page.

Recently Viewed belongs to the account.
With Jellyfin Backup & Sync it follows you to your other devices; other backends keep it on the device.
Remove one item from its menu, or use **Clear Recently Viewed** in that row's settings.

Home Section uses the library content from the matching Home row.
Some hidden sections can load their own content; others ask you to show the section on Home first.
Coming Soon, Because You Watched, Downloads, and Pins aren't offered as live Home sections.

## Editing Compass

Open **Settings > Account > Compass**.
On Apple TV, the miniature on the left previews the row you're editing.
Choose a row to rename it, change its icon, or manage what it contains.
Use **Add a Row** to add saved shortcuts, a template, Recently Viewed, or a Home Section.

In the expanded Apple TV palette, use **Rearrange** or hold Select on a tile to enter editing.
You can move saved shortcuts within and between ordinary rows.
Live rows move as a whole and don't accept saved shortcuts.
The Navigation row keeps its own pages together.

On iPhone, the same settings page offers **New Page**, templates, Recently Viewed, and Home Section.
Use Edit and the page's controls to reorder pages or shortcuts, rename them, move shortcuts between pages, or delete an ordinary page.
The first page keeps at least one shortcut.

Compass layout changes follow the account through Settings Sync when it's available.

## iPhone Compass

Choose how iPhone shows Compass in **Settings > Account > Compass > Style**.
The three styles use the same pages, rows, and shortcuts, so switching only changes how you reach them.
**Sidebar** is the default.

| Style | How it works |
|-------|--------------|
| **Sidebar** | A small tab sits at the edge of the screen, just below the middle. Pull it out or tap it to see one list of your Navigation pages, then every Compass row, with titles shown as logos. The row's name appears above the list as you scroll through it |
| **Pill** | A slim bar of page icons sits at the bottom of every page. Tap a page to go there. Swipe across the bar to step between pages, and swipe up for your other Compass rows. It starts expanded when Neptune opens, and collapses when you scroll or move to another page |
| **Dial** | A round Compass button sits in the bottom corner. It opens a ring of your pages and a ring of choices for the page you pick, such as a library's titles |

Your pages stay in the order you set under **Settings > Account > Compass**.
Administrators can also set the style from the Neptune plugin.

### Sidebar

Swipe from the edge of the screen, or tap the tab, to open it.
The tab stays where it is when you scroll.
It works on every page, including the episode deck.
Scroll the list to move through your rows, and tap a title to open it.

### Pill

The Pill shows Settings, Home, and Search, with two more pages from your Navigation row on either side of Home.
The page you're on shows its name in an accent capsule.
Hold a page that has choices, such as Home, Movies, or Shows, to pick a filter or library.

### Dial

The Dial's button appears on every page.
On an item's page, it appears once you scroll past the Play row.
Swipe back from the edge of a main page to open the dial, or tap the button.
Drag around the ring to move through your pages, then tap one, or tap its preview to choose it.
Hold a page to rearrange the row.
Movies and Shows open their libraries on an outer ring.

### The Map

In every style, pinch the screen, or hold exactly two fingers down for about 0.6 seconds, to zoom out to the **Map**.
The Map shows the page you're on and your levels of pages, rows, and accounts.
Tap a level to go back to it.
The two-finger hold works anywhere in the signed-in app, in portrait or landscape.

### Interface Stance

**Settings > Account > Appearance > Layouts > Stance** chooses **Regular** or **Goofy**.
Goofy moves the Sidebar and the Dial's button to the left side of the screen.
Back works the same way in both stances.

## Compass Shortcuts on iPhone

Manage shortcuts inside a page under **Settings > Account > Compass**.
A fresh setup starts with Settings, Home, Library, and Search on its first page.
Labels, symbols, and order can be changed.

**Settings > Account > Compass** includes a preview.
The optional Live Activity uses the shortcuts on the **first page**; additional and live pages stay in Neptune's palette.
See [Compass Live Activity](/browsing/navigation/compass/live-activity) for setup and system controls.

## Video Playback

Compass stays out of video playback.
On Apple TV, Play/Pause controls the player.
On iPhone, Compass and its gestures stand down.
Exit the player before opening Compass.
