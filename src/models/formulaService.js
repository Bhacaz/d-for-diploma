export function basicFormula(goal, currentPonderation, currentMean) {
  let currentCumelated = (currentMean / 100) * currentPonderation;
  let toGet = goal - currentCumelated;
  let remaningPoints = 100 - currentPonderation;
  return ((toGet / remaningPoints) * 100).toFixed(0);
}
