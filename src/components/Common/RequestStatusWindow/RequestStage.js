import react from "react";
import StageStatuses from "./StageStatuses";
import StatusIcon from "./StatusIcon/StatusIcon";

const RequestStage = ({ name, status, timestamp, stageNum }) => {
  return (
    <div>
      <StatusIcon status={status} />
      <div className="statusName">{name}</div>
      <div className="timestamp">{timestamp}</div>
      {stageNum === 2 && status === StageStatuses.CURRENT && (
        <button>בחירת מומחה</button>
      )}
    </div>
  );
};
export default RequestStage;
