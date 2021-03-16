import "./InputQuestion.css";
import React from "react";
import icon from "./iconQuestion.png";

const InputQuestion = () => {
  return (
    <div>
      <img className="iconQuestion" src={icon} alt="" />
      <input className="inputNewQuestion" placeholder="השאלה החדשה שלך..." />
    </div>
  );
};
export default InputQuestion;
