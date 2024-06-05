export const maskNumbers = (NumStr: string) => {
  const ensureOnlyNumbers = NumStr.replace(/[^0-9]+/g, "");
  const maskAllButLastFour = ensureOnlyNumbers.replace(
    /[0-9](?=([0-9]{4}))/g,
    "•"
  );
  return maskAllButLastFour;
};
