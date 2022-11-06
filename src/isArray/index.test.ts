import { isArray } from "./index";

const func = () => console.log('callback function');

describe('isArray', () => {
  test('return false on number', () => {
    expect(isArray(2514)).toBe(false);
  });

  test('return false on boolean', () => {
    expect(isArray(true)).toBe(false);
  });

  test('return false on callback function', () => {
    expect(isArray(func)).toBe(false);
  });

  test('return false on undefined', () => {
    expect(isArray(undefined)).toBe(false);
  });

  test('return false on null', () => {
    expect(isArray(null)).toBe(false);
  });

  test('return false on Symbol', () => {
    expect(isArray(Symbol('foo'))).toBe(false);
  });

  test('return false on BigInt', () => {
    expect(isArray(BigInt(9007199254740991))).toBe(false);
  });

  test('return false on string', () => {
    expect(isArray('orange')).toBe(false);
  });

  test('return false on objects with property', () => {
    expect(isArray({ fruit: ['orange']})).toBe(false);
  });

  test('return false on empty object', () => {
    expect(isArray({})).toBe(false);
  });

  test('return false on map objects', () => {
    const mapObj = new Map();
    mapObj.set('fruit', 'orange');
    expect(isArray(mapObj)).toBe(false);
  }); 

  test('return false on set objects', () => {
    const setObj = new Set();
    setObj.add('fruit');
    expect(isArray(setObj)).toBe(false);
  }); 

  test('return true on array with items', () => {
    expect(isArray(['apple', 'orange'])).toBe(true);
  });  

  test('return true on empty array', () => {
    expect(isArray([])).toBe(true);
  });  
});