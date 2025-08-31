import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import React from "react";
import {
  ShowMore,
  DisplayChurchEntry,
  DisplayDodgyChurchEntry,
} from "../../app/components/staticData";
import styles from "../../app/components/staticData.module.css";

describe("The showMore function", () => {
  it("should put the disruption notice and show more button on the same row", () => {
    render(<ShowMore disruptionReason="someReason" />);

    const disruptionRow = screen.queryByTestId("disruptionRow");
    expect(disruptionRow).toHaveClass(styles.disruptionRow);
  });
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

describe("The DisplayChurchEntry function", () => {
  const dummyChurchEntry = {
    name: "someChurch",
    url: "someurl",
    location: "somePlace",
  };

  it("should link to the church website", () => {
    render(<DisplayChurchEntry {...dummyChurchEntry} />);

    const link = screen.getByTestId("linkToChurchWebsite");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "someurl");
    expect(link).toHaveAttribute("class", styles.churchLink);
  });
  it("should render the church name correctly", () => {
    render(<DisplayChurchEntry {...dummyChurchEntry} />);

    const churchName = screen.getByTestId("churchName");
    expect(churchName).toBeInTheDocument();
    expect(churchName).toHaveTextContent("someChurch");
    expect(churchName).toHaveAttribute("class", styles.churchName);
  });

  it("should render the church location correctly", () => {
    render(<DisplayChurchEntry {...dummyChurchEntry} />);

    const churchLocation = screen.getByTestId("churchLocation");
    expect(churchLocation).toBeInTheDocument();
    expect(churchLocation).toHaveTextContent("somePlace");
    expect(churchLocation).toHaveAttribute("class", styles.churchLocation);
  });
});

describe("The DisplayDodgyChurchEntry function", () => {
  const dummyChurchEntry = {
    name: "someChurch",
    url: "someurl",
    location: "somePlace",
    disruptionReason: "someReason",
  };

  it("should link to the church website", () => {
    render(<DisplayDodgyChurchEntry {...dummyChurchEntry} />);

    const link = screen.getByTestId("linkToChurchWebsite");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "someurl");
    expect(link).toHaveAttribute("class", styles.churchLink);
  });
  it("should render the church name correctly", () => {
    render(<DisplayDodgyChurchEntry {...dummyChurchEntry} />);

    const churchName = screen.getByTestId("churchName");
    expect(churchName).toBeInTheDocument();
    expect(churchName).toHaveTextContent("someChurch");
    expect(churchName).toHaveAttribute("class", styles.churchName);
  });

  it("should render the church location correctly", () => {
    render(<DisplayDodgyChurchEntry {...dummyChurchEntry} />);

    const churchLocation = screen.getByTestId("churchLocation");
    expect(churchLocation).toBeInTheDocument();
    expect(churchLocation).toHaveTextContent("somePlace");
    expect(churchLocation).toHaveAttribute("class", styles.churchLocation);
  });

  it("should render the church location correctly", () => {
    render(<DisplayDodgyChurchEntry {...dummyChurchEntry} />);

    const churchLocation = screen.getByTestId("churchLocation");
    expect(churchLocation).toBeInTheDocument();
    expect(churchLocation).toHaveTextContent("somePlace");
    expect(churchLocation).toHaveAttribute("class", styles.churchLocation);
  });

  it("should highlight the entry with soft yellow", () => {
    render(<DisplayDodgyChurchEntry {...dummyChurchEntry} />);
    const disruptionContainer = screen.getByTestId("disruptionContainer");
    expect(disruptionContainer).toHaveClass(styles.disruptedNotice);
  });
  it("should include a ⚠️  disruption warning", () => {
    render(<DisplayDodgyChurchEntry {...dummyChurchEntry} />);
    const disruptionWarning = screen.queryByTestId("disruptionWarning");
    expect(disruptionWarning).toBeInTheDocument();
  });
});
