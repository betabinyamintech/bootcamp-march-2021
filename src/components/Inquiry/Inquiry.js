import "./Inquiry.css";

const Inquiry = ({ inquiry }) => {
  const { inquiryTitle, timePassed, statusMessage } = inquiry;
  console.log("inquiryTitle");
  return (
    <div>
      <div className="inquiryBox">
        <div className="inquiryTitle">{inquiryTitle}</div>
        <div className="timePassed">{timePassed}</div>
        <div className="statusMessage">&bull; {statusMessage}</div>
        <button className="nextStepButton">בחירת מומחה &nbsp;&nbsp;&gt;</button>
      </div>
    </div>
  );
};

export default Inquiry;
