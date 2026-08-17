# Staged Documents

This directory holds documentation for features that exist in development but
must not appear on the public wiki yet.

The wiki publishes only the directory configured as `wiki.documents_dir` in
`data/config.yaml`, currently `data/documents`. Everything under
`data/staged-documents` is therefore outside navigation, search, sitemap, and
page rendering.

## Convention

Each staged feature owns one directory:

- `documents/` mirrors the paths beneath the live `data/documents/` tree.
- `MANIFEST.md` records why the material is staged, which public files were
  changed, and how to restore it.
- Copies are snapshots, not replacements for future live documents. Restore
  the relevant sections by reviewing and merging them into the then-current
  public pages so unrelated documentation changes are preserved.

Do not point public documents at staged paths. Move or merge material back into
`data/documents` only when the feature is ready to be documented publicly.

