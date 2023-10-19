import toNumber from '.';

describe('toNumber', () => {
  /**
   * Valids
   */
  test('Given some numbers in a string literal, they are converted to number, assigned to data, and hasError is false', () => {
    expect(toNumber('24152')).toStrictEqual({
      data: 24152,
      hasError: false,
      message: '',
    });
  });

  test('Given some numbers, hasError is false and the number is return is the data property', () => {
    expect(toNumber(24152)).toStrictEqual({
      data: 24152,
      hasError: false,
      message: '',
    });
  });

  /**
   * Invalids
   */
  test('Given a string literal with numbers and letters, hasError is true and the right message will be returned.', () => {
    expect(toNumber('24152a')).toStrictEqual({
      data: null,
      hasError: true,
      message: 'Invalid characters',
    });
  });

  test('Given a boolean, hasError is true and it returns the right message', () => {
    expect(toNumber(true)).toStrictEqual({
      data: null,
      hasError: true,
      message: 'Invalid data type',
    });
  });

  test('Given an object literal, hasError is true and it returns the right message', () => {
    expect(toNumber({ color: 'red' })).toStrictEqual({
      data: null,
      hasError: true,
      message: 'Invalid data type',
    });
  });

  test('Given an array, hasError is true and it returns the right message', () => {
    expect(toNumber([1, 2, 3])).toStrictEqual({
      data: null,
      hasError: true,
      message: 'Invalid data type',
    });
  });

  test('Given undefined, hasError is true and it returns the right message', () => {
    expect(toNumber(undefined)).toStrictEqual({
      data: null,
      hasError: true,
      message: 'Invalid data type',
    });
  });

  test('Given null, hasError is true and it returns the right message', () => {
    expect(toNumber(null)).toStrictEqual({
      data: null,
      hasError: true,
      message: 'Invalid data type',
    });
  });

  test('Given a Symbol data type, hasError is true and it returns the right message', () => {
    expect(toNumber(Symbol('foo'))).toStrictEqual({
      data: null,
      hasError: true,
      message: 'Invalid data type',
    });
  });

  test('Given a BigInt data type, hasError is true and it returns the right message', () => {
    expect(toNumber(BigInt(9007199254740991))).toStrictEqual({
      data: null,
      hasError: true,
      message: 'Invalid data type',
    });
  });

  test('Given a Class, hasError is true and it returns the right message', () => {
    const ClassType = class {};

    expect(toNumber(ClassType)).toStrictEqual({
      data: null,
      hasError: true,
      message: 'Invalid data type',
    });
  });
});
