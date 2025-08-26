import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, vi, expect } from "vitest";
import React from "react";
import HeadingBar from "../../app/components/headingBar";
import { DayOfWeek } from "@/app/types";

import styles from "../../app/headingBar.module.css";

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
  });
  it('renders a date"', async () => {
    render(
      <HeadingBar
        selectedDayOfWeek={"Monday"}
        setDayOfWeek={mockSetDayOfWeek}
      />
    );
    const date = await screen.findByTestId("date");
    expect(date).toHaveTextContent(/^21 - 28 July 2025$/);
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
