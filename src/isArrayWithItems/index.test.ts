import { isArrayWithItems } from "./index";

const callback = () => console.log('callback function');

describe('isArrayWithItems', () => {
  test('return false on empty objects', () => {
    expect(isArrayWithItems({})).toBe(false)
  });

  test('return false on strings', () => {
    expect(isArrayWithItems('string')).toBe(false)
  });

  test('return false on boolean', () => {
    expect(isArrayWithItems(true)).toBe(false)
  });

  test('return false on number', () => {
    expect(isArrayWithItems(521)).toBe(false)
  });

  test('return false on undefined', () => {
    //@ts-ignore
    expect(isArrayWithItems(undefined)).toBe(false)
  });

  test('return false on null', () => {
    //@ts-ignore
    expect(isArrayWithItems(null)).toBe(false)
  });

  test('return false on Symbol', () => {
    expect(isArrayWithItems(Symbol('foo'))).toBe(false)
  });

  test('return false on BigInt', () => {
    expect(isArrayWithItems(BigInt(9007199254740991))).toBe(false)
  });

  test('return false on callback functions', () => {
    expect(isArrayWithItems(callback)).toBe(false)
  });

  test('return false on objects with one property', () => {
    expect(isArrayWithItems({firstname: 'mel'})).toBe(false)
  });

  test('return false on objects with one method', () => {
    const obj = {
      firstname() { 
        console.log('object method')
      }
    }
    expect(isArrayWithItems(obj)).toBe(false)
  });

  test('return false on objects with properties and methods', () => {
    const obj = {
      firstname: 'mel',
      lastname: 'smith',
      func1() {
        return this.firstname;
      },
      func2() {
        return this.lastname;
      }
    }
    expect(isArrayWithItems(obj)).toBe(false)
  });

  test('return true on array of one number', () => {
    expect(isArrayWithItems([251])).toBe(true)
  });

  test('return true on array of strings', () => {
    expect(isArrayWithItems(['orange', 'apple'])).toBe(true)
  });

  test('return true on array of objects', () => {
    const arr = [
      { color1: 'red'},
      { color2: 'blue'},
    ];
    expect(isArrayWithItems(arr)).toBe(true)
  });
});