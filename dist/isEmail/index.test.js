"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('isEmail', () => {
    test('true on real email version 1', () => {
        expect((0, _1.default)('hello@hello.com')).toBe(true);
    });
    test('true on real email with very random characters and 104 characters in each section', () => {
        // Total characters: 104
        const randomChar = `h-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFSh-5R!#$%^&*()_SFljsd54.8<7>5?4,1/1[5]4{5}4:S;D=F~SFS`;
        expect((0, _1.default)(`${randomChar}@${randomChar}.${randomChar}`)).toBe(true);
    });
    test('true on real email with letters, numbers, hyphen, underscore, and period', () => {
        expect((0, _1.default)('hello_he.llo-5241@hel.lo_hello-5241.e')).toBe(true);
    });
    test('false on string not in email format', () => {
        expect((0, _1.default)('hello')).toBe(false);
    });
    test('false when missing extension', () => {
        expect((0, _1.default)('hello@hello')).toBe(false);
    });
    test('false when missing the username', () => {
        expect((0, _1.default)('hello.com')).toBe(false);
    });
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
});
//# sourceMappingURL=index.test.js.map