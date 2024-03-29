import regexTest from '../regexTest';

const pattern = {
  default: /^.+@.+\..+$/,
};

/**
 * Determine whether or not the given value is an email address based on a generic pattern.
 */
export default (val: any) => {
  const config = { trim: true };
  return regexTest(val, pattern.default, config);
};
