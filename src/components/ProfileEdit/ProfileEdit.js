import React from "react";
import "./ProfileEdit.css";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import { Checkbox } from "@material-ui/core";
const ProfileEdit = () => {
  return (
    <div className="profile-edit-container">
      <button style={{ display: "flex" }}> חזרה </button>
      <div className="profile-details">
        <img
          className="profile-image"
          alt="profile_img"
          src="https://image.shutterstock.com/image-photo/27032020-riga-latvia-portrait-man-600w-1686506806.jpg"
        />
        <h4 className="user-name"> ישראל ישראלי</h4>
        <h6 className="user-city"> כוכב השחר</h6>
      </div>
      <div className="input-fields">
        <button className="save-button">שמירה</button>
      </div>
    </div>
  );
};
export default ProfileEdit;
