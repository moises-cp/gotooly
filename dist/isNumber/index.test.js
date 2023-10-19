"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const func = () => console.log('callback function');
describe('isNumber', () => {
    test('return false on number', () => {
        expect((0, _1.default)(2514)).toBe(true);
    });
    test('false on number within string data type', () => {
        expect((0, _1.default)('2514')).toBe(false);
    });
    test('return false on array', () => {
        expect((0, _1.default)(['apple', 'orange'])).toBe(false);
    });
    test('return false on objects with property', () => {
        expect((0, _1.default)({ fruit: ['orange'] })).toBe(false);
    });
    test('return false on empty object', () => {
        expect((0, _1.default)({})).toBe(false);
    });
    test('return false on boolean', () => {
        expect((0, _1.default)(true)).toBe(false);
    });
    test('return false on callback function', () => {
        expect((0, _1.default)(func)).toBe(false);
    });
    test('return false on undefined', () => {
        expect((0, _1.default)(undefined)).toBe(false);
    });
    test('return false on null', () => {
        expect((0, _1.default)(null)).toBe(false);
    });
    test('return false on Symbol', () => {
        expect((0, _1.default)(Symbol('foo'))).toBe(false);
    });
    test('return false on BigInt', () => {
        expect((0, _1.default)(BigInt(9007199254740991))).toBe(false);
    });
    test('return false on string', () => {
        expect((0, _1.default)('orange')).toBe(false);
    });
});
//# sourceMappingURL=index.test.js.map