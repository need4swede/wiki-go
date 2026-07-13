---
order: 30
---

# Item Detail Layouts

Choose how movie and TV show detail pages are presented. Three layouts ship, each with the same data but a different way of arranging it. Your selection syncs across every device signed in to the same profile.



## The Layouts

| Layout | Best For |
|--------|----------|
| **Detailed** | The traditional Neptune look. Poster on the left, full info column on the right, every metadata pill and quality badge visible. |
| **Immersive** | Cinematic. The backdrop fills the screen with the logo floating top-right and a glass info card pinned bottom-left next to the poster. |
| **Minimal** | Backdrop-first. No poster, just title, metadata, and play controls anchored at the bottom of the screen. |

Each layout uses the same backdrops, poster art, and metadata; only the composition changes.



## Choosing a Layout

**During onboarding:** a gallery picker lets you browse the three layouts before committing.

**From Settings:**

1. Go to **Settings > User Preferences > Appearance > Layouts**
2. Find **Item Detail Page**
3. Switch between Detailed, Immersive, and Minimal

The change applies instantly across every detail page.



## Description Toggles

The **Minimal** and **Immersive** layouts share two toggles that trim on-screen text:

| Toggle | Effect |
|--------|--------|
| **Item Description** | Hides the overview paragraph and genre line on movie and show pages. Title, metadata pills, and play controls stay. |
| **Episode Description** | Hides the episode synopsis in the episode gallery. Useful for spoiler-free browsing. |

Both toggles only appear when one of the full-bleed layouts is selected. The Detailed layout always shows full descriptions.



## Immersive Layout Details

The Immersive layout adapts to whatever artwork is on screen:

- **Backdrop-aware glass card.** When the backdrop is bright (snow scenes, white sets), a frosted panel appears behind the text so it stays legible. On darker artwork the glass fades out.
- **Per-letter drop shadows.** Title and description text carries a drop shadow that strengthens on bright backdrops.
- **Long titles auto-shrink.** Titles like The Lord of the Rings: The Return of the King scale down to stay on one line.
- **Picker focus mode.** When the version picker or resume pill opens, the metadata fades back so the picker reads clearly.



## Big Picture Mode

A separate switch on the same Layouts tab. **Big Picture Mode** turns detail sections into full-screen pages with larger cards and paging navigation, built for sitting further from the screen. It works with any of the three layouts.



## Cross-Platform Sync

Layout selection is a per-profile preference. Sign in on a second device and the same layout applies automatically. Server administrators using the [Neptune MDM](/plugins/mdm) plugin can set a default layout for all users.
