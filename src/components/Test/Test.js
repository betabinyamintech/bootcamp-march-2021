import SearchForExpert from "../SearchForExpert/SearchForExpert";
import "./Test.css";

const requestDetails = {
  questionText: "איך אני מחזיר את העסק שלי לאיזון?",
  labelText: "בחירת מומחה לסיוע בשאלה:",
};
const Test = () => (
  <SearchForExpert
    questionText={requestDetails.questionText}
    labelText={requestDetails.labelText}
  />
);

export default Test;
