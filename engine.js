/* KombuMath engine - honest kombucha math: the starter is the insurance policy. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.KombuEngine = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  /* Per gallon of sweet tea. */
  function sugarCups(gallons) { return gallons * 1; } // 1 cup per gallon
  function sugarGrams(gallons) { return Math.round(gallons * 200); }
  function teaBags(gallons) { return Math.ceil(gallons * 8); }
  function teaLooseTbsp(gallons) { return Math.ceil(gallons * 4); }

  /* Starter: 10% by volume minimum, 2 cups/gallon is the honest insurance. */
  function starterCups(gallons, strong) {
    return strong ? Math.ceil(gallons * 2) : Math.ceil(gallons * 1);
  }

  /* F1 days by ambient temp (F). Warmer is faster; below 68 it stalls, above 85 it stresses. */
  function f1Days(tempF) {
    if (tempF < 68) return { min: 14, max: 21, note: 'too cool - the culture crawls; move it somewhere warmer' };
    if (tempF <= 72) return { min: 10, max: 14, note: 'slow and steady' };
    if (tempF <= 78) return { min: 7, max: 10, note: 'the sweet spot' };
    if (tempF <= 84) return { min: 5, max: 7, note: 'fast - taste daily from day 5' };
    return { min: 4, max: 6, note: 'too hot - the culture stresses and off-flavors build' };
  }

  /* F2 carbonation: sugar per 16oz bottle. Table sugar 1 tsp, or juice by ounces. */
  function f2SugarTsp() { return 1; }
  function f2JuiceOz(bottleOz) { return Math.round(bottleOz * 0.15 * 10) / 10; }
  function bottlesFromBatch(gallons, bottleOz, starterCupsUsed) {
    var usableFloz = gallons * 128 - starterCupsUsed * 8; // starter stays behind
    return Math.floor(usableFloz / bottleOz);
  }

  /* F2 days at room temp before burping/ refrigeration. */
  function f2Days(tempF) {
    if (tempF < 68) return { min: 4, max: 7 };
    if (tempF <= 78) return { min: 2, max: 4 };
    return { min: 1, max: 2 };
  }

  /* New pellicle forms regardless - it is a byproduct, not a health meter. Starter tea is the health meter. */
  function moldRiskNote(starterCupsUsed, gallons) {
    var pct = starterCupsUsed * 8 / (gallons * 128) * 100;
    if (pct < 6) return 'Under 6% starter by volume - the pH drops too slowly and mold gets a window. Add more starter or pasteurized vinegar.';
    return 'Starter at ' + Math.round(pct) + '% by volume - the pH crashes fast, which is exactly the mold defense.';
  }

  function r2(x) { return Math.round(x * 100) / 100; }

  return {
    sugarCups: sugarCups,
    sugarGrams: sugarGrams,
    teaBags: teaBags,
    teaLooseTbsp: teaLooseTbsp,
    starterCups: starterCups,
    f1Days: f1Days,
    f2SugarTsp: f2SugarTsp,
    f2JuiceOz: f2JuiceOz,
    bottlesFromBatch: bottlesFromBatch,
    f2Days: f2Days,
    moldRiskNote: moldRiskNote,
    r2: r2
  };
});
