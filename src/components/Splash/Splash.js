import AnybodyLogo from "../commonsSVG/anybody-logo.svg";
import loading from "../commonsSVG/loadingDots.gif";

import "./Splash.css";
const Splash = () => {
  setTimeout(() => {});
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
