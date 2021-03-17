import react, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import InputLabelWithIcon from "./InputLabelWithIcon";
import StageStatuses from "../Common/RequestStatusWindow/StageStatuses";
<<<<<<< HEAD
//import "../Common/InputField/Style.css";
import "./RequestStyle.css";
import Button from "../Common/Button/Button";
import arrowIcon from "../Common/RequestStatusWindow/StatusIcon/arrow.svg";
=======
>>>>>>> 77cd043678061bfd9da9602f5c98341a52d4093e

const QuestionScreen = ({ questionText, labelText }) => {
  const arrowSign = "&gt";
  const buttonText = "הבא";
  const [question, setQuestion] = useState("");
  return (
    <div className="questionScreen">
      <div className="question-invisible-box">
        <div className="question-title">{questionText} </div>
        <div className="input-with-label">
          <div className="question-box">
            <textarea
              contenteditable="true"
              className="question-input"
              value={question}
              onChange={(e) => {
                setQuestion(e.value);
                console.log(question);
              }}
            ></textarea>
            <div className="dotted-line"></div>
          </div>
          <InputLabelWithIcon text={labelText} />
        </div>
      </div>
      <Button>
        {buttonText} <img src={arrowIcon} alt="exclamation mark" />
      </Button>
    </div>
  );
};
export default QuestionScreen;

/*
<Button>
        {buttonText} <img src={arrowIcon} alt="exclamation mark" />
      </Button>
      */