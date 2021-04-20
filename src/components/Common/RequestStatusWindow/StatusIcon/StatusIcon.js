import React from "react";
import "../../Common.css";
import tickmark from "./tick.svg";
import blackTick from "./blackTick.svg";
import grayTick from "./grayTick.svg";
import StageStatuses from "../StageStatuses";

const StatusIcon = ({ status }) => {
  let comp;

  switch (status) {
    case StageStatuses.FINISHED:
      comp = <img src={tickmark} alt="tick mark" />;
      break;
    case StageStatuses.CURRENT:
      comp = <img src={blackTick} alt="tick mark" />;
      break;
    case StageStatuses.UNSTARTED:
      comp = <img src={grayTick} alt="tick mark" />;
      break;
    default:
      comp = null;
  }
  return comp;
};

export default StatusIcon;
