import "./Avatar.css";

const Avatar = (props) => {
  // const avatarImg = useUserState().user.avatarImg;
  return <img src={props.Avatar?props.Avatar:"https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"} {...props} className="imgAvatar" alt="" />;

};
export default Avatar;
