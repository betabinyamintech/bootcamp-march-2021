import React, { useCallback, useState } from "react";
import "./UserProfileEdit.css";
import Avatar from "../Avatar/Avatar";
import ExpertProfileEdit from "./ExpertProfileEdit";
import Button from "../Common/Button/Button";
import InputField from "../Common/InputField/InputField";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import { putUser } from "../../contexts/actions";
import { useUserDispatch, useUserState } from "../../contexts/context";

const UserProfileEdit = () => {
  const userState = useUserState();
  console.log("userState", userState);
  const userDispatch = useUserDispatch();
  const [userDetails, setUserDetails] = useState(userState.user);
  const [warningLabel, setWarningLabel] = useState({});
  const [warnings, setWarnings] = useState({});

  const setExpertDetails = useCallback(
    (expertDetails) => setUserDetails({ ...userDetails, expertDetails }),
    [userDetails, setUserDetails]
  );

  const requiredFields = {
    city: true,
    lastName: true,
    firstName: true,
    phone: true,
  };

  const setUserDetailsWithWarning = useCallback(
    (e, value) => {
      if (requiredFields[e.target.id]) {
        if (e.target.value === null || e.target.value === "") {
          warnings[e.target.id] = "שדה חובה";
        } else {
          delete warnings[e.target.id];
        }
        setWarnings(warnings);
      }
      setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
    },
    [warnings]
  );

  console.log(userDetails);
  return (
    <div className="profile-edit-container">
      <div style={{ alignSelf: "flex-start" }}>
        <PreviousButton linkTo="/more-menu" />
      </div>
      <div className="profile-details">
        <Avatar />
        {(userDetails.firstName === undefined ||
          userDetails.lastName === undefined ||
          userDetails.firstName === "" ||
          userDetails.lastName === "") && (
          <h4 className="user-name"> הכנסת פרטי משתמש</h4>
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
        <label className="warning-label" for="firstName">
          {warningLabel.firstName}
        </label>
        <InputField
          value={userDetails.lastName}
          id="lastName"
          required={true}
          label="שם משפחה:"
          warning={warnings.lastName}
          onChange={setUserDetailsWithWarning}
        />
        <label className="warning-label" for="firstName">
          {warningLabel.lastName}
        </label>
        <InputField
          max={10}
          value={userDetails.profession}
          id="profession"
          label="מה המקצוע שלך?"
          onChange={setUserDetailsWithWarning}
        />

        <InputField
          value={userDetails.phone}
          id="phone"
          required={true}
          label="טלפון"
          warning={warnings.phone}
          onChange={setUserDetailsWithWarning}
        />
        <label className="warning-label" for="phone">
          {warningLabel.phone}
        </label>
        <InputField
          value={userDetails.city}
          id="city"
          required={true}
          label="ישוב"
          warning={warnings.city}
          onChange={setUserDetailsWithWarning}
        />
        <label className="warning-label" for="city">
          {warningLabel.city}
        </label>
        <div className="mentor-switch">
          <label className="switch">
            <input
              type="checkbox"
              value={userDetails.isExpert}
              onChange={setUserDetailsWithWarning}
            />
            <span className="slider round"></span>
          </label>
          <span>אשמח גם לסייע לאחרים</span>
        </div>
        {userDetails.isExpert && (
          <ExpertProfileEdit
            setExpertDetails={setExpertDetails}
            expertDetails={userDetails.expertDetails}
          />
        )}
        {/* <button className="save-button">שמירה</button> */}
        <Button
          className="save-button"
          id="submitButton"
          onClick={() => {
            // check if obligatory field have been filled in before updating profile
            // obligatory fields are: firstName, lastName, phone number
            // these are not obligatory: email, profession
            if (Object.keys(warnings).length > 0) {
              return;
            }
            putUser(userDispatch, {
              ...userDetails,
              profileFullFields: true,
            });
          }}
        >
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.21875 7.8125L11.3125 0.71875L12.2188 1.65625L4.21875 9.65625L0.5 5.9375L1.4375 5L4.21875 7.8125Z"
              fill="white"
            />
          </svg>
          שמירה
        </Button>
        <label
          className="warning-label"
          for="submitButton"
          style={{ textAlign: "center" }}
        >
          {warningLabel.submit}
        </label>
      </div>
    </div>
  );
};
export default UserProfileEdit;
