import "./Button.css";

function Button({ isIcon, ...props }) {
  return (
    <button
      {...props}
      className={
        "common-button" + (props.className ? " " + props.className : "")
      }
    />
  );
}
export default Button;
