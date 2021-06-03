import React, { ChangeEventHandler } from "react";
import "./Settings.css";

interface SettingsProps {
  roomWidth: number;
  roomHeight: number;
  testobotX: number;
  testobotY: number;
  testobotDirection: string;
  changeRoomWidth: ChangeEventHandler<HTMLInputElement>;
  changeRoomHeight: ChangeEventHandler<HTMLInputElement>;
  changeTestobotX: ChangeEventHandler<HTMLInputElement>;
  changeTestobotY: ChangeEventHandler<HTMLInputElement>;
}

export default function Settings(props: SettingsProps) {
  return (
    <div className="settings">
      <div>
        <h2>Raum</h2>
        <div>
          <label>Breite: </label>
          <input
            type="number"
            value={props.roomWidth}
            onChange={props.changeRoomWidth}
          />
        </div>
        <div>
          <label>Höhe: </label>
          <input
            type="number"
            value={props.roomHeight}
            onChange={props.changeRoomHeight}
          />
        </div>
        <div>Fläche: {props.roomWidth * props.roomHeight}m²</div>
      </div>
      <div>
        <h2>Testobot</h2>
        <div>
          <label>Testobot-X: </label>
          <input
            type="number"
            value={props.testobotX}
            onChange={props.changeTestobotX}
          />
        </div>
        <div>
          <label>Testobot-Y: </label>
          <input
            type="number"
            value={props.testobotY}
            onChange={props.changeTestobotY}
          />
        </div>
        <div>Richtung: {props.testobotDirection}</div>
      </div>
    </div>
  );
}
