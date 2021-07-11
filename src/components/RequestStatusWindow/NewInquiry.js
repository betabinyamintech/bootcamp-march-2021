import { useCallback, useEffect, useState } from "react";
import Button from "../Common/Button/Button";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import HashtagList from "../HashtagComponent/HashtagScreen/HashtagList";
//import "../Common/InputField/Style.css";
import "./RequestStyle.css";
import informationIcon from "../commonsSVG/information-icon.svg";
import megaphone from "../commonsSVG/megaphone.svg";
import { fetchLogWithToken, getTags, Reload } from "../../contexts/actions";
import { useHistory } from "react-router";
import InputQuestion from "../Common/InputQuestion/InputQuestion";
import { useUserState } from "../../contexts/context";
const QuestionTypes = {
  TEXT: "TEXT",
  HASHTAG: "HASHTAG",
};

const nextMessage = "הבא";
const lastMessage = "שליחת השאלה ✓";

const steps = [
  {
    type: QuestionTypes.TEXT,
    title: "בכמה מילים, מה האתגר שלך?",
    comment: "הכל טוב, בשלב הבא ניתן לפרט יותר ",
    field: "inquiryTitle",
  },
  {
    type: QuestionTypes.TEXT,
    title: "הנה, זה המקום לפרט יותר...",
    comment:
      "מה לפרט כאן? קצת על הרקע שלך, תיאור של מה שמביא אותך לאתגר הזה ועל מה הפתרון שלו צפוי להשפיע.",
    field: "inquiryContent",
  },
  {
    type: QuestionTypes.HASHTAG,
    title: "בחירת האשטגים רלוונטיים",
    comment: "זה פשוט עוזר לנו לאתר את המומחה שידע לעזור לך",
    field: "inquiryTags",
  },
];

const NewInquiry = ({}) => {
  let user = useUserState().user;
  const history = useHistory();
  //const arrowSign = "&gt";
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(false);
  const buttonText = "הבא";
  const [request, setRequest] = useState({});
  const step = steps[currentStep];
  const [hashtags, setHashtags] = useState([]);
  useEffect(() => {
    const fetchHashtags = async () => {
      let data = await getTags();
      setHashtags(data);
    };
    fetchHashtags();
  }, []);
  // useCallback(
  //   () =>
  //     fetchLogWithToken("/tags")
  //       .then((response) => response.json())
  //       .then((data) => setHashtags(data)),

  //   [setHashtags]
  // );

  // useEffect(() => {
  //   fetchHashtags();
  // }, []);
  //updating request element for sending to the server
  const setRequestCallback = useCallback(
    (value) => setRequest({ ...request, [step.field]: value }),
    [step.field, request]
  );
  //final sending to the server
  const postNewInquiry = useCallback(
    async (request) => {
      const res = await fetchLogWithToken("/inquiries/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
    },
    [request]
  );

  const lastQuestion = currentStep >= steps.length - 1;
  // console.log("step", step, "request", request);
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
            <span className="megaphone">
              <img src={megaphone}></img>
            </span>
            <span className="input-label"> {step.title}</span>

            {step.type === QuestionTypes.TEXT && currentStep === 0 && (
              <InputQuestion
                isInput={true}
                onChange={(e) => {
                  setRequestCallback(e.target.value);
                }}
                value={request[step.field]}
              />
            )}
            {step.type === QuestionTypes.TEXT && currentStep === 1 && (
              <InputQuestion
                isInput={true}
                onChange={(e) => {
                  setRequestCallback(e.target.value);
                }}
                value={request[step.field]}
              />
            )}
            {step.type === QuestionTypes.HASHTAG && (
              <HashtagList
                hashtags={hashtags}
                selectedHashtags={request[step.field]}
                setSelectedHashtags={setRequestCallback}
              />
            )}

            <div className="information">
              <img src={informationIcon}></img> <span> {step.comment}</span>
            </div>
            {error && (
              <span className="errorMessage"> {"מילוי שדה זה הוא חובה"}</span>
            )}
          </div>
        </div>
      </div>
      <Button
        // style={{ marginTop: "40px" }}
        onClick={() => {
          if (currentStep === 0 && !lastQuestion && request.inquiryTitle) {
            setCurrentStep(currentStep + 1);
            setError(false);
          }
          if (currentStep === 1 && !lastQuestion && request.inquiryContent) {
            setCurrentStep(currentStep + 1);
            setError(false);
          }
          if (currentStep === 0 && !request.inquiryTitle) {
            setError(true);
          }
          if (currentStep === 1 && !request.inquiryContent) {
            setError(true);
          }
          if (currentStep === 2 && !request.inquiryTags) {
            setError(true);
          }
          if (
            request.inquiryTitle &&
            request.inquiryContent &&
            request.inquiryTags
          ) {
            postNewInquiry(request);
            setTimeout(() => {
              history.push("/home");
            }, 900);
          }
        }}
      >
        {lastQuestion ? lastMessage : nextMessage}
      </Button>
    </div>
  );
};
export default NewInquiry;
