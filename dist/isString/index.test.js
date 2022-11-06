"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const func = () => console.log('callback function');
describe('isString', () => {
    test('return false on number', () => {
        expect((0, index_1.isString)(2514)).toBe(false);
    });
    test('return false on array', () => {
        expect((0, index_1.isString)(['apple', 'orange'])).toBe(false);
    });
    test('return false on objects with property', () => {
        expect((0, index_1.isString)({ fruit: ['orange'] })).toBe(false);
    });
    test('return false on empty object', () => {
        expect((0, index_1.isString)({})).toBe(false);
    });
    test('return false on boolean', () => {
        expect((0, index_1.isString)(true)).toBe(false);
    });
    test('return false on callback function', () => {
        expect((0, index_1.isString)(func)).toBe(false);
    });
    test('return false on undefined', () => {
        expect((0, index_1.isString)(undefined)).toBe(false);
    });
    test('return false on null', () => {
        expect((0, index_1.isString)(null)).toBe(false);
    });
    test('return false on Symbol', () => {
        expect((0, index_1.isString)(Symbol('foo'))).toBe(false);
    });
    test('return false on BigInt', () => {
        expect((0, index_1.isString)(BigInt(9007199254740991))).toBe(false);
    });
    test('return true on string', () => {
        expect((0, index_1.isString)('orange')).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map