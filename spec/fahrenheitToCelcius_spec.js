import { farenheitToCelcius } from "../src/farenheitToCelcius.js";

describe("farenheitToCelcius", function () {

    it("freezing water", function () {
        expect(farenheitToCelcius(32)).toBe(0);
    });
    it("boiling water", function () {
        expect(farenheitToCelcius(212)).toBe(100);
    });
    it("room temperature", function () {
        expect(farenheitToCelcius(70)).toBeCloseTo(21.11, 2);
    });
});