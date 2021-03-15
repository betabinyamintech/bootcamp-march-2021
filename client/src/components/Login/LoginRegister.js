import { useState } from "react";
import LoginDetails from "./LoginDetails";
import "./Style.css";

function login(email, password) {
  console.log("login", email, password);
}

function register(email, password) {
  console.log("register", email, password);
}

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  return isLogin ? (
    <div className="container">
      <img
        className="logo"
        alt="logo_image"
        src="https://binyamintech.co.il/wp-content/uploads/2020/07/favicon-01.png"
      ></img>
      <div className="details">
        <h3 className="login-title">התחברות</h3>
        <p className="description">תושבי מטה בנימין יכולים לעזור ולהיעזר כאן במגוון תחומים בצורה נוחה וידידותית.</p>
      </div>

      <LoginDetails loginDetails={loginDetails} setLoginDetails={setLoginDetails} />

      <div className="buttons">
        {/* <button className="email-button" style={{ top: "470px" }}>
          התחברות באמצעות גוגל
        </button> */}
        <button
          className="email-button"
          onClick={() => {
            if (isLogin) login(loginDetails);
            else register(loginDetails);
          }}
        >
          התחברות באמצעות אימייל
        </button>
      </div>

      <h4 className="footer">
        אין לך חשבון?
        <span style={{ textDecoration: "underline" }} onClick={() => setIsLogin(!isLogin)}>
          {" "}
          הירשם עכשיו.
        </span>
      </h4>
    </div>
  ) : (
    <div className="container">
      <img
        className="logo"
        alt="logo_image"
        src="https://binyamintech.co.il/wp-content/uploads/2020/07/favicon-01.png"
      ></img>
      <div className="details">
        <h3 className="login-title">הרשמה</h3>
        <p className="description">תושבי מטה בנימין יכולים לעזור ולהיעזר כאן במגוון תחומים בצורה נוחה וידידותית.</p>
      </div>

      <LoginDetails loginDetails={loginDetails} setLoginDetails={setLoginDetails} />

      <div className="buttons">
        {/* <button className="email-button" style={{ top: "470px" }}>
          הרשמה באמצעות גוגל
        </button> */}
        <button
          className="email-button"
          onClick={() => {
            if (isLogin) login(loginDetails);
            else register(loginDetails);
          }}
        >
          הרשמה באמצעות אימייל
        </button>
      </div>
      <h4 className="footer">
        יש לך חשבון?
        <span style={{ textDecoration: "underline" }} onClick={() => setIsLogin(!isLogin)}>
          {" "}
          היכנס עכשיו.
        </span>
      </h4>
    </div>
  );
};

export default LoginRegister;
