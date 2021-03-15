// import React from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import "./Avatar.css";

const Avatar = () => {
  const avatarImg = useContext(UserContext).user.avatarImg;
  return <img className="imgProfile" src={avatarImg} alt="" />;
};
export default Avatar;
