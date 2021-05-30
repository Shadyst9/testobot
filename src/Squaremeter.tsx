import React from 'react'
import './Squaremeter.css';
import Testobot from './Testobot';

interface Squaremeter {
    hasTestobot: boolean;
    testobotDirection: String;
    isTested: boolean;
    temperature: String;
    xCoordinate: Number;
    yCoordinate: Number;
}

export default function Squaremeter(props: Squaremeter) {
    // checks if the testobot sits on this specific squaremeter
    if (props.hasTestobot) {
        var squaremeterClass = "squaremeter squaremeter-testobot squaremeter-testobot-" + props.testobotDirection
        var testobot = <Testobot testobotDirection={props.testobotDirection}></Testobot>
    }
    // if the testobot has already been on this squaremeter it will reveal its temperature status
    else if (props.isTested) {
        var squaremeterClass = "squaremeter squaremeter-" + props.temperature
        var testobot = <div></div>
    } else {
        var squaremeterClass = "squaremeter squaremeter-unknown"
        var testobot = <div></div>
    }
    return (
        <div className={squaremeterClass}>
            {testobot}
        </div>
    )
}