# Publishing tools

The Hub has been refactored. See [the modular project README](../modular-hub/README.md) for the file layout, adding games, local testing, saved data, offline updates and backup restoration.

- `build.cjs` builds the modular project, guards against concurrent edits to the generated local entry, and stages every required asset and source file.
- `Publish.ps1` runs the complete modular test suite, commits the staged site and source, then uploads to the existing Pages main branch.
- Older test scripts remain for historical reference; the maintained suite is `modular-hub/tests/run.cjs`.
