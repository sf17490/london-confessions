import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, vi, expect } from "vitest";
import React from "react";
import HeadingBar, {
  generateSundayWeekRange,
} from "../../app/components/headingBar";
import { DayOfWeek } from "@/app/types";

import styles from "../../app/components/headingBar.module.css";

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
  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-08-31T00:00:00Z"));
  });
  afterAll(() => {
    vi.useRealTimers();
  });
  it("should return today's date and a date 6 days in the future", () => {
    const result = generateSundayWeekRange();

    expect(result[0]).toBe("31 August 2025");
    expect(result[1]).toBe("06 September 2025");
  });
  it("should not return a date if today is not Sunday", () => {
    vi.setSystemTime(new Date("2025-09-02T00:00:00Z")); //Tues 2nd Sept
    const result = generateSundayWeekRange();

    expect(result[0]).toBe("");
  });
});
