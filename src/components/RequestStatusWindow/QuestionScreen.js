import react, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import InputLabelWithIcon from "./InputLabelWithIcon";
import StageStatuses from "../Common/RequestStatusWindow/StageStatuses";

const stages = [
  {
    stageNum: 1,
    name: "האתגר התקבל",
    status: StageStatuses.CURRENT,
    timestamp: "",
  },
  {
    stageNum: 2,
    name: "נמצאו 3 מומחים מתאימים",
    status: StageStatuses.UNSTARTED,
    timestamp: "",
  },
  {
    stageNum: 3,
    name: "המידע המלא הועבר למומחה ",
    status: StageStatuses.UNSTARTED,
    timestamp: "",
  },
  {
    stageNum: 4,
    name: "קיבלת תגובה ממומחה",
    status: StageStatuses.UNSTARTED,
    timestamp: "",
  },
];
const QuestionScreen = ({ questionText, labelText }) => {
  const [question, setQuestion] = useState("");
  return (
    <div>
      <div>{questionText} </div>
      <input
        value={question}
        onChange={(e) => {
          setQuestion(e);
        }}
      ></input>
      <InputLabelWithIcon text={labelText} />
    </div>
  );
};
export default QuestionScreen;
