import React, { useCallback, useState } from "react";
import "./UserProfileEdit.css";
import Avatar from "../Avatar/Avatar";
import ExpertProfileEdit from "./ExpertProfileEdit";
import Button from "../Common/Button/Button";
import InputField from "../Common/InputField/InputField";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import { putUser } from "../../contexts/actions";
import { useUserDispatch, useUserState } from "../../contexts/context";
import vIcon from "../commonsSVG/v-icon.svg";
import informationIcon from "../commonsSVG/information-icon.svg";

import { useHistory } from "react-router";

const missingMessage = "שדה חובה";

const UserProfileEdit = () => {
  const history = useHistory();
  const userState = useUserState();
  let user = useUserState().user;
  const userDispatch = useUserDispatch();
  const [userDetails, setUserDetails] = useState(userState.user);
  const [warnings, setWarnings] = useState({});
  const [questions, setQuestions] = useState([]);
  const [checkIsExpert, setCheckIsExpert] = useState(
    userDetails.isExpert ? userDetails.isExpert : false
  );
  const [localIsExpert, setLocalIsExpert] = useState(checkIsExpert);
  // console.log("userState", userState, "warnings", warnings);

  const setExpertDetails = useCallback(
    (expertDetails) => setUserDetails({ ...userDetails, expertDetails }),
    [userDetails, setUserDetails]
  );
  let setExpertQuestion = () => {
    setExpertDetails({});
  };

  const requiredFields = {
    city: true,
    lastName: true,
    firstName: true,
    phone: true,
    profession: true,
  };

  const setUserDetailsWithWarning = useCallback(
    (e, value) => {
      if (requiredFields[e.target.id]) {
        if (e.target.value === null || e.target.value === "") {
          warnings[e.target.id] = missingMessage;
        } else {
          delete warnings[e.target.id];
        }
        setWarnings(warnings);
      }
      setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
    },
    [warnings, userDetails]
  );

  const submit = useCallback(() => {
    const requiredFieldsKeys = Object.keys(requiredFields);
    const fieldsWithWarnings = requiredFieldsKeys.filter(
      (field) => !(userDetails[field] && userDetails[field] !== "")
    );
    fieldsWithWarnings.forEach((field) => (warnings[field] = missingMessage));
    if (fieldsWithWarnings.length > 0) {
      console.log("has warnings", warnings);
      setWarnings(warnings);
      return;
    }
    console.log("submit", userDetails);
    let { city, firstName, profession, lastName, phone } = userDetails;
    putUser(
      userDispatch,
      {
        userDetails: {
          ...userDetails,
          profileFullFields:
            city && phone && profession && firstName && lastName ? true : false,
        },
      },
      console.log("putUser works" + userDetails),
      setTimeout(() => {
        history.push("/home");
      }, 1000)
    );
  }, [userDetails, warnings, setWarnings, requiredFields, userDispatch]);
  const setIsExpertFinal = (e) => {
    setLocalIsExpert(!localIsExpert);
    setUserDetails({ ...userDetails, isExpert: !localIsExpert });
  };
  console.log("USER DETAILS", userDetails);
  return (
    <div className="profile-edit-container">
      <div style={{ alignSelf: "flex-start" }}>
        <PreviousButton linkTo="/more-menu" />
      </div>
      <div className="profile-details">
        <Avatar avatar={user.imageSrc} />
        {(userDetails.firstName === undefined ||
          userDetails.lastName === undefined ||
          userDetails.firstName === "" ||
          userDetails.lastName === "") && (
          <h4 className="user-name"> הזנת פרטים</h4>
        )}
        {userDetails.firstName !== undefined &&
          userDetails.lastName !== undefined &&
          userDetails.firstName !== "" &&
          userDetails.lastName !== "" && (
            <h4 className="user-name">
              {userDetails.firstName} {userDetails.lastName}
            </h4>
          )}
        <h6 className="user-city">{userDetails.city} </h6>
      </div>
      <div className="input-fields">
        <InputField
          value={userDetails.firstName || ""}
          id="firstName"
          required={true}
          label="שם פרטי:"
          warning={warnings.firstName}
          onChange={setUserDetailsWithWarning}
        />
        <InputField
          value={userDetails.lastName}
          id="lastName"
          required={true}
          label="שם משפחה:"
          warning={warnings.lastName}
          onChange={setUserDetailsWithWarning}
        />
        <InputField
          max={10}
          value={userDetails.profession}
          id="profession"
          label="מה המקצוע שלך?"
          onChange={setUserDetailsWithWarning}
        />
        <InputField
          type="number"
          value={userDetails.phone}
          id="phone"
          required={true}
          label="טלפון"
          warning={warnings.phone}
          onChange={setUserDetailsWithWarning}
        />
        <InputField
          value={userDetails.city}
          id="city"
          required={true}
          label="ישוב"
          warning={warnings.city}
          onChange={setUserDetailsWithWarning}
        />
        <div className="mentor-switch">
          <label className="switch">
            <input
              type="checkbox"
              checked={userDetails.isExpert}
              value={userDetails.isExpert}
              id="isExpert"
              onChange={(e) => setIsExpertFinal(e)}
            />
            <span className="slider round"></span>
          </label>
          <span>אשמח גם לסייע לאחרים</span>
        </div>
        <div className="information">
          <img src={informationIcon}></img>{" "}
          <span>
            {" "}
            {
              "לחיצה על כפתור זה תוביל אותך למסך עם כמה שאלות לגבי אופי העזרה שתרצה לתת"
            }
          </span>
        </div>
        {localIsExpert && (
          <ExpertProfileEdit
            setExpertDetails={setExpertDetails}
            expertDetails={userDetails.expertDetails}
            setExpertQuestion={setExpertQuestion}
          />
        )}
        {/* <button className="save-button">שמירה</button> */}
        <Button className="save-button" id="submitButton" onClick={submit}>
          <img src={vIcon}></img>
          שמירה
        </Button>
      </div>
    </div>
  );
};
export default UserProfileEdit;
