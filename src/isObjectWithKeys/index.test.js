import { isObjectWithKeys } from "./index";

test('test 1', () => {
  expect(isObjectWithKeys({})).toBe(false)
});