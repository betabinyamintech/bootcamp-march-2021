import { Link, useHistory } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import "./MoreMenu.css";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import { Logout } from "../../contexts/actions";
import { useUserState } from "../../contexts/context";
import logoutIcon from "../commonsSVG/logout-icon.svg";
import shareIcon from "../commonsSVG/share-icon.svg";
import profileIcon from "../commonsSVG/profile-icon.svg";
import plusIcon from "../commonsSVG/plus-icon.svg";
import allChallengesIcon from "../commonsSVG/all-challenges-icon.svg";
const MoreMenu = () => {
  let history = useHistory();
  const userState = useUserState();
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
        <Avatar />
        <div>
          <h3>{`${
            userState.user.firstName ? userState.user.firstName + "," : ""
          } ${
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
        <button>
          <div>
            <i>
              <img src={allChallengesIcon}></img>
            </i>
            <span>כל האתגרים</span>
          </div>
        </button>
        <button>
          <div onClick={() => history.push("/inquiry/new")}>
            <i>
              <img src={plusIcon}></img>
            </i>
            <span onClick={() => history.push("/inquiry/new")}>
              הוספת אתגר חדש
            </span>
          </div>
        </button>
        <button>
          {/* <Link to="/profile/edit" style={{ textDecoration: "none" }}> */}
          <div onClick={() => history.push("/profile/edit")}>
            <i>
              <img src={profileIcon}></img>
            </i>
            <span onClick={() => history.push("/profile/edit")}>
              עריכת פרופיל
            </span>
          </div>
          {/* </Link> */}
        </button>
        <button>
          <div>
            <i>
              <img src={shareIcon}></img>
            </i>
            <span>שיתוף</span>
          </div>
        </button>
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
