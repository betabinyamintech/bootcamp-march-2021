const LoginDetails = ({ loginDetails, setLoginDetails, isLogin }) => {
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
              onChange={(e) => {
                if (loginDetails.password === e.target.value) console.log(e.target.value);
              }}
              type="password"
            ></input>
            <span>אימות</span>
          </label>
        </div>
      )}
    </form>
  );
};

export default LoginDetails;
