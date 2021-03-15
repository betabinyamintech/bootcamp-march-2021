import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useContext } from "react";
import LogIn from "../../pages/LogIn/LogIn";
import UserContext from "../../contexts/UserContext";

const MyRouter = () => {
  const userContext = useContext(UserContext);
  console.log("user context", userContext);

  return <div>{userContext.user ? "main screen" : "login"}</div>;
};

export default MyRouter;
