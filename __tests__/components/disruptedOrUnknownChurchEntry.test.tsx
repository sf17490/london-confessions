import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import {
  DisruptedOrUnknownChurchEntry,
  DisruptedOrUnknownChurchEntryProps,
} from "../../app/components/disruptedOrUnknownChurchEntry";

describe("The disruptedOrUnknownChurchEntry function", () => {
  it("should return disruption details for a church that is disrupted", () => {
    const disruptedChurch: DisruptedOrUnknownChurchEntryProps = {
      name: "some church name",
      url: "some church url .com",
      location: "London SW1 5TG",
      disruptionReason: "some reason",
      newsletterUrl: "someNewsletterUrl",
    };

    render(<DisruptedOrUnknownChurchEntry {...disruptedChurch} />);
    const disruptionNotice = screen.queryByTestId("disruptionNotice");
    expect(disruptionNotice).toBeInTheDocument();
  });
  it("should return UnknownChurchEntry if we don't know if the church is disrupted or not", () => {
    const disruptedChurch: DisruptedOrUnknownChurchEntryProps = {
      name: "some church name",
      url: "some church url .com",
      location: "London SW1 5TG",
      disruptionReason: undefined,
      newsletterUrl: "someNewsletterUrl",
    };

    render(<DisruptedOrUnknownChurchEntry {...disruptedChurch} />);
    const disruptionNotice = screen.queryByTestId("disruptionNotice");
    expect(disruptionNotice).not.toBeInTheDocument();
    const uncheckedWarningNotice = screen.queryByTestId(
      "uncheckedWarningNotice"
    );
    expect(uncheckedWarningNotice).toBeInTheDocument();
  });
});
