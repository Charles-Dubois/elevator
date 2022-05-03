import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

import ElevatorPanel from "../components/ElevatorPanel";
import BuildingArray from "../components/BuildingArray";
export default function Elevator() {
  const [direction, setDirection] = useState(""),
    [doorOpen, setDoorOpen] = useState(true),
    [currentStage, setCurrentStage] = useState(3),
    [stageCall, setStageCall] = useState(""),
    [onMove, setOnMove] = useState(false),
    [panelButton, setPanelButton] = useState(false),
    [waitBetweenStage, setWaitBetweenStage] = useState(1000),
    [listOfCall, setListOfCall] = useState([]),
    [callRound, setCallRound] = useState(0);

  // show the direction on the panel
  const handleDirection = () => {
    if (direction === "up") {
      return <Icon icon="akar-icons:arrow-up" />;
    } else if (direction === "down") {
      return <Icon icon="akar-icons:arrow-down" />;
    } else if (currentStage === 0) {
      return <p className="stage">RDC</p>;
    } else if (direction === "at stage") {
      return <p className="stage">{currentStage}</p>;
    }
  };
  // show light or big light
  const handleArrayCurrentStage = (stage) => {
    return stage === currentStage ? (
      <Icon
        icon="akar-icons:light-bulb"
        color="#f0e613"
        width="30"
        height="35"
      />
    ) : (
      <Icon icon="akar-icons:light-bulb" />
    );
  };
  // change de direction of the, the stage where the elevator have to move and the type of move (array/panel)
  const handleClickArrayCallButton = (stage) => {
    setStageCall(stage);
    setOnMove("array");

    setListOfCall((prev) => {
      return [...prev, stage];
    });
  };
  const handleClickPanelCallButton = (stage) => {
    setPanelButton(stage);
    if (stageCall === "") {
      setStageCall(stage);
    }
    setOnMove("panel");

    setListOfCall((prev) => {
      return [...prev, stage];
    });
  };

  // show button or lighting button
  const handleArrayCallButton = (stage) => {
    return stage === currentStage ? (
      <p>A l'étage</p>
    ) : stageCall === stage ? (
      <button>
        <Icon icon="cil:elevator" color="#f0e613" width="30" height="35" />
      </button>
    ) : (
      <button onClick={() => handleClickArrayCallButton(stage)}>
        <Icon icon="cil:elevator" width="30" height="35" />
      </button>
    );
  };

  // move the elevator when the call is made by the array button
  useEffect(() => {
    if (onMove === "array" || onMove === "panel") {
      if (currentStage === listOfCall[callRound]) {
        setDoorOpen(true);
        setWaitBetweenStage(5000);
        setPanelButton(false);
        setDirection("at stage");
        setStageCall(listOfCall[callRound]);
        setCallRound((prev) => {
          return prev + 1;
        });
      }

      if (currentStage < listOfCall[callRound]) {
        if (waitBetweenStage !== 1000) {
          setWaitBetweenStage(1000);
        }

        setTimeout(() => {
          setCurrentStage((prev) => {
            setDoorOpen(false);
            setDirection("up");
            return prev + 1;
          });
        }, waitBetweenStage);
      } else if (currentStage > listOfCall[callRound]) {
        if (waitBetweenStage !== 1000) {
          setWaitBetweenStage(1000);
        }

        setTimeout(() => {
          setCurrentStage((prev) => {
            setDoorOpen(false);
            setDirection("down");
            return prev - 1;
          });
        }, waitBetweenStage);
      }
    }
  }, [currentStage, listOfCall[callRound], onMove]);

  useEffect(() => {
    if (onMove) {
      // send the move of the elevator to the DB
      fetch("http://localhost:8000/elevator", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          call: onMove,
          from: currentStage,
          to: stageCall,
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
  }, [onMove]);

  return (
    <>
      <ElevatorPanel
        handleDirection={handleDirection}
        doorOpen={doorOpen}
        handleClickPanelCallButton={handleClickPanelCallButton}
        panelButton={[panelButton]}
      />
      <BuildingArray
        handleArrayCurrentStage={handleArrayCurrentStage}
        handleArrayCallButton={handleArrayCallButton}
      />
    </>
  );
}
