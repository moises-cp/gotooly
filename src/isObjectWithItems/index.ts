export const isObjectWithItems = (obj: Object) =>
  Boolean(
    obj &&
      !Array.isArray(obj) &&
      typeof obj === 'object' &&
      Object.keys(obj).length
  );
