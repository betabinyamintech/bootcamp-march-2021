// import React from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import "./Avatar.css";

const Avatar = (props) => {
  const avatarImg = useContext(UserContext).user.avatarImg;
  return <img src={avatarImg} {...props} className="imgProfile" alt="" />;
};
export default Avatar;
