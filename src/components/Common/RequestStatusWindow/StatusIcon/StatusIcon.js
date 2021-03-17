import React from "react";
import "../../Common.css";
import tickmark from "./tick.svg";
import StageStatuses from "../StageStatuses";

const StatusIcon = ({ status }) => {
  let comp;
  console.log(status);
  switch (status) {
    case StageStatuses.FINISHED:
      comp = (
        <div className="finishedicon">
          <img src={tickmark} alt="tick mark" />
        </div>
      );
      break;
    case StageStatuses.CURRENT:
      comp = (
        <div className="currenticon">
          <img src={tickmark} alt="tick mark" />
        </div>
      );
      break;
    case StageStatuses.UNSTARTED:
      comp = <div className="unstartedicon"></div>;
      break;
    default:
      comp = null;
  }
  return comp;
};

export default StatusIcon;
