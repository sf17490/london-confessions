"use client";
import React, { useState } from "react";
import HeadingBar from "./components/headingBar";
import { DayOfWeek } from "./types";
import StaticData from "./components/staticData";
import styles from "./page.module.css";

export default function Home() {
  const [dayOfWeek, setDayOfWeek] = useState<DayOfWeek>("Monday");

  return (
    <div className={styles.black}>
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
          <a
            href="https://github.com/sf17490/london-confessions"
            data-testid="codeLink"
          >
            (Proof)
          </a>
          .
        </p>
        <div className={styles.horizontal}>
          <p>
            {" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchXTNNNdH2gp1m4oRwMnZ9kZ95-Rx7hZh3ygH-pNJRREyEPg/viewform?usp=header"
              data-testid="feedbackLink"
            >
              Feedback.
            </a>
          </p>

          <p>Last human review: 26/08/25 </p>

          <p> </p>
        </div>
      </div>
    </div>
  );
}
