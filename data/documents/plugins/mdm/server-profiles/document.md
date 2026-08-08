---
order: 30
---

# Server Profiles

Server Profiles are a live, reusable settings-profile library. An administrator creates a profile once, then assigns it automatically to every matching device on the server or adds it only to selected users. Definitions remain on the server instead of being copied into each user's personal backup.

The library can hold up to 12 Server Profiles, and a user's effective list can also include up to 12 personal profiles.

## Global Assignments

Use **Apply Automatically to All Users On** to assign a profile globally by device class. For example, assign an **iPhone** Server Profile to iPhone while leaving iPad, Apple TV, and Mac unassigned. Every matching iPhone in Auto uses that profile, while unassigned devices use their ordinary settings, initially seeded from [Server Defaults](/plugins/mdm/server-defaults) when configured.

Each device class has at most one global assignment. Reassigning it names the current and replacement profiles and asks for confirmation.

Enable **Require This Profile** to keep matching devices on Auto and enforce every included member. For an optional profile, selected members can still be locked so they remain read-only and outrank Device Overrides; unlocked members continue following normal profile and Device Override rules.

## Per-User Scope

Users see only the Server Profiles in their scope: profiles with a global device assignment and profiles explicitly added to them. They cannot rename, edit, reorder, or delete server-owned definitions. A personal automatic assignment is more specific than an optional global assignment, and a per-user required assignment is more specific than a global required assignment.

To assign a shared profile to one user, select that user under **Managing**, open **Settings Profiles**, and choose **Add Profile**. Select a reusable Server Profile or create a new personal one. A reusable profile keeps its read-only server name, values, and inherited locks.

With no device selected, an added Server Profile is manual-only. **Apply Automatically for This User On** activates it for selected device classes. **Require This Profile** and additional per-user locks are optional. Only the user's scope, assignments, and extra policy are saved; the definition continues to live once in the Server Profiles library.

**Remove from User** removes an explicitly added profile and that user's assignments without deleting the reusable definition. A globally assigned profile must instead be changed from the Server Profiles target.

| Administrator action | Result |
|----------------------|--------|
| Select a device under **Apply Automatically to All Users On** | Applies the profile automatically to every matching user in Auto |
| Choose **Add Profile** for one user | Makes the shared profile available only to that user; it remains manual-only until a device type is selected |
| Select a device under **Apply Automatically for This User On** | Applies the profile automatically only for that user and device type |
| Enable **Require This Profile** | Keeps matching devices on locked Auto and enforces every included setting, including for Free recipients |
| Enable **Lock** for a member | Makes that setting read-only when the profile is active, even outside a Required assignment |

## Adding Settings

The Add Setting flow uses Neptune's real Settings pages instead of a separate technical browser. Navigate as you normally would, then choose a value with the usual control. That exact value is added immediately, with no second Add step.

To include the value already shown without changing it, tap **Add Current** beneath the setting on iPhone or press and hold the focusable setting on Apple TV and choose **Add Current**. Select **Done** to commit the staged additions. The browser previews the Server Profile's complete theme, and leaving with unsaved changes asks before discarding them.

Both the native editor and plugin dashboard can save **Replace Device Overrides**. When enabled, activating the profile removes only Device Overrides for its included settings. The client asks before clearing anything for a user-initiated selection, including switching to Auto. A later background automatic activation follows the saved policy without another prompt. A Required assignment instead preserves every Device Override as an underlay and temporarily suppresses only directly conflicting members.

## Pro Requirements

Any Jellyfin administrator can author Settings Profiles and Server Profiles in the Free plugin dashboard. Native authoring requires the administrator's Neptune Pro entitlement in addition to Jellyfin administrator authorization.

A recipient needs Pro to select a Server Profile manually or consume an ordinary automatic assignment. A matching Required assignment is the sole profile-application exception and works for Free and Pro recipients, but it does not grant personal Profile Preset features.
