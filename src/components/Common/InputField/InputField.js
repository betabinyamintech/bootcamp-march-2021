function InputField({ onChange, label, required, warning, height, ...props }) {
  return (
    <div className="input-div">
      <label>
        <p>{label}</p>
        <input
          autocomplete="off"
          placeholder=" "
          onChange={(e) => onChange(e, this)}
          {...props}
          required={required}
        ></input>
        {warning && <div style={{ color: "red" }}>{warning}</div>}
        {/* <span>{label}</span> */}
      </label>
    </div>
  );
}

export default InputField;
