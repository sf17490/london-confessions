"use client";
import React, { useEffect, useState } from "react";
import {
  ConfessionTimeWithChurches,
  matchChurchesToConfessionTimes,
} from "./helpers";
import RenderDailyData from "./components/renderDailyData";
import HeadingBar from "./components/headingBar";

export default function Home() {
  const [confessionData, setConfessionData] = useState<
    ConfessionTimeWithChurches[]
  >([]);
  useEffect(() => {
    matchChurchesToConfessionTimes().then((result) => {
      setConfessionData(result);
    });
  }, []);
  return (
    <div>
      <HeadingBar />
      <RenderDailyData confessionData={confessionData} />
      {/* {byTimeTemplate()} */}
    </div>
  );
}

function byTimeTemplate() {
  return (
    <div>
      <h2>11:30</h2>
      <a href="https://westminstercathedral.org.uk/">Westminster Cathedral</a>
      {/* <p>Westminster Cathedral</p> */}
      <p>Sts Peter & Paul, Clerkenwell</p>
      <h2>12:00</h2>
      <s>Brompton Oratory, Knightsbridge</s>
      <p>Immaculate Conception, Farm Street</p>
      <p>St George's Cathedral, Southwark</p>
      <p>St James', Spanish Place</p>
      <p>St Patrick's, Soho</p>
      <p>Westminster Cathedral</p>
      <h2>12:15</h2>
      <p>Our Lady of the Assumption, Warwick Street </p>
      <h2>12:30</h2>
      <p>St James', Spanish Place</p>
      <p>St Mary Moorfield's, Liverpool Street</p>
      <p>Immaculate Conception, Farm Street</p>
      <h2>12:35</h2>
      <p>Corpus Christi, Covent Garden</p>
      <h2>13:20</h2>
      <p>St Etheldreda's, Farringdon</p>
      <h2>16:30</h2>
      <p>Westminster Cathedral</p>
      <h2>17:00</h2>
      <p>Westminster Cathedral</p>
      <h2>17:30</h2>
      <p>
        ⚠️ Brompton Oratory, Knightsbridge ⚠️ <a href=""> May be disrupted</a>
      </p>
      <p>Notre Dame de France (French), Leicester Square</p>
      <p>St Anselm and St Cæcilia, Holborn</p>
      <h2>17:40</h2>
      <p>Our Lady of Mount Carmel, Kensington</p>
      <h2>17:45</h2>
      <p>Ukrainian Catholic Cathedral, Bond Street</p>
    </div>
  );
}
