# Themes

Neptune features a comprehensive theming system with beautiful built-in themes and support for custom themes.

---

## Overview

Themes control the entire visual appearance of Neptune:

- Background colors and animations
- Text colors and opacity levels
- Accent colors for buttons and highlights
- Focus indicators and borders
- Player controls appearance
- Media quality badges

---

## Built-in Themes

Neptune includes six carefully crafted themes:

### Ocean (Default)

Deep blue underwater aesthetic with animated effects.

- **Style**: Calming, immersive
- **Background**: Animated gradient with light rays, particles, and caustics
- **Accent**: Teal/cyan tones
- **Best for**: Dark rooms, cinematic feel

### Midnight

Rich purples and deep blues for a luxurious feel.

- **Style**: Elegant, sophisticated
- **Background**: Animated purple gradient
- **Accent**: Purple/violet tones
- **Best for**: Evening viewing

### Mint

Fresh teal and purple combination.

- **Style**: Modern, vibrant
- **Background**: Animated teal gradient
- **Accent**: Mint green tones
- **Best for**: Bright, energetic interface

### Void

True black optimized for OLED displays.

- **Style**: Minimal, high-contrast
- **Background**: Flat black (no animation)
- **Accent**: Subtle gray tones
- **Best for**: OLED TVs, power saving, maximum contrast

### Nordic

Cool grays and icy blues inspired by Scandinavian design.

- **Style**: Clean, minimal
- **Background**: Animated icy blue gradient
- **Accent**: Ice blue tones
- **Best for**: Clean, modern aesthetic

### Volcano

Warm reds and oranges for a fiery atmosphere.

- **Style**: Bold, energetic
- **Background**: Animated warm gradient
- **Accent**: Orange/red tones
- **Best for**: Action movies, warm ambiance

---

## Changing Themes

### During Setup

When first setting up Neptune or adding a new profile, you'll choose a theme as the final step.

### From Settings

1. Navigate to **Settings** tab
2. Scroll to find theme options
3. Browse available themes
4. Focus on a theme to preview it live
5. Select to apply

### Per-Profile Themes

Each user profile can have its own theme preference. When switching profiles, Neptune automatically applies that user's selected theme.

---

## Animated Backgrounds

Most themes feature animated backgrounds with:

- **Gradient layers**: Smooth color transitions
- **Light rays**: Subtle animated beams
- **Particles**: Floating ambient elements
- **Wave effects**: Gentle motion
- **Caustics**: Water-like light patterns (Ocean theme)

### Disabling Animation

The **Void** theme uses a flat black background without animation, which:

- Reduces GPU usage
- Preserves true blacks on OLED displays
- Saves power on supported TVs
- Provides maximum contrast

---

## Theme Elements

### Focus Indicators

All themes use consistent focus behavior:

- **Border color**: Theme-specific accent color
- **Scale effect**: Subtle 5% enlargement on focus
- **Animation**: Smooth 150ms transitions

### Media Badges

Quality badges use consistent colors across themes:

| Badge Type | Color |
|------------|-------|
| 4K | Green |
| HDR10 | Orange |
| Dolby Vision | Purple |
| HDR10+ | Yellow |
| Atmos | Blue |
| DTS:X | Red |
| Lossless | Gold |

### Tab Bar

The menu bar adapts to each theme:

- Active tab uses theme accent color
- Inactive tabs use muted text
- Dividers match theme styling

### Player Controls

Playback UI elements follow the theme:

- Progress bar uses accent color
- Timestamps match text styling
- Control backgrounds use theme surfaces

---

## Custom Themes (Advanced)

Neptune supports importing custom themes via JSON.

### Importing a Custom Theme

1. Host your theme JSON file at a public URL
2. Go to **Settings** > **Themes**
3. Select **Import Custom Theme**
4. Enter the URL
5. Neptune validates and imports the theme

### Theme JSON Structure

Custom themes must include:

- `id`: Unique identifier
- `name`: Display name
- `author`: Creator name
- `version`: Theme version
- `useAnimatedBackground`: Enable/disable animation
- `colors`: Complete color definitions

### Required Color Definitions

| Category | Colors |
|----------|--------|
| **Base** | background, surface, overlay |
| **Text** | textPrimary, textSecondary, textTertiary, textDisabled |
| **Accent** | accent, accentSecondary |
| **Status** | success, warning, error |
| **Focus** | focusBorder, focusBackground |
| **Selection** | selected, selectedText |
| **Animated Background** | deepOcean, midOcean, surfaceGlow, bioluminescent |
| **Hero Gradient** | start, end, startPoint, endPoint |
| **Progress Bar** | background, foreground, buffered |
| **Tab Bar** | background, inactiveText, activeBackground, activeText, divider |
| **Menu** | background, rowBackground, rowFocusedBackground, divider |
| **Media Badges** | All resolution, HDR, and audio badge colors |
| **Playback Controls** | All player UI colors |

### Color Format

Colors use RGBA values from 0.0 to 1.0:

```json
{
  "red": 0.15,
  "green": 0.55,
  "blue": 0.65,
  "opacity": 1.0
}
```

---

## Tips

- **Preview before applying**: Focus on themes to see them in action
- **Consider your room**: Dark themes work better in dim environments
- **OLED optimization**: Use Void theme on OLED TVs for true blacks
- **Consistency**: Theme affects all screens for a cohesive experience
- **Per-user themes**: Set different themes for family members
