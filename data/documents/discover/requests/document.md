---
order: 40
---

# Requests

Request movies and shows through Seerr, track their progress, and (for admins) approve them, all without leaving Neptune.

## Requesting a Movie

Open anything requestable in Discover or Search and press **Request**.
If nothing needs deciding, the request submits straight away.
Requests route to your Radarr setup through Seerr.

## Requesting a TV Show

Shows give you more control:

1. Press **Request**
2. **Choose Seasons**: all seasons, or pick individual ones
3. **Choose Quality** (only shown if your Seerr account has the advanced requests permission)
4. Confirm

Seasons already in your library, already requested, or processing are locked with their status shown, so you can't double-request.
If a show is partially available, **Request More** covers the rest.

## Request Status

| Status | Meaning |
|--------|---------|
| **Pending approval** | Waiting for an admin |
| **Approved** | Accepted, waiting to process |
| **Processing** | Being grabbed by Radarr or Sonarr |
| **Completed** | Available in your library |
| **Declined** | Not this time |
| **Failed** | Something went wrong server-side |

Watch progress from **On the Way** in Discover, [Coming Soon](/browsing/home-screen/coming-soon) on the Home screen, or the requests screen below.
You can cancel your own pending requests any time.

## On the Way

**On the Way** in Discover shows your requests that haven't arrived yet.
Each is a wide card with one word for its state:

| Word | Meaning |
|------|---------|
| **Waiting** | Waiting for approval |
| **Searching** | Approved, and a release is being searched for |
| **Downloading** | On its way, with a progress bar on the card |
| **Partial** | Some of it has arrived |
| **Declined** | The request was declined |
| **Failed** | Something went wrong server-side |

Titles that have arrived leave the row.
Select a card to see more.
If you can manage requests, an approval card comes first and shows how many are waiting.
The row is hidden when you have nothing on the way.

## Request & Track

Select a request on its way, or a **Requested** button, to open **Request & Track**.
It shows where the title stands as a timeline, with the finished steps filled in and the current step marked:

1. **Requested**
2. **Approved**
3. **Searching**
4. **Downloading**, with progress
5. **Ready**

**Where to Watch** lists the streaming services that carry the title in your region, or tells you it isn't on one.
The page updates while it is open.
Select **Open Page** to go to the title, and Back returns you to the request.
New requests are still made from the title's own page.

## My Requests

Everyone gets a **My Requests** screen (from Discover or **Settings > Account > Seerr**) to track and cancel their requests, filterable by **Pending**, **Approved**, **Processing**, **Available**, or **All**.

## Managing Requests (Admins)

Admins get **Manage Requests** instead, with an **All Requests / My Requests** toggle:

- **Approve** or **Decline** pending requests, right from the list or from the item's detail page
- **Remove** finished or stale requests
- See who requested what and when

On Apple TV, a **Manage Requests** icon in Discover's header opens the list, and the first card in **On the Way** counts what is waiting on you.
On iPhone and iPad, the same card appears on Today and on **Requests & Coming Soon**, and **Review** opens the list.

## Quality Preferences

With the advanced requests permission, **Settings > Account > Seerr > Seerr Preferences** lets you set default quality profiles for movie and TV requests, or auto-select your preferred profile so the picker never asks.

## Requests and Coming Soon on iPhone and iPad

**Requests & Coming Soon** collects your requests and what is about to release.
Chips at the top jump to **Today**, **Requests**, or **Coming Soon**.

**Your Requests** lists each request with its artwork, a status, the time left or seasons requested, and a progress track.
**History** opens your own request list.
See [Coming Soon](/discover/coming-soon) for the other half of the page.
