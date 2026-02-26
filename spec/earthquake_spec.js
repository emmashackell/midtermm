import { earthquake } from "../earthquake.js";

describe("earthquake", function () {

    it("n < 5", function () {
        expect(earthquake(4.4)).toBe("Little or no damage");
    });
    it("5 <= n < 5.5", function () {
        expect(earthquake(5.2)).toBe("Some damage");
    });
    it("5.5 <= n < 6.5", function () {
        expect(earthquake(6.0)).toBe("Serious damage: walls may crack or fall");
    });
    it("6.5 <= n < 7.5", function () {
        expect(earthquake(7.0)).toBe("Disaster: houses and buildings may collapse");
    });
    it("n >= 7.5", function () {
        expect(earthquake(8)).toBe("Catastrophe: most buildings destroyed");
    });
});