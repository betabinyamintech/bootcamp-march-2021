import "./Inquiry.css";

const data = {
  inquiryTitle: "איך אני מחזיר את העסק שלי לאיזון?",
  timePassed: "לפני יומיים",
  statusMessage: "לא רלוונטי",
};

const Inquiry = ({inquiry}) => {
  const {inquiryTitle, timePassed, statusMessage} = inquiry
  return (
    <div className="windowBox">
      <div className="inquiryBox">
        <div className="textQuestion">{inquiryTitle}</div>
        <div className="timePassed">{timePassed}</div>
        <div className="statusMessage">{statusMessage}</div>
        <button className="nextStepButton">בחירת מומחה</button>
      </div>
    </div>
  );
};

export default Inquiry;
