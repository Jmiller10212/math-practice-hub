# Math Practice Hub — modular project

The editable source is now `modular-hub/`. `Math Practice Hub.html` keeps its familiar local filename but is a generated entry that loads the built shared assets. Edit the source modules, then build. Do not edit generated HTML or `dist/` directly. The builder stops if another task has changed the local entry since the last build, so those edits can be reconciled first.

## File layout

- `registry.cjs` — one registration line per game; the order controls exercise order.
- `games/<id>/index.cjs` — each game's id, title, category, description and engine metadata near the top.
- `games/<id>/card.html` — exercise card.
- `games/<id>/runtime.js` — game lifecycle and behavior. Related games delegate to shared algorithms rather than duplicating them.
- `games/compare`, `games/rounding`, `games/detective` — independent game views and behavior. Detective's iframe document stays in `document.html`, preserving its same-origin storage behavior.
- `shared/engine.js` — navigation, controls, scoring UI and shared form coordination.
- `shared/engines/` — reusable place-value, decimal quiz, decomposition, write-form and exact arithmetic engines.
- `shared/persistence.js` — original shared storage key, validation and save behavior. Family engines retain their existing setting/score loading rules.
- `shared/number-utils.js` — shared number wording, score display and number helpers.
- `shared/categories.cjs` — optional category labels/descriptions, including existing coming-soon categories. Exercise membership and counts come from game metadata.
- `vocabulary/` — starter terms and vocabulary search/editor/persistence. Existing supplemental term migrations and aliases remain in `library.js`.
- `styles/hub.css`, `shell.html`, `shared/*.html` — existing design and shared views.
- `pwa/` — service worker, update client, update panel, manifest and icons.
- `build.cjs` — dependency-free deterministic builder. Emits separate JS/CSS assets and lists every required runtime file in the offline cache.
- `tests/` — gameplay, persistence, template registration and PWA migration checks. The previous-release fixture is test data, copied from the pre-refactor published release.

The builder joins small browser scripts in their original initialization order. This deliberately preserves existing behavior and allows the generated page to work from a local file without a browser module server. Sources remain separate and editable; generated assets must travel with the page.

## Add a game

1. Copy `templates/new-game/` to `games/example/` (or your own id).
2. Set the metadata at the top of `index.cjs`. Use a unique id; update `example` in that folder's markup, element ids, and runtime when renaming it. Keep a new, unique storage key.
3. Add exactly one line to `registry.cjs`: `require('./games/example/index.cjs'),`.
4. Build and test. The example is a working doubling game and is intentionally not registered in production.

A new category needs no navigation edits. Set `category`, `categoryLabel`, and optionally `categoryDescription` in the game module. The category card, exercise count, filter, and vocabulary category are generated automatically. Category labels can also be centralized in `shared/categories.cjs`.

For a game using an existing shared engine, copy a related game's folder and customize its lifecycle in `runtime.js`. Existing engine families have their own setting and scoring contracts; a genuinely new game should start from the standalone template.

## Build and local testing

From the parent Math Practice folder:

```powershell
node modular-hub/build.cjs
node modular-hub/tests/run.cjs
```

The first command builds only the separate preview at `modular-hub/dist/index.html`. Open that file for a quick preview. For offline/install testing, serve `dist/` over localhost, for example `python -m http.server 8765 --directory modular-hub/dist`, then open `http://localhost:8765/`.

Install test dependencies once with `npm install --prefix modular-hub`. Tests use Microsoft Edge on Windows; install Edge or adjust the browser channel in tests for another platform. This workstation also supports its existing cached Playwright installation. `npm test --prefix modular-hub` runs the full suite. No browser data from the user's actual profile is touched: tests use isolated temporary browser profiles.

To rebuild the familiar local entry and stage all site/source files into `github-pages/`:

```powershell
node publishing-tools/build.cjs
```

To validate again and publish:

```powershell
./publishing-tools/Publish.ps1
```

The publishing script stops on build/test failure or a rejected upload. It publishes all JS, CSS, PWA assets and maintainable source. GitHub Pages continues serving the repository root. In a fresh clone, `node modular-hub/build.cjs` also works directly; the publishing wrapper recognizes the repository root.

## Saved data and updates

The existing keys remain unchanged: `math-practice-hub-v1`, `mathPracticeVocabulary.v1`, `mathPracticeCompare.v1`, `mathPracticeRounding.v1`, and `mathPracticeDigitDetective.v1`. No migration or clearing of browser storage is needed. Scores and custom terms stay in the same browser/device. Keep opening the original local entry for its file-based data; the preview and published site have their own browser storage.

The service worker downloads the complete HTML/JS/CSS/icon/manifest set before an update can activate. A failed download retains the previous offline version. Updates wait for **Reload to Update**. The version includes every runtime asset, update UI, manifest and icon. The suite tests upgrading from the actual previous published release, failed downloads, deferred activation, data preservation, offline reopening and all 16 games offline.

## Safety backup and restoration

The immutable original is `../backups/pre-modular-20261113-111553/`, containing the original authoritative HTML, publishing tools, guide, complete published assets and Git history. The original Pages repository also has branch `backup/pre-modular-20261113-111553` at `f643e9c`. Refactor work was done separately on `refactor/modular`.

To restore locally, stop editing tasks, preserve any newer work, and copy the original HTML and publishing-tools folder from the backup into the parent folder. For published rollback, make a new commit restoring the original release files from the backup branch, then publish it. Do not force-push or delete browser data. Keep the backup unchanged.
