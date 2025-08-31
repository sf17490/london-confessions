import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import React from "react";
import { ShowMore } from "../../app/components/staticData";

describe("The showMore function", () => {
  it("should display a 'Show more' button", () => {
    render(<ShowMore disruptionReason="someReason" />);

    const showMoreButton = screen.getByTestId("showMoreButton");
    expect(showMoreButton).toHaveTextContent(/^Show more$/);
  });

  it("should display a description paragraph when I click 'Show more'", () => {
    render(<ShowMore disruptionReason="someReason" />);

    expect(screen.queryByTestId("description")).not.toBeInTheDocument();

    const showMoreButton = screen.getByTestId("showMoreButton");
    fireEvent.click(showMoreButton);
    expect(screen.getByTestId("description")).toBeInTheDocument();
  });
});
