export const numberFormatter = (nr: number) => {
  return nr.toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ");
};
