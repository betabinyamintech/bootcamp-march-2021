import { useUserState } from "../../contexts/context";
import LoginDetails from "../Login/LoginDetails";
import LoginRegister from "../Login/LoginRegister";
import "../Login/Style.css"
import MeetingArrangment from "../MeetingArrangment/MeetingArrangment";

import "./Test.css";

function Test() {
    const user = useUserState();
    console.log('user', user)
  return <LoginRegister />;
}

export default Test;
