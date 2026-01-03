---
order: 20
---

# Custom Themes

Import your own themes via JSON.

---

## Importing a Theme

1. Host your theme JSON at a public URL
2. Go to **Settings** > **Themes**
3. Select **Import Custom Theme**
4. Enter the URL
5. Neptune validates and imports the theme

---

## Theme Structure

Required fields:

| Field | Description |
|-------|-------------|
| `id` | Unique identifier |
| `name` | Display name |
| `author` | Creator name |
| `version` | Theme version |
| `useAnimatedBackground` | Enable/disable animation |
| `colors` | Complete color definitions |

---

## Color Categories

| Category | Colors |
|----------|--------|
| Base | background, surface, overlay |
| Text | textPrimary, textSecondary, textTertiary |
| Accent | accent, accentSecondary |
| Status | success, warning, error |
| Focus | focusBorder, focusBackground |
| Animated Background | deepOcean, midOcean, surfaceGlow |
| Tab Bar | background, activeBackground, activeText |
| Playback Controls | All player UI colors |

---

## Color Format

RGBA values from 0.0 to 1.0:

```json
{
  "red": 0.15,
  "green": 0.55,
  "blue": 0.65,
  "opacity": 1.0
}
```

---

## Disabling Animation

Set `useAnimatedBackground: false` for:

- Reduced GPU usage
- True blacks on OLED
- Power savings
