import "./BrightButton.css";

function BrightButton({ isIcon, ...props }) {
  return (
    <button
      {...props}
      className={
        "bright-button" + (props.className ? " " + props.className : "")
      }
    />
  );
}
export default BrightButton;
