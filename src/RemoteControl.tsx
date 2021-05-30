import React from 'react'
import "./RemoteControl.css"

interface RemoteControlProps {
    turnLeft: Function;
    turnRight: Function;
    moveForward: Function;
}

export default function RemoteControl(props: RemoteControlProps) {
    const turnLeft = () => {
        props.turnLeft(false);
    }
    const turnRight = () => {
        props.turnRight(true);
    }
    const moveForward = () => {
        props.moveForward();
    }
    return (
        <div className="remoteControl">
            <div className="remoteControl-button" onClick={turnLeft}>Turn left</div>
            <div className="remoteControl-button" onClick={moveForward}>Move forward</div>
            <div className="remoteControl-button" onClick={turnRight}>Turn right</div>
        </div>
    )
}