export default function BuildingArray(props) {
  return (
    <>
      <section>
        <table>
          <thead>
            <tr>
              <td className="arrayStageDescription">Stage</td>
              <td className="arrayCurrentStageDescription">Current Stage</td>
              <td className="arrayButtonDescription">Call Button</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="arrayStage">9</td>
              <td className="arrayCurrentStage">
                {props.handleArrayCurrentStage(9)}
              </td>
              <td className="arrayButton">{props.handleArrayCallButton(9)}</td>
            </tr>
            <tr>
              <td className="arrayStage">8</td>
              <td className="arrayCurrentStage">
                {props.handleArrayCurrentStage(8)}
              </td>
              <td className="arrayButton">{props.handleArrayCallButton(8)}</td>
            </tr>
            <tr>
              <td className="arrayStage">7</td>
              <td className="arrayCurrentStage">
                {props.handleArrayCurrentStage(7)}
              </td>
              <td className="arrayButton">{props.handleArrayCallButton(7)}</td>
            </tr>
            <tr>
              <td className="arrayStage">6</td>
              <td className="arrayCurrentStage">
                {props.handleArrayCurrentStage(6)}
              </td>
              <td className="arrayButton">{props.handleArrayCallButton(6)}</td>
            </tr>
            <tr>
              <td className="arrayStage">5</td>
              <td className="arrayCurrentStage">
                {props.handleArrayCurrentStage(5)}
              </td>
              <td className="arrayButton">{props.handleArrayCallButton(5)}</td>
            </tr>
            <tr>
              <td className="arrayStage">4</td>
              <td className="arrayCurrentStage">
                {props.handleArrayCurrentStage(4)}
              </td>
              <td className="arrayButton">{props.handleArrayCallButton(4)}</td>
            </tr>
            <tr>
              <td className="arrayStage">3</td>
              <td className="arrayCurrentStage">
                {props.handleArrayCurrentStage(3)}
              </td>
              <td className="arrayButton">{props.handleArrayCallButton(3)}</td>
            </tr>
            <tr>
              <td className="arrayStage">2</td>
              <td className="arrayCurrentStage">
                {props.handleArrayCurrentStage(2)}
              </td>
              <td className="arrayButton">{props.handleArrayCallButton(2)}</td>
            </tr>
            <tr>
              <td className="arrayStage">1</td>
              <td className="arrayCurrentStage">
                {props.handleArrayCurrentStage(1)}
              </td>
              <td className="arrayButton">{props.handleArrayCallButton(1)}</td>
            </tr>
            <tr>
              <td className="arrayStage">0</td>
              <td className="arrayCurrentStage">
                {props.handleArrayCurrentStage(0)}
              </td>
              <td className="arrayButton">{props.handleArrayCallButton(0)}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
