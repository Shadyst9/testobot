import React, { Component } from "react";
import "../styles/Room.css";
import Squaremeter from "./Squaremeter";

type Properties = {
  roomWidth: Number;
  roomHeight: Number;
  testobotX: Number;
  testobotY: Number;
  testobotDirection: String;
  squaremeters: any;
};
type States = {};

class Room extends Component<Properties, States> {
  // gets the squaremeter components depending on the room height by using the generated object from the App component
  getSquaremeters = (squaremeterArray: any) => {
    let squaremeters = [];
    for (let y = 0; y < squaremeterArray.squaremeters.length; y++) {
      let hasTestobot = false;
      if (
        squaremeterArray.squaremeters[y].xCoordinate === this.props.testobotX &&
        squaremeterArray.squaremeters[y].yCoordinate === this.props.testobotY
      ) {
        hasTestobot = true;
      }
      let key = squaremeterArray.squaremeters[y].key + squaremeterArray.key;
      let squaremeterComponent = (
        <Squaremeter
          key={key}
          xCoordinate={squaremeterArray.squaremeters[y].xCoordinate}
          yCoordinate={squaremeterArray.squaremeters[y].yCoordinate}
          hasTestobot={hasTestobot}
          testobotDirection={this.props.testobotDirection}
          isTested={squaremeterArray.squaremeters[y].isTested}
          temperature={squaremeterArray.squaremeters[y].temperature}
          degrees={squaremeterArray.squaremeters[y].degrees}
        ></Squaremeter>
      );
      squaremeters.push(squaremeterComponent);
    }
    return squaremeters;
  };

  // gets the column components of the room depending on the room width by using the generated object from the App component
  generateRoom = () => {
    let columns = [];
    for (let x = 0; x < this.props.squaremeters.length; x++) {
      columns.push(
        <div key={this.props.squaremeters[x].key}>
          {this.getSquaremeters(this.props.squaremeters[x])}
        </div>
      );
    }
    return columns;
  };

  render() {
    return <div className="room">{this.generateRoom()}</div>;
  }
}

export default Room;
