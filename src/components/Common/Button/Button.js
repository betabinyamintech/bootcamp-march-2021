import './Button.css'

function Button(props){
    return <button
    {...props}
    className={"email-button" + (props.className?' '+props.className:'') }
    >
    {props.children}
    </button> 
}
export default Button;