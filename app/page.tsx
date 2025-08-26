"use client";
import React, { useState } from "react";
import HeadingBar from "./components/headingBar";
import { DayOfWeek } from "./types";
import StaticData from "./components/staticData";

export default function Home() {
  const [dayOfWeek, setDayOfWeek] = useState<DayOfWeek>("Monday");

  return (
    <div>
      {/* <div className={styles.blah}> */}
      <HeadingBar selectedDayOfWeek={dayOfWeek} setDayOfWeek={setDayOfWeek} />
      <hr />

      <StaticData dayOfWeek={dayOfWeek} />
      <div data-testid="footing">
        <hr data-testid="footingDivider" />
        <p>Last human review: 26/08/25</p>
      </div>
    </div>
  );
}
