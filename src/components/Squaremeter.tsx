import React, { Component } from "react";
import "../styles/Squaremeter.css";
import Testobot from "./Testobot";

type Properties = {
  hasTestobot: boolean;
  testobotDirection: String;
  isTested: boolean;
  temperature: String;
  degrees: Number;
  xCoordinate: Number;
  yCoordinate: Number;
};
type States = {};

class Squaremeter extends Component<Properties, States> {
  render() {
    // checks if the testobot sits on this specific squaremeter and decides if the testobot should be shown
    let squaremeterClass;
    let testobot;
    if (this.props.hasTestobot) {
      squaremeterClass =
        "squaremeter squaremeter-testobot squaremeter-testobot-" +
        this.props.testobotDirection; //+ " squaremeter-" + this.props.temperature
      testobot = (
        <Testobot testobotDirection={this.props.testobotDirection}></Testobot>
      );
    }
    // if the testobot has already been on this squaremeter it will reveal its temperature status
    else if (this.props.isTested) {
      squaremeterClass = "squaremeter squaremeter-" + this.props.temperature;
      testobot = <div>{this.props.degrees}°C</div>;
    } else {
      squaremeterClass = "squaremeter squaremeter-unknown";
      testobot = <div>{this.props.degrees}°C</div>;
    }
    return <div className={squaremeterClass}>{testobot}</div>;
  }
}

export default Squaremeter;
