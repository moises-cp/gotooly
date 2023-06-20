/**
 * Returns a boolean indicating whether or nor the parameter is an object with keys/methods.
 *
 * @param obj
 * @returns A boolean.
 */
export const hasKey = (obj: Object) =>
  Boolean(
    obj &&
      !Array.isArray(obj) &&
      typeof obj === 'object' &&
      Object.keys(obj).length
  );
