import isEmailGeneric from '.';

describe('isEmailGeneric', () => {
  test('true on real email version 1', () => {
    expect(isEmailGeneric('hello@hello.com')).toBe(true);
  });

  test('true on real email with very random characters and 104 characters in each section', () => {
    // Total characters: 104
    const randomChar = `h-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFSh-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFS`;
    expect(isEmailGeneric(`${randomChar}@${randomChar}.${randomChar}`)).toBe(
      true
    );
  });

  test('true on real email with letters, numbers, hyphen, underscore, and period', () => {
    expect(isEmailGeneric('hello_he.llo-5241@hel.lo_hello-5241.e')).toBe(true);
  });

  test('false on string not in email format', () => {
    expect(isEmailGeneric('hello')).toBe(false);
  });

  test('false when missing extension', () => {
    expect(isEmailGeneric('hello@hello')).toBe(false);
  });

  test('false when missing the username', () => {
    expect(isEmailGeneric('hello.com')).toBe(false);
  });

  test('false on null', () => {
    expect(isEmailGeneric(null)).toBe(false);
  });

  test('false on undefined', () => {
    expect(isEmailGeneric(undefined)).toBe(false);
  });

  test('false on boolean', () => {
    expect(isEmailGeneric(true)).toBe(false);
  });

  test('false on empty array', () => {
    expect(isEmailGeneric([])).toBe(false);
  });

  test('false on array with items', () => {
    expect(isEmailGeneric(['orange', 'banana'])).toBe(false);
  });
});
