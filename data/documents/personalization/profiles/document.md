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

Accounts also appear as cards at the top of Settings, with a checkmark on the current one.

## Switching Accounts

Select another account's card in Settings, or pick one from **Who's watching?**.

**Saved session:** switches without re-entering credentials.

**No session:** enter the password when prompted.

**Account PIN:** enter the PIN first. See [Account PINs](#account-pins).

## Adding Accounts

1. Select the **Add** card in the accounts row
2. Sign in with username and password, or Quick Connect
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

Neptune asks for the PIN whenever someone opens or switches to that account on this Apple TV, including from **Who's watching?**, the account cards in Settings, and Top Shelf.
The PIN belongs to the account, so it applies on every tvOS profile that uses it.

Forgot the PIN? Long-press the account in **Who's watching?** and choose **Forgot Account PIN**, then enter the account's password to set a new one.

The Account PIN is separate from the **Admin PIN**, which only locks [Administration](/settings/administration).

## Account Pictures

Each account shows the picture set on its server, or its first initial when there isn't one.
Pictures appear in **Who's watching?**, the account cards, the account page, and the [top-right corner](/personalization/account-picture-and-clock).

To change yours, open your account's page in Settings, choose **Change Picture**, and scan the code with your phone.
It opens your profile page on the server, where you can upload a new picture.
Neptune picks it up the next time it checks your account.

## Per-Account Features

| Feature | Description |
| --- | --- |
| Watch history | What you've watched, Continue Watching, Next Up |
| Favorites | Your favorited content |
| Theme and appearance | Theme, mode, card styles, layouts |
| Home screen | Section order, visibility, and limits |
| Navigation bar | Tab order and visibility |
| Conductor | Language and track preferences |
| Pins | Your pinned items and browse filters |

Account preferences can sync across devices when [Backup & Restore](/settings/backup) is enabled.
Device-local choices stay on the physical device where they were made.

## Child Accounts

An account marked as a child account hides Discover and requests and limits content to the account's age rating.

## Session Management

Sessions are stored securely in the device Keychain:

- Persist across restarts
- No passwords stored locally
- Can be revoked from the media server

**Sign out:** open your account in Settings and choose **Sign Out**.
On Apple TV, this signs the account out of the current tvOS profile only.
Other tvOS profiles that use the same account stay signed in.

## Resetting Neptune on Apple TV

**Settings > Reset Neptune** offers two choices:

| Option | What it does |
| --- | --- |
| **Reset This tvOS Profile** | Removes this profile's accounts and settings from the Apple TV. Other tvOS profiles keep theirs |
| **Erase Neptune from This Apple TV** | Signs out every tvOS profile and removes all of Neptune's accounts, servers, and settings |

Both ask you to confirm before anything is removed, and neither deletes backups on your server.

## Updating from Neptune 1.3

The first time each tvOS profile opens Neptune 1.4, a short tour shows what's new.
On an Apple TV with more than one tvOS profile, it ends with **Verify Your Accounts**.
Earlier versions shared one account list across every profile, so this step lets you remove any account that belongs to someone else.
Removing an account here only takes it off your profile.
