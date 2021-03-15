import "./Inquiry.css";

const data = {
  inquiryTitle: "איך אני מחזיר את העסק שלי לאיזון?",
  timePassed: "לפני יומיים",
  statusMessage: "לא רלוונטי",
};

const Inquiry = () => {
  return (
    <div className="windowBox">
      <div className="inquiryBox">
        <div className="textQuestion">{data.inquiryTitle}</div>
        <div className="timePassed">{data.timePassed}</div>
        <div className="statusMessage">{data.statusMessage}</div>
        <button className="nextStepButton">בחירת מומחה</button>
      </div>
    </div>
  );
};

export default Inquiry;
