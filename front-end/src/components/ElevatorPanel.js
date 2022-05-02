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
          <button
            className={
              props.panelButton === 7
                ? "elevatorButtonSelected"
                : "elevatorButton"
            }
            onClick={() => props.handleClickPanelCallButton(7)}
          >
            7
          </button>
          <button
            className={
              props.panelButton === 8
                ? "elevatorButtonSelected"
                : "elevatorButton"
            }
            onClick={() => props.handleClickPanelCallButton(8)}
          >
            8
          </button>
          <button
            className={
              props.panelButton === 9
                ? "elevatorButtonSelected"
                : "elevatorButton"
            }
            onClick={() => props.handleClickPanelCallButton(9)}
          >
            9
          </button>
        </div>
        <div className="elevatorButtonRow">
          <button
            className={
              props.panelButton === 4
                ? "elevatorButtonSelected"
                : "elevatorButton"
            }
            onClick={() => props.handleClickPanelCallButton(4)}
          >
            4
          </button>
          <button
            className={
              props.panelButton === 5
                ? "elevatorButtonSelected"
                : "elevatorButton"
            }
            onClick={() => props.handleClickPanelCallButton(5)}
          >
            5
          </button>
          <button
            className={
              props.panelButton === 6
                ? "elevatorButtonSelected"
                : "elevatorButton"
            }
            onClick={() => props.handleClickPanelCallButton(6)}
          >
            6
          </button>
        </div>
        <div className="elevatorButtonRow">
          <button
            className={
              props.panelButton === 1
                ? "elevatorButtonSelected"
                : "elevatorButton"
            }
            onClick={() => props.handleClickPanelCallButton(1)}
          >
            1
          </button>
          <button
            className={
              props.panelButton === 2
                ? "elevatorButtonSelected"
                : "elevatorButton"
            }
            onClick={() => props.handleClickPanelCallButton(2)}
          >
            2
          </button>
          <button
            className={
              props.panelButton === 3
                ? "elevatorButtonSelected"
                : "elevatorButton"
            }
            onClick={() => props.handleClickPanelCallButton(3)}
          >
            3
          </button>
        </div>
        <div className="elevatorButtonRow">
          <button
            className={
              props.panelButton === 0
                ? "elevatorButtonSelected"
                : "elevatorButton"
            }
            onClick={() => props.handleClickPanelCallButton(0)}
          >
            0
          </button>
        </div>
      </div>
    </section>
  );
}
