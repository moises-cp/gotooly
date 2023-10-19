import isUpperCase from '.';

describe('isUpperCase', () => {
  /**
   * Invalids
   */
  test('Given a string with a mix of uppercase and lowercase letters, returns false', () => {
    expect(isUpperCase('aMbT')).toBe(false);
  });

  test('Given a string with uppercase letters and symbols, returns false', () => {
    expect(isUpperCase('MTD*')).toBe(false);
  });

  test('Given a string with a single lowercase letter, returns false', () => {
    expect(isUpperCase('a')).toBe(false);
  });

  test('Given a string with all lowercase letters, returns false', () => {
    expect(isUpperCase('abcde')).toBe(false);
  });

  test('Given a string with uppercase letters and numbers, returns false', () => {
    expect(isUpperCase('ABCD5')).toBe(false);
  });

  // Wrong data types
  test('Given a number, returns false', () => {
    expect(isUpperCase(24152)).toBe(false);
  });

  test('Given an array, returns false', () => {
    expect(isUpperCase(['orange', 'apple'])).toBe(false);
  });

  test('Given an object literal, it returns false', () => {
    expect(isUpperCase({ fruit: 'orange' })).toBe(false);
  });

  test('Given undefined, it returns false', () => {
    expect(isUpperCase(undefined)).toBe(false);
  });

  test('Given null, it returns false', () => {
    expect(isUpperCase(null)).toBe(false);
  });

  test('Given a Class, it returns false', () => {
    const ClassType = class {};
    expect(isUpperCase(ClassType)).toBe(false);
  });

  test('Given a BigInt, it returns false', () => {
    expect(isUpperCase(BigInt(9007199254740991))).toBe(false);
  });

  test('Given a Symbol type, it returns false', () => {
    expect(isUpperCase(Symbol('foo'))).toBe(false);
  });

  test('Given a boolean, it returns false', () => {
    expect(isUpperCase(true)).toBe(false);
  });

  /**
   * Valids
   */
  test('Given a single uppercase letter, returns true', () => {
    expect(isUpperCase('A')).toBe(true);
  });

  test('Given various uppercase letters, returns true', () => {
    expect(isUpperCase('ABCD')).toBe(true);
  });
});
