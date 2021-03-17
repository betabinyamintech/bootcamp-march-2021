import { refreshUserByToken } from "../../contexts/actions";
import { useUserDispatch, useUserState } from "../../contexts/context";
import LoginRegister from "../Login/LoginRegister";
import MainRouter from "../MainRouter";

import "./Test.css";

function Test() {
    const userState =  useUserState()
    console.log('userState', userState);
    const userDispatch = useUserDispatch();
    if (userState.user == null){
        refreshUserByToken(userDispatch) 
    }
  
//   return <LoginRegister />;
return <MainRouter/>
}

export default Test;
//<ProfileView />
//<UserProfileEdit />
