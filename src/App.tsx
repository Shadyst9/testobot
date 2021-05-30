import React, { useState } from 'react';
import Apartment from './Apartment';
import './App.css';
import RemoteControl from './RemoteControl';
import Settings from './Settings';

function App() {
  const [apartmentWidth, setApartmentWidth] = useState(5);
  const [apartmentHeight, setApartmentHeight] = useState(5);
  const [testobotX, setTestobotX] = useState(0);
  const [testobotY, setTestobotY] = useState(0);
  const [testobotDirection, setTestobotDirection] = useState("south");
  
  // gets the Squaremeter components depending on the apartment height
  const getSquaremeters = (x: Number) => {
    let squaremeters = []
    for (let y = 0; y < apartmentHeight; y++) {
      let temperaturePossibilities = ["good", "cold", "hot"]
      let temperature = temperaturePossibilities[Math.floor(Math.random() * 3)];
      squaremeters.push(
        { key: ("squaremeter-coordinate-" + x + "-" + y), xCoordinate: x, yCoordinate: y, isTested: false, temperature: temperature }
      )
    }
    return squaremeters;
  }

  // gets the columns of the apartment depending on the apartment width
  const getApartmentArray = () => {
    let columns = []
    for (let x = 0; x < apartmentWidth; x++) {
      let squaremeters = getSquaremeters(x);
      columns.push(
        {
          key: ("apartmentcolumns-" + x),
          squaremeters: squaremeters
        }
      )
    }
    return columns;
  }

  const [squaremeters, setSquaremeters] = useState(getApartmentArray());

  const changeSquaremeters = () => {
    const apartmentArray = getApartmentArray() || [];
    setSquaremeters(apartmentArray);
  }

  const setSquaremeterTested = (newX:number, newY:number) => {
    let currentSquaremeters = squaremeters;
    currentSquaremeters[newX].squaremeters[newY].isTested = true;
    setSquaremeters(currentSquaremeters);
  }

  // check if the testobot would crash with the planned new position
  const testobotWouldNotCrash = (newX: number, newY: number) => {
    if (newX >= 0 && newY >= 0 && newX < apartmentWidth && newY < apartmentHeight) {
    setSquaremeterTested(newX, newY)
    return true;

    } else {
      return false;
    }
  }

  // changes the amount of squaremeters to the right and resets the testobot position to the top left corner
  const changeApartmentWidth = (event: any) => {
    if (event.target.value >= 1) {
      setApartmentWidth(event.target.value);
      setTestobotX(0);
      setTestobotY(0);
    }
  }

  // changes the amount of squaremeters to the bottom and resets the testobot position to the top left corner
  const changeApartmentHeight = (event: any) => {
    if (event.target.value >= 1) {
      setApartmentHeight(event.target.value);
      setTestobotX(0);
      setTestobotY(0);
    }
  }

  // sets the X-Coordinate of the testobot if it wouldnt crash and is a number
  const changeTestobotX = (event: any) => {
    if (testobotWouldNotCrash(event.target.value, testobotY) && isNaN(parseInt(event.target.value)) === false) {
      setTestobotX(parseInt(event.target.value));
    }
  }

  // sets the Y-Coordinate of the testobot if it wouldnt crash and is a number
  const changeTestobotY = (event: any) => {
    if (testobotWouldNotCrash(testobotX, event.target.value) && isNaN(parseInt(event.target.value)) === false) {
      setTestobotY(parseInt(event.target.value));
    }
  }

  // sets the testobot direction depending on the current testobotdirection and if the turn left or turn right button has been clicked
  const changeTestobotDirection = (clockwise: boolean) => {
    switch (testobotDirection) {
      case "east":
        if (clockwise) { setTestobotDirection("south"); } else { setTestobotDirection("north"); }
        break;
      case "south":
        if (clockwise) { setTestobotDirection("west"); } else { setTestobotDirection("east"); }
        break;
      case "west":
        if (clockwise) { setTestobotDirection("north"); } else { setTestobotDirection("south"); }
        break;
      case "north":
        if (clockwise) { setTestobotDirection("east"); } else { setTestobotDirection("west"); }
        break;
      default:
        setTestobotDirection("south");
    }
  }

  // moves the testobot for one squaremeter depending on the direction and if the testobot would crash
  const moveTestobotForward = () => {
    switch (testobotDirection) {
      case "east":
        if (testobotWouldNotCrash(testobotX + 1, testobotY)) { setTestobotX(testobotX + 1); }
        break;
      case "south":
        if (testobotWouldNotCrash(testobotX, testobotY + 1)) { setTestobotY(testobotY + 1); }
        break;
      case "west":
        if (testobotWouldNotCrash(testobotX - 1, testobotY)) { setTestobotX(testobotX - 1); }
        break;
      case "north":
        if (testobotWouldNotCrash(testobotX, testobotY - 1)) {setTestobotY(testobotY - 1); }
        break;
      default:
        break;
    }
  }

  return (
    <div className="app">
      <div className="title">TESTOBOT</div>
      <Settings changeApartmentWidth={changeApartmentWidth} changeApartmentHeight={changeApartmentHeight} changeTestobotX={changeTestobotX} changeTestobotY={changeTestobotY} testobotDirection={testobotDirection} apartmentWidth={apartmentWidth} apartmentHeight={apartmentHeight} testobotX={testobotX} testobotY={testobotY}></Settings>
      <button onClick={changeSquaremeters}>Neu laden</button>
      <RemoteControl turnLeft={changeTestobotDirection} turnRight={changeTestobotDirection} moveForward={moveTestobotForward}></RemoteControl>
      <Apartment apartmentWidth={apartmentWidth} apartmentHeight={apartmentHeight} testobotX={testobotX} testobotY={testobotY} testobotDirection={testobotDirection} squaremeters={squaremeters}></Apartment>
    </div>
  );
}

export default App;
