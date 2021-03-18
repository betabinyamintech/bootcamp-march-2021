import React from "react";
import Button from "../Button/Button";
import StageStatuses from "./StageStatuses";
import StatusIcon from "./StatusIcon/StatusIcon";

const RequestStage = ({ name, status, timestamp, stageNum }) => {
  return (
    <div>
      <div style={{ display: "flex", margin: "30px" }}>
        <StatusIcon status={status} />
        <div className="statusName">{name}</div>
        <div className="timestamp">{timestamp}</div>
        {stageNum === 2 && status === StageStatuses.CURRENT && (
          <Button style={{ width: " fit-content", height: " fit-content" }}>
            {" "}
            בחירת מומחה
          </Button>
        )}
      </div>
    </div>
  );
};
export default RequestStage;
