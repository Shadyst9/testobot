import { render } from "@testing-library/react";
import App from "../components/App";

test("APP renders", () => {
  const app = render(<App />);
  expect(app).toBeDefined();
});
