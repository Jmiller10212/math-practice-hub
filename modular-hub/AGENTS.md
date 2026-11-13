# Math Practice Hub: Codex and ChatGPT instructions

## Purpose and source of truth

This is Jared's personal math practice website, with offline support, saved scores/settings, editable vocabulary, and install/update controls. Preserve its games and approachable design unless the user requests changes.

Edit this modular-hub folder. The parent Math Practice Hub.html is a generated local entry, not editable source. Old Updated/review HTML files, prototypes, backups, dist, and the copied source inside github-pages are not the source of truth for normal work here.

Read README.md for the overview and VALIDATION.md for historical checks. Inspect actual files and Git status before relying on historical commits or validation.

- Workspace: C:\Users\jared\OneDrive\Documents\ChatGPT\Math Practice
- Editable project: modular-hub within that workspace.
- Publishing tools: publishing-tools in the parent folder.
- Published checkout/output: github-pages in the parent folder.
- Repository: https://github.com/Jmiller10212/math-practice-hub
- Live: https://jmiller10212.github.io/math-practice-hub/

This folder and github-pages have separate Git repositories. Inspect each separately. A fresh public repository clone also contains modular-hub and publishing-tools, with the deployed site at its root.

## File layout

| Location | Responsibility |
| --- | --- |
| registry.cjs | Ordered registrations, one require line per game |
| games/<id>/index.cjs | Game id, title, category and engine metadata |
| games/<id>/card.html | Exercise card and launch button |
| games/<id>/runtime.js | Game lifecycle and behavior |
| Standalone games' view.html | Their screen markup |
| games/detective/document.html | Detective's embedded document, logic and styling |
| shared/engine.js | Navigation, controls, form coordination and score UI |
| shared/engines/ | Shared algorithms and family-specific settings |
| shared/persistence.js | Shared storage loading, validation and saving |
| shared/number-utils.js | Number wording, helpers and scoring utilities |
| shared/game.html and shared/vocabulary.html | Shared views |
| shared/categories.cjs | Optional category labels/descriptions |
| vocabulary/seeds.json | Starter vocabulary |
| vocabulary/library.js | Vocabulary editor, search, storage, aliases and migrations |
| styles/hub.css and shell.html | Shared design and shell |
| pwa/ | Offline worker, update client/panel, manifest and icons |
| build.cjs | Build the preview/deployable assets |
| templates/new-game/ | Working standalone doubling-game example |
| tests/ | Maintained automated checks |

Browser scripts are assembled into a shared classic-script scope in a deliberate order, not loaded as ES modules. The builder resolves include markers in shared/engine.js. Avoid duplicate top-level const/let declarations. Standalone games should wrap private state in an IIFE, as the template does. CJS metadata runs in Node during the build; browser behavior belongs in runtime.js.

## Game IDs and metadata

An ID is the stable internal identity, not the visible title. IDs must be unique, start with a letter, and then contain only letters, digits, underscores or hyphens. Prefer camelCase because existing shared handlers use dot notation.

Keep the id, games/<id> folder, and registry path aligned. Changing a title does not require changing an ID. Changing existing IDs may break handlers, Continue, score keys and settings: preserve them unless implementing and testing an explicit migration.

Current IDs:

- numberSense: place, expanded, wordsNumber, numberWords, wordsPlace, decimalQuiz, decomposeWhole, decomposeWords, writeExpanded, writeStandard, compare, rounding, detective.
- arithmetic: addition, subtraction, multiplication.
- Other existing vocabulary/coming-soon categories: preAlgebra and algebra.

Example metadata:

```javascript
module.exports = {
  id: 'doubleNumber',
  title: 'Double a Number',
  category: 'numberSense',
  description: 'Type twice the displayed number.',
  engine: 'standalone'
};
```

For a new category, set category to a new ID, categoryLabel to its visible name, and optionally categoryDescription. Category cards/counts, filtering and vocabulary categories come from metadata. Do not hardcode a new per-game category menu. Shared labels/descriptions can also live in shared/categories.cjs.

The metadata title drives the generated card heading and shared activity title. Other text inside card.html or standalone view/runtime files remains separately authored. The metadata description does not automatically replace every visible paragraph.

## Add a game using the template

1. Copy templates/new-game/ to games/doubleNumber/.
2. Update index.cjs metadata. Replace example consistently in element IDs, label/for references, launch/back controls and runtime variables. Use a new unique storage key such as mathPracticeDoubleNumber.v1.
3. Implement gameplay in runtime.js and view.html. Keep state private; provide accessible labels, keyboard controls and feedback. Handle empty/malformed answers, prevent duplicate scoring, and support mobile layouts.
4. Add this single line inside the registry.cjs array:

```javascript
require('./games/doubleNumber/index.cjs'),
```

5. Build and test gameplay, navigation, saved progress/settings and reload. Add meaningful regression coverage for the new behavior.

The example is intentionally not registered in production. tests/template.cjs temporarily registers it and restores the registry afterward; do not run that test concurrently with another build, test suite or registry edit.

For an existing shared-engine game, runtime.js provides gameHandlers.<id>.newProblem(focus) and check() delegates. Metadata may include activity, the legacy title/description/prompt array, and an engine family label. Shared families still contain mode-specific controls and scoring contracts: merely copying and renaming one is not sufficient for every new game. Inspect all affected assumptions, or start from the standalone template.

Standalone games register their own controls. Return using the category in gameMetadata, as the template does. Detective deliberately uses a same-origin srcdoc iframe to preserve its existing storage behavior.

## Commands

Run these from the parent Math Practice folder. From inside modular-hub, first run `Set-Location ..` to move to the parent.

Preview only; does not publish or replace the familiar local entry:

```powershell
node modular-hub/build.cjs
Start-Process -FilePath '.\modular-hub\dist\index.html'
```

Inside modular-hub, node build.cjs builds the same dist folder. For offline/install/update testing, serve the preview over localhost:

```powershell
python -m http.server 8765 --directory modular-hub/dist
```

Open http://localhost:8765/. Stop the foreground server with Ctrl+C. If launching a background server on Windows, keep its window hidden. Direct file previews do not support PWA installation/update behavior.

Install test dependencies if needed:

```powershell
npm install --prefix modular-hub
```

Tests use Playwright and Microsoft Edge, channel msedge. tests/browser.cjs tries the installed package first and then this workstation's historical cache. Install dependencies on another machine rather than relying on that cache. Tests use isolated profiles, never the user's real browser profile.

Build the preview, then run the maintained suite:

```powershell
node modular-hub/build.cjs
node modular-hub/tests/run.cjs
```

Equivalent suite command: npm test --prefix modular-hub. Run tests sequentially because some temporarily modify registration/build outputs or simulate releases.

Individual tests, also from the parent folder:

```powershell
node modular-hub/tests/all-games.cjs
node modular-hub/tests/settings.cjs
node modular-hub/tests/test-decimal-arithmetic.cjs
node modular-hub/tests/test-expressions.cjs
node modular-hub/tests/test-rounding.cjs
node modular-hub/tests/test-symbols.cjs
node modular-hub/tests/test-friendly-number.cjs
node modular-hub/tests/template.cjs
node modular-hub/tests/pwa-migration.cjs
```

Rebuild the familiar local entry and stage the complete website/source without uploading:

```powershell
node publishing-tools/build.cjs
```

This builds dist, updates the parent Math Practice Hub.html, copies the complete assets/source into github-pages, and updates generated-entry.sha256. In a fresh repository-root clone, the wrapper recognizes that layout and prepares the root site instead.

If the wrapper reports that the local HTML changed outside the modular project, inspect and reconcile those changes. Do not delete or alter the checksum receipt merely to bypass the guard; another chat may have edited the file.

Publish only within the user's authorized scope:

```powershell
.\publishing-tools\Publish.ps1
```

This is a real public deployment: it rebuilds, runs the full suite, commits prepared files, and pushes the site checkout's current HEAD to remote main. Inspect branches/status and unrelated staged changes first. Failures stop the upload. Reconcile rejected pushes; do not force-push.

After publishing, verify the exact commit's GitHub Actions Pages deployment succeeds, live version.json matches the built version, and isolated-browser live/offline checks pass. A push alone does not prove deployment completed. On this workstation the historical live smoke check is:

```powershell
node publishing-tools/test-live.cjs
```

That script may not exist in a fresh clone; use equivalent live checks if absent. Installed copies use Check for Updates, then Reload to Update.

## Saved data and PWA compatibility

Preserve these existing localStorage keys and their data contracts:

- math-practice-hub-v1: shared scores, settings and last activity.
- mathPracticeVocabulary.v1: user vocabulary, edits and related groups.
- mathPracticeCompare.v1: comparison settings/progress.
- mathPracticeRounding.v1: rounding settings/scores.
- mathPracticeDigitDetective.v1: Detective level/solves.

Do not clear storage, replace custom terms with seeds, reset scores, change the site's origin/path/manifest identity, or rename keys as incidental cleanup. Retain legacy score formats and migrations. Storage denial/full storage must leave games usable with session-only feedback.

Data stays in the same browser/device; it does not sync. The preview, familiar local entry and live website can have distinct data. Preserve the familiar local filename for its existing file-based data.

The PWA must cache all required runtime files atomically, retain the previous offline build when downloads fail, wait for explicit Reload to Update activation, and preserve storage during updates. Game scripts currently bundle into assets/hub.js; shared styles into assets/hub.css; assets/pwa.js is also cached. When adding external runtime assets, update copying, version hashing and precache coverage together. Test under /math-practice-hub/ as well as localhost root.

## Safe working and verification

- Inspect current files, both repositories' status, and relevant recent work before modifying shared files. Preserve unrelated changes. Do not restore old attachments over current source or reset a checkout blindly.
- Make changes in the appropriate game/shared module. Preserve existing games, difficulty settings, scoring, vocabulary, styling and offline behavior unless the requested change requires otherwise.
- Back up consequential source/build/persistence changes before editing. Never alter an existing backup.
- Original immutable snapshot: parent backups/pre-modular-20261113-111553/. Original published snapshot branch: backup/pre-modular-20261113-111553 at f643e9c. Verify current state before using historical pointers.
- Do not modify tests/fixtures/previous-release merely to make migration tests pass; it represents the previous published release.
- Verify changed gameplay, difficulty/number modes, wrong/empty/retry scoring, reload persistence, navigation, mobile layout and browser errors. Run the full suite before deployment. Build/storage/PWA changes require offline and update/migration checks.
- Automated coverage primarily uses Edge on Windows. Do not claim Safari/iOS installation or other browsers were tested unless actually checked.
- A preview/documentation request does not itself request publication. Follow current user authorization. For rollback, preserve newer work and use a normal corrective commit; do not force-push or clear user data.
- Report what changed, what was tested, publication status, and any remaining blocker.

## Sharing with another assistant

This AGENTS.md supplies project instructions to Codex when the directory is in scope. For ChatGPT without filesystem access, attach this file, README.md and the relevant source files or a current project archive. This document does not itself give another assistant access to the computer or repository.
