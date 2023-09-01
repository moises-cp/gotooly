interface Config {
  trim?: boolean;
}

/**
 * Determine whether or not a string match the regular expression pattern.
 *
 * @param str string
 * @param pattern RegExp
 * @return A boolean
 */
export default (str: any, pattern: RegExp, config?: Config) => {
  if (typeof str !== 'string') return false;

  const val = config && config.trim ? str.trim() : str;
  return pattern.test(val);
};
