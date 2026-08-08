---
order: 50
---

# Announcements

Administrators can create announcement cards that appear inside Neptune on their users' devices. Each announcement appears once per device and remains dismissed after the user closes it.

Announcements support:

- A title, body text, icon, and button label
- Targeting specific users or everyone on the server
- Targeting specific platforms and app versions
- Delivery immediately to live devices or on the next app launch
- Resending an existing announcement to devices that have already seen it

Immediate delivery uses Neptune's live server event stream. If iOS or tvOS is suspended before receiving the event, Neptune catches up when the app returns to the foreground. An app that was fully closed catches up at its next launch. Targeting and once-per-device dismissal rules remain the same on every delivery path.

**Resend Now** keeps the announcement's content and targeting, gives it a new delivery ID, activates immediate delivery, and sends it through the same live event stream. Neptune treats it as a new announcement on every matching device without creating a second card for the administrator to maintain.

Announcements are useful for planned maintenance windows, new library additions, and house rules.
