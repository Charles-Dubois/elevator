import { Icon } from "@iconify/react";
import { useState } from "react";
import ElevatorPanel from "../components/ElevatorPanel";
export default function Elevator() {
  const [direction, setDirection] = useState(""),
    [doorClosed, setDoorClosed] = useState(false),
    [currentStage, setCurrentStage] = useState(0);

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
  return (
    <>
      <ElevatorPanel
        handleDirection={handleDirection}
        doorClosed={doorClosed}
      />

      <table>
        <tr>
          <td className="arrayStage">9</td>
          <td className="arrayCurrentStage">{handleArrayCurrentStage(9)}</td>
        </tr>
        <tr>
          <td className="arrayStage">8</td>
          <td className="arrayCurrentStage">{handleArrayCurrentStage(8)}</td>
        </tr>
        <tr>
          <td className="arrayStage">7</td>
          <td className="arrayCurrentStage">{handleArrayCurrentStage(7)}</td>
        </tr>
        <tr>
          <td className="arrayStage">6</td>
          <td className="arrayCurrentStage">{handleArrayCurrentStage(6)}</td>
        </tr>
        <tr>
          <td className="arrayStage">5</td>
          <td className="arrayCurrentStage">{handleArrayCurrentStage(5)}</td>
        </tr>
        <tr>
          <td className="arrayStage">4</td>
          <td className="arrayCurrentStage">{handleArrayCurrentStage(4)}</td>
        </tr>
        <tr>
          <td className="arrayStage">3</td>
          <td className="arrayCurrentStage">{handleArrayCurrentStage(3)}</td>
        </tr>
        <tr>
          <td className="arrayStage">2</td>
          <td className="arrayCurrentStage">{handleArrayCurrentStage(2)}</td>
        </tr>
        <tr>
          <td className="arrayStage">1</td>
          <td className="arrayCurrentStage">{handleArrayCurrentStage(1)}</td>
        </tr>
        <tr>
          <td className="arrayStage">0</td>
          <td className="arrayCurrentStage">{handleArrayCurrentStage(0)}</td>
        </tr>
      </table>
    </>
  );
}
