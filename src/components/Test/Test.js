import { useState } from 'react';
import Button from '../Common/Button/Button';
import InputField from '../Common/InputField/InputField';
import LoginRegister from '../Login/LoginRegister';
import './Test.css'
import {useUserState} from '../../contexts/UserContext'

function Test() {
    const [user,setUser] = useUserState();
    return <div>
        {JSON.stringify(user)}
        <LoginRegister onLogin={setUser}/>
    </div>
}
export default Test;