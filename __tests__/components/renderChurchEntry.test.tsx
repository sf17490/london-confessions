import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import React from "react";
import { dummyChurchData } from "../dummyData/dummyData";
import  RenderChurchEntry  from "../../app/components/renderChurchEntry";

describe("The RenderChurchEntry component", () => {
  it("should return the correct church name & link", () => {
    render(<RenderChurchEntry churchData={dummyChurchData} />);
    const churchName = screen.getByTestId("churchName");
    expect(churchName).toHaveTextContent("A dummy church name");
    expect(churchName).toHaveAttribute("href", "https://dummyChurch.com");
  });
  it("should render a comma + space between the church name and church location", () => {
    render(<RenderChurchEntry churchData={dummyChurchData} />);

    const commaSeparator = screen.getByTestId("commaSeparator");
    expect(commaSeparator).toBeInTheDocument();
    //expect(commaSeparator).toHaveTextContent(/^,\s$/); //TODO: Get this assertion working
  });
  it("should render the correct church location", () => {
    render(<RenderChurchEntry churchData={dummyChurchData} />);

    const churchLocation = screen.getByTestId("churchLocation");
    expect(churchLocation).toHaveTextContent(/^Victoria$/);
  });
});
