import React, { useState } from 'react';
import Room from './Room';
import './App.css';
import RemoteControl from './RemoteControl';
import Settings from './Settings';

function App() {
  const [roomWidth, setRoomWidth] = useState(5);
  const [roomHeight, setRoomHeight] = useState(5);
  const [testobotX, setTestobotX] = useState(0);
  const [testobotY, setTestobotY] = useState(0);
  const [testobotDirection, setTestobotDirection] = useState("south");
  
  // gets the object to be used for squaremeter-generating depending on the room height
  const getSquaremeters = (x: Number) => {
    let squaremeters = []
    for (let y = 0; y < roomHeight; y++) {
      let degrees = (Math.random() * (25 - 15) + 15).toFixed(1);
      let temperature = "good";
      if (parseFloat(degrees) < 17.0) {
        temperature = "cold";
      } else if (parseFloat(degrees) > 22.0) {
        temperature = "hot";
      }

      squaremeters.push(
        { key: ("squaremeter-coordinate-" + x + "-" + y), xCoordinate: x, yCoordinate: y, isTested: false, temperature: temperature, degrees: degrees }
      )
    }
    return squaremeters;
  }

  // gets the "columns" of the room depending on the room width
  const getRoomArray = () => {
    let columns = []
    for (let x = 0; x < roomWidth; x++) {
      let squaremeters = getSquaremeters(x);
      columns.push(
        {
          key: ("roomcolumns-" + x),
          squaremeters: squaremeters
        }
      )
    }
    return columns;
  }

  const [squaremeters, setSquaremeters] = useState(getRoomArray());

  // resets the squaremeter object depending on the parameters set in the Settings component
  const changeSquaremeters = () => {
    const roomArray = getRoomArray() || [];
    setSquaremeters(roomArray);
  }

  // sets the squaremeters visited by the testobot as tested which will show the squaremeters temperature status
  const setSquaremeterTested = (newX:number, newY:number) => {
    let currentSquaremeters = squaremeters;
    currentSquaremeters[newX].squaremeters[newY].isTested = true;
    setSquaremeters(currentSquaremeters);
  }

  // checks if the testobot would crash with the planned new position and prevents it
  const testobotWouldNotCrash = (newX: number, newY: number) => {
    if (newX >= 0 && newY >= 0 && newX < roomWidth && newY < roomHeight) {
    return true;
    } else {
      return false;
    }
  }

  // changes the amount of squaremeters to the right and resets the testobot position to the top left corner and its initial direction to "south"
  const changeRoomWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(event.target.value) >= 1) {
      setRoomWidth(parseInt(event.target.value));
      setTestobotX(0);
      setTestobotY(0);
      setTestobotDirection("south");
    }
  }

  // changes the amount of squaremeters to the bottom and resets the testobot position to the top left corner
  const changeRoomHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(event.target.value) >= 1) {
      setRoomHeight(parseInt(event.target.value));
      setTestobotX(0);
      setTestobotY(0);
      setTestobotDirection("south");
    }
  }

  // sets the X-Coordinate of the testobot if it wouldnt crash and is a number
  const changeTestobotX = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (testobotWouldNotCrash(parseInt(event.target.value), testobotY) && isNaN(parseInt(event.target.value)) === false) {
      setTestobotX(parseInt(event.target.value));
    }
  }

  // sets the Y-Coordinate of the testobot if it wouldnt crash and is a number
  const changeTestobotY = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (testobotWouldNotCrash(testobotX, parseInt(event.target.value)) && isNaN(parseInt(event.target.value)) === false) {
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

  // moves the testobot for one squaremeter and sets the visited squarmeter to "tested" depending on the direction and if the testobot would crash
  const moveTestobotForward = () => {
    switch (testobotDirection) {
      case "east":
        if (testobotWouldNotCrash(testobotX + 1, testobotY)) {
          setTestobotX(testobotX + 1);
          setSquaremeterTested(testobotX, testobotY);
        }
        break;
      case "south":
        if (testobotWouldNotCrash(testobotX, testobotY + 1)) {
          setTestobotY(testobotY + 1);
          setSquaremeterTested(testobotX, testobotY);
        }
        break;
      case "west":
        if (testobotWouldNotCrash(testobotX - 1, testobotY)) {
          setTestobotX(testobotX - 1);
          setSquaremeterTested(testobotX, testobotY);
        }
        break;
      case "north":
        if (testobotWouldNotCrash(testobotX, testobotY - 1)) {
          setTestobotY(testobotY - 1);
          setSquaremeterTested(testobotX, testobotY);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="app">
      <div className="title">TESTOBOT</div>
      <div>
        <div>
          <Settings changeRoomWidth={changeRoomWidth} changeRoomHeight={changeRoomHeight} changeTestobotX={changeTestobotX} changeTestobotY={changeTestobotY} testobotDirection={testobotDirection} roomWidth={roomWidth} roomHeight={roomHeight} testobotX={testobotX} testobotY={testobotY}></Settings>
          <div className="reload-button">
            <button onClick={changeSquaremeters}>Neu generieren</button>
          </div>
          <RemoteControl turnLeft={changeTestobotDirection} turnRight={changeTestobotDirection} moveForward={moveTestobotForward}></RemoteControl>
        </div>
        <Room roomWidth={roomWidth} roomHeight={roomHeight} testobotX={testobotX} testobotY={testobotY} testobotDirection={testobotDirection} squaremeters={squaremeters}></Room>
      </div>
    </div>
  );
}

export default App;
