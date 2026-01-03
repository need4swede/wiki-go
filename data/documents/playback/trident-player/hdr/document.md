---
order: 20
---

# HDR Support

Trident provides full HDR support with proper color management.

---

## Supported Formats

| Format | Support | Description |
|--------|---------|-------------|
| SDR | Full | Standard dynamic range |
| HDR10 | Full | Static HDR metadata |
| HDR10+ | Full | Dynamic HDR metadata |
| HLG | Full | Hybrid Log-Gamma |
| Dolby Vision | Full | Profile 5/8 |

---

## How It Works

- Metal shaders handle color space conversion
- Transfer functions applied correctly (PQ, HLG, gamma)
- Display metadata passed for proper tone mapping
- No color banding or incorrect colors

HDR content is automatically detected and your display configured accordingly.

---

## Troubleshooting

**Video plays but screen is black:**

- HDR content on SDR display may appear black
- Try disabling HDR in Apple TV settings temporarily
