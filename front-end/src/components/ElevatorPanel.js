import { Icon } from "@iconify/react";
import { useState } from "react";
export default function ElevatorPanel(props) {
  return (
    <section className="elevatorPanel">
      <div className="stageContainer">
        {props.handleDirection()}

        <p className="stage">
          {props.doorClosed ? "Portes ouvertes" : "Portes fermées"}
        </p>
      </div>
      <div className="elevatorButtonContainer">
        <div className="elevatorButtonRow">
          <button className="elevatorButton">Click</button>
          <button className="elevatorButton">Click</button>
          <button className="elevatorButton">Click</button>
        </div>
        <div className="elevatorButtonRow">
          <button className="elevatorButton">Click</button>
          <button className="elevatorButton">Click</button>
          <button className="elevatorButton">Click</button>
        </div>
        <div className="elevatorButtonRow">
          <button className="elevatorButton">Click</button>
          <button className="elevatorButton">Click</button>
          <button className="elevatorButton">Click</button>
        </div>
        <div className="elevatorButtonRow">
          <button className="elevatorButton">Click</button>
        </div>
      </div>
    </section>
  );
}
