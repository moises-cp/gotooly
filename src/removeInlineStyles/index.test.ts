import { removeInlineStyles } from "./index";

const func = () => console.log('callback function');

describe('removeInlineStyles', () => {
  test('return null on number', () => {
    expect(removeInlineStyles(2514)).toBe(null);
  });

  test('return null on array', () => {
    expect(removeInlineStyles(['apple', 'orange'])).toBe(null);
  });

  test('return null on objects with property', () => {
    expect(removeInlineStyles({ fruit: ['orange']})).toBe(null);
  });

  test('return null on empty object', () => {
    expect(removeInlineStyles({})).toBe(null);
  });

  test('return null on boolean', () => {
    expect(removeInlineStyles(true)).toBe(null);
  });

  test('return null on callback function', () => {
    expect(removeInlineStyles(func)).toBe(null);
  });

  test('return null on undefined', () => {
    expect(removeInlineStyles(undefined)).toBe(null);
  });

  test('return null on null', () => {
    expect(removeInlineStyles(null)).toBe(null);
  });

  test('return null on Symbol', () => {
    expect(removeInlineStyles(Symbol('foo'))).toBe(null);
  });

  test('return null on BigInt', () => {
    expect(removeInlineStyles(BigInt(9007199254740991))).toBe(null);
  });

  test('return "orange" on "orange"', () => {
    expect(removeInlineStyles('orange')).toBe('orange');
  });

  test('remove the inline styles and return the new string', () => {
    const strHtml = `
      <h1 style="font-color: red; margin-bottom: 2rem">Page Title</h1>
      <p style="color: green; font-size: 2rem;">Lorem Ipsum</p>
      <ul style="padding-left: 25px">
        <li style="position: relative">Contact Us</li>
      </ul>
    `;
    const expectedResult = `
      <h1>Page Title</h1>
      <p>Lorem Ipsum</p>
      <ul>
        <li>Contact Us</li>
      </ul>
    `;
    expect(removeInlineStyles(strHtml)).toBe(expectedResult);
  });
});