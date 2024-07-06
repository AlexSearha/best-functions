export const truncateString = (sentence: string, maxwidth: number): string => {
  if (sentence.length > maxwidth) {
    return sentence.split("").splice(0, maxwidth).join("") + "...";
  }
  return sentence;
};
