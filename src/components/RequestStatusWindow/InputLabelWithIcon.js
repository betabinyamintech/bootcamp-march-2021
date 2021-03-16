import react, { useContext, useState } from "react";

import "../Common/RequestStatusWindow/StatusIcon/StatusIcon.css";
import infoIcon from "./StatusIcon/info.svg";

const InputLabelWithIcon = ({ text }) => {
  return (
    <div>
      <img src={infoIcon} alt="exclamation mark" />
      <span>{text}</span>
    </div>
  );
};
export default InputLabelWithIcon;
