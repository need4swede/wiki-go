---
order: 30
---

# Server Profiles

Server Profiles are a live, reusable settings-profile library. An administrator creates a profile once, then assigns it automatically to every matching device on the server or adds it only to selected users. Definitions remain on the server instead of being copied into each user's personal backup.

The library can hold up to 12 Server Profiles, and a user's effective list can also include up to 12 personal profiles.

## What a Server Profile Controls

A Server Profile combines several independent choices:

| Part | What it controls |
|------|------------------|
| **Definition** | The settings and values stored once on the server |
| **Scope** | Whether the profile is available to everyone through a global assignment or only to selected users |
| **Automatic assignment** | Which device classes use the profile while set to Auto |
| **Required** | Whether matching devices must remain on that profile |
| **Lock** | Which individual settings, if any, the recipient cannot change |

The definition is shared, but assignment and policy can be global or specific to one user. Changing the shared definition updates every recipient in its scope without copying the profile into each personal backup.

## Required Profiles and Locked Settings

> **Required** and **Lock** do different jobs. Required keeps a matching device on a profile; Lock makes an individual setting read-only. Either can be used without the other, so an optional profile may contain locked settings and a Required profile may leave every setting customizable.

| Profile assignment | Individual setting | Recipient experience |
|--------------------|--------------------|----------------------|
| Optional | Unlocked | A Pro recipient may choose the profile and customize the setting |
| Optional | Locked | A Pro recipient may choose the profile, but the setting is read-only while that profile is active |
| Required | Unlocked | A Free or Pro recipient must use the profile but may customize the setting |
| Required | Locked | A Free or Pro recipient must use the profile, and that setting is read-only |

Locks are evaluated per setting. The same profile can contain both locked and unlocked members. An explicit Lock outranks a conflicting Device Override while preserving that override underneath; requirement alone does not change a setting's value priority.

## Assigning Profiles

### Globally by Device Class

Use **Apply Automatically to All Users On** to assign a profile globally by device class. For example, assign an **iPhone** Server Profile to iPhone while leaving iPad, Apple TV, and Mac unassigned. Every matching iPhone in Auto uses that profile, while unassigned devices use their ordinary settings, initially seeded from [Server Defaults](/plugins/mdm/server-defaults) when configured.

Each device class has at most one global assignment. Reassigning it names the current and replacement profiles and asks for confirmation.

### For One User

Users see only the Server Profiles in their scope: profiles with a global device assignment and profiles explicitly added to them. They cannot rename, edit, reorder, or delete server-owned definitions. A personal automatic assignment is more specific than an optional global assignment, and a per-user required assignment is more specific than a global required assignment.

To assign a shared profile to one user, select that user under **Managing**, open **Settings Profiles**, and choose **Add Profile**. Select a reusable Server Profile or create a new personal one. Its server-owned definition—name and stored values—remains read-only in the per-user scope, and inherited locks cannot be removed there. A recipient can still customize unlocked values through Device Overrides without changing that shared definition.

With no device selected, an added Server Profile is manual-only. **Apply Automatically for This User On** activates it for selected device classes. **Require This Profile** and additional per-user locks are optional. Only the user's scope, assignments, and extra policy are saved; the definition continues to live once in the Server Profiles library.

**Remove from User** removes an explicitly added profile and that user's assignments without deleting the reusable definition. A globally assigned profile must instead be changed from the Server Profiles target.

## Creating and Editing Profiles

### Add Settings

The Add Setting flow uses Neptune's familiar Settings hierarchy instead of a flat technical list. Categories, sections, dividers, and nested pages provide the same context as the main Settings app. Select a setting row, choose the value or state in the modal, and confirm to add it to the profile.

On Apple TV, returning from a nested page restores focus to the originating row so another Back press does not accidentally exit the app. Leaving an edited profile with unsaved changes offers **Save** to save and exit, **Discard Changes**, and **Cancel**.

### Lock Several Settings

Both the native editor and plugin dashboard provide **Lock All** and **Unlock All** shortcuts for the settings already added to the profile. These bulk actions affect locks editable at the current scope; inherited server locks remain protected. Individual Lock switches can still be mixed freely with either an optional or Required assignment.

### Seerr Settings

Eligible Seerr profile settings include **Active Seerr URL** and **Language Preferences**, in addition to the other Seerr controls. Active Seerr URL assigns the endpoint that profile should use; it does not copy the user's saved Seerr URL directory. Language Preferences saves its filter mode and language together so the profile cannot publish a partial combination.

## Device Overrides

Changing an unlocked setting in an active Server Profile creates or updates a local [Device Override](/settings/device-overrides). This lets the recipient customize that device without modifying the shared server definition. A locked member remains read-only.

Both the native editor and plugin dashboard can save **Replace Device Overrides**. When enabled, activating an optional profile removes only Device Overrides for its included settings. The client asks before clearing anything for a user-initiated selection, including switching to Auto. A later background automatic activation follows the saved policy without another prompt. A Required assignment does not clear overrides; unlocked members continue using them, while explicit Locks temporarily outrank them.

## Access and Pro Requirements

Any Jellyfin administrator can author Settings Profiles and Server Profiles in the Free plugin dashboard. Native authoring requires the administrator's Neptune Pro entitlement in addition to Jellyfin administrator authorization.

A recipient needs Pro to select a Server Profile manually or consume an ordinary automatic assignment. A matching Required assignment is the sole profile-application exception and works for Free and Pro recipients, but it does not grant personal Profile Preset features.
