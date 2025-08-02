import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

describe("ConfessionTimes API endpoint", () => {
  it('should GET all confession times"', async () => {
    const res = await fetch("http:localhost:3000/api/confessionTimes");
    const data = await res.json();
    expect(data).toEqual([
      {
        dayOfWeek: "Monday",
        endTime: "12:30",
        id: 1,
        startTime: "11:30",
      },
      {
        dayOfWeek: "Monday",
        endTime: "12:30",
        id: 2,
        startTime: "12:00",
      },
      {
        dayOfWeek: "Monday",
        endTime: "18:00",
        id: 3,
        startTime: "17:30",
      },
    ]);
  });
});
