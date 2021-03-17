import react, { useContext, useState } from "react";
import TaskHeader from "./TaskHeader";

import Button from "../Common/Button/Button";
import magnifyingGlass from "./MagnifyingGlassIcon.svg";

import "../RequestStatusWindow/RequestStyle.css";

const SearchForExpert = ({ questionText, labelText }) => {
  const [question, setQuestion] = useState("");
  return (
    <div>
      <TaskHeader questionText={questionText} labelText={labelText} />

      <div className="inputs-wrapper">
        <input placeholder="כל התחומים"></input>
        <input placeholder="כל המומחים"></input>
        <img src={magnifyingGlass} alt="magnifying glass icon" />
      </div>
    </div>
  );
};
export default SearchForExpert;
