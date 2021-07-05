import React from "react";
import Datetime from "react-datetime";
import "./MeetingArrangment.css";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "../Common/Button/Button";
import { putInquiry, Reload } from "../../contexts/actions";
import { useHistory, useLocation } from "react-router";
import { useUserState } from "../../contexts/context";
import clockIcon from "../commonsSVG/clock-icon.svg";
import InputField from "../Common/InputField/InputField";
import giftSVG from "../commonsSVG/gift.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 180,
  },
}));
const MeetingArrangment = ({ inquiry, closePop }) => {
  const history = useHistory();
  const { user } = useUserState();
  const { expertDetails } = user;
  console.log("user", expertDetails);
  const {
    lengthMeeting,
    preferredMeetingType,
    meetingAddress,
    questionsBeforeMeeting,
  } = expertDetails;
  const location = useLocation();
  const { _id } = inquiry;
  const [optinalDates, setOptinalDates] = useState([]);
  const [date, setDate] = useState();
  const [step, setStep] = useState(0);
  const [updateDetails, setUpdateDetails] = useState({
    lengthMeeting: lengthMeeting,
    preferredMeetingType: preferredMeetingType,
    meetingAddress: meetingAddress,
  });
  const setoptinalState = () => {
    let today = new Date().toJSON().slice(0, 10);
    console.log(date > today ? "ok" : "early");
    optinalDates.length === 3 && optinalDates.shift();
    optinalDates && !optinalDates.includes(date)
      ? setOptinalDates([...optinalDates, date])
      : date && setOptinalDates([date]);
  };

  const putToServer = () => {
    let request = {
      meetingOptions: {
        optionalDates: optinalDates,
        lengthMeeting: updateDetails.lengthMeeting,
        meetingType: updateDetails.preferredMeetingType,
        meetingAddress: updateDetails.meetingAddress,
      },
      status: "responseFromExpert",
    };
    console.log(request);
    putInquiry(_id, request);
    setTimeout(() => {
      Reload();
    }, 1500);
  };

  const classes = useStyles();
  console.log("optinalState", optinalDates);
  console.log("updatedDetails", updateDetails);
  return (
    <div className="arrangeBox">
      <span>בחר 3 תאריכים שמתאימים לך,ושולח הפניה יוכל לבחור אחד מהם</span>
      <div className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          // label="בחר תאריך אפשרי"
          type="datetime-local"
          defaultValue={"2021-07-24T10:30"}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          onBlur={setoptinalState}
        />
        <TextField
          id="datetime-local"
          // label="בחר תאריך אפשרי"
          type="datetime-local"
          defaultValue={"2021-07-24T10:30"}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          onBlur={setoptinalState}
        />
        <TextField
          id="datetime-local"
          // label="בחר תאריך אפשרי"
          type="datetime-local"
          defaultValue={"2021-07-24T10:30"}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          onBlur={setoptinalState}
        />
      </div>
      {optinalDates.length > 0 && (
        <div>
          התאריכים שנבחרו:
          <div style={{ display: "flex", flexDirection: "column" }}>
            {optinalDates &&
              optinalDates.map((date) => {
                let theTime = new Date(date).toLocaleTimeString();
                let theDate = new Date(date).toLocaleDateString();
                console.log("the dateee", theDate);
                return (
                  <span
                    style={{
                      fontSize: "15px",
                      border: " 1px solid #1EE8B7 ",
                      borderRadius: "8px",
                      marginTop: "10px",
                    }}
                  >
                    {theTime.slice(0, 5)}-{theDate}
                  </span>
                );
              })}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="updateMeetingDetails">
          <span className="titles"> קבע את פרטי הפגישה: </span>
          <div className="titles">
            <span>אורך הפגישה </span>
            <span style={{ alignSelf: "flex-start" }}>
              <img src={clockIcon}></img>
            </span>
          </div>
          <select
            className="meeting-kind"
            value={
              updateDetails.lengthMeeting ? updateDetails.lengthMeeting : "30"
            }
            onChange={(e) =>
              setUpdateDetails({
                ...updateDetails,
                lengthMeeting: e.target.value,
              })
            }
          >
            <option value={15}>רבע שעה</option>
            <option value={30}>חצי שעה </option>
            <option value={45}>45 דקות </option>
            <option value={60}>שעה </option>
          </select>
          <span className="titles">סוג פגישה מועדף</span>
          <select
            value={
              updateDetails.preferredMeetingType
                ? updateDetails.preferredMeetingType
                : "physically"
            }
            className="meeting-kind "
            onChange={(e) =>
              setUpdateDetails({
                ...updateDetails,
                preferredMeetingType: e.target.value,
              })
            }
          >
            <option value="physically">פגישה פיזית</option>
            <option value="virtual">שיחת וידאו בזום</option>
            <option value="phoneCall">שיחת טלפון</option>
          </select>
          {updateDetails.preferredMeetingType === "physically" && (
            <InputField
              id="meetingAddress"
              value={
                updateDetails.meetingAddress
                  ? updateDetails.meetingAddress
                  : null
              }
              label="כתובת לפגישה:"
              onChange={(e) =>
                setUpdateDetails({
                  ...updateDetails,
                  meetingAddress: e.target.value,
                })
              }
            />
          )}
          {updateDetails.preferredMeetingType === "physically" && (
            <span className="beta-gift">
              <img src={giftSVG}></img>
              תוכלו להיפגש בחינם בבנימין טק
            </span>
          )}
        </div>
      )}
      <Button
        style={{ marginTop: "55px" }}
        onClick={() => {
          step ? putToServer() : setStep(step + 1);
        }}
      >
        {step ? "שלח" : "הבא"}
      </Button>
    </div>
  );
};

export default MeetingArrangment;
