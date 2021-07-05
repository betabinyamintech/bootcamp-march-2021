import { Link, useHistory } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Avatar from "../Avatar/Avatar";
import "./MoreMenu.css";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import { Logout } from "../../contexts/actions";
import { useUserState } from "../../contexts/context";
import logoutIcon from "../commonsSVG/logout-icon.svg";
import shareIcon from "../commonsSVG/share-icon.svg";
import profileIcon from "../commonsSVG/profile-icon.svg";
import plusIcon from "../commonsSVG/plus-icon.svg";
import whatsappIcon from "../commonsSVG/whatsapp-icon.svg";
import telegramAppIcon from "../commonsSVG/telegram-app-icon.svg";
import copyIcon from "../commonsSVG/copy.png";
import allChallengesIcon from "../commonsSVG/all-challenges-icon.svg";
import { useState } from "react";

const MoreMenu = () => {
  let history = useHistory();
  const userState = useUserState();
  const [link, setLink] = useState("anybody-app.herokuapp.com");
  let text = "נסו את Anybody! אפליקצייה למנטורינג חברתי";
  const [share, setShare] = useState(false);
  console.log(userState.user);
  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    document.location.reload();
  };
  return (
    <div className="more-menu-container">
      <PreviousButton linkTo="/home" />
      <div className="user-details">
        <Avatar avatar={userState.user.imageSrc} />
        <div>
          <h3>{`${userState.user.firstName ? userState.user.firstName : ""} ${
            userState.user.lastName ? userState.user.lastName : "ברוך/ה הבא/ה!"
          }`}</h3>
          <h5>{`${userState.user.city ? userState.user.city : ""}`}</h5>
          <h5>{`${
            userState.user.profession
              ? userState.user.profession
              : userState.user.city
              ? userState.user.city
              : "הכנס/י ללשונית 'עריכת פרופיל' להשלמת הפרטים החסרים"
          }`}</h5>{" "}
        </div>
      </div>
      <div className="more-menu-buttons">
        {/* <button>
          <div>
            <i>
              <img src={allChallengesIcon}></img>
            </i>
            <span>כל האתגרים</span>
          </div>
        </button> */}
        {/* <button>
          <div onClick={() => history.push("/inquiry/new")}>
            <i>
              <img src={plusIcon}></img>
            </i>
            <span onClick={() => history.push("/inquiry/new")}>
              הוספת אתגר חדש
            </span>
          </div>
        </button> */}
        <button>
          {/* <Link to="/profile/edit" style={{ textDecoration: "none" }}> */}
          <div onClick={() => history.push("/profile/edit")}>
            <i>
              <img src={profileIcon}></img>
            </i>
            <span onClick={() => history.push("/profile/edit")}>
              עריכת הפרופיל
            </span>
          </div>
          {/* </Link> */}
        </button>
        <button
          onClick={() => {
            setShare(!share);
          }}
        >
          <div>
            <i>
              <img src={shareIcon}></img>
            </i>
            <span>שיתוף</span>
          </div>
        </button>
        {share && (
          <div className="shareBox">
            <span>
              <a
                href={`whatsapp://send?text= ניסית כבר את האפליקציה שלנו?? ${link}`}
                data-action="share/whatsapp/share"
              >
                <img src={whatsappIcon}></img>
              </a>
            </span>
            <span>
              <a
                href={`https://t.me/share/url?url=${link}&text=${text}
`}
              >
                <img src={telegramAppIcon}></img>
              </a>
            </span>
            <CopyToClipboard text={link}>
              <span>
                <img src={copyIcon} style={{ height: "47px" }}></img>
              </span>
            </CopyToClipboard>
          </div>
        )}
        <button>
          <div>
            <i>
              <img src={logoutIcon}></img>
            </i>
            <span onClick={logout}>התנתקות</span>
          </div>
        </button>
        <button
          style={{
            border: "none",
            marginTop: "12px",
            height: "30px",
            width: "20%",
            alignSelf: "center",
          }}
          onClick={() => history.push("/home")}
        >
          סגירה
        </button>
      </div>
    </div>
  );
};

export default MoreMenu;
