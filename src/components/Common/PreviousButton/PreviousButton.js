import "./PreviousButton.css";
function PreviousButton({ onClick: onClick, label, ...props }) {
  return (
    <div className="back-button">
      <span className="previous-icon">
        <svg
          style={{ marginTop: "spx" }}
          width="8"
          height="9"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.40625 0L7.40625 6L1.40625 12L0 10.5938L4.59375 6L0 1.40625L1.40625 0Z"
            fill="#606060"
          />
        </svg>
      </span>
      {label}
    </div>
  );
}
export default PreviousButton;
// <div className="input-div">
//   <label>
//     <input placeholder=" " onClick={onClick} {...props}></input>
//     <span>{label}</span>
//   </label>
// </div>
