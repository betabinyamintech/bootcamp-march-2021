import { useState } from 'react';
import Button from '../Common/Button/Button';
import InputField from '../Common/InputField/InputField';
import './Test.css'

function Test(){
    const [name,setName] = useState('adir')
    return <div>
        <Button onClick={()=>setName('yonatan')}> {name}</Button>
        <InputField label="hello"/>
        </div>
    }
export default Test;