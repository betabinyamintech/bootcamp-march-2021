import "../Common.css";
import "./InputQuestion.css";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import greenArrow from "../../commonsSVG/green-left-arrow.svg";

const InputQuestion = ({ isButton, isInput, onChange, width, height }) => {
  return (
    <div className="inputContainer">
      <img
        className="iconQuestion"
        src={import("../../../Icons/question-mark.svg")}
        alt=""
      />
      <div>
        {isButton && (
          <Link to="/inquiry/new">
            <button className="inputNewQuestion">
              <span className="greenArrow">
                <img src={greenArrow} alt="arrow" />
              </span>

              <span className="buttonPlaceHolder"> השאלה החדשה שלך...</span>
            </button>
          </Link>
        )}
        {isInput && (
          <textarea
            className="inputNewQuestion"
            onChange={onChange}
            style={{
              width: width ? width : "95%",
              height: height ? height : "50px",
            }}
          ></textarea>
        )}
      </div>
    </div>
  );
};
export default InputQuestion;
