import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

import { server } from "../mocks/node";

beforeAll(() => server.listen()); //Stubbed responses from db

describe("ConfessionTimes API endpoint", () => {
  it('should GET all confession times for Monday"', async () => {
    const res = await fetch(
      "http:localhost:3000/api/confessionTimes?dayOfWeek=Monday"
    );
    const data = await res.json();
    expect(data).toEqual([
      {
        dayOfWeek: "Monday",
        id: 1,
        startTime: "11:30",
      },
      {
        dayOfWeek: "Monday",
        id: 2,
        startTime: "12:00",
      },
      {
        dayOfWeek: "Monday",
        id: 3,
        startTime: "17:30",
      },
    ]);
  });

  it('should GET all confession times for Tuesday only"', async () => {
    const res = await fetch(
      "http:localhost:3000/api/confessionTimes?dayOfWeek=Tuesday"
    );
    const data = await res.json();
    expect(data).toEqual([
      {
        dayOfWeek: "Tuesday",
        id: 4,
        startTime: "06:45",
      },
    ]);
  });
});
