"use client";
import React, { useState } from "react";
import HeadingBar from "./components/headingBar";
import { DayOfWeek } from "./types";
import StaticData from "./components/staticData";
import styles from "./headingBar.module.css";

export default function Home() {
  const [dayOfWeek, setDayOfWeek] = useState<DayOfWeek>("Monday");

  return (
    <div>
      {/* <div className={styles.blah}> */}
      <HeadingBar selectedDayOfWeek={dayOfWeek} setDayOfWeek={setDayOfWeek} />
      <hr />

      <StaticData dayOfWeek={dayOfWeek} />
    </div>
  );
}
