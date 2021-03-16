import "./InputQuestion.css";
import React from "react";

const InputQuestion = () => {
  return (
    <div>
      <img className="iconQuestion" src={import('../../../Icons/question-mark.svg')} alt="" />
      <input className="inputNewQuestion" placeholder="השאלה החדשה שלך..." />
    </div>
  );
};
export default InputQuestion;
