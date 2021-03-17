import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { loginUser, registerUser } from "../../contexts/actions";
import { useUserDispatch, useUserState } from "../../contexts/context";
import Button from "../Common/Button/Button";
import LoginDetails from "./LoginDetails";
import "./Style.css";

let isProfileFullFilled = true;

function login(email, password) {
  console.log("login", email, password);
}

function register(email, password) {
  console.log("register", email, password);
}

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const userState = useUserState();
  const dispatch = useUserDispatch();
  // isLogin ? (
  //console.log("LoginRegister userState", userState);

  const onClick = useCallback(async () => {
    if (isLogin) {
      await loginUser(dispatch, loginDetails);
    } else {
      await registerUser(dispatch, loginDetails);
    }
  }, [loginDetails, isLogin, dispatch]);
  return (
    <div className="container">
      <img
        className="logo"
        alt="logo_image"
        src="https://binyamintech.co.il/wp-content/uploads/2020/07/favicon-01.png"
      ></img>
      <div className="details">
        <h3 className="login-title">{isLogin ? "התחברות" : "הרשמה"}</h3>
        <p className="description">
          תושבי מטה בנימין יכולים לעזור ולהיעזר כאן במגוון תחומים בצורה נוחה
          וידידותית.
        </p>
      </div>

      <LoginDetails
        loginDetails={loginDetails}
        setLoginDetails={setLoginDetails}
        isLogin={!isLogin}
      />

      <div className="buttons">
        {/* <button className="email-button" style={{ top: "470px" }}>
          התחברות באמצעות גוגל
        </button> */}
        {/* <Link to={isProfileFullFilled ? "/home" : "/profile/edit"}></Link> */}
        <Button
          onClick={() => {
            onClick(loginDetails);
          }}
        >
          {isLogin ? "התחברות באמצעות אימייל" : "הרשמה באמצעות אימייל"}
        </Button>
      </div>

      <h4 className="footer">
        {isLogin ? "אין לך חשבון? " : "יש לך חשבון? "}
        <span
          style={{ textDecoration: "underline" }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "הירשם עכשיו." : "היכנס עכשיו."}
        </span>
      </h4>
    </div>
  );
};

export default LoginRegister;
