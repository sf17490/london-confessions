import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import React from "react";
import HeadingBar from "../../app/components/headingBar";

describe("The HeadingBar component", () => {
  it("centres all text", async () => {
    render(<HeadingBar />);
    const heading = await screen.findByTestId("centreTextContainer");
    expect(heading).toHaveAttribute("style", "text-align: center;");
  });
  it('renders a main heading with "London Confessions"', async () => {
    render(<HeadingBar />);
    const heading = await screen.findByTestId("chiefHeading");
    expect(heading).toHaveTextContent(/^London Confessions$/);
  });
  it('renders the correct subheading"', async () => {
    render(<HeadingBar />);
    const subheading = await screen.findByTestId("subheading");
    expect(subheading).toHaveTextContent(
      /^Confessionals open in Central London \(Zone 1\)$/
    );
  });
  it('renders a date"', async () => {
    render(<HeadingBar />);
    const date = await screen.findByTestId("date");
    expect(date).toHaveTextContent(/^21 - 28 July 2025$/);
  });
  it('has a dayOfWeek selector"', async () => {
    render(<HeadingBar />);
    expect(
      screen.getByTestId("dayOfWeekSelectorContainer")
    ).toBeInTheDocument();
    const date = await screen.findByTestId("dayOfWeekSelector");
    expect(date).toHaveTextContent(
      /^Mon \/ Tues \/ Weds \/ Thurs \/ Fri \/ Sat \/ Sun$/
    );
  });
});
