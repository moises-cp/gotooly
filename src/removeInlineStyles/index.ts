
export const removeInlineStyles = (str: any): string | null => {
  if (!str || typeof str !== 'string') {
    return null;
  }

  const patternInlineStyles = /(?<=style=").*?(?=")/g;
  return str.replaceAll(patternInlineStyles, '')
    .replaceAll(' style=""', '');
}
