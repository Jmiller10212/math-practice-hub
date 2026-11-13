# Modular Hub: source, development, and publishing handoff

## The only editable app source

Work in `Math Practice/modular-hub/`. Read `AGENTS.md`, `README.md`, and `VALIDATION.md`, then inspect current source and Git status. Historical validation is not evidence that a new change passes.

Do not edit the parent `Math Practice Hub.html`, `dist/`, or the source copy inside `github-pages/`. They are generated outputs. Do not restore older HTML attachments over this project. Other chats may be working here: inspect both repositories and preserve unrelated edits. Never bypass `generated-entry.sha256`; the wrapper stops when the familiar local HTML was edited outside the modular source.

The footer says **Modular Hub · Build <release ID>**. The builder generates this content-based ID from runtime assets, page, PWA files and icons. It matches the page's `app-version` metadata and `version.json`. Identical runtime builds have identical IDs; documentation-only edits need not change it. A Git commit is a separate identifier. The local and published IDs match only after rebuilding and deploying the same release.

## Add or change a game

1. Copy `templates/new-game/` into `games/<uniqueId>/` for a new standalone game.
2. Update `index.cjs` metadata, `view.html`, `card.html`, and `runtime.js`; replace the template's `example` IDs consistently. Keep private runtime state in an IIFE and use a unique storage key.
3. Add one `require('./games/<uniqueId>/index.cjs'),` line to the array in `registry.cjs`. Metadata controls category membership and generated titles/counts. New categories can specify `categoryLabel` and `categoryDescription`.
4. Preserve existing IDs, scoring, settings and localStorage contracts. Shared-engine games need inspection of their family in `shared/engines/`; renaming a folder alone is insufficient.
5. Check answers, empty/wrong input, retries, keyboard/mobile navigation, persistence and offline behavior. Add meaningful regression coverage for new behavior. See AGENTS.md for details.

Never clear user storage. Existing keys are `math-practice-hub-v1`, `mathPracticeVocabulary.v1`, `mathPracticeCompare.v1`, `mathPracticeRounding.v1`, and `mathPracticeDigitDetective.v1`. Data stays in each browser/device; previews and the live site can have separate data.

## Preview and test

The following PowerShell commands run from the **parent Math Practice folder**, not modular-hub:

```powershell
npm install --prefix modular-hub # Only if test dependencies are missing
node modular-hub/build.cjs
Start-Process -FilePath '.\modular-hub\dist\index.html'
node modular-hub/tests/run.cjs
```

The builder produces `modular-hub/dist/` without replacing the familiar local entry. Tests use isolated Edge profiles and run sequentially, including template registration, all games/settings, arithmetic, vocabulary and PWA migration. The template test temporarily changes the registry; do not run builds or other suites concurrently. Edge must be installed for the current browser configuration. Safari installation is not covered.

For PWA/offline preview, serve over localhost (file previews cannot install a service worker):

```powershell
python -m http.server 8765 --directory modular-hub/dist
```

Open http://localhost:8765/ and stop the server with Ctrl+C. If launching a background helper on Windows, keep its window hidden.

## Prepare and publish the existing GitHub Pages site

Live destination: https://jmiller10212.github.io/math-practice-hub/
Repository: https://github.com/Jmiller10212/math-practice-hub

On Jared's workstation, modular-hub and the sibling github-pages checkout are separate Git repositories. Before publishing, inspect both and fetch the publishing checkout:

```powershell
git -C modular-hub status --short
git -C modular-hub log -5 --oneline
git -C github-pages status --short
git -C github-pages branch -vv
git -C github-pages fetch origin
git -C github-pages status -sb
```

Reconcile remote divergence and unrelated staged changes before continuing. Do not force-push. Preserve concurrent work. Review generated changes before uploading.

```powershell
node publishing-tools/build.cjs
git -C github-pages diff --stat
git -C github-pages diff --cached --stat
.\publishing-tools\Publish.ps1
```

Verified script behavior: the wrapper checks the local-entry checksum, builds dist, regenerates `Math Practice Hub.html` with asset paths pointing to dist, updates the checksum receipt, and copies site assets plus maintainable modular source to github-pages. It copies the publishing build/publish scripts too. Publish.ps1 rebuilds, runs the full suite, stages the specified site/source paths, commits changes, and pushes the checkout's **current HEAD to remote main**. It stops on build/test/commit/push failure. Check the branch first; it does not switch branches. A successful push is not proof that Pages finished.

For a fresh public repository clone, the repository root already contains modular-hub and publishing-tools. Run build/publish commands there; the wrapper stages root output and Publish.ps1 uses `.` as the site repository when no sibling github-pages checkout exists. Substitute root Git commands for `git -C github-pages`. Do not edit its generated root index.html.

## Verify the exact deployed release

1. Record `git -C github-pages rev-parse HEAD` and `Get-Content github-pages/version.json` (use root equivalents in a fresh clone).
2. Open https://github.com/Jmiller10212/math-practice-hub/actions and wait for the **Pages build/deployment for that exact commit** to succeed. A previous green run is insufficient.
3. Fetch https://jmiller10212.github.io/math-practice-hub/version.json with a cache-busting query such as `?check=YOUR_COMMIT`. Confirm `modular` is true and `version` equals the built version.
4. Open the live page in an isolated browser context. Confirm the visible Modular Hub build, app-version metadata and version.json agree. Check browser errors, navigation/gameplay, vocabulary, saved progress after reload, service-worker control and reopening offline under `/math-practice-hub/`.
5. On this workstation, `node publishing-tools/test-live.cjs` checks the expected version, live/offline behavior, vocabulary, comparison and saved data. This historical helper is not copied by the publishing wrapper and may be absent in a fresh clone; use equivalent checks there. It is not a replacement for confirming the Actions deployment and visible indicator.

Report the commit, release ID, checks actually completed and deployment URL. If upload, Actions or live checks fail, state the blocker; do not claim publication is verified.

## Update the installed Mac app

Connect to the internet, open the installed Math Practice Hub, and scroll to **Check for Updates**. Click it, wait for **Reload to Update**, then click that button. The current question restarts. Confirm the footer's Modular Hub build matches the deployed version. If it already reports the latest version, compare the footer ID. Allow the download to finish before going offline.

Updates preserve scores, settings and custom vocabulary in that same app/browser. Do not clear website data or reinstall as a routine update step; saved data does not sync from another device. Safari/Mac installation has not been directly tested by the Windows suite.

## Give another chat enough context

Point a filesystem-enabled chat at this project and this guide. For a chat without filesystem access, attach AGENTS.md, README.md, this guide and current relevant source files or a current project archive. A link to a chat does not grant filesystem access. Tell it explicitly that modular-hub is the only editable source and whether publication is authorized.
