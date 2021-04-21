import userEvent from "@testing-library/user-event";
import Avatar from "../Avatar/Avatar";
import "./MentorCard.css";
import { useContext } from "react";
import UserContext from "../../contexts/context";
import NextIcon from "./NextArrow.svg";

const users = [
  {
    name: "שוקי",
    lastName: "כהן",
    profesion: "רואה חשבון",

    avatarImg:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/07/07cd7653b80c8c72fe816bafa9e25d32d5a882da_full.jpg",
    expertDetails: {
      helpKind: "יכול לעזור בכל מיני דברים",
      otherproperties: "vewvfc",
    },
  },
  {
    name: "שוקי",
    lastName: "כהן",
    profesion: "רואה חשבון",

    avatarImg:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/07/07cd7653b80c8c72fe816bafa9e25d32d5a882da_full.jpg",
    expertDetails: {
      helpKind: "יכול לעזור בכל מיני דברים",
      otherproperties: "vewvfc",
    },
  },
  {
    name: "שוקי",
    lastName: "כהן",
    profesion: "רואה חשבון",

    avatarImg:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/07/07cd7653b80c8c72fe816bafa9e25d32d5a882da_full.jpg",
    expertDetails: {
      helpKind: "יכול לעזור בכל מיני דברים",
      otherproperties: "vewvfc",
    },
  },
];

const Hashtags = ["aaa", "bbb", "cba", "cbc"];

function MentorCard({ user }) {
  return (
    <div className={"mentorcard" + ""}>
      <Avatar height="70px" />
      <div className="middlementordiv">
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <h5>
          {user.profession}, {user.city}
        </h5>
        <p>משפט על עצמו, לשאוב אותו ממאגר המידע בצורה שאלעד יגיד כשנשאל אותו</p>
        <div>
          <div className="tagsBox">
            {user.expertDetails.inquiryTags.map((tag) => (
              <div className="hashtag">{tag} </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {/* the same icon looks diferent in inquiry.js and this needs a proper rauting */}
        <a href="/">
          <img className="mentorcardnextimg" src={NextIcon} />
        </a>
      </div>
    </div>
  );
}
export default MentorCard;
