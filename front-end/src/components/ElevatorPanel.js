export default function ElevatorPanel(props) {
  return (
    <section className="elevatorPanel">
      <div className="stageContainer">
        {props.handleDirection()}
        <p className="stage">
          {props.doorOpen ? "Portes ouvertes" : "Portes fermées"}
        </p>
      </div>
      <div className="elevatorButtonContainer">
        <div className="elevatorButtonRow">
          <button className="elevatorButton">9</button>
          <button className="elevatorButton">8</button>
          <button className="elevatorButton">7</button>
        </div>
        <div className="elevatorButtonRow">
          <button className="elevatorButton">6</button>
          <button className="elevatorButton">5</button>
          <button className="elevatorButton">4</button>
        </div>
        <div className="elevatorButtonRow">
          <button className="elevatorButton">3</button>
          <button className="elevatorButton">2</button>
          <button className="elevatorButton">1</button>
        </div>
        <div className="elevatorButtonRow">
          <button className="elevatorButton">0</button>
        </div>
      </div>
    </section>
  );
}
