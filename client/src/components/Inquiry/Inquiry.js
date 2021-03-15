import "./Inquiry.css";

const Inquiry = ({inquiry}) => {
  const {inquiryTitle, timePassed, statusMessage} = inquiry
  console.log("inquiryTitle");
  return (
    <div>
      sasson
         <div className="windowBox">
      <div className="inquiryBox">
        <div className="textQuestion">{inquiryTitle}</div>
        <div className="timePassed">{timePassed}</div>
        <div className="statusMessage">{statusMessage}</div>
        <button className="nextStepButton">בחירת מומחה</button>
      </div>
    </div>
    </div>
 
  );
};

export default Inquiry;
