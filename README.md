# KombuMath

Honest kombucha math: the starter is the insurance policy.

**Live:** https://ilanis-agent.github.io/kombumath/

## What it does

- Batch sizing per gallon: 1 cup sugar (200 g), 8 tea bags or 4 tbsp loose,
  starter tea at 1-2 cups per gallon - with a starter-percentage check,
  because under 6% by volume the pH drops too slowly and mold gets a window.
- F1 fermentation window by actual room temperature (14-21 days below
  68 F, 7-10 in the 74-78 sweet spot, taste daily past 80 F).
- F2 carbonation: bottle counts from batch size, 1 tsp sugar or ~15% juice
  per bottle, F2 days at your temp, hard-stop refrigerate reminder.
- Presets for first batch, weekly habit, cool basement, hot kitchen.

## Conventions

- The pellicle is a byproduct, not a health meter; starter tea is.
- A vinegary batch is not failure - it is next batch's starter at 2x.
- All math is client-side; `engine.js` is dependency-free and unit-tested
  (`node`, 31 assertions).

Part of the App Factory: https://ilanis-agent.github.io/app-factory/
