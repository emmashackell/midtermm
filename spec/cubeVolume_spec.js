import { cubeVolume } from "../cubeVolume.js";

describe("cubeVolume", function () {

    it("calculates volume for height 1", function () {
        expect(cubeVolume(1)).toBe(1);
    });
    it("calculates volume for height 2", function () {
        expect(cubeVolume(2)).toBe(8);
    });
    it("calculates volume for height 5", function () {
        expect(cubeVolume(5)).toBe(125);
    });
});