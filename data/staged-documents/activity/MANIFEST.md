# Activity Documentation Staging Manifest

Status: staged and not published  
Captured: 2026-08-14  
Wiki source commit at capture: `903d39155b5d722e6a5c0fbef32bb3690ac86163`

This folder preserves the complete pre-removal versions of every public
Markdown document that described Neptune's unreleased Activity feature. The
Activity article included existing working-tree edits at capture time; its
staged copy intentionally preserves that exact version.

## Snapshot Map

| Staged snapshot | Live target |
|-----------------|-------------|
| `documents/activity/document.md` | `data/documents/activity/document.md` |
| `documents/document.md` | `data/documents/document.md` |
| `documents/ios/document.md` | `data/documents/ios/document.md` |
| `documents/neptune-pro/document.md` | `data/documents/neptune-pro/document.md` |
| `documents/neptune-ai/document.md` | `data/documents/neptune-ai/document.md` |
| `documents/neptune-pro/neptune-ai/document.md` | `data/documents/neptune-pro/neptune-ai/document.md` |
| `documents/settings/backup/document.md` | `data/documents/settings/backup/document.md` |
| `documents/settings/document.md` | `data/documents/settings/document.md` |
| `documents/plugins/mdm/document.md` | `data/documents/plugins/mdm/document.md` |
| `documents/plugins/document.md` | `data/documents/plugins/document.md` |

## Restore Workflow

1. Confirm Activity is enabled for the public release on every documented
   platform.
2. Compare each staged snapshot with its current live target. Do not overwrite
   a whole live file, because other wiki content may have changed since this
   snapshot.
3. Restore the Activity article and selectively merge the Activity rows,
   sections, and cross-links into the current public documents.
4. Recheck the wording against the shipping behavior and current Free/Pro
   contract.
5. Search the published tree for broken `/activity` links and run the wiki's
   normal validation before publishing.
6. Remove this staged feature directory only after the restored public
   documentation has shipped.

