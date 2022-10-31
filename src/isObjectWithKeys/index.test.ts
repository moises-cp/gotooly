import { isObjectWithKeys } from "./index";

describe('isObjectWithKeys', () => {
  test('return false on empty objects', () => {
    expect(isObjectWithKeys({})).toBe(false)
  });

  test('return false on strings', () => {
    expect(isObjectWithKeys('string')).toBe(false)
  });

  test('return false on boolean', () => {
    expect(isObjectWithKeys(true)).toBe(false)
  });

  test('return false on number', () => {
    expect(isObjectWithKeys(521)).toBe(false)
  });
});
