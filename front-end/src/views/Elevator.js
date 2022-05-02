import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import ElevatorPanel from "../components/ElevatorPanel";
import BuildingArray from "../components/BuildingArray";
export default function Elevator() {
  const [direction, setDirection] = useState(""),
    [doorOpen, setDoorOpen] = useState(true),
    [currentStage, setCurrentStage] = useState(0),
    [stageCall, setStageCall] = useState(""),
    [onMove, setOnMove] = useState(false);

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
  const handleClickArrayCallButton = async (stage) => {
    if (currentStage < stage) {
      setDirection("up");
    } else if (currentStage > stage) {
      setDirection("down");
    }
    setStageCall(stage);
    setOnMove("array");
  };

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
    if (onMove === "array") {
      if (currentStage === stageCall) {
        setDirection("at stage");
        setOnMove(false);
      } else if (currentStage < stageCall) {
        setTimeout(
          () =>
            setCurrentStage((prev) => {
              return prev + 1;
            }),
          1000
        );
      } else if (currentStage > stageCall) {
        setTimeout(
          () =>
            setCurrentStage((prev) => {
              return prev - 1;
            }),
          1000
        );
      }
    }
  }, [stageCall, currentStage]);
  // Open and close the doors
  useEffect(() => {
    if (!onMove) {
      setDoorOpen(true);
    } else {
      setDoorOpen(false);
    }

    if (onMove) {
      // send the move of the elevator to the DB
      fetch("http://localhost:8000/elevator", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stageCall: onMove,
          from: currentStage,
          to: stageCall,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, [onMove]);

  return (
    <>
      <ElevatorPanel handleDirection={handleDirection} doorOpen={doorOpen} />
      <BuildingArray
        handleArrayCurrentStage={handleArrayCurrentStage}
        handleArrayCallButton={handleArrayCallButton}
      />
    </>
  );
}
