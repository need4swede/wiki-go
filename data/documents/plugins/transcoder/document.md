---
order: 30
---

# Neptune Transcoder

Neptune Transcoder is the download-policy member of the Neptune Plugin Suite for Jellyfin.
It lets a server administrator define the download quality profiles offered to every Neptune client on that server.

**Availability:** Coming soon.
The plugin is implemented, but it is currently held out of the public plugin catalog and Neptune's active one-tap install roster while the rollout is completed.
Neptune continues to use its built-in download profiles in the meantime.

## What It Controls

| Setting | Effect in Neptune |
|---------|-------------------|
| **Quality profiles** | Replaces the app's built-in High, Medium, and Low download options with the server's profile ladder |
| **Maximum resolution** | Caps the output height without upscaling a smaller source |
| **Video bitrate** | Caps the video bitrate for the downloaded copy |
| **Audio bitrate** | Caps the audio bitrate |
| **Audio channels** | Limits output to stereo, 5.1, or 7.1 |
| **Allow original-quality downloads** | Shows or hides the untouched source-file option for every Neptune client on the server |

Profiles are server-wide rather than per user.
Changes affect the choices Neptune presents the next time a client loads its download options.

## Default Profiles

On first install, Transcoder starts with the same ladder Neptune already uses, so installing it does not change behavior until an administrator edits the profiles.

| Profile | Resolution | Video | Audio | Channels |
|---------|------------|-------|-------|----------|
| **High** | Up to 1080p | 8 Mbps | 384 kbps | Up to 5.1 |
| **Medium** | Up to 720p | 4 Mbps | 192 kbps | Stereo |
| **Low** | Up to 480p | 1.5 Mbps | 128 kbps | Stereo |

Administrators can add, remove, and rename profiles.
Available resolution choices range from 360p through 4K, and channel limits include stereo, 5.1, and 7.1.
Neptune presents the valid profiles from highest to lowest resolution and bitrate.

## Configuration

After release and installation, open **Jellyfin Dashboard > Plugins > Neptune Transcoder**.

For each profile, configure:

- Name
- Maximum resolution
- Maximum video bitrate
- Maximum audio bitrate
- Maximum audio channels

Use **Allow original-quality downloads** to decide whether users can download the untouched source file.
Turning it off is useful for servers with limited upstream bandwidth, storage-heavy remux libraries, or a policy that favors smaller offline copies.

## How Downloads Work

Transcoder is policy-only in its initial version: it serves the administrator's profile ladder to Neptune, and Neptune asks Jellyfin's existing transcoder to create the selected offline copy.
The plugin does not run a separate encoder or alter normal streaming playback.

All profile values are ceilings.
Jellyfin does not upscale a source to meet a profile, and sources already within the requested limits can be copied without re-encoding when the server supports it.

If Transcoder is unavailable, Neptune falls back automatically to its built-in High, Medium, and Low profiles.
Downloads do not depend on the plugin.

## Original vs. Transcoded Downloads

| Download Type | What It Keeps |
|---------------|---------------|
| **Original quality** | The source file byte-for-byte, including its embedded audio and subtitle tracks |
| **Transcoded quality** | A smaller copy with one audio track and no selectable subtitle tracks in the initial version |

HDR and Dolby Vision sources are converted according to the Jellyfin server's tone-mapping configuration when transcoded.
Choose Original quality when retaining the source's full quality and track set matters more than storage use.

Downloads are a [Neptune Pro feature](/neptune-pro/downloads).
The Transcoder plugin itself is part of the free server-side Plugin Suite; it controls the available profiles but does not unlock Downloads for a client account.
