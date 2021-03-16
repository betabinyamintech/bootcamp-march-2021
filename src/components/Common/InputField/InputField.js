import './Style.css'
export default ({onChange, label, ...props}) => (<div className="input-div">
<label>
  <input
    placeholder=""
    onChange={onChange}
    {...props}
  ></input>
  <span>{label}</span>
</label>
</div>)