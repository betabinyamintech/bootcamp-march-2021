import { Link } from "react-router-dom";
import "./Inquiry.css";
import inquiryType from "./inquiry-type.json";

const Inquiry = ({ inquiry }) => {
  const type = "communityManager";
  const { inquiryTitle, timePassed, statusMessage } = inquiry;
  const routeToLogin = () => {
    <Link to="/login"></Link>;
  };

  return (
    <Link to={"/searchforexpert"}>
      <div>
        <div className="inquiryBox" onClick={routeToLogin}>
          <div className="inquiryTitle">{inquiryTitle}</div>
          <div className="timePassed">{timePassed}</div>
          <div className="statusMessage">
            &bull; {inquiryType[0][type][statusMessage].message}
          </div>
          {inquiryType[0][type][statusMessage].trueFalseButton && (
            <button className="nextStepButton">
              {inquiryType[0][type][statusMessage].buttonText} &nbsp;&nbsp;&gt;
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Inquiry;
