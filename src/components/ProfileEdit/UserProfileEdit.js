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
  const [warningLabel, setWarningLabel] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    submit: "",
  });

  const setExpertDetails = useCallback(
    (expertDetails) => setUserDetails({ ...userDetails, expertDetails }),
    [userDetails, setUserDetails]
  );

  const setWarningLabelOnFormSubmit = () => {
    let fnReturnVal = true;

    if (
      userDetails.city === "" ||
      userDetails.city === undefined ||
      userDetails.firstName === "" ||
      userDetails.firstName === undefined ||
      userDetails.lastName === "" ||
      userDetails.lastName === undefined ||
      userDetails.phone === "" ||
      userDetails.phone === undefined
    ) {
      fnReturnVal = false;
    }
    return fnReturnVal;
  };

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
          id="firstNameInput"
          required={true}
          label="שם פרטי:"
          onChange={(e) => {
            // first name is obligatory field
            // show warning label only if user initially entered value and then erased
            // i.e. don't show warning label if field is initally empty when user first reaches the form
            setWarningLabel({
              ...warningLabel,
              firstName: e.target.value !== "" ? "" : "שדה חובה",
              submit: "",
            });
            setUserDetails({ ...userDetails, firstName: e.target.value });
          }}
        />
        <label className="warning-label" for="firstNameInput">
          {warningLabel.firstName}
        </label>
        <InputField
          value={userDetails.lastName}
          id="lastNameInput"
          required={true}
          label="שם משפחה:"
          onChange={(e) => {
            // last name is obligatory field
            setWarningLabel({
              ...warningLabel,
              lastName: e.target.value !== "" ? "" : "שדה חובה",
              submit: "",
            });
            setUserDetails({ ...userDetails, lastName: e.target.value });
          }}
        />
        <label className="warning-label" for="firstNameInput">
          {warningLabel.lastName}
        </label>
        <InputField
          max={10}
          value={userDetails.profession}
          id="professionInput"
          label="מה המקצוע שלך?"
          onChange={(e) =>
            setUserDetails({ ...userDetails, profession: e.target.value })
          }
        />

        <InputField
          value={userDetails.phone}
          id="phoneInput"
          type="number"
          required={true}
          label="טלפון"
          onChange={(e) => {
            setWarningLabel({
              ...warningLabel,
              phone: e.target.value !== "" ? "" : "שדה חובה",
              submit: "",
            });
            setUserDetails({ ...userDetails, phone: +e.target.value });
          }}
        />
        <label className="warning-label" for="phoneInput">
          {warningLabel.phone}
        </label>
        <InputField
          value={userDetails.city}
          id="cityInput"
          required={true}
          label="ישוב"
          onChange={(e) => {
            setWarningLabel({
              ...warningLabel,
              city: e.target.value !== "" ? "" : "שדה חובה",
              submit: "",
            });
            setUserDetails({ ...userDetails, city: e.target.value });
          }}
        />
        <label className="warning-label" for="firstNameInput">
          {warningLabel.city}
        </label>
        <div className="mentor-switch">
          <label className="switch">
            <input
              type="checkbox"
              value={userDetails.isExpert}
              onChange={(e) => {
                setUserDetails({ ...userDetails, isExpert: !e.target.value });
                setWarningLabel({
                  ...warningLabel,
                  city: e.target.value !== "" ? "" : "שדה חובה",
                  submit: "",
                });
              }}
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
            if (setWarningLabelOnFormSubmit()) {
              // setWarningLabelOnFormSubmit fn has checked that all data correctly filled in by user.
              // Send user profile update to server.
              setWarningLabel({
                ...warningLabel,
                submit: "",
              });
              putUser(userDispatch, {
                ...userDetails,
                profileFullFields: true,
              });
            } else {
              // don't update user profile if obligatory field info hasn't been filled in
              setWarningLabel({
                ...warningLabel,
                submit: "שם פרטי, שם משפחה, טלפון ועיר הינם שדות חובה",
              });
            }
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
