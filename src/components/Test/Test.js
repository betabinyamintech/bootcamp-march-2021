import { useEffect } from "react";
import { refreshUserByToken } from "../../contexts/actions";
import { useUserDispatch, useUserState } from "../../contexts/context";
// import LoginRegister from "../Login/LoginRegister";
import MainRouter from "../MainRouter";

import "./Test.css";

function Test() {
  const userState = useUserState();
  const userDispatch = useUserDispatch();
  useEffect(() => {
    console.log("userState", userState);
    if (userState.user == null) {
      refreshUserByToken(userDispatch);
    }
  });

  return <MainRouter />;
}

export default Test;
