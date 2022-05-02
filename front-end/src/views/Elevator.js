import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import ElevatorPanel from "../components/ElevatorPanel";
import BuildingArray from "../components/BuildingArray";
export default function Elevator() {
  const [direction, setDirection] = useState(""),
    [doorOpen, setDoorOpen] = useState(true),
    [currentStage, setCurrentStage] = useState(0),
    [arrayCall, setArrayCall] = useState(""),
    [onMove, setOnMove] = useState(false);

  const handleDirection = () => {
    if (direction === "up") {
      return <Icon icon="akar-icons:arrow-up" />;
    } else if (direction === "down") {
      return <Icon icon="akar-icons:arrow-down" />;
    } else if (currentStage === 0) {
      return <p className="stage">RDC</p>;
    } else {
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
  const handleClickArrayCallButton = (stage) => {
    setArrayCall(stage);
    setOnMove("array");
  };
  const handleArrayCallButton = (stage) => {
    return stage === currentStage ? (
      <p>A l'étage</p>
    ) : arrayCall === stage ? (
      <button>
        <Icon icon="cil:elevator" color="#f0e613" width="30" height="35" />
      </button>
    ) : (
      <button onClick={() => handleClickArrayCallButton(stage)}>
        <Icon icon="cil:elevator" width="30" height="35" />
      </button>
    );
  };

  useEffect(() => {
    if (currentStage === arrayCall) {
      setOnMove(false);
    }
    if (currentStage < arrayCall) {
      setTimeout(
        () =>
          setCurrentStage((prev) => {
            return prev + 1;
          }),
        1000
      );
    }
    if (currentStage > arrayCall) {
      setTimeout(
        () =>
          setCurrentStage((prev) => {
            return prev - 1;
          }),
        1000
      );
    }
  }, [arrayCall, currentStage]);
  useEffect(() => {
    if (!onMove) {
      setDoorOpen(true);
    } else {
      setDoorOpen(false);
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
