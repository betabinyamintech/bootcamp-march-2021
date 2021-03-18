import { useState } from "react";

import "../RequestStatusWindow/RequestStyle.css";
import "./SearchForExpert.css";

const TaskHeader = ({ questionText, labelText }) => {
  const [question, setQuestion] = useState("");
  return (
    <div className="taskHeaderBox">
      <div className="taskLabel">{labelText}</div>
      <div className="taskHeader">{questionText}</div>
    </div>
  );
};
export default TaskHeader;
