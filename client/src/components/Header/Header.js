import React, { useContext } from "react";
import Avatar from "../Avatar/Avatar";
import UserContext from "../../contexts/UserContext";
import InputQuestion from "../InputQuestion/InputQuestion";

const Header = ({ numExperts = 167 }) => {
  const user = useContext(UserContext).user;
  const { name } = user;
  return (
    <div className="headerBox">
      <div>
        <button className="profileButton"></button>
        <Avatar />
      </div>
      <div className="profileMessage">
        {name}, {numExperts} .מומחים כאן בקהילת מטה בנימין ישמחו לעזור לך
      </div>
      <div>
        <InputQuestion />
      </div>
    </div>
  );
};
export default Header;
