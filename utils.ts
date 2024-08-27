export const generateSleepResistValue = (
  initialResistValue: number,
  currentSleepOccurs: number
) => {
  const substracter = Math.pow(3, currentSleepOccurs) - 1;
  return Math.floor(
    initialResistValue * Math.pow(3, currentSleepOccurs) - substracter
  );
};

export const generatePoisonResistValue = (
  initialResistValue: number,
  currentPoisonOccurs: number
) => {
  const substracter = Math.pow(2, currentPoisonOccurs) - 1;
  return Math.floor(
    initialResistValue * Math.pow(2, currentPoisonOccurs) - substracter
  );
};

export const generateParalysisResistValue = (
  initialResistValue: number,
  currentPoisonOccurs: number
) => {
  const substracter = Math.pow(2, currentPoisonOccurs) - 1;
  return Math.floor(
    initialResistValue * Math.pow(2, currentPoisonOccurs) - substracter
  );
};
