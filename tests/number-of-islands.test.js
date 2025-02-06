import { getNumberOfIslands } from "../number-of-islands";
import testData from "./testData";

describe("getNumberOfIslands", () => {
  testData.forEach(({ grid, expected }, testIndex) => {
    it(`${testIndex})`, () => {
      const actual = getNumberOfIslands(grid);

      expect(actual).toBe(expected);
    });
  });
});
