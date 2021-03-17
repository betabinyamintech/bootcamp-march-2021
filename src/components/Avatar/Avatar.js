// import React from "react";
import { useUserState } from "../../contexts/context";
import "./Avatar.css";

const Avatar = (props) => {
  const avatarImg = useUserState().user.avatarImg;
  return <img src={avatarImg} {...props} className="imgAvatar" alt="" />;
};
export default Avatar;