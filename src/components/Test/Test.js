<<<<<<< HEAD
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
=======
import RequestStatus from "../Common/RequestStatusWindow/RequestStatus";
import HashtagComponent from "../HashtagComponent/HashtagComponent";
import "./Test.css";

const Test = () => <HashtagComponent />;
>>>>>>> 798826f87d309acd54d8ee01253ba34f4cc7a5e8

export default Test;
