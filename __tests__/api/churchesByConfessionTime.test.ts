import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

import { server } from "../mocks/node";
import {
  elevenThirtyChurches,
  twelveOclockChurches,
} from "../dummyData/dummyData";

beforeAll(() => server.listen()); //Stubbed responses from db

describe("ChurchesByConfessionTime API endpoint", () => {
  it('should GET churches for confession time id 1 (11:30 Monday)"', async () => {
    const res = await fetch(
      "http://localhost:3000/api/churchesByConfessionTime?confessionTimeId=1"
    );
    const data = await res.json();
    expect(data).toEqual(elevenThirtyChurches);
  });

  it("should GET churches for a specific confession time id 2 (12:00 Monday)", async () => {
    const res = await fetch(
      "http:localhost:3000/api/churchesByConfessionTime?confessionTimeId=2"
    );
    const data = await res.json();
    expect(data).toEqual(twelveOclockChurches);
  });
});
