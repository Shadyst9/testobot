import { render } from "@testing-library/react";
import Settings from "../components/Settings";

test("SETTINGS renders", () => {
  const settings = render(
    <Settings
      roomWidth={5}
      roomHeight={5}
      testobotX={0}
      testobotY={0}
      testobotDirection="south"
      changeRoomWidth={() => {
        return;
      }}
      changeRoomHeight={() => {
        return;
      }}
      changeTestobotX={() => {
        return;
      }}
      changeTestobotY={() => {
        return;
      }}
    />
  );
  expect(settings).toBeDefined();
});
