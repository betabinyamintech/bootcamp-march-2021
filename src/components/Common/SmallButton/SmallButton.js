import "./SmallButton.css";
import arrowLeft from "../../commonsSVG/arrow-left.svg";
function SmallButton({ isIcon, label, ...props }) {
  return (
    <button
      {...props}
      className={
        "small-button" + (props.className ? " " + props.className : "")
      }
    >
      {props.children}
      <img src={arrowLeft} style={{ marginRight: "10px" }}></img>
    </button>
  );
}
export default SmallButton;
