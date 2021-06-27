import { useCallback, useEffect, useState } from "react";
import Button from "../Common/Button/Button";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import HashtagList from "../HashtagComponent/HashtagScreen/HashtagList";
//import "../Common/InputField/Style.css";
import "./QuestionsBeforeMeeting.css";
import informationIcon from "../commonsSVG/information-icon.svg";
import { fetchLogWithToken, putInquiry } from "../../contexts/actions";
import { useHistory, useLocation } from "react-router";
const QuestionTypes = {
  TEXT: "TEXT",
  HASHTAG: "HASHTAG",
};

const nextMessage = "הבא";
const lastMessage = "שליחת התשובות ✓";

const QuestionBeforeMeeting = () => {
  const location = useLocation();
  let questions = location.state.questions;
  let question1 = questions[0];
  let question2 = questions[1];
  let selectedExpert = location.state.selectedExpertsByUser;
  let inquiryId = location.state.inquiryIdForPut;
  console.log("questions", questions);
  console.log("selectd expert:", selectedExpert, "", "inquiry id", inquiryId);
  const steps = [
    {
      type: QuestionTypes.TEXT,
      title: question1 + "?",
      comment: " זה חשוב למומחה כדי שיידע להתכונן כיצד לעזור לך",
      field: question1 + "?",
    },
    {
      type: QuestionTypes.TEXT,
      title: question2 + "?",
      comment:
        "מה לפרט כאן? קצת על הרקע שלך, תיאור של מה שמביא אותך לאתגר הזה ועל מה הפתרון שלו צפוי להשפיע.",
      field: question2 + "?",
    },
  ];

  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(false);
  const buttonText = "הבא";
  const [request, setRequest] = useState();
  const [requestLocal, setRequestLocal] = useState();
  const step = steps[currentStep];
  const [hashtags, setHashtags] = useState([]);
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const localReq = (value) => {
    if (currentStep === 0) {
      setAnswer1({ question: step.field, ans: value });
    }
    if (currentStep === 1) {
      setAnswer2({ question: step.field, ans: value });
    }
  };
  const submitQuestions = () => {
    setRequest({
      movedToExpert: {
        answersToExpertQuestions: [answer1, answer2],
        expertId: selectedExpert,
      },
      status: "movedToExpert",
    });
    const putToServer = () => {
      putInquiry(inquiryId, request);
    };
    setTimeout(() => {
      putToServer();
    }, 2000);
  };

  const lastQuestion = currentStep >= steps.length - 1;

  console.log("answer1", answer1);
  console.log("answer2", answer2);
  return (
    <div className="questionScreen">
      {currentStep === 0 ? (
        <PreviousButton linkTo="/home" />
      ) : (
        <PreviousButton
          onClick={() => {
            setCurrentStep(currentStep - 1);
          }}
        />
      )}
      <div className="question-invisible-box">
        <div className="question-title"> </div>
        <div className="input-with-label">
          <div className="question-box">
            <span className="input-label">
              {`שאלה ${currentStep + 1} מתוך ${questions.length}`}{" "}
            </span>
            <span className="input-label"> המומחה שואל.. </span>
            <span className="input-label"> {step.title}</span>
            {step.type === QuestionTypes.TEXT && currentStep === 0 && (
              <textarea
                className="question-input"
                onChange={(e) => {
                  localReq(e.target.value);
                }}
                // value={request[step.field]}
              ></textarea>
            )}
            {step.type === QuestionTypes.TEXT && currentStep === 1 && (
              <textarea
                className="question-input"
                onChange={(e) => {
                  localReq(e.target.value);
                }}
                // value={request[step.field]}
              ></textarea>
            )}

            <div className="information">
              <img src={informationIcon}></img> <span> {step.comment}</span>
            </div>
            {error && (
              <span style={{ color: "red" }}> {"מילוי שדה זה הוא חובה"}</span>
            )}
          </div>
        </div>
      </div>
      <Button
        style={{ marginTop: "55px" }}
        onClick={() => {
          if (currentStep === 0 && !lastQuestion && answer1) {
            setCurrentStep(currentStep + 1);
            setError(false);
          }
          if (currentStep === 1 && answer2) {
            submitQuestions();
          }
        }}
      >
        {lastQuestion ? lastMessage : nextMessage}
      </Button>
    </div>
  );
};
export default QuestionBeforeMeeting;
