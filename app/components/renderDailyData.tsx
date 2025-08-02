import { ConfessionTimeWithChurches } from "../helpers";
import React from "react";
import RenderChurchEntry from "./renderChurchEntry";

function RenderDailyData({
  confessionData,
}: {
  confessionData: ConfessionTimeWithChurches[];
}) {
  return (
    <div>
      {confessionData.map((entry, idx) => {
        return (
          <div key={idx}>
            <h2 data-testid={`confessionTime-${idx + 1}`}>
              {entry.confessionTime}
            </h2>
            {Array.isArray(entry.churches) &&
              entry.churches.map((church, cidx) => {
                return (
                  <div
                    data-testid={`${entry.confessionTime}-church${cidx + 1}`}
                    key={cidx}
                  >
                    <RenderChurchEntry churchData={church.Church} />
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default RenderDailyData;
