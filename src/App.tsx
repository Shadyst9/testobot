import React, {useState} from 'react';
import './App.css';
import Apartment from './Apartment';
import RemoteControl from './RemoteControl';
import Settings from './Settings';

function App() {
  const [apartmentWidth, setApartmentWidth] = useState(5);
  const [apartmentHeight, setApartmentHeight] = useState(5);
  const [testobotX, setTestobotX] = useState(0);
  const [testobotY, setTestobotY] = useState(0);
  const [testobotDirection, setTestobotDirection] = useState("south");

  const testobotWouldCrash = (newX: Number, newY: Number) => {
    if (newX >= 0 && newY >= 0 && newX < apartmentWidth && newY < apartmentHeight) {
      return true;
    } else {
      return false;
    }
  }

  const changeApartmentWidth = (event: any) => {
    if (event.target.value >= 5) {
      setApartmentWidth(event.target.value);
    }
  }

  const changeApartmentHeight = (event: any) => {
    if (event.target.value >= 5) {
      setApartmentHeight(event.target.value);
    }
  }

  const changeTestobotX = (event: any) => {
    if (testobotWouldCrash(event.target.value, testobotY)) {
      setTestobotX(event.target.value);
    }
  }

  const changeTestobotY = (event: any) => {
    if (testobotWouldCrash(testobotX, event.target.value)) {
      setTestobotY(event.target.value);
    }
  }

  const changeTestobotDirection = (clockwise: boolean) => {
    switch(testobotDirection) {
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

  const moveTestobotForward = () => {
    switch(testobotDirection) {
      case "east":
        if (testobotWouldCrash(testobotX + 1, testobotY)) { setTestobotX(testobotX + 1); }
        break;
      case "south":
        if (testobotWouldCrash(testobotX, testobotY + 1)) { setTestobotY(testobotY + 1); }
        break;
      case "west":
        if (testobotWouldCrash(testobotX - 1, testobotY)) { setTestobotX(testobotX - 1); }
        break;
      case "north":
        if (testobotWouldCrash(testobotX, testobotY - 1)) { setTestobotY(testobotY - 1); }
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <h1>TESTOBOT</h1>
      <Apartment apartmentWidth={apartmentWidth} apartmentHeight={apartmentHeight} testobotX={testobotX} testobotY={testobotY} testobotDirection={testobotDirection}></Apartment>
      <RemoteControl turnLeft={changeTestobotDirection} turnRight={changeTestobotDirection} moveForward={moveTestobotForward}></RemoteControl>
      <Settings changeApartmentWidth={changeApartmentWidth} changeApartmentHeight={changeApartmentHeight} changeTestobotX={changeTestobotX} changeTestobotY={changeTestobotY} apartmentWidth={apartmentWidth} apartmentHeight={apartmentHeight} testobotX={testobotX} testobotY={testobotY}></Settings>
    </div>
  );
}

export default App;
