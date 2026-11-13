# Rounding Word Problems — Find the Original Numbers

This is an independent Number Sense game in the modular hub.

- `index.cjs`: stable game identity, title, category, and standalone-engine metadata.
- `card.html`: the exercise card and launch button.
- `view.html`: the game screen, settings, answer area, hint, and summary.
- `runtime.js`: generated stories/options, rounding rules, selection checking, five-question rounds, feedback, replay, and saved results/settings.
- `../../registry.cjs`: the central registration that includes this game.
- `../../tests/test-rounding-word-problems.cjs`: boundary, generated-option, browser, persistence, mobile, and offline regression checks.

The generator uses positive whole-number totals. A target T rounded to place P accepts integers from T − P/2 through T + P/2 − 1, inclusive. A single-choice question has exactly one valid option. A choose-all question has two to four. Option letters are assigned after shuffling, and checking compares the selected keys against the values' actual rounding results. A choose-all answer earns one point only when the complete set is correct.

Each round has five questions. Mixed settings guarantee both rounding places and both question types within a round. Hints start closed; answer explanations appear only after submission. Each question scores once. Returning to the category preserves an unfinished round in memory. Reloading begins a fresh round; completed results and next-round settings persist separately under `mathPracticeRoundingWordProblems.v1`. Existing games' storage keys are untouched. Storage failures allow session-only play.

Edit these source files, then use the parent project's build and publishing instructions. Do not edit generated dist or the copied source in github-pages.
