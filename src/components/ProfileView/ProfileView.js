import React from "react";
import Avatar from "../Avatar/Avatar";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import HashtagScreen from "../HashtagScreen/HashtagScreen";
import "./ProfileView.css";

const ProfileView = ({ user }) => {
  return (
    <div className="profile-view-container">
      <PreviousButton />
      <div className="profile-details">
        <div className="avatar-container">
          <Avatar />
        </div>
        <div className="user-details">
          <h4 className="user-name"> ישראל ישראלי</h4>
          <span className="user-city">רו"ח </span>,
          <span className="user-city"> כוכב השחר</span>
        </div>
      </div>
      <div className="row-details">
        <span className="row-title">תיאור נושא הסיוע</span>
        <span className="row-description">התמודדות עם משטרת ההגירה</span>
      </div>
      <HashtagScreen />
      <div className="row-details">
        <span className="row-title">סוג פגישה מועדף </span>
        <span className="row-description"> פגישה פיזית </span>
      </div>
      <div className="row-details">
        <span className="row-title">משך הפגישה </span>
        <span className="row-description">00:30 </span>
      </div>
      <div className="row-details">
        <span className="row-title"> כתובת הפגישה </span>
        <span className="row-description"> המייסדים 4, תל אביב </span>
      </div>
      <div className="row-details">
        <span className="row-title"> אורך פגישה </span>
        <span className="row-description"> 00:30 </span>
      </div>
      <div className="row-details">
        <span className="row-title"> טלפון </span>
        <span className="row-description"> 050-4458384 </span>
      </div>
      <div className="row-details">
        <span className="row-title"> מיילה </span>
        <span className="row-description"> adflja@akldfj.asd </span>
      </div>
    </div>
  );
};
export default ProfileView;
