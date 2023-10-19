"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('isUpperCase', () => {
    /**
     * Invalids
     */
    test('Given a string with a mix of uppercase and lowercase letters, returns false', () => {
        expect((0, _1.default)('aMbT')).toBe(false);
    });
    test('Given a string with uppercase letters and symbols, returns false', () => {
        expect((0, _1.default)('MTD*')).toBe(false);
    });
    test('Given a string with a single lowercase letter, returns false', () => {
        expect((0, _1.default)('a')).toBe(false);
    });
    test('Given a string with all lowercase letters, returns false', () => {
        expect((0, _1.default)('abcde')).toBe(false);
    });
    test('Given a string with uppercase letters and numbers, returns false', () => {
        expect((0, _1.default)('ABCD5')).toBe(false);
    });
    // Wrong data types
    test('Given a number, returns false', () => {
        expect((0, _1.default)(24152)).toBe(false);
    });
    test('Given an array, returns false', () => {
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
    test('Given a single uppercase letter, returns true', () => {
        expect((0, _1.default)('A')).toBe(true);
    });
    test('Given various uppercase letters, returns true', () => {
        expect((0, _1.default)('ABCD')).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map