import { hasKey } from './index';

const callback = () => console.log('callback function');

describe('hasKey', () => {
  test('return false on empty objects', () => {
    expect(hasKey({})).toBe(false);
  });

  test('return false on strings', () => {
    expect(hasKey('string')).toBe(false);
  });

  test('return false on boolean', () => {
    expect(hasKey(true)).toBe(false);
  });

  test('return false on number', () => {
    expect(hasKey(521)).toBe(false);
  });

  test('return false on array', () => {
    expect(hasKey(['orange', 'apple'])).toBe(false);
  });

  test('return false on undefined', () => {
    //@ts-ignore
    expect(hasKey(undefined)).toBe(false);
  });

  test('return false on null', () => {
    //@ts-ignore
    expect(hasKey(null)).toBe(false);
  });

  test('return false on Symbol', () => {
    expect(hasKey(Symbol('foo'))).toBe(false);
  });

  test('return false on BigInt', () => {
    expect(hasKey(BigInt(9007199254740991))).toBe(false);
  });

  test('return false on callback functions', () => {
    expect(hasKey(callback)).toBe(false);
  });

  test('return true on objects with one property', () => {
    expect(hasKey({ firstname: 'mel' })).toBe(true);
  });

  test('return true on objects with one method', () => {
    const obj = {
      firstname() {
        console.log('object method');
      },
    };
    expect(hasKey(obj)).toBe(true);
  });

  test('return true on objects with properties and methods', () => {
    const obj = {
      firstname: 'mel',
      lastname: 'smith',
      func1() {
        return this.firstname;
      },
      func2() {
        return this.lastname;
      },
    };
    expect(hasKey(obj)).toBe(true);
  });
});
