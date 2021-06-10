import { Link } from "react-router-dom";
import "../Common.css";
import backButtonIcon from "../../commonsSVG/back-button.svg";
function PreviousButton({ onClick, label, linkTo, ...props }) {
  return (
    <Link to={linkTo} onClick={onClick}>
      <div className="back-button">
        <span className="previous-icon">
          <img src={backButtonIcon}></img>
        </span>
        {label}
      </div>
    </Link>
  );
}
export default PreviousButton;
// <div className="input-div">
//   <label>
//     <input placeholder=" " onClick={onClick} {...props}></input>
//     <span>{label}</span>
//   </label>
// </div>
