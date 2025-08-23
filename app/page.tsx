"use client";
import React, { useEffect, useState } from "react";
import { matchChurchesToConfessionTimes } from "./helpers";
import RenderDailyData from "./components/renderDailyData";
import HeadingBar from "./components/headingBar";
import { ConfessionTimeWithChurches } from "./types";
import StaticData from "./components/staticData";

//TODO: Implement static data for every day
//Do TDD to verify that selecting the day of week changes what gets rendered on

export default function Home() {
  const [confessionData, setConfessionData] = useState<
    ConfessionTimeWithChurches[]
  >([]);
  useEffect(() => {
    matchChurchesToConfessionTimes("Monday").then((result) => {
      setConfessionData(result);
    });
  }, []);
  return (
    <div>
      <HeadingBar />
      {/* <RenderDailyData confessionData={confessionData} /> */}
      <StaticData dayOfWeek="Sunday" />
      {/* {byTimeTemplate()} */}
    </div>
  );
}
