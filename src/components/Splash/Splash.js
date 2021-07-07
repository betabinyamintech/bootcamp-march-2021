import { useHistory } from "react-router";
import { getInquiries } from "../../contexts/actions";
import { useUserDispatch, useUserState } from "../../contexts/context";
import AnybodyLogo from "../commonsSVG/anybody-logo.svg";
import spinner from "../commonsSVG/spinner.svg";
import loading from "../commonsSVG/loadingDots.gif";
import "./Splash.css";

const Splash = ({ setTest }) => {
  let history = useHistory();
  setTimeout(() => {
    setTest("test");
  }, 2100);
  return (
    <div className="splash">
      <img
        src={AnybodyLogo}
        style={{ width: "90%", height: "100vh", marginRight: "18px" }}
      ></img>
    </div>
  );
};
export default Splash;
