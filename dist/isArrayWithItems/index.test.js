"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const callback = () => console.log('callback function');
describe('isArrayWithItems', () => {
    test('return false on empty objects', () => {
        expect((0, index_1.isArrayWithItems)({})).toBe(false);
    });
    test('return false on strings', () => {
        expect((0, index_1.isArrayWithItems)('string')).toBe(false);
    });
    test('return false on boolean', () => {
        expect((0, index_1.isArrayWithItems)(true)).toBe(false);
    });
    test('return false on number', () => {
        expect((0, index_1.isArrayWithItems)(521)).toBe(false);
    });
    test('return false on undefined', () => {
        //@ts-ignore
        expect((0, index_1.isArrayWithItems)(undefined)).toBe(false);
    });
    test('return false on null', () => {
        //@ts-ignore
        expect((0, index_1.isArrayWithItems)(null)).toBe(false);
    });
    test('return false on Symbol', () => {
        expect((0, index_1.isArrayWithItems)(Symbol('foo'))).toBe(false);
    });
    test('return false on BigInt', () => {
        expect((0, index_1.isArrayWithItems)(BigInt(9007199254740991))).toBe(false);
    });
    test('return false on callback functions', () => {
        expect((0, index_1.isArrayWithItems)(callback)).toBe(false);
    });
    test('return false on objects with one property', () => {
        expect((0, index_1.isArrayWithItems)({ firstname: 'mel' })).toBe(false);
    });
    test('return false on objects with one method', () => {
        const obj = {
            firstname() {
                console.log('object method');
            }
        };
        expect((0, index_1.isArrayWithItems)(obj)).toBe(false);
    });
    test('return false on objects with properties and methods', () => {
        const obj = {
            firstname: 'mel',
            lastname: 'smith',
            func1() {
                return this.firstname;
            },
            func2() {
                return this.lastname;
            }
        };
        expect((0, index_1.isArrayWithItems)(obj)).toBe(false);
    });
    test('return true on array of one number', () => {
        expect((0, index_1.isArrayWithItems)([251])).toBe(true);
    });
    test('return true on array of strings', () => {
        expect((0, index_1.isArrayWithItems)(['orange', 'apple'])).toBe(true);
    });
    test('return true on array of objects', () => {
        const arr = [
            { color1: 'red' },
            { color2: 'blue' },
        ];
        expect((0, index_1.isArrayWithItems)(arr)).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map