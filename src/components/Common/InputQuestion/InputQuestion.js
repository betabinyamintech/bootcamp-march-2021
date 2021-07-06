import "../Common.css";
import "./InputQuestion.css";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button/Button";
import greenArrow from "../../commonsSVG/green-left-arrow.svg";

const InputQuestion = ({
  isButton,
  isInput,
  onChange,
  width,
  height,
  arrow,
}) => {
  let history = useHistory();
  return (
    <div className="inputContainer">
      {isButton && (
        <button
          className="inputNewQuestion"
          onClick={() => {
            history.push("/inquiry/new");
          }}
        >
          {arrow && (
            <img src={greenArrow} alt="arrow" style={{ marginLeft: "6px" }} />
          )}

          <span className="buttonPlaceHolder"> השאלה החדשה שלך...</span>
        </button>
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
  );
};
export default InputQuestion;
