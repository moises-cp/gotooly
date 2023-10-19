"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('isLowerCase', () => {
    test('Given a string with a single letter in uppercase, returns false', () => {
        expect((0, _1.default)('A')).toBe(false);
    });
    test('Given a string with all uppercase letters, return false', () => {
        expect((0, _1.default)('ABCD')).toBe(false);
    });
    test('Given a string with lowercase letters and special symbols, returns false', () => {
        expect((0, _1.default)('abc*')).toBe(false);
    });
    test('Given a string with a mix of uppercase and lowercase letters, returns false', () => {
        expect((0, _1.default)('aMdP')).toBe(false);
    });
    // Wrong data types
    test('Given a number, it returns false', () => {
        expect((0, _1.default)(24152)).toBe(false);
    });
    test('Given an array, it returns false', () => {
        expect((0, _1.default)(['orange', 'apple'])).toBe(false);
    });
    test('Given an object literal, it returns false', () => {
        expect((0, _1.default)({ fruit: 'orange' })).toBe(false);
    });
    test('Given undefined, it returns false', () => {
        expect((0, _1.default)(undefined)).toBe(false);
    });
    test('Given null, it returns false', () => {
        expect((0, _1.default)(null)).toBe(false);
    });
    test('Given a Class, it returns false', () => {
        const ClassType = class {
        };
        expect((0, _1.default)(ClassType)).toBe(false);
    });
    test('Given a BigInt, it returns false', () => {
        expect((0, _1.default)(BigInt(9007199254740991))).toBe(false);
    });
    test('Given a Symbol type, it returns false', () => {
        expect((0, _1.default)(Symbol('foo'))).toBe(false);
    });
    test('Given a boolean, it returns false', () => {
        expect((0, _1.default)(true)).toBe(false);
    });
    /**
     * Valids
     */
    test('Given a string with a single english letter in lowercase, returns true', () => {
        expect((0, _1.default)('a')).toBe(true);
    });
    test('Given a string more than one english letter in lowercase, returns true', () => {
        expect((0, _1.default)('abcde')).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map