import React, { Component } from "react";
import Room from "./Room";
import "../styles/App.css";
import RemoteControl from "./RemoteControl";
import Settings from "./Settings";

type Properties = {};
type States = {
  roomWidth: number;
  roomHeight: number;
  testobotX: number;
  testobotY: number;
  testobotDirection: string;
  squaremeters: Array<any>;
};

class App extends Component<Properties, States> {
  constructor(props: Object) {
    super(props);
    this.state = {
      roomWidth: 5,
      roomHeight: 5,
      testobotX: 0,
      testobotY: 0,
      testobotDirection: "south",
      squaremeters: this.getRoomArray(5, 5),
    };
  }

  // gets the object to be used for squaremeter-generating depending on the room height
  getSquaremeters = (x: Number, roomHeight: number) => {
    let squaremeters = [];
    for (let y = 0; y < roomHeight; y++) {
      let degrees = (Math.random() * (25 - 15) + 15).toFixed(1);
      let temperature = "good";
      if (parseFloat(degrees) < 17.0) {
        temperature = "cold";
      } else if (parseFloat(degrees) > 22.0) {
        temperature = "hot";
      }

      squaremeters.push({
        key: "squaremeter-coordinate-" + x + "-" + y,
        xCoordinate: x,
        yCoordinate: y,
        isTested: false,
        temperature: temperature,
        degrees: degrees,
      });
    }
    return squaremeters;
  };

  // gets the "columns" of the room depending on the room width
  getRoomArray = (roomWidth: number, roomHeight: number) => {
    let columns = [];
    for (let x = 0; x < roomWidth; x++) {
      let squaremeters = this.getSquaremeters(x, roomHeight);
      columns.push({
        key: "roomcolumns-" + x,
        squaremeters: squaremeters,
      });
    }
    return columns;
  };

  // resets the squaremeter object depending on the parameters set in the Settings component
  changeSquaremeters = () => {
    const roomArray =
      this.getRoomArray(this.state.roomWidth, this.state.roomHeight) || [];
    this.setState({ squaremeters: roomArray });
  };

  // sets the squaremeters visited by the testobot as tested which will show the squaremeters temperature status
  setSquaremeterTested = (newX: number, newY: number) => {
    let currentSquaremeters = this.state.squaremeters;
    currentSquaremeters[newX].squaremeters[newY].isTested = true;
    this.setState({ squaremeters: currentSquaremeters });
  };

  // checks if the testobot would crash with the planned new position and prevents it
  testobotWouldNotCrash = (newX: number, newY: number) => {
    if (
      newX >= 0 &&
      newY >= 0 &&
      newX < this.state.roomWidth &&
      newY < this.state.roomHeight
    ) {
      return true;
    } else {
      return false;
    }
  };

  // changes the amount of squaremeters to the right and resets the testobot position to the top left corner and its initial direction to "south"
  changeRoomWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(event.target.value) >= 1) {
      this.setState({ roomWidth: parseInt(event.target.value) });
      this.setState({ testobotX: 0 });
      this.setState({ testobotY: 0 });
      this.setState({ testobotDirection: "south" });
    }
  };

  // changes the amount of squaremeters to the bottom and resets the testobot position to the top left corner
  changeRoomHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(event.target.value) >= 1) {
      this.setState({ roomHeight: parseInt(event.target.value) });
      this.setState({ testobotX: 0 });
      this.setState({ testobotY: 0 });
      this.setState({ testobotDirection: "south" });
    }
  };

  // sets the X-Coordinate of the testobot if it wouldnt crash and is a number
  changeTestobotX = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      this.testobotWouldNotCrash(
        parseInt(event.target.value),
        this.state.testobotY
      ) &&
      isNaN(parseInt(event.target.value)) === false
    ) {
      this.setState({ testobotX: parseInt(event.target.value) });
    }
  };

  // sets the Y-Coordinate of the testobot if it wouldnt crash and is a number
  changeTestobotY = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      this.testobotWouldNotCrash(
        this.state.testobotX,
        parseInt(event.target.value)
      ) &&
      isNaN(parseInt(event.target.value)) === false
    ) {
      this.setState({ testobotY: parseInt(event.target.value) });
    }
  };

  // sets the testobot direction depending on the current testobotdirection and if the turn left or turn right button has been clicked
  changeTestobotDirection = (clockwise: boolean) => {
    switch (this.state.testobotDirection) {
      case "east":
        if (clockwise) {
          this.setState({ testobotDirection: "south" });
        } else {
          this.setState({ testobotDirection: "north" });
        }
        break;
      case "south":
        if (clockwise) {
          this.setState({ testobotDirection: "west" });
        } else {
          this.setState({ testobotDirection: "east" });
        }
        break;
      case "west":
        if (clockwise) {
          this.setState({ testobotDirection: "north" });
        } else {
          this.setState({ testobotDirection: "south" });
        }
        break;
      case "north":
        if (clockwise) {
          this.setState({ testobotDirection: "east" });
        } else {
          this.setState({ testobotDirection: "west" });
        }
        break;
      default:
        this.setState({ testobotDirection: "south" });
    }
  };

  // moves the testobot for one squaremeter and sets the visited squarmeter to "tested" depending on the direction and if the testobot would crash
  moveTestobotForward = () => {
    switch (this.state.testobotDirection) {
      case "east":
        if (
          this.testobotWouldNotCrash(
            this.state.testobotX + 1,
            this.state.testobotY
          )
        ) {
          this.setState({ testobotX: this.state.testobotX + 1 });
          this.setSquaremeterTested(this.state.testobotX, this.state.testobotY);
        }
        break;
      case "south":
        if (
          this.testobotWouldNotCrash(
            this.state.testobotX,
            this.state.testobotY + 1
          )
        ) {
          this.setState({ testobotY: this.state.testobotY + 1 });
          this.setSquaremeterTested(this.state.testobotX, this.state.testobotY);
        }
        break;
      case "west":
        if (
          this.testobotWouldNotCrash(
            this.state.testobotX - 1,
            this.state.testobotY
          )
        ) {
          this.setState({ testobotX: this.state.testobotX - 1 });
          this.setSquaremeterTested(this.state.testobotX, this.state.testobotY);
        }
        break;
      case "north":
        if (
          this.testobotWouldNotCrash(
            this.state.testobotX,
            this.state.testobotY - 1
          )
        ) {
          this.setState({ testobotY: this.state.testobotY - 1 });
          this.setSquaremeterTested(this.state.testobotX, this.state.testobotY);
        }
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="app">
        <div className="title">TESTOBOT</div>
        <div>
          <div>
            <Settings
              changeRoomWidth={this.changeRoomWidth}
              changeRoomHeight={this.changeRoomHeight}
              changeTestobotX={this.changeTestobotX}
              changeTestobotY={this.changeTestobotY}
              testobotDirection={this.state.testobotDirection || "south"}
              roomWidth={this.state.roomWidth || 5}
              roomHeight={this.state.roomHeight || 5}
              testobotX={this.state.testobotX || 0}
              testobotY={this.state.testobotY || 0}
            ></Settings>
            <div className="reload-button">
              <button onClick={this.changeSquaremeters}>Neu generieren</button>
            </div>
            <RemoteControl
              turnLeft={this.changeTestobotDirection}
              turnRight={this.changeTestobotDirection}
              moveForward={this.moveTestobotForward}
            ></RemoteControl>
          </div>
          <Room
            roomWidth={this.state.roomWidth}
            roomHeight={this.state.roomHeight}
            testobotX={this.state.testobotX}
            testobotY={this.state.testobotY}
            testobotDirection={this.state.testobotDirection}
            squaremeters={this.state.squaremeters}
          ></Room>
        </div>
      </div>
    );
  }
}

export default App;
