import react, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import RequestStage from "./RequestStage";

import StageStatuses from "./StageStatuses";
const stages = [
  {
    stageNum: 1,
    name: "האתגר התקבל",
    status: StageStatuses.CURRENT,
    timestamp: "",
  },
  {
    stageNum: 2,
    name: "נמצאו 3 מומחים מתאימים",
    status: StageStatuses.UNSTARTED,
    timestamp: "",
  },
  {
    stageNum: 3,
    name: "המידע המלא הועבר למומחה ",
    status: StageStatuses.UNSTARTED,
    timestamp: "",
  },
  {
    stageNum: 4,
    name: "קיבלת תגובה ממומחה",
    status: StageStatuses.UNSTARTED,
    timestamp: "",
  },
];
const RequestStatus = ({ name, status }) => {
  return (
    <div>
      <div className="">{name}</div>
      {stages.map((stage) => (
        <RequestStage
          name={stage.name}
          status={stage.status}
          timestamp={stage.timestamp}
          stageNum={stage.stageNum}
        />
      ))}
    </div>
  );
};
export default RequestStatus;
