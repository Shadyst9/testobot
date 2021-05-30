import React from 'react'

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
        <div>
            <button onClick={turnLeft}>Turn left</button>
            <button onClick={moveForward}>Move forward</button>
            <button onClick={turnRight}>Turn right</button>
        </div>
    )
}