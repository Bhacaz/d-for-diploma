export function basicFormula(goal, currentPonderation, currentMean) {
  let currentCumelated = (currentMean / 100) * currentPonderation;
  let toGet = goal - currentCumelated;
  let remaningPoints = 100 - currentPonderation;
  return ((toGet / remaningPoints) * 100).toFixed(1);
}

export function eachExamsFormula(goal, exams) {
  let gainPoints = 0;
  let cummulatedWeighting = 0;

  for (let exam of exams) {
    gainPoints = gainPoints + (exam.weighting / 100) * exam.score;
    cummulatedWeighting = cummulatedWeighting + exam.weighting;
  }

  if (cummulatedWeighting === 100) {
    return (goal - gainPoints).toFixed(1);
  } else {
    let results = (
      ((goal - gainPoints) / (100 - cummulatedWeighting)) *
      100
    ).toFixed(1);
    if (results <= 0) {
      return 0;
    }
    return results;
  }
}

export function eachExamsMeanFormula(exams) {
  let gainPoints = 0;
  let cummulatedWeighting = 0;

  if (exams.length === 0) {
    return 0;
  }

  for (let exam of exams) {
    gainPoints = gainPoints + (exam.weighting / 100) * exam.score;
    cummulatedWeighting = cummulatedWeighting + exam.weighting;
  }

  return ((gainPoints / cummulatedWeighting) * 100).toFixed(1);
}
