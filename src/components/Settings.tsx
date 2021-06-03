import React, { ChangeEventHandler, Component } from "react";
import "../styles/Settings.css";

type Properties = {
  roomWidth: number;
  roomHeight: number;
  testobotX: number;
  testobotY: number;
  testobotDirection: string;
  changeRoomWidth: ChangeEventHandler<HTMLInputElement>;
  changeRoomHeight: ChangeEventHandler<HTMLInputElement>;
  changeTestobotX: ChangeEventHandler<HTMLInputElement>;
  changeTestobotY: ChangeEventHandler<HTMLInputElement>;
};
type States = {};

class Settings extends Component<Properties, States> {
  render() {
    return (
      <div className="settings">
        <div>
          <h2>Raum</h2>
          <div>
            <label>Breite: </label>
            <input
              type="number"
              value={this.props.roomWidth}
              onChange={this.props.changeRoomWidth}
            />
          </div>
          <div>
            <label>Höhe: </label>
            <input
              type="number"
              value={this.props.roomHeight}
              onChange={this.props.changeRoomHeight}
            />
          </div>
          <div>Fläche: {this.props.roomWidth * this.props.roomHeight}m²</div>
        </div>
        <div>
          <h2>Testobot</h2>
          <div>
            <label>Testobot-X: </label>
            <input
              type="number"
              value={this.props.testobotX}
              onChange={this.props.changeTestobotX}
            />
          </div>
          <div>
            <label>Testobot-Y: </label>
            <input
              type="number"
              value={this.props.testobotY}
              onChange={this.props.changeTestobotY}
            />
          </div>
          <div>Richtung: {this.props.testobotDirection}</div>
        </div>
      </div>
    );
  }
}

export default Settings;
