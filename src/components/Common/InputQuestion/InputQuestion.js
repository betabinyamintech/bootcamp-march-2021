import "../Common.css";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const InputQuestion = () => {
  return (
    <div>
      <img
        className="iconQuestion"
        src={import("../../../Icons/question-mark.svg")}
        alt=""
      />
      <Link to="/inquiry/new">
        <Button>השאלה החדשה שלך...</Button>
      </Link>
      {/* <input className="inputNewQuestion" placeholder="השאלה החדשה שלך..." /> */}
    </div>
  );
};
export default InputQuestion;
