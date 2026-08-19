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

Watch progress from [Coming Soon](/browsing/home-screen/coming-soon) on the Home screen, or the requests screen below.
You can cancel your own pending requests any time.

## My Requests

Everyone gets a **My Requests** screen (from Discover or **Settings > Seerr**) to track and cancel their requests, filterable by **Pending**, **Approved**, **Processing**, **Available**, or **All**.

## Managing Requests (Admins)

Admins get **Manage Requests** instead, with an **All Requests / My Requests** toggle:

- **Approve** or **Decline** pending requests, right from the list or from the item's detail page
- **Remove** finished or stale requests
- See who requested what and when

A banner at the top of Discover appears whenever requests are waiting on you.

## Quality Preferences

With the advanced requests permission, **Settings > Seerr > Seerr Preferences** lets you set default quality profiles for movie and TV requests, or auto-select your preferred profile so the picker never asks.
