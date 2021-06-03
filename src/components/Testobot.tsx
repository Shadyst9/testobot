import React, { Component } from "react";
import "../styles/Testobot.css";

type Properties = {
  testobotDirection: String;
};
type States = {};

class Testobot extends Component<Properties, States> {
  render() {
    // changes appearance of the testobot depending on its direction
    let testobotClass;
    if (this.props.testobotDirection) {
      testobotClass = "testobot testobot-" + this.props.testobotDirection;
    } else testobotClass = "testobot";
    return (
      <div className={testobotClass}>
        <img
          alt="testobot"
          src="data:image/jpeg;base64,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"
        />
      </div>
    );
  }
}

export default Testobot;
