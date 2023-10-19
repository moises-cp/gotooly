import isLowerCase from '.';

describe('isLowerCase', () => {
  test('Given a string with a single letter in uppercase, returns false', () => {
    expect(isLowerCase('A')).toBe(false);
  });

  test('Given a string with all uppercase letters, return false', () => {
    expect(isLowerCase('ABCD')).toBe(false);
  });

  test('Given a string with lowercase letters and special symbols, returns false', () => {
    expect(isLowerCase('abc*')).toBe(false);
  });

  test('Given a string with a mix of uppercase and lowercase letters, returns false', () => {
    expect(isLowerCase('aMdP')).toBe(false);
  });

  // Wrong data types
  test('Given a number, it returns false', () => {
    expect(isLowerCase(24152)).toBe(false);
  });

  test('Given an array, it returns false', () => {
    expect(isLowerCase(['orange', 'apple'])).toBe(false);
  });

  test('Given an object literal, it returns false', () => {
    expect(isLowerCase({ fruit: 'orange' })).toBe(false);
  });

  test('Given undefined, it returns false', () => {
    expect(isLowerCase(undefined)).toBe(false);
  });

  test('Given null, it returns false', () => {
    expect(isLowerCase(null)).toBe(false);
  });

  test('Given a Class, it returns false', () => {
    const ClassType = class {};
    expect(isLowerCase(ClassType)).toBe(false);
  });

  test('Given a BigInt, it returns false', () => {
    expect(isLowerCase(BigInt(9007199254740991))).toBe(false);
  });

  test('Given a Symbol type, it returns false', () => {
    expect(isLowerCase(Symbol('foo'))).toBe(false);
  });

  test('Given a boolean, it returns false', () => {
    expect(isLowerCase(true)).toBe(false);
  });

  /**
   * Valids
   */
  test('Given a string with a single english letter in lowercase, returns true', () => {
    expect(isLowerCase('a')).toBe(true);
  });

  test('Given a string more than one english letter in lowercase, returns true', () => {
    expect(isLowerCase('abcde')).toBe(true);
  });
});
