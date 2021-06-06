import { render } from "@testing-library/react";
import Squaremeter from "../components/Squaremeter";

test("SQUAREMETER renders", () => {
  const squaremeter = render(
    <Squaremeter
      key="key"
      xCoordinate={0}
      yCoordinate={0}
      hasTestobot={true}
      testobotDirection="south"
      isTested={false}
      temperature="good"
      degrees={20.0}
    />
  );
  expect(squaremeter).toBeDefined();
});
