import "./Inquiry.css";

const Inquiry = ({ inquiry }) => {
  const { inquiryTitle, timePassed, statusMessage } = inquiry;
  return (
    <div className="inquiryBox">
      <div className="inquiryTitle">{inquiryTitle}</div>
      <div className="timePassed">{timePassed}</div>
      <div className="statusMessage">{statusMessage}</div>
      <button className="nextStepButton">בחירת מומחה</button>
    </div>
  );
};

export default Inquiry;
