import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Home from "../app/page";
import React from "react";
import { server } from "./mocks/node";

beforeAll(() => server.listen()); //Stubbed responses from db

describe("Home page", () => {
  it('renders an h1 with "London Confessions"', async () => {
    render(<Home />);
    const heading = await screen.findByTestId("chiefHeading");
    expect(heading).toHaveTextContent("London Confessions");
  });
});
