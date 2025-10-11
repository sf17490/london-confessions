import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Home from "../app/page";
import React from "react";
import { server } from "./mocks/node";
import styles from "../app/page.module.css";

beforeAll(() => server.listen()); //Stubbed responses from db

describe("Home page", () => {
  it('renders an h1 with "London Confessions"', async () => {
    render(<Home />);
    const heading = await screen.findByTestId("chiefHeading");
    expect(heading).toHaveTextContent("London Confessions");
  });

  it("puts the headingBar in a sticky container", async () => {
    render(<Home />);
    const headingContainer = await screen.findByTestId("headingContainer");
    expect(headingContainer).toHaveClass(styles.stickyBar);
  });
  it("returns a footer", async () => {
    render(<Home />);
    const footer = await screen.findByTestId("footing");
    expect(footer).toHaveTextContent("Last human review");
    expect(footer).toHaveClass(styles.footer);
  });

  it("tells the user that the site is managed by AI", async () => {
    render(<Home />);
    const aiInfo = await screen.findByTestId("aiInfo");
    expect(aiInfo).toHaveTextContent(
      "THIS WEBSITE IS RUN BY ARTIFICIAL INTELLIGENCE"
    );
    const codeLink = await screen.findByTestId("codeLink");
    expect(codeLink).toHaveTextContent("(Proof)");
    expect(codeLink).toHaveAttribute(
      "href",
      "https://github.com/sf17490/london-confessions"
    );
  });

  it("has a link to a feedback form", async () => {
    render(<Home />);
    const feedbackLink = await screen.findByTestId("feedbackLink");
    expect(feedbackLink).toHaveTextContent("Feedback");

    expect(feedbackLink).toHaveAttribute(
      "href",
      "https://docs.google.com/forms/d/e/1FAIpQLSchXTNNNdH2gp1m4oRwMnZ9kZ95-Rx7hZh3ygH-pNJRREyEPg/viewform?usp=header"
    );
  });
});
