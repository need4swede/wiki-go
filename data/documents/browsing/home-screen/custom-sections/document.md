---
order: 140
---

# Custom Sections

Beyond the built-in rows, Neptune lets you build your own Home sections.
A Custom Section pulls from the libraries you choose, narrows the results with filters, and takes its own place among your other Home rows.

## Creating a Section

Open the Home layout editor:

| Platform | How |
|----------|-----|
| **tvOS** | Long-press the Home tab and select **Edit Home Screen**, or go to **Settings > Home > Sections > Customize Home Screen Layout** |
| **iOS / iPadOS** | Select **Options** on the Home tab, then **Edit Layout** |

From the editor, choose **Add Section**. The builder has four steps: Starting Point, Libraries & Media, Filters, and Preview & Save.

**Starting Point** offers a few quick templates, Genres, Era, Person, or Collection, each of which jumps straight to that filter. Choosing **Custom** skips the template and lets you build a section from any combination of filters yourself.

## Libraries and Media Types

Choose one or more libraries to pull from, or leave every library included. Then pick which media types the section can contain: movies, series, seasons, episodes, or music videos.

## Filters

Refine the section with any combination of:

| Filter | What it does |
|--------|--------------|
| **Genres** | Match **All** of the selected genres, or **Any** of them |
| **Person** | Only titles featuring a chosen actor, director, or other person |
| **Collection** | Only items belonging to a chosen collection |
| **Year** | A single decade, or a custom year range |
| **Watched** | Watched only, unwatched only, or either |
| **Favorite** | Favorites only, or either |

## Sort Order and Row Size

Sort by **Date Added**, **Release Date**, **Title**, **Community Rating**, or **Random**, ascending or descending where that applies. Row size is 10, 20, 30, 40, or 50 posters.

Choosing **Random** gives the section a fresh selection each time you launch the app, and it draws again every hour while Home stays open.

## Placement and See All

Name the section, then place it among your other Home rows, including directly before or after a specific built-in or custom section.

A section with more matches than its row size gets a trailing **See All** card. Selecting it opens the full, filtered result set in a browse grid. Under Random sorting, that grid keeps the same order as the row until the next hourly refresh.

## Syncing

With the [Neptune Plugin Suite](/plugins) installed, Custom Sections are backed up and synced across your devices. Create a section on your iPhone and it shows up in the same position the next time you open Neptune on Apple TV.

## For Server Administrators

Administrators can also build Custom Sections through Neptune's MDM suite and add them to [Server Defaults](/plugins/mdm/server-defaults), a reusable [Server Profile](/plugins/mdm/server-profiles), or an individual user's managed Home layout. Existing library permissions are always respected, so a managed section never surfaces content a user doesn't have access to.

Building and assigning sections from the Jellyfin plugin dashboard is free for every administrator. Using the same native section builder inside Neptune on Apple TV, iPhone, and iPad to create or edit sections for other users requires [Neptune Pro](/neptune-pro) and Jellyfin administrator authorization.
