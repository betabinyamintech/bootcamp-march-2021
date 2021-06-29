import { useUserState } from "../../contexts/context";
import "./Avatar.css";

const Avatar = (props) => {
  console.log(props.avatar);
  return (
    <img
      src={
        props.avatar
          ? props.avatar
          : "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
      }
      {...props}
      className="imgAvatar"
      alt=""
    />
  );
};
export default Avatar;
