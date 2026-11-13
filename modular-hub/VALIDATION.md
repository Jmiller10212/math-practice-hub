# Refactor validation — November 13, 2026

The modular release is live at https://jmiller10212.github.io/math-practice-hub/.

- Published implementation: `85ef9fe`; app version `d9fc9cac6fdc4203`.
- GitHub Pages build and deployment succeeded: https://github.com/Jmiller10212/math-practice-hub/actions/runs/43472737826.
- Safety snapshot: `../backups/pre-modular-20261113-111553/`. The original authoritative HTML SHA-256 is `eb55b02be3807fa94a633611403f122d0c9332a55c44abccbbaae016853a1f80`.
- The original published release is also preserved remotely on `backup/pre-modular-20261113-111553` at `f643e9c`.
- Source work was isolated on `refactor/modular`; site changes were validated on `refactor/modular-20261113` before publication.

## Completed checks

- All 16 existing games: 498 answers across place-value/word forms, decimal place-value quiz, both decomposition games, both write-form games and whole arithmetic; all existing levels and styles.
- Independent multiplication settings: 360 products across all 36 top/bottom size combinations, including fixed Custom factors; invalid input handling.
- Decimal/mixed arithmetic: 648 problems across all supported precisions and difficulties, exact base-ten answers, equivalent input, large products, retries and saved settings.
- Comparison: 150 answers across every range, both round lengths and equality settings, including round summaries.
- Digit Detective: 30 complete UI solves across all three levels; unique solutions, no printed-answer clues, saved progress and navigation.
- Expression rounds: 45 questions across standard/regrouped/mixed and correct/not/mixed question modes, unique choices and round completion.
- Rounding: every supported place, both mixed modes, 50 answers, gated explanations, malformed/empty/wrong inputs, summaries, settings and mobile layout.
- Vocabulary: symbol and word searches, Friendly number aliases/examples, existing custom term preservation, create/edit/delete, related groups and reload.
- Navigation/category filtering, generated exercise counts, Continue and Back; no page errors; storage-disabled fallback.
- New-game template: copy the folder and add one registry line; new category, gameplay, persistence and return navigation work.
- PWA migration from the actual previous published release: exact preservation of the five existing storage keys plus an unrelated sentinel, deferred update/reload, failed asset download recovery, all external JS/CSS cached, all 16 games open offline, custom vocabulary offline and offline update errors.
- Live site: expected version, HTTP 200, service-worker control, vocabulary searches, offline reopening and comparison gameplay, custom terms/scores preserved and online/offline update controls. Decimal arithmetic and rounding were also exercised on the live release.

Tests used isolated Edge profiles, not the user's browser data. The suite does not directly test installation on Safari/iOS or other browser engines. Existing storage remains local to each browser/device; no browser data was cleared or migrated.

Run the maintained suite with `node modular-hub/tests/run.cjs` from the parent folder. See README.md for build, registration, publishing and restoration instructions.
