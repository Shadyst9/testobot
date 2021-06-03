import React from "react";
import "./Squaremeter.css";
import Testobot from "./Testobot";

interface Squaremeter {
  hasTestobot: boolean;
  testobotDirection: String;
  isTested: boolean;
  temperature: String;
  degrees: Number;
  xCoordinate: Number;
  yCoordinate: Number;
}

export default function Squaremeter(props: Squaremeter) {
  // checks if the testobot sits on this specific squaremeter and decides if the testobot should be shown
  let squaremeterClass;
  let testobot;
  if (props.hasTestobot) {
    squaremeterClass =
      "squaremeter squaremeter-testobot squaremeter-testobot-" +
      props.testobotDirection; //+ " squaremeter-" + props.temperature
    testobot = (
      <Testobot testobotDirection={props.testobotDirection}></Testobot>
    );
  }
  // if the testobot has already been on this squaremeter it will reveal its temperature status
  else if (props.isTested) {
    squaremeterClass = "squaremeter squaremeter-" + props.temperature;
    testobot = <div>{props.degrees}°C</div>;
  } else {
    squaremeterClass = "squaremeter squaremeter-unknown";
    testobot = <div>{props.degrees}°C</div>;
  }
  return <div className={squaremeterClass}>{testobot}</div>;
}
