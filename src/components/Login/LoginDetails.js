import { useState } from "react";
import InputField from "../Common/InputField/InputField";

const LoginDetails = ({ loginDetails, setLoginDetails, isLogin }) => {
  const [errorMessage, setErrorMessage] = useState();
  return (
    <form style={{ width: "100%" }}>
      <InputField
        onChange={(e) =>
          setLoginDetails({ ...loginDetails, email: e.target.value })
        }
        label="אימייל"
      />
      <InputField
        onChange={(e) =>
          setLoginDetails({ ...loginDetails, password: e.target.value })
        }
        label="סיסמא"
        type="password"
      />
      {isLogin && (
        <div>
          <InputField
            onChange={(e) =>
              setErrorMessage(loginDetails.password !== e.target.value)
            }
            label="אימות סיסמא"
            type="password"
          />
          {errorMessage && <h5 style={{ color: "red" }}>הסיסמאות לא תואמות</h5>}{" "}
        </div>
      )}
    </form>
  );
};

export default LoginDetails;
