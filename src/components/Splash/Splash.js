import { useHistory } from "react-router";
import { getInquiries } from "../../contexts/actions";
import { useUserDispatch, useUserState } from "../../contexts/context";
import AnybodyLogo from "../commonsSVG/anybody-logo.svg";
import loading from "../commonsSVG/loadingDots.gif";
import "./Splash.css";

const Splash = ({ setTest }) => {
  let history = useHistory();
  // const userDispatch = useUserDispatch();
  let { userInquiries } = useUserState();
  // getInquiries(userDispatch);
  setTimeout(() => {
    console.log("user inquiries", userInquiries);
    setTest("test");
    history.push("/home");
    // window.location.reload();
    // if (userInquiries !== null) {
    // }
  }, 2600);
  return (
    <div className="splash">
      <img
        src={AnybodyLogo}
        style={{ width: "90%", height: "100vh", marginRight: "25px" }}
      ></img>
    </div>
  );
};
export default Splash;
