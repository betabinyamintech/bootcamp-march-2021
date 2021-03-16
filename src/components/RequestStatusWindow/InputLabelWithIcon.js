import react, { useContext, useState } from "react";

import "../Common/RequestStatusWindow/StatusIcon/StatusIcon.css";
import infoIcon from "../Common/RequestStatusWindow/StatusIcon/info.svg";
//import "../Common/InputField/Style.css";
import "./RequestStyle.css";

const InputLabelWithIcon = ({ text }) => {
  return (
    <div className="div-input">
      <img src={infoIcon} alt="exclamation mark" />
      <label className="input-label" style={{ fontSize: "12" }}>
        {text}
      </label>
    </div>
  );
};
export default InputLabelWithIcon;
