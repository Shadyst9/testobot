import React from 'react'
import './Squaremeter.css';

interface Squaremeter {
    hasTestobot: boolean;
    testobotDirection: String;
    isTested: boolean;
    temperature: String;
    xCoordinate: Number;
    yCoordinate: Number;
}

export default function Squaremeter(props: Squaremeter) {
    if (props.hasTestobot) {
        var squaremeterClass = "squaremeter squaremeter-testobot testobot-" + props.testobotDirection
    }
    else if (props.isTested) {
        var squaremeterClass = "squaremeter squaremeter-" + props.temperature 
    } else {
        var squaremeterClass = "squaremeter squaremeter-unknown"
    }
    return (
        <div className={squaremeterClass}>x{props.xCoordinate}|y{props.yCoordinate}</div>
    )
}