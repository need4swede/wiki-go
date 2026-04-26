---
order: 20
---

# Custom Themes

Import your own themes via JSON.



## Importing a Theme

1. Host your theme JSON at a public HTTPS URL (GitHub raw, Gist, your own server, etc.).
2. Go to **Settings > Profile > Preferences > Appearance**.
3. Select **Import Custom Theme**.
4. Paste the URL and select **Import**.
5. Neptune downloads, validates, and adds the theme to your picker.

The original URL is remembered, so you can refresh the theme later from the same source.



## Required Fields

| Field | Description |
|-------|-------------|
| `id` | Stable unique identifier (lowercase, no spaces). |
| `name` | Display name shown in the picker. |
| `colors` | Complete color palette (see below). |

### Optional Top-Level Fields

| Field | Default | Description |
|-------|---------|-------------|
| `author` | `null` | Credit shown next to the theme. |
| `version` | `"1.0"` | Theme version string. |
| `useAnimatedBackground` | `true` | Set `false` for a flat background (true black on OLED). |
| `opacities` | built-in defaults | Override the standard opacity scale. |
| `animations` | built-in defaults | Override animation timings. |
| `borders` | built-in defaults | Override border widths and corner radii. |

`isBuiltIn` in the JSON is ignored — Neptune always marks user-imported themes as not built-in.



## Color Palette (`colors`)

| Group | Fields |
|-------|--------|
| Backgrounds | `background`, `surface`, `overlay` |
| Text | `textPrimary`, `textSecondary`, `textTertiary`, `textDisabled` |
| Accents | `accent`, `accentSecondary` |
| Status | `success`, `warning`, `error` |
| Focus & Selection | `focusBorder`, `focusBackground`, `selected`, `selectedText`, `toggleOn` |
| Media badges | `mediaBadges` (resolution, HDR, audio chips) |
| Hero gradient | `heroGradient` (start, end, startPoint, endPoint) |
| Animated background | `animatedBackground` (deepOcean, midOcean, surfaceGlow, bioluminescent) |
| Progress bar | `progressBar` (background, foreground, buffered) |
| Tab bar | `tabBar` (background, inactiveText, activeBackground, activeText, divider) |
| Menus | `menu` (background, rowBackground, rowFocusedBackground, divider) |
| Player overlay | `playbackControls` (full scrubber, button, and menu styling) |

`toggleOn` is optional — set to `null` to inherit `accent`.

A full field-by-field reference (with defaults, types, and a complete example) lives next to the JSON files at [`docs/themes/README.md`](https://github.com/need4swede/neptune/blob/main/docs/themes/README.md).



## Color Format

Each color is an RGBA object. Channels are `0.0`–`1.0`:

```json
{
  "red": 0.15,
  "green": 0.55,
  "blue": 0.65,
  "opacity": 1.0
}
```

To convert from hex: divide each 0–255 channel by 255 (e.g. `#FF8000` → `red: 1.0, green: 0.502, blue: 0.0`). The loader does not accept hex strings directly.



## Disabling Animation

Set `useAnimatedBackground: false` for:

- True blacks on OLED panels
- Reduced GPU usage
- Power savings

See the bundled [`void.json`](https://github.com/need4swede/neptune/blob/main/docs/themes/void.json) for a worked example.



## Starter Templates

Each built-in theme has a verified JSON mirror you can copy and edit:

- [Ocean](https://github.com/need4swede/neptune/blob/main/docs/themes/ocean.json) (default)
- [Midnight](https://github.com/need4swede/neptune/blob/main/docs/themes/midnight.json)
- [Mint](https://github.com/need4swede/neptune/blob/main/docs/themes/mint.json)
- [Nordic](https://github.com/need4swede/neptune/blob/main/docs/themes/nordic.json)
- [Volcano](https://github.com/need4swede/neptune/blob/main/docs/themes/volcano.json)
- [Nebula](https://github.com/need4swede/neptune/blob/main/docs/themes/nebula.json)
- [Void](https://github.com/need4swede/neptune/blob/main/docs/themes/void.json) (true black, no animated background)
