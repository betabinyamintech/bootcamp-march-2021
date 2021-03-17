function InputField({ onChange, label, required, ...props }) {
  return (
    <div className="input-div">
      <label>
        <input
          placeholder=" "
          onChange={onChange}
          {...props}
          required={required}
        ></input>
        <span>{label}</span>
      </label>
    </div>
  );
}

export default InputField;
