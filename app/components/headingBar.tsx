import React from "react";
import { DayOfWeek } from "../types";
import styles from "./headingBar.module.css";

type HeadingBarProps = {
  selectedDayOfWeek: DayOfWeek;
  setDayOfWeek: (day: DayOfWeek) => void;
};

function HeadingBar({ selectedDayOfWeek, setDayOfWeek }: HeadingBarProps) {
  const days: DayOfWeek[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div data-testid="centreTextContainer" className={styles.mainDiv}>
      <h1 data-testid="chiefHeading" className={styles.heading1}>
        London Confessions
      </h1>
      <h3 data-testid="subheading" className={styles.heading2}>
        Confessionals open in Central London (Zone 1)
      </h3>
      <p className={styles.smallprint}>Updated weekly by AI</p>
      <b data-testid="date" className={styles.date}>28 Sept 2025 - 5 Oct 2025</b>
      <p data-testid="dayOfWeekSelectorContainer">
        <b data-testid="dayOfWeekSelector">
          {days.map((day) => (
            <button
              className={`${day === selectedDayOfWeek ? styles.selected : ""}`}
              role="button"
              key={day}
              onClick={() => {
                setDayOfWeek(day);
              }}
              style={{ margin: "0 4px" }}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </b>
      </p>
    </div>
  );
}
export default HeadingBar;
