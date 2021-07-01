import "../Common.css";
import "./InputQuestion.css";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import greenArrow from "../../commonsSVG/green-left-arrow.svg";

const InputQuestion = ({ isButton, isInput, onChange }) => {
  return (
    <div className="inputContainer">
      <img
        className="iconQuestion"
        src={import("../../../Icons/question-mark.svg")}
        alt=""
      />
      <Link to="/inquiry/new">
        <div>
          {isButton && (
            <button className="inputNewQuestion">
              <span className="greenArrow">
                <img src={greenArrow} alt="arrow" />
              </span>

              <span className="buttonPlaceHolder"> השאלה החדשה שלך...</span>
            </button>
          )}
          {isInput && (
            <textarea
              className="inputNewQuestion"
              onChange={onChange}
            ></textarea>
          )}
        </div>
      </Link>
      {/* <input className="inputNewQuestion" placeholder="השאלה החדשה שלך..." /> */}
    </div>
  );
};
export default InputQuestion;
