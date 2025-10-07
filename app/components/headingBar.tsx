import React from "react";
import { DayOfWeek } from "../types";
import styles from "./headingBar.module.css";

type HeadingBarProps = {
  selectedDayOfWeek: DayOfWeek;
  setDayOfWeek: (day: DayOfWeek) => void;
};

function HeadingBar({ selectedDayOfWeek, setDayOfWeek }: HeadingBarProps) {
  const days: DayOfWeek[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dates = generateSundayWeekRange();
  return (
    <div data-testid="centreTextContainer" className={styles.mainDiv}>
      <h1 data-testid="chiefHeading" className={styles.heading1}>
        London Confessions
      </h1>
      <h3 data-testid="subheading" className={styles.heading2}>
        Confessionals open in Central London (Zone 1)
      </h3>
      <p className={styles.smallprint}>Updated weekly by AI</p>
      <b data-testid="date" className={styles.date}>
        {dates[0]} - {dates[1]}
      </b>
      <p data-testid="dayOfWeekSelectorContainer">
        <b data-testid="dayOfWeekSelector">
          {days.map((day, index) => (
            <button
              className={day === selectedDayOfWeek ? styles.selected : ""}
              role="button"
              key={index}
              data-testid={day + index}
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

export function generateSundayWeekRange() {
  const today = new Date();

  const dayOfWeek = today.getUTCDay();

  const sunday = new Date(today);
  sunday.setUTCDate(today.getUTCDate() - dayOfWeek);

  const saturday = new Date(sunday);
  saturday.setUTCDate(sunday.getUTCDate() + 6);

  return [formatDate(sunday), formatDate(saturday)];
}

function formatDate(date: Date) {
  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
