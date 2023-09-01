/**
 * Determine whether or not a given string has any characters or a given array has any items.
 */
export default (val: any) => {
  return Boolean((typeof val === 'string' || Array.isArray(val)) && val.length);
};
