"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('isLastName', () => {
    test('false on string with special characters and longer than 40 characters.', () => {
        // Total characters: 104
        const randomChar = `h-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFSh-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFS`;
        expect((0, _1.default)(`${randomChar}@${randomChar}.${randomChar}`)).toBe(false);
    });
    test('false on string with with 41 characters', () => {
        // Total characters: 41
        const val = `hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`;
        expect((0, _1.default)(val)).toBe(false);
    });
    // Invalid data types
    test('false on null', () => {
        expect((0, _1.default)(null)).toBe(false);
    });
    test('false on undefined', () => {
        expect((0, _1.default)(undefined)).toBe(false);
    });
    test('false on boolean', () => {
        expect((0, _1.default)(true)).toBe(false);
    });
    test('false on empty array', () => {
        expect((0, _1.default)([])).toBe(false);
    });
    test('false on array with items', () => {
        expect((0, _1.default)(['orange', 'banana'])).toBe(false);
    });
    test('true on string with spaces', () => {
        const val = `moises colon`;
        expect((0, _1.default)(val)).toBe(true);
    });
    test('invalid with string with only one character', () => {
        const val = `m`;
        expect((0, _1.default)(val)).toBe(false);
    });
    // Valid Strings
    test('Valid with string with only two character', () => {
        const val = `mo`;
        expect((0, _1.default)(val)).toBe(true);
    });
    test('true on string with with 40 characters', () => {
        const val = `hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`;
        expect((0, _1.default)(val)).toBe(true);
    });
    test('true on string with only english letters', () => {
        const val = `abcdefgHIGKLmnopqrstuvwxyz`;
        expect((0, _1.default)(val)).toBe(true);
    });
    test('true on string with only english letters and apostrophe', () => {
        const val = `O'Hara`;
        expect((0, _1.default)(val)).toBe(true);
    });
    test('true on string with only english and spanish letters', () => {
        const val = `MoisáéCÑ`;
        expect((0, _1.default)(val)).toBe(true);
    });
    test('true on string with only spanish letters', () => {
        const val = `íóúñüÁÉÍ`;
        expect((0, _1.default)(val)).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map