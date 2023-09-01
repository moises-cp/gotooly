export const hasCharacters = (val: any) => {
  return typeof val === 'string' && val.trim().length > 0;
};
