import isEmail from '.';

describe('isEmail', () => {
  test('true on real email version 1', () => {
    expect(isEmail('hello@hello.com')).toBe(true);
  });

  test('true on real email with very random characters and 104 characters in each section', () => {
    // Total characters: 104
    const randomChar = `h-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFSh-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFS`;
    expect(isEmail(`${randomChar}@${randomChar}.${randomChar}`)).toBe(true);
  });

  test('true on real email with letters, numbers, hyphen, underscore, and period', () => {
    expect(isEmail('hello_he.llo-5241@hel.lo_hello-5241.e')).toBe(true);
  });

  test('false on string not in email format', () => {
    expect(isEmail('hello')).toBe(false);
  });

  test('false when missing extension', () => {
    expect(isEmail('hello@hello')).toBe(false);
  });

  test('false when missing the username', () => {
    expect(isEmail('hello.com')).toBe(false);
  });

  test('false on null', () => {
    expect(isEmail(null)).toBe(false);
  });

  test('false on undefined', () => {
    expect(isEmail(undefined)).toBe(false);
  });

  test('false on boolean', () => {
    expect(isEmail(true)).toBe(false);
  });

  test('false on empty array', () => {
    expect(isEmail([])).toBe(false);
  });

  test('false on array with items', () => {
    expect(isEmail(['orange', 'banana'])).toBe(false);
  });
});
