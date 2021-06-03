import React, { Component } from "react";
import "../styles/RemoteControl.css";

type Properties = {
  turnLeft: Function;
  turnRight: Function;
  moveForward: Function;
};
type States = {};

class RemoteControl extends Component<Properties, States> {
  turnLeft = () => {
    this.props.turnLeft(false);
  };
  turnRight = () => {
    this.props.turnRight(true);
  };
  moveForward = () => {
    this.props.moveForward();
  };

  render() {
    return (
      <div className="remoteControl">
        <div className="remoteControl-button" onClick={this.turnLeft}>
          Links drehen
        </div>
        <div className="remoteControl-button" onClick={this.moveForward}>
          Forwärts
        </div>
        <div className="remoteControl-button" onClick={this.turnRight}>
          Rechts drehen
        </div>
      </div>
    );
  }
}

export default RemoteControl;
