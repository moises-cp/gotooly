"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const callback = () => console.log('callback function');
describe('isObjectWithItems', () => {
    test('return false on empty objects', () => {
        expect((0, index_1.isObjectWithItems)({})).toBe(false);
    });
    test('return false on strings', () => {
        expect((0, index_1.isObjectWithItems)('string')).toBe(false);
    });
    test('return false on boolean', () => {
        expect((0, index_1.isObjectWithItems)(true)).toBe(false);
    });
    test('return false on number', () => {
        expect((0, index_1.isObjectWithItems)(521)).toBe(false);
    });
    test('return false on array', () => {
        expect((0, index_1.isObjectWithItems)(['orange', 'apple'])).toBe(false);
    });
    test('return false on undefined', () => {
        //@ts-ignore
        expect((0, index_1.isObjectWithItems)(undefined)).toBe(false);
    });
    test('return false on null', () => {
        //@ts-ignore
        expect((0, index_1.isObjectWithItems)(null)).toBe(false);
    });
    test('return false on Symbol', () => {
        expect((0, index_1.isObjectWithItems)(Symbol('foo'))).toBe(false);
    });
    test('return false on BigInt', () => {
        expect((0, index_1.isObjectWithItems)(BigInt(9007199254740991))).toBe(false);
    });
    test('return false on callback functions', () => {
        expect((0, index_1.isObjectWithItems)(callback)).toBe(false);
    });
    test('return true on objects with one property', () => {
        expect((0, index_1.isObjectWithItems)({ firstname: 'mel' })).toBe(true);
    });
    test('return true on objects with one method', () => {
        const obj = {
            firstname() {
                console.log('object method');
            }
        };
        expect((0, index_1.isObjectWithItems)(obj)).toBe(true);
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
            }
        };
        expect((0, index_1.isObjectWithItems)(obj)).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map