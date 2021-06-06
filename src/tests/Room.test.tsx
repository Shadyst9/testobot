import { render } from "@testing-library/react";
import Room from "../components/Room";

test("ROOM renders", () => {
  const room = render(
    <Room
      testobotDirection="south"
      roomWidth={5}
      roomHeight={5}
      testobotX={0}
      testobotY={0}
      squaremeters={[]}
    />
  );
  expect(room).toBeDefined();
});
