"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('toMaxLength', () => {
    test('return an empty string', () => {
        expect((0, _1.default)('hello', 0)).toBe('');
    });
    test('return the first character of the string', () => {
        expect((0, _1.default)('hello', 1)).toBe('h');
    });
    test('return the first two characters of the string', () => {
        expect((0, _1.default)('hello', 2)).toBe('he');
    });
    test('return the first three characters of the string', () => {
        expect((0, _1.default)('hello', 3)).toBe('hel');
    });
    test('return the full string when the length exceeds', () => {
        expect((0, _1.default)('hello', 30)).toBe('hello');
    });
    test('return the full empty string when the length exceeds', () => {
        expect((0, _1.default)('', 30)).toBe('');
    });
    test('return the null on number', () => {
        expect((0, _1.default)(50, 30)).toBe(null);
    });
    test('return the empty array on empty array', () => {
        expect((0, _1.default)([], 30)).toStrictEqual([]);
    });
    test('return the an array with its first element', () => {
        expect((0, _1.default)(['orange', 'tomatoes', 'apple'], 1)).toStrictEqual([
            'orange',
        ]);
    });
    test('return the an array with its first two element', () => {
        expect((0, _1.default)(['orange', 'tomatoes', 'apple'], 2)).toStrictEqual([
            'orange',
            'tomatoes',
        ]);
    });
    test('return the an array with all its items when the maximum length exceeds', () => {
        expect((0, _1.default)(['orange', 'tomatoes', 'apple'], 20)).toStrictEqual([
            'orange',
            'tomatoes',
            'apple',
        ]);
    });
    test('return null on empty object literal', () => {
        expect((0, _1.default)({}, 20)).toBe(null);
    });
    test('return null on object literal with property', () => {
        expect((0, _1.default)({ fruit: 'orange' }, 20)).toBe(null);
    });
    test('return true on boolean', () => {
        expect((0, _1.default)(true, 20)).toBe(null);
    });
});
//# sourceMappingURL=index.test.js.map