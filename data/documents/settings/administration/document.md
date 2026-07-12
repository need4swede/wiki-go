---
order: 80
---

# Administration

Server administration from the couch. Admin accounts get an **Administration** entry under Profiles in Settings, covering the user management basics that normally require the Jellyfin dashboard.



## Passcode

Administration can be locked behind a 4-digit passcode, so kids poking around Settings can't get into the admin panel. You'll be asked to set one up, or you can skip it.



## User Management

Select any user on the server to manage their account:

### Account

| Action | Description |
|--------|-------------|
| **Set Password** | Change the user's Jellyfin password |
| **Administrator** | Grant or revoke admin rights |
| **Disable Account** | Block sign-ins without deleting the account |

### Streaming

**Internet Streaming Bitrate Limit** caps the user's remote streaming quality (Unlimited, or 1 to 120 Mbps). The limit applies account-wide, on every client they use.

### Parental Controls

Make any account a child account:

| Setting | Description |
|---------|-------------|
| **Make this a child account** | Hides Discover and the request catalog, and only shows content within the age rating, on every device they sign in on |
| **Library Access** | All libraries, or an allow-list |
| **Age Rating** | The content rating ceiling, or No Limit |

Child accounts pair with the [Neptune MDM](/plugins/mdm) plugin, which can also flag child accounts server-side so the restriction applies before the device even syncs settings.
