import React from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { useState } from "react";


const MeetingArrangment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [schedule, setSchedule] = useState([]);
    const [input, setInput] = useState(""); 
    
    return (
        <div className = "arrangeBox">
            <button>חזרה</button>
            <h3>מתי תוכל להפגש?</h3>
            <div className = "dates">
                {schedule.map((date) =>{
                    return <div>{date}</div>
                })}
            </div>
            <label>קבע שלושה תאריכים</label>
            <Datetime onChange = {(e)=>{setInput(e._d)}} /> 
            <button onClick = {()=> {
                const copy = [...schedule]; copy.push(String(input).slice(0,21)); setSchedule(copy);
            }}>send</button>
            <lable> אורך פגישה</lable>
            <input type = "time"></input>
            <lable>כתובת לפגישה</lable>
            <input></input>
        </div>
)
}

export default MeetingArrangment;