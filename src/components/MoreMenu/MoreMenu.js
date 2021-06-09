import { Link, useHistory } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import "./MoreMenu.css";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import { Logout } from "../../contexts/actions";
import { useUserState } from "../../contexts/context";
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
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3.64893V0.961426H2.65625V3.64893H0ZM4 11.6489V8.96143H6.65625V11.6489H4ZM0 11.6489V8.96143H2.65625V11.6489H0ZM0 7.64893V4.96143H2.65625V7.64893H0ZM4 7.64893V4.96143H6.65625V7.64893H4ZM8 0.961426H10.6562V3.64893H8V0.961426ZM4 3.64893V0.961426H6.65625V3.64893H4ZM8 7.64893V4.96143H10.6562V7.64893H8ZM8 11.6489V8.96143H10.6562V11.6489H8Z"
                  fill="#414141"
                />
              </svg>
            </i>
            <span>כל האתגרים</span>
          </div>
        </button>
        <button>
          <div onClick={() => history.push("/inquiry/new")}>
            <i>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.34375 5.96143H5.34375V9.96143H4V5.96143H0V4.64893H4V0.648926H5.34375V4.64893H9.34375V5.96143Z"
                  fill="#414141"
                />
              </svg>
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
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.64893C0 1.27393 0.125 0.961426 0.375 0.711426C0.645833 0.440592 0.96875 0.305176 1.34375 0.305176H10.6562C11.0312 0.305176 11.3438 0.440592 11.5938 0.711426C11.8646 0.961426 12 1.27393 12 1.64893V10.9614C12 11.3364 11.8646 11.6593 11.5938 11.9302C11.3438 12.1802 11.0312 12.3052 10.6562 12.3052H1.34375C0.96875 12.3052 0.645833 12.1802 0.375 11.9302C0.125 11.6593 0 11.3364 0 10.9614V1.64893ZM7.40625 5.74268C7.80208 5.34684 8 4.86768 8 4.30518C8 3.74268 7.80208 3.27393 7.40625 2.89893C7.03125 2.50309 6.5625 2.30518 6 2.30518C5.4375 2.30518 4.95833 2.50309 4.5625 2.89893C4.1875 3.27393 4 3.74268 4 4.30518C4 4.86768 4.1875 5.34684 4.5625 5.74268C4.95833 6.11768 5.4375 6.30518 6 6.30518C6.5625 6.30518 7.03125 6.11768 7.40625 5.74268ZM2 9.64893V10.3052H10V9.64893C10 9.23226 9.75 8.85726 9.25 8.52393C8.77083 8.19059 8.22917 7.95101 7.625 7.80518C7.02083 7.65934 6.47917 7.58643 6 7.58643C5.52083 7.58643 4.97917 7.65934 4.375 7.80518C3.77083 7.95101 3.21875 8.19059 2.71875 8.52393C2.23958 8.85726 2 9.23226 2 9.64893Z"
                  fill="#414141"
                />
              </svg>
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
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10.0239C10.5417 10.0239 11 10.2218 11.375 10.6177C11.75 10.9927 11.9375 11.451 11.9375 11.9927C11.9375 12.5135 11.75 12.9614 11.375 13.3364C11 13.7323 10.5417 13.9302 10 13.9302C9.45833 13.9302 9 13.7323 8.625 13.3364C8.25 12.9614 8.0625 12.5031 8.0625 11.9614C8.0625 11.8364 8.07292 11.6906 8.09375 11.5239L3.375 8.77393C2.97917 9.12809 2.52083 9.30518 2 9.30518C1.4375 9.30518 0.958333 9.11768 0.5625 8.74268C0.1875 8.34684 0 7.86768 0 7.30518C0 6.74268 0.1875 6.27393 0.5625 5.89893C0.958333 5.50309 1.4375 5.30518 2 5.30518C2.52083 5.30518 2.97917 5.48226 3.375 5.83643L8.0625 3.11768C8.02083 2.93018 8 2.77393 8 2.64893C8 2.08643 8.1875 1.61768 8.5625 1.24268C8.95833 0.846842 9.4375 0.648926 10 0.648926C10.5625 0.648926 11.0312 0.846842 11.4062 1.24268C11.8021 1.61768 12 2.08643 12 2.64893C12 3.19059 11.8021 3.65934 11.4062 4.05518C11.0312 4.45101 10.5625 4.64893 10 4.64893C9.47917 4.64893 9.02083 4.46143 8.625 4.08643L3.9375 6.83643C3.97917 7.02393 4 7.18018 4 7.30518C4 7.43018 3.97917 7.58643 3.9375 7.77393L8.6875 10.5239C9.0625 10.1906 9.5 10.0239 10 10.0239Z"
                  fill="#414141"
                />
              </svg>
            </i>
            <span>שיתוף</span>
          </div>
        </button>
        <button>
          <div>
            <i>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0625 1.24268L8 0.305176L12 4.30518L8 8.30518L7.0625 7.36768L9.4375 4.96143H0V3.64893H9.4375L7.0625 1.24268ZM12.6562 0.305176H14V8.30518H12.6562V0.305176Z"
                  fill="#414141"
                />
              </svg>
            </i>
            <span onClick={logout}>התנתקות</span>
          </div>
        </button>
        <button className="close-button" onClick={() => history.push("/home")}>
          סגירה
        </button>
      </div>
    </div>
  );
};

export default MoreMenu;
