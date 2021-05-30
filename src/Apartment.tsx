import React from 'react'
import './Apartment.css';
import Squaremeter from './Squaremeter';

interface ApartmentProps {
    apartmentWidth: Number;
    apartmentHeight: Number;
    testobotX: Number;
    testobotY: Number;
    testobotDirection: String;
    squaremeters: any;
}

export default function Apartment(props: ApartmentProps) {

    // gets the Squaremeter components depending on the apartment height
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
                ></Squaremeter>
            )
        }
        return squaremeters;
    }

    // gets the columns of the apartment depending on the apartment width
    const generateApartment = () => {
        let columns = [];
        for (let x = 0; x < props.squaremeters.length; x++) {
            columns.push(
                <div key={props.squaremeters[x].key} className="apartmentColumn">
                    {getSquaremeters(props.squaremeters[x])}
                </div>
            )
        }
        return columns;
    }

    return (
        <div className="apartment">
            {generateApartment()}
        </div>
    )
}