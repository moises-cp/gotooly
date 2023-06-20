/**
 *
 * @param val A string or array
 * @param maxLength A number to represent the maximum characters allowed within a string
 *  or the maximum number elements in a array.
 */
export default (val?: any, maxLength?: any) => {
  if (
    (typeof val !== 'string' && !Array.isArray(val)) ||
    typeof maxLength !== 'number'
  ) {
    return null;
  }

  return val.slice(0, maxLength);
};
