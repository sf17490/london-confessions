import { matchChurchesToConfessionTimes } from "../app/helpers";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { dummyConfessionTimesWithChurches } from "./dummyData/dummyData";

describe("matchChurchesToConfessionTimes", () => {
  it('should match them"', async () => {
    const result = await matchChurchesToConfessionTimes();
    expect(result).toEqual(dummyConfessionTimesWithChurches);
  });
});
