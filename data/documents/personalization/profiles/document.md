---
order: 10
---

# Accounts & Profiles

Multiple accounts with separate watch history and preferences.
On Apple TV, each tvOS profile keeps its own list of accounts.

## tvOS Profiles

Neptune follows the profiles on your Apple TV.
Each tvOS profile has its own account list, its own active account, and its own **Automatically Sign In** choice, so everyone only sees the accounts they added.
Switch tvOS profiles in Control Center and Neptune switches with you.

When someone sets up Neptune on another tvOS profile, the servers already on this Apple TV are offered under **Servers on This Apple TV**.
There's no address to type, but they still sign in with their own account.

The same account can be added to more than one tvOS profile.
Signing it out on one profile leaves it signed in on the others.

## Who's Watching

When a profile has more than one account and none of them signs in automatically, Neptune asks **Who's watching?** at launch.
Each card shows the account's picture and previews that person's theme behind it.
Pick an account and the whole app follows: watch history, favorites, theme, layouts, home screen, everything.

The signed-in account appears as a banner at the top of Settings.
Select it to open that account's preferences, servers, Seerr connection, and sign-in controls.

## Switching Accounts

Choose another account in Settings, or pick one from **Who's watching?**.
One other account appears as its own row; with several, open **Accounts** to choose one.
On Apple TV, you can also press Up from Compass's first row or use the account control in the expanded palette.

**Saved session:** switches without re-entering credentials.

**No session:** enter the password when prompted.

**Account PIN:** enter the PIN first. See [Account PINs](#account-pins).

## Adding Accounts

1. Select **Add Account** at the top of Settings
2. Choose a server and use one of its available sign-in methods
3. Optionally copy preferences from an existing account as a starting point

The **Copy Preferences From** step is handy when setting up a family member who wants your layout without your watch history.
If the account already has a backup on the server, Neptune offers to restore it instead.

## Automatically Sign In

Open an account's page in Settings and turn on **Automatically Sign In** to open that account at launch instead of asking who's watching.
Only one account per tvOS profile can sign in automatically, so turning it on for one account turns it off for the others.
The option only appears when a profile has more than one account.

It's unavailable while the account has an Account PIN.

## Account PINs

Lock an account with an optional 4-digit **Account PIN**.
Open the account's page in Settings and choose **Account PIN** to create, change, or remove one.

Neptune asks for the PIN whenever someone opens or switches to that account on this Apple TV, including from **Who's watching?**, Settings, Compass, and Top Shelf.
The PIN belongs to the account, so it applies on every tvOS profile that uses it.

Forgot the PIN? Long-press the account in **Who's watching?** and choose **Forgot Account PIN**, then enter the account's password to set a new one.

The Account PIN is separate from the **Admin PIN**, which guards server user management and the native [Neptune MDM console](/settings/administration#neptune-mdm).

## Account Pictures

Each account shows the picture set on its server, or its first initial when there isn't one.
Pictures appear in **Who's watching?**, Settings, Compass, the account page, and the [top-right corner](/personalization/account-picture-and-clock) on Apple TV.

On Apple TV, open your account banner in Settings, choose **Change Picture**, and scan the code with your phone.
It opens your profile page on the server, where you can upload a new picture.
Neptune picks it up the next time it checks your account.

On iPhone and iPad, **Change Picture** opens the photo picker instead.
Choose **Remove Photo** to return to your initial.
Picture changes appear where your server supports them.

## Per-Account Features

| Feature | Description |
| --- | --- |
| Watch history | What you've watched, Continue Watching, Next Up |
| Favorites | Your favorited content |
| Theme and appearance | Theme, mode, card styles, layouts |
| Home screen | Section order, visibility, and limits |
| Navigation and Compass | Page visibility, saved rows or pages, and shortcuts |
| Conductor | Language and track preferences |
| Pins | Your pinned items and browse filters |

Account preferences can sync across devices when [Backup & Restore](/settings/backup) is enabled.
Device-local choices stay on the physical device where they were made.

## Child Accounts

An account marked as a child account hides Discover and requests and limits content to the account's age rating.

## Session Management

Session tokens and passwords used for reauthentication can be saved securely in the device Keychain.
Sessions persist across restarts and can be revoked from the media server.

**Sign out:** open your account in Settings and choose **Sign Out**.
If that also deletes downloads from the device, the confirmation says how many.
On Apple TV, this signs the account out of the current tvOS profile only.
Other tvOS profiles that use the same account stay signed in.

## Resetting Neptune on Apple TV

**Settings > Reset Neptune** offers two choices:

| Option | What it does |
| --- | --- |
| **Reset This tvOS Profile** | Removes this profile's accounts and settings from the Apple TV. Other tvOS profiles keep theirs |
| **Erase Neptune from This Apple TV** | Signs out every tvOS profile and removes all of Neptune's accounts, servers, and settings |

Both ask you to confirm before anything is removed, and neither deletes backups on your server.

## iPhone and iPad

Neptune on iPhone and iPad keeps a list of accounts too.

**Switch accounts:** choose another account beneath the signed-in account banner in Settings, or open **Accounts** when several are saved.
If something is playing, Neptune asks before it stops.

**Your account page:** tap your signed-in account banner at the top of Settings.

**Add an account:** choose **Add Account** beneath the account banner in Settings.
Pick a server already on your device, or connect to another server, then use its available sign-in method.
When it's added, you can switch to it right away or stay on your current account.

**Automatically Sign In:** with more than one account, open your account's page and turn on **Automatically Sign In** to skip **Who's watching?** at launch.

**Account PIN:** open your account's page and choose **Account PIN** to lock it with 4 digits.
On a device with Face ID or Touch ID, you can also turn on **Unlock with Face ID** or **Unlock with Touch ID**.
Anyone whose face or fingerprint is enrolled on the device can then open the account, so only turn it on for your own device.
If the enrolled faces or fingerprints change, Neptune turns it off and asks for the PIN.

Forgot the PIN? Tap **Forgot Account PIN** on the PIN screen, then sign in to that account again with its password or Quick Connect to set a new PIN or remove it.
Signing in with a different account doesn't change anything.

When you update from Neptune 1.3, the account you were using keeps signing in automatically, so nothing changes until you add another account.

## Updating from Neptune 1.3

On an Apple TV with more than one tvOS profile, each profile shows **Verify Your Accounts** the first time it opens Neptune 1.4.
Earlier versions shared one account list across every profile, so this step lets you remove any account that belongs to someone else.
Removing an account here only takes it off your profile.

After updating, **What's New** walks you through the new features.
You can see it again any time in **Settings > About > What's New**.
