import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

const elevenThirtyChurches = [
  {
    Church: {
      address: "Victoria St, London SW1P 1LT",
      id: 1,
      name: "Westminster Cathedral",
      website: "https://westminstercathedral.org.uk/",
    },
    ChurchConfession: {
      churchId: 1,
      confessionTimeId: 1,
    },
  },
  {
    Church: {
      address: "Clerkenwell",
      id: 2,
      name: "Sts Peter & Paul",
      website: "https://parish.rcdow.org.uk/clerkenwell/",
    },
    ChurchConfession: {
      churchId: 2,
      confessionTimeId: 1,
    },
  },
];

const twelveOclockChurches = [
  {
    Church: {
      address: "Soho",
      id: 3,
      name: "St Patrick's",
      website: "https://www.stpatricksoho.org/",
    },
    ChurchConfession: {
      churchId: 3,
      confessionTimeId: 2,
    },
  },
];

describe("ChurchesByConfessionTime API endpoint", () => {
  it('should GET churches for confession time id 1 (11:30)"', async () => {
    const res = await fetch(
      "http:localhost:3000/api/churchesByConfessionTime?confessionTimeId=1"
    );
    const data = await res.json();
    expect(data).toEqual(elevenThirtyChurches);
  });

  it("should GET churches for a specific confession time id 2 (12:00)", async () => {
    const res = await fetch(
      "http:localhost:3000/api/churchesByConfessionTime?confessionTimeId=2"
    );
    const data = await res.json();
    expect(data).toEqual(twelveOclockChurches);
  });
});
