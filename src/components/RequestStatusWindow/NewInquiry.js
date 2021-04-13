import react, { useCallback, useContext, useState } from "react";
import InputLabelWithIcon from "./InputLabelWithIcon";
import { useHistory } from "react-router-dom";
//import "../Common/InputField/Style.css";
import "./RequestStyle.css";
import Button from "../Common/Button/Button";
import arrowIcon from "../Common/RequestStatusWindow/StatusIcon/arrow.svg";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import InputField from "../Common/InputField/InputField";
import HashtagList from "../HashtagComponent/HashtagScreen/HashtagList";
import Hashtags from "../Common/Hashtags";

const QuestionTypes = {
  TEXT: "TEXT",
  HASHTAG: "HASHTAG",
};

const steps = [
  {
    type: QuestionTypes.TEXT,
    title: "בכמה מילים, מה האתגר שלך?",
    comment: "הכל טוב, בשלב הבא ניתן לפרט יותר ",
    field: "inquiryTitle",
  },
  { type: QuestionTypes.TEXT, title: "", field: "inquiryContent", comment: "" },
  {
    type: QuestionTypes.HASHTAG,
    title: "בחירת האשטגים רלוונטיים",
    field: "inquiryTags",
  },
];

const NewInquiry = ({ questionText, labelText }) => {
  const arrowSign = "&gt";
  const [currentStep, setCurrentStep] = useState(0);
  const buttonText = "הבא";
  const [question, setQuestion] = useState("");
  const [request, setRequest] = useState({});
  const step = steps[currentStep];
  const setRequestCallback = useCallback(
    (value) => setRequest({ ...request, [step.field]: value }),
    [step.field, request]
  );

  return (
    <div className="questionScreen">
      <PreviousButton linkTo="/more-menu" />
      <div className="question-invisible-box">
        <div className="question-title"> </div>
        <div className="input-with-label">
          <div className="question-box">
            <span className="input-label"> {step.title}</span>
            {step.type === QuestionTypes.TEXT && (
              <textarea
                className="question-input"
                onChange={setRequestCallback}
                value={requst[step.field]}
              ></textarea>
            )}
            {step.type === QuestionTypes.HASHTAG && (
              <HashtagList
                hashtags={Hashtags}
                selectedHashtags={request[step.field]}
                setSelectedHashtags={setRequestCallback}
              />
            )}
            <div className="information">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.59375 2.3125C3.90625 1 5.47917 0.34375 7.3125 0.34375C9.16667 0.34375 10.7396 1 12.0312 2.3125C13.3438 3.60417 14 5.16667 14 7C14 8.83333 13.3438 10.4062 12.0312 11.7188C10.7396 13.0104 9.16667 13.6562 7.3125 13.6562C5.47917 13.6562 3.90625 13.0104 2.59375 11.7188C1.30208 10.4062 0.65625 8.83333 0.65625 7C0.65625 5.16667 1.30208 3.60417 2.59375 2.3125ZM8 10.3438V6.34375H6.65625V10.3438H8ZM8 5V3.65625H6.65625V5H8Z"
                  fill="#606060"
                />
              </svg>
              <span> {step.comment}</span>
            </div>
          </div>
        </div>
      </div>
      <Button style={{ marginTop: "55px" }}>
        {buttonText} <img src={arrowIcon} alt="exclamation mark" />
      </Button>
    </div>
  );
};
export default NewInquiry;
