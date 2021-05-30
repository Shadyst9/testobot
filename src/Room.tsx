import React from 'react'
import './Room.css';
import Squaremeter from './Squaremeter';

interface RoomProps {
    roomWidth: Number;
    roomHeight: Number;
    testobotX: Number;
    testobotY: Number;
    testobotDirection: String;
    squaremeters: any;
}

export default function Room(props: RoomProps) {

    // gets the squaremeter components depending on the room height by using the generated object from the App component
    const getSquaremeters = (squaremeterArray: any) => {
        let squaremeters = [];
        for (let y = 0; y < squaremeterArray.squaremeters.length; y++) {
            let hasTestobot = false;
            if (squaremeterArray.squaremeters[y].xCoordinate === props.testobotX && squaremeterArray.squaremeters[y].yCoordinate === props.testobotY) {
                hasTestobot = true;
            }
            squaremeters.push(
                <Squaremeter
                    key={squaremeterArray.squaremeters[y].key}
                    xCoordinate={squaremeterArray.squaremeters[y].xCoordinate}
                    yCoordinate={squaremeterArray.squaremeters[y].yCoordinate}
                    hasTestobot={hasTestobot}
                    testobotDirection={props.testobotDirection}
                    isTested={squaremeterArray.squaremeters[y].isTested}
                    temperature={squaremeterArray.squaremeters[y].temperature}
                    degrees={squaremeterArray.squaremeters[y].degrees}
                ></Squaremeter>
            )
        }
        return squaremeters;
    }

    // gets the column components of the room depending on the room width by using the generated object from the App component
    const generateRoom = () => {
        let columns = [];
        for (let x = 0; x < props.squaremeters.length; x++) {
            columns.push(
                <div key={props.squaremeters[x].key}>
                    {getSquaremeters(props.squaremeters[x])}
                </div>
            )
        }
        return columns;
    }

    return (
        <div className="room">
            {generateRoom()}
        </div>
    )
}