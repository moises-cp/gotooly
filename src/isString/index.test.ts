import { isString } from "./index";

const func = () => console.log('callback function');

describe('isString', () => {
  test('return false on number', () => {
    expect(isString(2514)).toBe(false);
  });

  test('return false on array', () => {
    expect(isString(['apple', 'orange'])).toBe(false);
  });

  test('return false on objects with property', () => {
    expect(isString({ fruit: ['orange']})).toBe(false);
  });

  test('return false on empty object', () => {
    expect(isString({})).toBe(false);
  });

  test('return false on boolean', () => {
    expect(isString(true)).toBe(false);
  });

  test('return false on callback function', () => {
    expect(isString(func)).toBe(false);
  });

  test('return false on undefined', () => {
    expect(isString(undefined)).toBe(false);
  });

  test('return false on null', () => {
    expect(isString(null)).toBe(false);
  });

  test('return false on Symbol', () => {
    expect(isString(Symbol('foo'))).toBe(false);
  });

  test('return false on BigInt', () => {
    expect(isString(BigInt(9007199254740991))).toBe(false);
  });

  test('return true on string', () => {
    expect(isString('orange')).toBe(true);
  });
});