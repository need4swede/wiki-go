---
order: 50
---

# Deleting Media

Delete removes a movie, show, season, episode, or video from your media server, along with its files.
It cannot be undone.

## Who Can Delete

Delete appears for administrators and for any account your server allows to delete media.
On Jellyfin and Emby, that is the user permission **Allow media deletion from**, set for all libraries or for chosen ones.
Plex only allows the server owner to delete media.
Silo does not support deleting media at this time.

The server still decides each time.
If you are allowed to delete in some libraries but not others, Delete shows everywhere and the server refuses where you have no permission.
If it refuses, Neptune asks you to talk to your server's administrator.
An administrator who is refused is told to turn on their own deletion permission in the server's user settings.

## Where to Find It

| Where | How |
|-------|-----|
| A movie, show, season, or episode page | Open **Manage**, then choose **Delete** |
| A card on Home, Search, or in the Library | Hold the card, then choose **Delete** |
| An episode or season on a show page | Hold it, then choose **Delete** |

**Manage** appears whenever Delete is available.
Delete is not offered for collections, playlists, people, folders, music albums, music artists, or titles that exist only in Seerr.

## Confirming

Neptune always asks you to confirm before deleting.
Deleting a show or season also deletes every season and episode under it.
A movie is deleted with its files, including every version of it.
Neptune cannot delete a single version.

When a delete finishes, the item leaves your pages.
Open pages for a deleted item close.

## When a Delete Fails

If the server accepts the request but cannot remove the files, Neptune says so.
This usually means the server has no permission to change that library's folder, or the folder is read-only.
Check the folder's permissions on the server, then try again.
