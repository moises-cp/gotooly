"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const func = () => console.log('callback function');
describe('isNumber', () => {
    test('return false on number', () => {
        expect((0, index_1.isNumber)(2514)).toBe(true);
    });
    test('return false on array', () => {
        expect((0, index_1.isNumber)(['apple', 'orange'])).toBe(false);
    });
    test('return false on objects with property', () => {
        expect((0, index_1.isNumber)({ fruit: ['orange'] })).toBe(false);
    });
    test('return false on empty object', () => {
        expect((0, index_1.isNumber)({})).toBe(false);
    });
    test('return false on boolean', () => {
        expect((0, index_1.isNumber)(true)).toBe(false);
    });
    test('return false on callback function', () => {
        expect((0, index_1.isNumber)(func)).toBe(false);
    });
    test('return false on undefined', () => {
        expect((0, index_1.isNumber)(undefined)).toBe(false);
    });
    test('return false on null', () => {
        expect((0, index_1.isNumber)(null)).toBe(false);
    });
    test('return false on Symbol', () => {
        expect((0, index_1.isNumber)(Symbol('foo'))).toBe(false);
    });
    test('return false on BigInt', () => {
        expect((0, index_1.isNumber)(BigInt(9007199254740991))).toBe(false);
    });
    test('return false on string', () => {
        expect((0, index_1.isNumber)('orange')).toBe(false);
    });
});
//# sourceMappingURL=index.test.js.map