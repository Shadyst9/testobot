import { render } from "@testing-library/react";
import RemoteControl from "../components/RemoteControl";

test("REMOTECONTROL renders", () => {
  const remoteControl = render(
    <RemoteControl
      turnLeft={() => {
        return;
      }}
      turnRight={() => {
        return;
      }}
      moveForward={() => {
        return;
      }}
    />
  );
  expect(remoteControl).toBeDefined();
});
