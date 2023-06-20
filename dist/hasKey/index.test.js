"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const callback = () => console.log('callback function');
describe('hasKey', () => {
    test('return false on empty objects', () => {
        expect((0, index_1.hasKey)({})).toBe(false);
    });
    test('return false on strings', () => {
        expect((0, index_1.hasKey)('string')).toBe(false);
    });
    test('return false on boolean', () => {
        expect((0, index_1.hasKey)(true)).toBe(false);
    });
    test('return false on number', () => {
        expect((0, index_1.hasKey)(521)).toBe(false);
    });
    test('return false on array', () => {
        expect((0, index_1.hasKey)(['orange', 'apple'])).toBe(false);
    });
    test('return false on undefined', () => {
        //@ts-ignore
        expect((0, index_1.hasKey)(undefined)).toBe(false);
    });
    test('return false on null', () => {
        //@ts-ignore
        expect((0, index_1.hasKey)(null)).toBe(false);
    });
    test('return false on Symbol', () => {
        expect((0, index_1.hasKey)(Symbol('foo'))).toBe(false);
    });
    test('return false on BigInt', () => {
        expect((0, index_1.hasKey)(BigInt(9007199254740991))).toBe(false);
    });
    test('return false on callback functions', () => {
        expect((0, index_1.hasKey)(callback)).toBe(false);
    });
    test('return true on objects with one property', () => {
        expect((0, index_1.hasKey)({ firstname: 'mel' })).toBe(true);
    });
    test('return true on objects with one method', () => {
        const obj = {
            firstname() {
                console.log('object method');
            },
        };
        expect((0, index_1.hasKey)(obj)).toBe(true);
    });
    test('return true on objects with properties and methods', () => {
        const obj = {
            firstname: 'mel',
            lastname: 'smith',
            func1() {
                return this.firstname;
            },
            func2() {
                return this.lastname;
            },
        };
        expect((0, index_1.hasKey)(obj)).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map