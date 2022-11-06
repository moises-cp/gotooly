import { isMapObject } from "./index";

const func = () => console.log('callback function');

describe('isMapObject', () => {
  test('return false on number', () => {
    expect(isMapObject(2514)).toBe(false);
  });

  test('return false on array', () => {
    expect(isMapObject(['apple', 'orange'])).toBe(false);
  });  

  test('return false on boolean', () => {
    expect(isMapObject(true)).toBe(false);
  });

  test('return false on callback function', () => {
    expect(isMapObject(func)).toBe(false);
  });

  test('return false on undefined', () => {
    expect(isMapObject(undefined)).toBe(false);
  });

  test('return false on null', () => {
    expect(isMapObject(null)).toBe(false);
  });

  test('return false on Symbol', () => {
    expect(isMapObject(Symbol('foo'))).toBe(false);
  });

  test('return false on BigInt', () => {
    expect(isMapObject(BigInt(9007199254740991))).toBe(false);
  });

  test('return false on string', () => {
    expect(isMapObject('orange')).toBe(false);
  });

  test('return false on regex', () => {
    expect(isMapObject(/(\w+)\s(\w+)/)).toBe(false);
  });

  test('return false on set objects', () => {
    const setObj = new Set();
    setObj.add('fruit');
    expect(isMapObject(setObj)).toBe(false);
  }); 

  test('return false on WeakSet objects', () => {
    const weakSetObj = new WeakSet();
    weakSetObj.add({});
    expect(isMapObject(weakSetObj)).toBe(false);
  }); 

  test('return false on WeakMap objects', () => {
    const weakMapObj = new WeakMap();
    weakMapObj.set({}, 37);
    expect(isMapObject(weakMapObj)).toBe(false);
  }); 

  test('return false on Date object', () => {
    const dateObj = new Date('December 17, 1995 03:24:00')
    expect(isMapObject(dateObj)).toBe(false);
  });

  test('return false on Error object', () => {
    const errorObj = new Error("Whoops!");
    expect(isMapObject(errorObj)).toBe(false);
  });

  test('return false on object literal with property', () => {
    expect(isMapObject({ fruit: ['orange']})).toBe(false);
  });

  test('return false on empty object literal', () => {
    expect(isMapObject({})).toBe(false);
  });

  test('return true on map objects', () => {
    const mapObj = new Map();
    mapObj.set('fruit', 'orange');
    expect(isMapObject(mapObj)).toBe(true);
  }); 
});