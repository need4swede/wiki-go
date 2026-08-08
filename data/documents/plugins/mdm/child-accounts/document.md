---
order: 60
---

# Child Accounts

Neptune MDM stores one child-policy state for each user:

| State | Meaning |
|-------|---------|
| **Unmanaged** | Neptune MDM stores no child-account opinion |
| **Standard** | The user is explicitly managed as a standard account |
| **Child** | Neptune applies child-account restrictions |

When a user is marked **Child**, Neptune hides Discover and the request catalog on every device they use, and it shows only content within that user's age rating.

Child accounts work with Neptune's in-app parental controls, where administrators set the age-rating limit and choose which libraries the account can access. See [Administration](/settings/administration) for the client-side setup.
