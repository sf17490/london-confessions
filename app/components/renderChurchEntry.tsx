import React from "react";
import { ChurchData } from "../types";

function RenderChurchEntry({ churchData }: { churchData: ChurchData }) {
  return (
    <p>
      <a data-testid="churchName" href={churchData.website}>
        {churchData.name}
      </a>
      <span data-testid="commaSeparator">{", "}</span>
      <span data-testid={"churchLocation"}>{churchData.address}</span>
    </p>
  );
}
export default RenderChurchEntry;
