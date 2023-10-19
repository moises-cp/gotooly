import isNumber from '.';

const func = () => console.log('callback function');

describe('isNumber', () => {
  test('return false on number', () => {
    expect(isNumber(2514)).toBe(true);
  });

  test('false on number within string data type', () => {
    expect(isNumber('2514')).toBe(false);
  });

  test('return false on array', () => {
    expect(isNumber(['apple', 'orange'])).toBe(false);
  });

  test('return false on objects with property', () => {
    expect(isNumber({ fruit: ['orange'] })).toBe(false);
  });

  test('return false on empty object', () => {
    expect(isNumber({})).toBe(false);
  });

  test('return false on boolean', () => {
    expect(isNumber(true)).toBe(false);
  });

  test('return false on callback function', () => {
    expect(isNumber(func)).toBe(false);
  });

  test('return false on undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });

  test('return false on null', () => {
    expect(isNumber(null)).toBe(false);
  });

  test('return false on Symbol', () => {
    expect(isNumber(Symbol('foo'))).toBe(false);
  });

  test('return false on BigInt', () => {
    expect(isNumber(BigInt(9007199254740991))).toBe(false);
  });

  test('return false on string', () => {
    expect(isNumber('orange')).toBe(false);
  });
});
