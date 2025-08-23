"use client";
import React, { useState } from "react";
import HeadingBar from "./components/headingBar";
import { DayOfWeek } from "./types";
import StaticData from "./components/staticData";

export default function Home() {
  const [dayOfWeek, setDayOfWeek] = useState<DayOfWeek>("Monday");

  return (
    <div>
      <HeadingBar selectedDayOfWeek={dayOfWeek} setDayOfWeek={setDayOfWeek} />
      <StaticData dayOfWeek={dayOfWeek} />
    </div>
  );
}
