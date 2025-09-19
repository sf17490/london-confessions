"use client";
import React, { useState } from "react";
import HeadingBar from "./components/headingBar";
import { DayOfWeek } from "./types";
import StaticData from "./components/staticData";
import styles from "./page.module.css";

export default function Home() {
  const [dayOfWeek, setDayOfWeek] = useState<DayOfWeek>("Monday");

  return (
    <>
      <div data-testid="headingContainer" className={styles.stickyBar}>
        <HeadingBar selectedDayOfWeek={dayOfWeek} setDayOfWeek={setDayOfWeek} />
        <hr />
      </div>
      <div>
        <StaticData dayOfWeek={dayOfWeek} />
      </div>
      <div data-testid="footing" className={styles.footer}>
        <hr data-testid="footingDivider" />
        <p data-testid="aiInfo">
          THIS WEBSITE IS RUN BY ARTIFICIAL INTELLIGENCE{" "}
          <a href="CHANGEME" data-testid="codeLink">
            (Proof)
          </a>
          .
        </p>
        <p>Last human review: 26/08/25 </p>
      </div>
    </>
  );
}
