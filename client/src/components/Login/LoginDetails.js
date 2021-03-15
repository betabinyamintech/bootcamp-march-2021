const LoginDetails = ({ loginDetails, setLoginDetails }) => {
  return (
    <form>
      <label for="fname">Email</label>
      <input
        onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
        type="text"
        id="fname"
        name="fname"
      ></input>
      <label for="lname">Last name:</label>
      <input
        onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
        type="text"
        id="lname"
        name="lname"
      ></input>
    </form>
  );
};

export default LoginDetails;
