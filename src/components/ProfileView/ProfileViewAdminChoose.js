import React from "react";
import ProfileView from "./ProfileView";
import Button from "../Common/Button";
import tick from "../Common/tickForButton.svg";

const ProfileViewAdminChoose = ({ user }) => {
  return (
    <div>
      <ProfileView />
      <Button>
        בחירה <img src={tick} alt="tick" />
      </Button>
    </div>
  );
};
export default ProfileViewAdminChoose;
