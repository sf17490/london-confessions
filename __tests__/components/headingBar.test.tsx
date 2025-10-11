import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, vi, expect } from "vitest";
import React from "react";
import HeadingBar, {
  generateSundayWeekRange,
} from "../../app/components/headingBar";
import { DayOfWeek } from "@/app/types";

import styles from "../../app/components/headingBar.module.css";
import { getDateOfPipelineRun } from "../../app/helpers";
import dummyPipelineData from "../dummyData/dummyAppraisals.json";

describe("The HeadingBar component", () => {
  const mockSetDayOfWeek = vi.fn<(day: DayOfWeek) => void>();

  it("centres all text (by using mainDiv class)", async () => {
    render(
      <HeadingBar
        selectedDayOfWeek={"Monday"}
        setDayOfWeek={mockSetDayOfWeek}
      />
    );
    const heading = await screen.findByTestId("centreTextContainer");
    expect(heading).toHaveClass(styles.mainDiv);
  });
  it('renders a main heading with "London Confessions"', async () => {
    render(
      <HeadingBar
        selectedDayOfWeek={"Monday"}
        setDayOfWeek={mockSetDayOfWeek}
      />
    );
    const heading = await screen.findByTestId("chiefHeading");
    expect(heading).toHaveTextContent(/^London Confessions$/);
    expect(heading).toHaveClass(styles.heading1);
  });
  it('renders the correct subheading"', async () => {
    render(
      <HeadingBar
        selectedDayOfWeek={"Monday"}
        setDayOfWeek={mockSetDayOfWeek}
      />
    );
    const subheading = await screen.findByTestId("subheading");
    expect(subheading).toHaveTextContent(
      /^Confessionals open in Central London \(Zone 1\)$/
    );
    expect(subheading).toHaveClass(styles.heading2);
  });
  it('has a dayOfWeek selector"', async () => {
    render(
      <HeadingBar
        selectedDayOfWeek={"Monday"}
        setDayOfWeek={mockSetDayOfWeek}
      />
    );
    expect(
      screen.getByTestId("dayOfWeekSelectorContainer")
    ).toBeInTheDocument();
    await screen.findByTestId("dayOfWeekSelector");
  });

  it('has Sunday as the first dayOfWeek button"', async () => {
    render(
      <HeadingBar
        selectedDayOfWeek={"Monday"}
        setDayOfWeek={mockSetDayOfWeek}
      />
    );
    expect(screen.getByTestId("Sunday0")).toBeInTheDocument();
  });

  it.each([
    ["Monday", "Mon"],
    ["Tuesday", "Tue"],
    ["Wednesday", "Wed"],
    ["Thursday", "Thu"],
    ["Friday", "Fri"],
    ["Saturday", "Sat"],
    ["Sunday", "Sun"],
  ])(
    "sets the dayOfWeek as %s when the %s button is clicked",
    (dayOfWeek, shortName) => {
      const mockSetDayOfWeekCall = vi.fn();
      render(
        <HeadingBar
          selectedDayOfWeek={"Monday"}
          setDayOfWeek={mockSetDayOfWeekCall}
        />
      );
      const button = screen.getByText(shortName);
      fireEvent.click(button);
      expect(mockSetDayOfWeekCall).toHaveBeenCalledOnce();
      expect(mockSetDayOfWeekCall).toHaveBeenCalledWith(dayOfWeek);
    }
  );
});

describe("The generate Dates function", () => {
  // it("should return the preceeding Sunday's date", () => {
  //   vi.setSystemTime(new Date("2025-09-02T00:00:00Z")); //Tues 2nd Sept
  //   const result = generateSundayWeekRange();
  //   expect(result[0]).toBe("31 Aug 2025");
  // });

  // it("should return the following Saturday's date", () => {
  //   vi.setSystemTime(new Date("2025-09-02T00:00:00Z")); //Tues 2nd Sept
  //   const result = generateSundayWeekRange();
  //   expect(result[1]).toBe("6 Sept 2025");
  // });

  it("should base its date calculations from the date that the ai_pipeline was last run", () => {
    const pipelineRunDate = getDateOfPipelineRun(dummyPipelineData);
    const result = generateSundayWeekRange(pipelineRunDate);
  });
});
