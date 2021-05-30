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
    if (props.hasTestobot) {
        var squaremeterClass = "squaremeter squaremeter-testobot testobot-" + props.testobotDirection
        var testobot = <Testobot></Testobot>
    }
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