import { useCallback, useState } from "react";
import { loginUser, registerUser } from "../../contexts/actions";
import { useUserDispatch } from "../../contexts/context";
import Button from "../Common/Button/Button";
import LoginDetails from "./LoginDetails";
import "./Style.css";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState()
  const dispatch = useUserDispatch();
  // isLogin ? (

  const onClick = useCallback(() => {
    if (isLogin) loginUser(dispatch, loginDetails);
    else {
      setErrorMessage(registerUser(dispatch, loginDetails))
    }

  }, [loginDetails])
  return (
    <div className="container">
      <img
        className="logo"
        alt="logo_image"
        src="https://binyamintech.co.il/wp-content/uploads/2020/07/favicon-01.png"
      ></img>
      <div className="details">
        <h3 className="login-title">{isLogin ? "התחברות" : "הרשמה"}</h3>
        <p className="description">תושבי מטה בנימין יכולים לעזור ולהיעזר כאן במגוון תחומים בצורה נוחה וידידותית.</p>
      </div>

      <LoginDetails loginDetails={loginDetails} setLoginDetails={setLoginDetails} isLogin={!isLogin} />
      <div>{errorMessage && errorMessage}</div>
      <div className="buttons">
        {/* <button className="email-button" style={{ top: "470px" }}>
          התחברות באמצעות גוגל
        </button> */}
        <Button
          onClick={() => onClick()}
        >
          {isLogin ? "התחברות באמצעות אימייל" : "הרשמה באמצעות אימייל"}
        </Button>
      </div>

      <h4 className="footer">
        {isLogin ? "אין לך חשבון? " : "יש לך חשבון? "}
        <span style={{ textDecoration: "underline" }} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "הירשם עכשיו." : "היכנס עכשיו."}
        </span>
      </h4>
    </div>
  );
};

export default LoginRegister;
