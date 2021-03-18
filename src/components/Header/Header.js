import "./Header.css";
import React from "react";
import Avatar from "../Avatar/Avatar";
import InputQuestion from "../Common/InputQuestion/InputQuestion";
import { Link, useHistory } from "react-router-dom";
import { useUserState } from "../../contexts/context";
const Header = ({ numExperts = 167, isCommunityManager }) => {
  const user = useUserState().user;
  const { name } = user;
  let history = useHistory();
  return (
    <div className="headerBox">
      <div>
        <span
          className="profileSpan"
          onClick={() => history.push("/more-menu")}
        >
          <svg
            width="16"
            height="5"
            viewBox="0 0 16 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.539062 1.02734C0.928385 0.638021 1.3776 0.443359 1.88672 0.443359C2.42578 0.443359 2.875 0.638021 3.23438 1.02734C3.6237 1.38672 3.81836 1.83594 3.81836 2.375C3.81836 2.91406 3.6237 3.37826 3.23438 3.76758C2.875 4.12695 2.42578 4.30664 1.88672 4.30664C1.3776 4.30664 0.928385 4.12695 0.539062 3.76758C0.179688 3.37826 0 2.91406 0 2.375C0 1.83594 0.179688 1.38672 0.539062 1.02734ZM12.0391 1.02734C12.4284 0.638021 12.8776 0.443359 13.3867 0.443359C13.9258 0.443359 14.375 0.638021 14.7344 1.02734C15.1237 1.38672 15.3184 1.83594 15.3184 2.375C15.3184 2.91406 15.1237 3.37826 14.7344 3.76758C14.375 4.12695 13.9258 4.30664 13.3867 4.30664C12.8776 4.30664 12.4284 4.12695 12.0391 3.76758C11.6797 3.37826 11.5 2.91406 11.5 2.375C11.5 1.83594 11.6797 1.38672 12.0391 1.02734ZM6.28906 1.02734C6.67839 0.638021 7.1276 0.443359 7.63672 0.443359C8.17578 0.443359 8.625 0.638021 8.98438 1.02734C9.3737 1.38672 9.56836 1.83594 9.56836 2.375C9.56836 2.91406 9.3737 3.37826 8.98438 3.76758C8.625 4.12695 8.17578 4.30664 7.63672 4.30664C7.1276 4.30664 6.67839 4.12695 6.28906 3.76758C5.92969 3.37826 5.75 2.91406 5.75 2.375C5.75 1.83594 5.92969 1.38672 6.28906 1.02734Z"
              fill="#414141"
            />
          </svg>
        </span>
        <Avatar />
      </div>
      <div className="profileMessage">
        {name}, {numExperts} מומחים כאן בקהילת מטה בנימין ישמחו לעזור לך
      </div>
      {!isCommunityManager && (
        <div>
          {/* <Link to="/question-screen"> */}
          <InputQuestion />
          {/* </Link> */}
        </div>
      )}
    </div>
  );
};
export default Header;
