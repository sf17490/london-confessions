import { matchChurchesToConfessionTimes } from "../app/dbHelpers";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { dummyConfessionTimesWithChurches } from "./dummyData/dummyData";

import { server } from "./mocks/node";

beforeAll(() => server.listen()); //Stubbed responses from db

describe("matchChurchesToConfessionTimes", () => {
  it('should match them"', async () => {
    const result = await matchChurchesToConfessionTimes("Monday");
    expect(result).toEqual(dummyConfessionTimesWithChurches);
  });
});
