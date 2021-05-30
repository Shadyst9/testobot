import React from 'react'
import './Apartment.css';
import Squaremeter from './Squaremeter';

interface ApartmentProps {
    apartmentWidth: Number;
    apartmentHeight: Number;
    testobotX: Number;
    testobotY: Number;
    testobotDirection: String;
}

export default function Apartment(props: ApartmentProps) {
    const getSquaremeters = (x: Number) => {
        let squaremeters = []
        for (let y = 0; y < props.apartmentHeight; y++) {
            let hasTestobot = false;
            if (props.testobotX === x && props.testobotY === y) {
                hasTestobot = true;
            }
            let temperaturePossibilities = ["good", "cold", "hot"]
            let temperature = temperaturePossibilities[Math.floor(Math.random() * 3)];
            squaremeters.push(
                <Squaremeter key={"squaremeter-coordinate-" + x + "-" + y} xCoordinate={x} yCoordinate={y} hasTestobot={hasTestobot} testobotDirection={props.testobotDirection} isTested={true} temperature={temperature}></Squaremeter>
            )
        }
        return squaremeters;
    }

    const generateApartment = () => {
        let columns = []
        for (let x = 0; x < props.apartmentWidth; x++) {
            columns.push(
                <div key={"apartmentcolums-" + x} className="apartmentColumn">
                    {getSquaremeters(x)}
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