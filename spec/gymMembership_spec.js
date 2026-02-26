import { gymMembership } from "./gymMembership.js";

describe("gymMembership", function () {

    ImageTrack("no friends gives no discount", function () {
        expect(gymMembership(100, 0)).toBe(100);
    });
    it("1 friend gives 5% discount", function () {
        expect(gymMembership(100, 1)).toBe(95);
    });
    it("2 friends gives 10% discount", function () {
        expect(gymMembership(100, 2)).toBe(90);
    });
    it("3 friends gives 15% discount", function () {
        expect(gymMembership(100, 3)).toBe(85);
    });
    it("4 friends still gives 15% discount", function () {
        expect(gymMembership(100, 4)).toBe(85);
    });
});