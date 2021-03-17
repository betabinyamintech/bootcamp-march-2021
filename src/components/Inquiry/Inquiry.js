import { Link } from "react-router-dom";
import "./Inquiry.css";

const Inquiry = ({ inquiry }) => {
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
          <div className="statusMessage">&bull; {statusMessage}</div>
          <button className="nextStepButton">
            בחירת מומחה &nbsp;&nbsp;&gt;
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Inquiry;
