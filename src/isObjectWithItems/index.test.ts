import { isObjectWithItems } from "./index";

const callback = () => console.log('callback function');

describe('isObjectWithItems', () => {
  test('return false on empty objects', () => {
    expect(isObjectWithItems({})).toBe(false)
  });

  test('return false on strings', () => {
    expect(isObjectWithItems('string')).toBe(false)
  });

  test('return false on boolean', () => {
    expect(isObjectWithItems(true)).toBe(false)
  });

  test('return false on number', () => {
    expect(isObjectWithItems(521)).toBe(false)
  });

  test('return false on array', () => {
    expect(isObjectWithItems(['orange', 'apple'])).toBe(false)
  });

  test('return false on undefined', () => {
    //@ts-ignore
    expect(isObjectWithItems(undefined)).toBe(false)
  });

  test('return false on null', () => {
    //@ts-ignore
    expect(isObjectWithItems(null)).toBe(false)
  });

  test('return false on Symbol', () => {
    expect(isObjectWithItems(Symbol('foo'))).toBe(false)
  });

  test('return false on BigInt', () => {
    expect(isObjectWithItems(BigInt(9007199254740991))).toBe(false)
  });

  test('return false on callback functions', () => {
    expect(isObjectWithItems(callback)).toBe(false)
  });

  test('return true on objects with one property', () => {
    expect(isObjectWithItems({firstname: 'mel'})).toBe(true)
  });

  test('return true on objects with one method', () => {
    const obj = {
      firstname() { 
        console.log('object method')
      }
    }
    expect(isObjectWithItems(obj)).toBe(true)
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
      }
    }
    expect(isObjectWithItems(obj)).toBe(true)
  });
});
