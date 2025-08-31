import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import Home from "../app/page";
import React from "react";
import { server } from "./mocks/node";
import styles from "../app/page.module.css";

vi.mock("../app/helpers", () => {
  return {
    matchChurchesToConfessionTimes: vi.fn(),
  };
});

import { matchChurchesToConfessionTimes } from "../app/helpers";
import { dummyConfessionTimesWithChurches } from "./dummyData/dummyData";

beforeAll(() => server.listen()); //Stubbed responses from db

describe("Home page", () => {
  it("returns mocked data", async () => {
    // Tell the mock what to resolve
    (matchChurchesToConfessionTimes as jest.Mock).mockResolvedValue([
      {
        confessionTime: "09:00",
        churches: [{ id: "church-1", name: "St Peter's" }],
      },
    ]);

    const result = await matchChurchesToConfessionTimes("Monday");

    expect(result).toEqual([
      {
        confessionTime: "09:00",
        churches: [{ id: "church-1", name: "St Peter's" }],
      },
    ]);
  });

  it('renders an h1 with "London Confessions"', async () => {
    (matchChurchesToConfessionTimes as jest.Mock).mockResolvedValue(
      dummyConfessionTimesWithChurches
    );
    render(<Home />);
    const heading = await screen.findByTestId("chiefHeading");
    expect(heading).toHaveTextContent("London Confessions");
  });

  it("puts the headingBar in a sticky container", async () => {
    render(<Home />);
    const headingContainer = await screen.findByTestId("headingContainer");
    expect(headingContainer).toHaveClass(styles.stickyBar);
  });
  it("returns a footer", async () => {
    render(<Home />);
    const footer = await screen.findByTestId("footing");
    expect(footer).toHaveTextContent("Last human review");
    expect(footer).toHaveClass(styles.footer);
    const footerDividingLine = await screen.findByTestId("footingDivider");
  });
});
