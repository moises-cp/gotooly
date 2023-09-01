import isLastName from '.';

describe('isLastName', () => {
  test('false on string with special characters and longer than 40 characters.', () => {
    // Total characters: 104
    const randomChar = `h-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFSh-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFS`;
    expect(isLastName(`${randomChar}@${randomChar}.${randomChar}`)).toBe(false);
  });

  test('false on string with with 41 characters', () => {
    // Total characters: 41
    const val = `hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`;
    expect(isLastName(val)).toBe(false);
  });

  // Invalid data types
  test('false on null', () => {
    expect(isLastName(null)).toBe(false);
  });

  test('false on undefined', () => {
    expect(isLastName(undefined)).toBe(false);
  });

  test('false on boolean', () => {
    expect(isLastName(true)).toBe(false);
  });

  test('false on empty array', () => {
    expect(isLastName([])).toBe(false);
  });

  test('false on array with items', () => {
    expect(isLastName(['orange', 'banana'])).toBe(false);
  });

  test('true on string with spaces', () => {
    const val = `moises colon`;
    expect(isLastName(val)).toBe(true);
  });

  test('invalid with string with only one character', () => {
    const val = `m`;
    expect(isLastName(val)).toBe(false);
  });

  // Valid Strings
  test('Valid with string with only two character', () => {
    const val = `mo`;
    expect(isLastName(val)).toBe(true);
  });

  test('true on string with with 40 characters', () => {
    const val = `hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`;
    expect(isLastName(val)).toBe(true);
  });

  test('true on string with only english letters', () => {
    const val = `abcdefgHIGKLmnopqrstuvwxyz`;
    expect(isLastName(val)).toBe(true);
  });

  test('true on string with only english letters and apostrophe', () => {
    const val = `O'Hara`;
    expect(isLastName(val)).toBe(true);
  });

  test('true on string with only english and spanish letters', () => {
    const val = `MoisáéCÑ`;
    expect(isLastName(val)).toBe(true);
  });

  test('true on string with only spanish letters', () => {
    const val = `íóúñüÁÉÍ`;
    expect(isLastName(val)).toBe(true);
  });
});
