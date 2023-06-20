import hasLength from '.';

describe('hasLength', () => {
  test('true on string literal with one or more characters', () => {
    expect(hasLength('hello')).toBe(true);
  });

  test('true on array with one or more items', () => {
    expect(hasLength(['apple', 'orange'])).toBe(true);
  });

  test('false on empty array', () => {
    expect(hasLength([])).toBe(false);
  });

  test('false on boolean', () => {
    expect(hasLength(true)).toBe(false);
  });

  test('false on numbers', () => {
    expect(hasLength(50)).toBe(false);
  });

  test('false on object literal with property', () => {
    expect(hasLength({ fruit: 'orange' })).toBe(false);
  });

  test('false on object literal without property', () => {
    expect(hasLength({})).toBe(false);
  });

  test('false on null', () => {
    expect(hasLength(null)).toBe(false);
  });

  test('false on undefined', () => {
    expect(hasLength(undefined)).toBe(false);
  });
});
