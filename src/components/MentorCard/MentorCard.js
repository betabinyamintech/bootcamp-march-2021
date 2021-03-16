import userEvent from "@testing-library/user-event";
import Avatar from "../Avatar/Avatar";
import "./MentorCard.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import NextIcon from "./NextArrow.svg";

function MentorCard(props) {
  return (
    <div {...props} className={"mentorcard" + ""}>
      <Avatar />
      <div className="middlementordiv">
        <h2>
          {props.firstName} {props.lastName}
        </h2>
        <h5>
          {props.profession}
          {props.city}
        </h5>
        <p>
          משפט על עצמו, צריך להגיע ממאגר המידע או מיוזר קונטקסט אבל אני צריכה
          עוד לחשוב איך
        </p>
        <div>
          {" "}
          כאן תבוא קומפוננטה של האשתגים שהמומחה בחר שזה בעצם האשתגים מהיוזר של
          המשתמש שנכנסים לקומפוננטה hashtaglist
        </div>
      </div>
      <div>
        {/* the same icon looks diferent in inquiry.js */}
        <a href="/">
          <img className="mentorcardnextimg" src={NextIcon} />
        </a>
      </div>
    </div>
  );
}
export default MentorCard;
