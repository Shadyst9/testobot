import { render } from "@testing-library/react";
import Testobot from "../components/Testobot";

test("TESTOBOT renders", () => {
  const testobot = render(<Testobot testobotDirection="south" />);
  expect(testobot).toBeDefined();
});
