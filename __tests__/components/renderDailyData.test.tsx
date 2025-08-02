import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import React from "react";
import RenderDailyData from "../../app/components/renderDailyData";
import { dummyConfessionTimesWithChurches } from "../dummyData/dummyData";

describe("The RenderDailyData component", () => {
  [
    [1, "11:30"],
    [2, "12:00"],
    [3, "17:30"],
  ].forEach((pair) => {
    const id = pair[0];
    const time = pair[1];
    it(`returns the correct ${time} heading`, () => {
      render(
        <RenderDailyData confessionData={dummyConfessionTimesWithChurches} />
      );

      const confessionTimeEntry = screen.getByTestId(`confessionTime-${id}`);
      expect(confessionTimeEntry).toHaveTextContent(time.toString());
    });
  });

  it("returns the correct churches for 11:30", () => {
    render(
      <RenderDailyData confessionData={dummyConfessionTimesWithChurches} />
    );

    const church1 = screen.getByTestId(`11:30-church1`);
    expect(church1).toHaveTextContent("Westminster Cathedral");
    const church2 = screen.getByTestId(`11:30-church2`);
    expect(church2).toHaveTextContent("Sts Peter & Paul");
  });
});
