# Discover

The Discover tab lets you browse trending content and request new movies and TV shows to be added to your library. This feature requires Jellyseerr to be configured.



## Overview

When connected to Jellyseerr, the Discover tab shows:

| Section | Description |
|---------|-------------|
| **Trending Now** | Currently popular movies and TV shows |
| **Popular Movies** | Top-rated movies |
| **Popular TV Shows** | Top-rated TV series |
| **Coming Soon** | Upcoming movie releases |

Content is sourced from TMDb (The Movie Database) and shows availability status based on your library and existing requests.



## Browsing Content

### Content Cards

Each item displays:
- Poster image
- Title and year
- Media type badge (Movie or TV)
- Status badge (Available, Requested, etc.)

### Status Badges

| Badge | Color | Meaning |
|-------|-------|---------|
| **Available** | Green | Already in your library |
| **Requested** | Yellow | Request pending approval |
| **Processing** | Blue | Being downloaded |
| **Requestable** | Theme accent | Can be requested |



## Viewing Details

Select any item to view its full details:

- **Overview**: Plot summary and description
- **Cast & Crew**: Actors, directors, and production team
- **Media Info**: Release date, runtime, genres, ratings
- **Seasons** (TV only): Browse individual seasons and episodes



## Requesting Content

### Requesting Movies

1. Select a movie to view its details
2. Press the **Request** button
3. The request is sent to your Radarr instance via Jellyseerr
4. Status updates to "Requested"

### Requesting TV Shows

1. Select a TV show to view its details
2. Press the **Request** button
3. Choose which seasons to request:
   - **All Seasons**: Request the entire series
   - **Specific Seasons**: Select individual seasons
4. The request is sent to your Sonarr instance via Jellyseerr

### Request Status

After requesting, you can track status:
- **Pending**: Awaiting approval (if auto-approve is disabled)
- **Approved**: Approved and queued for download
- **Processing**: Currently being downloaded
- **Available**: Downloaded and ready to watch



## Request Management (Admins)

If you're a Jellyseerr administrator, you'll see a **Pending Requests** banner when users have made requests that need approval.

### Approving Requests

1. Tap the pending requests banner
2. Review the list of pending requests
3. For each request, choose:
   - **Approve**: Send to Radarr/Sonarr for download
   - **Decline**: Reject the request

### Request Settings

Configure auto-approval and user permissions in Jellyseerr's web interface.



## Setting Up Jellyseerr

If you haven't connected Jellyseerr yet, the Discover tab shows a setup prompt.

### Quick Setup

1. Select **Connect to Jellyseerr**
2. Enter your Jellyseerr server URL
3. Neptune attempts automatic login with your Jellyfin credentials
4. If auto-login fails, enter your Jellyfin password

### URL Examples

- Local IP: `http://192.168.1.100:5055`
- Domain: `https://jellyseerr.yourdomain.com`

Neptune will suggest a URL based on your Jellyfin server address.

### Troubleshooting

**Can't connect:**
- Verify Jellyseerr is running and accessible
- Check the URL includes the correct port (default: 5055)
- Ensure your Jellyfin account exists in Jellyseerr

**Login fails:**
- Jellyseerr uses your Jellyfin credentials
- Password must match your Jellyfin account
- Check that Jellyfin authentication is enabled in Jellyseerr



## Tips

- **Check availability first**: Items marked "Available" are already in your library - no need to request
- **Request strategically**: Consider storage space when requesting full TV series
- **Track requests**: Coming Soon section on the Home tab shows your pending requests
- **Auto-refresh**: Discover content refreshes every 30 seconds to show updated statuses
