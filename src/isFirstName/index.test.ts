import isFirstName from '.';

describe('isFirstName', () => {
  test('false on string with special characters and longer than 40 characters.', () => {
    // Total characters: 104
    const randomChar = `h-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFSh-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFS`;
    expect(isFirstName(`${randomChar}@${randomChar}.${randomChar}`)).toBe(
      false
    );
  });

  test('false on string with with 41 characters', () => {
    // Total characters: 41
    const val = `hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`;
    expect(isFirstName(val)).toBe(false);
  });

  // Invalid data types
  test('false on null', () => {
    expect(isFirstName(null)).toBe(false);
  });

  test('false on undefined', () => {
    expect(isFirstName(undefined)).toBe(false);
  });

  test('false on boolean', () => {
    expect(isFirstName(true)).toBe(false);
  });

  test('false on empty array', () => {
    expect(isFirstName([])).toBe(false);
  });

  test('false on array with items', () => {
    expect(isFirstName(['orange', 'banana'])).toBe(false);
  });

  test('false on string with spaces', () => {
    const val = `moises colon`;
    expect(isFirstName(val)).toBe(false);
  });

  test('invalid with string with only one character', () => {
    const val = `m`;
    expect(isFirstName(val)).toBe(false);
  });

  // Valid Strings
  test('Valid with string with only two character', () => {
    const val = `mo`;
    expect(isFirstName(val)).toBe(true);
  });

  test('true on string with with 40 characters', () => {
    const val = `hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`;
    expect(isFirstName(val)).toBe(true);
  });

  test('true on string with only english letters', () => {
    const val = `abcdefgHIGKLmnopqrstuvwxyz`;
    expect(isFirstName(val)).toBe(true);
  });

  test('true on string with only english letters and apostrophe', () => {
    const val = `O'Hara`;
    expect(isFirstName(val)).toBe(true);
  });

  test('true on string with only english and spanish letters', () => {
    const val = `MoisáéCÑ`;
    expect(isFirstName(val)).toBe(true);
  });

  test('true on string with only spanish letters', () => {
    const val = `íóúñüÁÉÍ`;
    expect(isFirstName(val)).toBe(true);
  });
});
