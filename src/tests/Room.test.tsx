import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders TESTOBOT", () => {
  render(<App />);
  const heading = screen.getByText("TESTOBOT");
  expect(heading).toBeInTheDocument();
});
