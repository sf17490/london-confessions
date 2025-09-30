import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import React from "react";
import MyDisplayUnknownChurchEntry, {
  DisplayUnknownChurchEntryProps,
} from "../../app/components/displayUnknownChurchEntry";

import styles from "../../app/components/displayUnknownChurchEntry.module.css";

const dummyData: DisplayUnknownChurchEntryProps = {
  name: "some church",
  url: "www.gotoChurch.com",
  location: "London W1 4SX",
};

describe("The DisplayUnknownChurchEntry component", () => {
  it("should return the correct church link", () => {
    render(<MyDisplayUnknownChurchEntry churchData={dummyData} />);
    const churchLink = screen.getByTestId("churchLink");
    expect(churchLink).toHaveAttribute("href", "www.gotoChurch.com");
    expect(churchLink).toHaveClass(styles.churchLink);
  });
  it("should give the church name the correct styling", () => {
    render(<MyDisplayUnknownChurchEntry churchData={dummyData} />);
    const churchName = screen.getByTestId("churchName");
    expect(churchName).toHaveTextContent("some church");
    expect(churchName).toHaveClass(styles.churchName);
  });
  it("should give the church location the correct styling", () => {
    render(<MyDisplayUnknownChurchEntry churchData={dummyData} />);
    const churchLocation = screen.getByTestId("churchLocation");
    expect(churchLocation).toHaveTextContent("London W1 4SX");
    expect(churchLocation).toHaveClass(styles.churchLocation);
  });
  it("should warn that the church is unchecked", () => {
    render(<MyDisplayUnknownChurchEntry churchData={dummyData} />);
    const warning = screen.getByTestId("uncheckedWarning");
    expect(warning).toBeInTheDocument();
    expect(warning).toHaveTextContent("❓Unknown Status");
  });
  it("should give the entry the correct styling (grey)", () => {
    render(<MyDisplayUnknownChurchEntry churchData={dummyData} />);
    const uncheckedChurchContainer = screen.getByTestId(
      "uncheckedChurchContainer"
    );
    expect(uncheckedChurchContainer).toHaveClass(styles.uncheckedChurch);
  });
});
