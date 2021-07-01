import { useUserState } from "../../contexts/context";
import "./Avatar.css";

let style = {
  borderRadius: "50%",
  height: "70px",
  width: "70px",
  float: "right",
  margin: "10px",
};

const Avatar = ({ avatar, borderRadius, height, width, float, margin }) => {
  console.log(avatar);
  return (
    <img
      src={
        avatar
          ? avatar
          : "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
      }
      // className="imgAvatar"
      alt=""
      style={{
        borderRadius: borderRadius ? borderRadius : style.borderRadius,
        height: height ? height : style.height,
        width: width ? width : style.width,
        float: float ? float : style.float,
        margin: margin ? margin : style.margin,
      }}
    />
  );
};
export default Avatar;
