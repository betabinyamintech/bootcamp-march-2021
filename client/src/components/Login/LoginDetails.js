import { useState } from "react";

const LoginDetails = ({ loginDetails, setLoginDetails, isLogin }) => {
  const [errorMessage, setErrorMessage] = useState();
  return (
    <form>
      <div className="input-div">
        <label>
          <input
            placeholder=" "
            onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
            type="email"
          ></input>
          <span>אימייל</span>
        </label>
      </div>

      <div className="input-div">
        <label>
          <input
            placeholder=" "
            onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
            type="password"
          ></input>
          <span>סיסמא</span>
        </label>
      </div>
      {isLogin && (
        <div className="input-div">
          <label>
            <input
              placeholder=" "
              onChange={(e) => setErrorMessage(loginDetails.password !== e.target.value)}
              type="password"
            ></input>
            <span>אימות</span>
          </label>
          {errorMessage && <h5 style={{ color: "red" }}>הסיסמאות לא תואמות</h5>}
        </div>
      )}
    </form>
  );
};

export default LoginDetails;
