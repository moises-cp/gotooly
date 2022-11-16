"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const func = () => console.log('callback function');
describe('removeInlineStyles', () => {
    test('return null on number', () => {
        expect((0, index_1.removeInlineStyles)(2514)).toBe(null);
    });
    test('return null on array', () => {
        expect((0, index_1.removeInlineStyles)(['apple', 'orange'])).toBe(null);
    });
    test('return null on objects with property', () => {
        expect((0, index_1.removeInlineStyles)({ fruit: ['orange'] })).toBe(null);
    });
    test('return null on empty object', () => {
        expect((0, index_1.removeInlineStyles)({})).toBe(null);
    });
    test('return null on boolean', () => {
        expect((0, index_1.removeInlineStyles)(true)).toBe(null);
    });
    test('return null on callback function', () => {
        expect((0, index_1.removeInlineStyles)(func)).toBe(null);
    });
    test('return null on undefined', () => {
        expect((0, index_1.removeInlineStyles)(undefined)).toBe(null);
    });
    test('return null on null', () => {
        expect((0, index_1.removeInlineStyles)(null)).toBe(null);
    });
    test('return null on Symbol', () => {
        expect((0, index_1.removeInlineStyles)(Symbol('foo'))).toBe(null);
    });
    test('return null on BigInt', () => {
        expect((0, index_1.removeInlineStyles)(BigInt(9007199254740991))).toBe(null);
    });
    test('return "orange" on "orange"', () => {
        expect((0, index_1.removeInlineStyles)('orange')).toBe('orange');
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
        expect((0, index_1.removeInlineStyles)(strHtml)).toBe(expectedResult);
    });
});
//# sourceMappingURL=index.test.js.map