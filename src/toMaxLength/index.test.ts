import toMaxLength from '.';

describe('toMaxLength', () => {
  test('return an empty string', () => {
    expect(toMaxLength('hello', 0)).toBe('');
  });

  test('return the first character of the string', () => {
    expect(toMaxLength('hello', 1)).toBe('h');
  });

  test('return the first two characters of the string', () => {
    expect(toMaxLength('hello', 2)).toBe('he');
  });

  test('return the first three characters of the string', () => {
    expect(toMaxLength('hello', 3)).toBe('hel');
  });

  test('return the full string when the length exceeds', () => {
    expect(toMaxLength('hello', 30)).toBe('hello');
  });

  test('return the full empty string when the length exceeds', () => {
    expect(toMaxLength('', 30)).toBe('');
  });

  test('return the null on number', () => {
    expect(toMaxLength(50, 30)).toBe(null);
  });

  test('return the empty array on empty array', () => {
    expect(toMaxLength([], 30)).toStrictEqual([]);
  });

  test('return the an array with its first element', () => {
    expect(toMaxLength(['orange', 'tomatoes', 'apple'], 1)).toStrictEqual([
      'orange',
    ]);
  });

  test('return the an array with its first two element', () => {
    expect(toMaxLength(['orange', 'tomatoes', 'apple'], 2)).toStrictEqual([
      'orange',
      'tomatoes',
    ]);
  });

  test('return the an array with all its items when the maximum length exceeds', () => {
    expect(toMaxLength(['orange', 'tomatoes', 'apple'], 20)).toStrictEqual([
      'orange',
      'tomatoes',
      'apple',
    ]);
  });

  test('return null on empty object literal', () => {
    expect(toMaxLength({}, 20)).toBe(null);
  });

  test('return null on object literal with property', () => {
    expect(toMaxLength({ fruit: 'orange' }, 20)).toBe(null);
  });

  test('return true on boolean', () => {
    expect(toMaxLength(true, 20)).toBe(null);
  });
});
