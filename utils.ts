export const generateSleepResistValue = (
  initialResistValue: number,
  currentSleepOccurs: number
) => {
  const substracter = Math.pow(3, currentSleepOccurs) - 1;
  return Math.floor(
    initialResistValue * Math.pow(3, currentSleepOccurs) - substracter
  );
};
