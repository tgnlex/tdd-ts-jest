import Calculator from "../src/lib/calc";
import {describe, test, expect} from '@jest/globals';``
const calc = new Calculator();
describe("Calculator", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(calc.add(3, 4)).toBe(7);
  });
    test("subtracts 2 - 1 to equal 1", () => {
        expect(calc.subtract(2, 1)).toBe(1);
    });
    it("multiplies 2 * 2 to equal 4", () => {
        expect(calc.multiply(2, 2)).toBe(4);
    });
    it("divides 4 / 2 to equal 2", () => {
        expect(calc.divide(4, 2)).toBe(2);
    });
});
