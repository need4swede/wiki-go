---
order: 50
---

# Image Cache

Manage how Neptune stores and preloads images for faster browsing.



## Download All Images

When enabled, Neptune proactively downloads all library images in the background. This provides:

- **Faster navigation**: Images load instantly as you browse
- **Offline viewing**: Browse your library without network requests
- **Reduced server load**: Images fetched once, served from local cache

### Status Indicators

| Status | Meaning |
|--------|---------|
| **Disabled** | Images downloaded on-demand as you browse |
| **Enabled** | All images cached locally |
| **Syncing** | Currently downloading images |



## Sync Progress

When downloading all images, you'll see:

| Field | Description |
|-------|-------------|
| **Phase** | Current sync phase (movies, shows, etc.) |
| **Progress** | Percentage complete |
| **Current Item** | Name of item currently downloading |
| **Items** | Completed / total count |

Sync runs in the background - you can continue using Neptune normally.



## Cache Size

Shows the current size of cached images on your device.

Navigate right to the **Clear** button (trash icon) to delete all cached images.



## Clearing the Cache

When you clear the cache:

- All downloaded images are deleted
- Images will re-download as you browse
- The "Download All Images" toggle remains unchanged
- No progress or playback data is affected

### When to Clear

- After major library changes
- To free up device storage
- If images appear corrupted or outdated
- If cache grows unexpectedly large



## System Behavior

The image cache uses standard tvOS cache storage. The system may automatically clear the cache when device storage is low. This is normal behavior - images will simply re-download as needed.



## Tips

- **Large libraries**: Enable Download All Images overnight for initial sync
- **Limited storage**: Keep disabled, let images load on-demand
- **Multiple users**: Cache is shared across profiles on the device
