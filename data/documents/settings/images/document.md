---
order: 50
---

# Images

Manage how Neptune stores and preloads artwork for faster browsing.



## Download All Images

When enabled, Neptune downloads your entire library's artwork in the background:

- **Faster navigation**: images are already there as you browse
- **Reduced server load**: fetched once, served from the local cache

Progress shows live while syncing (current phase, item, and count). Sync runs in the background, so you can keep using Neptune. For large libraries, let the first pass run overnight.



## Cache Breakdown

The cache size is broken down by image type (posters, backdrops, logos, thumbnails) with a total, so you can see where the space goes.

| Action | Description |
|--------|-------------|
| **Clear** | Delete all cached images. They re-download as you browse |
| **Clean Orphaned Images** | Remove artwork for items no longer in your library |



## Auto-Refresh Missing Images

On by default. When an item's artwork fails to load or goes missing, Neptune quietly re-fetches it rather than leaving a blank card.



## System Behavior

The image cache uses standard tvOS cache storage. The system may clear it when device storage runs low; images re-download as needed. The cache is shared across profiles on the device.
