import { isObject } from "./index";

const func = () => console.log('callback function');

describe('isObject', () => {
  test('return false on number', () => {
    expect(isObject(2514)).toBe(false);
  });

  test('return false on array', () => {
    expect(isObject(['apple', 'orange'])).toBe(false);
  });  

  test('return false on boolean', () => {
    expect(isObject(true)).toBe(false);
  });

  test('return false on callback function', () => {
    expect(isObject(func)).toBe(false);
  });

  test('return false on undefined', () => {
    expect(isObject(undefined)).toBe(false);
  });

  test('return false on null', () => {
    expect(isObject(null)).toBe(false);
  });

  test('return false on Symbol', () => {
    expect(isObject(Symbol('foo'))).toBe(false);
  });

  test('return false on BigInt', () => {
    expect(isObject(BigInt(9007199254740991))).toBe(false);
  });

  test('return false on string', () => {
    expect(isObject('orange')).toBe(false);
  });

  test('return true on regex', () => {
    expect(isObject(/(\w+)\s(\w+)/)).toBe(true);
  });

  test('return true on map objects', () => {
    const mapObj = new Map();
    mapObj.set('fruit', 'orange');
    expect(isObject(mapObj)).toBe(true);
  }); 

  test('return true on set objects', () => {
    const setObj = new Set();
    setObj.add('fruit');
    expect(isObject(setObj)).toBe(true);
  }); 

  test('return true on WeakSet objects', () => {
    const weakSetObj = new WeakSet();
    weakSetObj.add({});
    expect(isObject(weakSetObj)).toBe(true);
  }); 

  test('return true on objects with property', () => {
    expect(isObject({ fruit: ['orange']})).toBe(true);
  });

  test('return true on empty object', () => {
    expect(isObject({})).toBe(true);
  });
});