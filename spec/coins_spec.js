import { coins } from "../src/coins.js";

describe("coins", function () {

    it("returns 0 when no coins are given", function () {
        expect(coins(0, 0, 0, 0, 0)).toBe(0);
    });
    it("calculates total for one of each coin", function () {
        expect(coins(1, 1, 1, 1, 1)).toBe(3.40);
    });
    it("calculates total for multiple coins", function () {
        expect(coins(2, 3, 4, 1, 2)).toBe(0.10 + 0.30 + 1.00 + 1.00 + 4.00); // should be 6.40
    });
});