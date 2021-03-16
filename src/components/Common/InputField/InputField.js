import "./Style.css";

function InputField({ onChange, label, ...props }) {
  return (
    <div className="input-div">
      <label>
        <input placeholder=" " onChange={onChange} {...props}></input>
        <span>{label}</span>
      </label>
    </div>
  );
}

export default InputField;
