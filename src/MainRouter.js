import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "./components/Home/Home";
import LoginRegister from "./components/Login/LoginRegister";
import ProfileView from "./components/ProfileView/ProfileView";
import SearchForExpert from "./components/SearchForExpert/SearchForExpert";
import MeetingArrangment from "./components/MeetingArrangment/MeetingArrangment";
import QuestionScreen from "./components/RequestStatusWindow/QuestionScreen";
// import InputLabelWithIcon from "./RequestStatusWindow/InputLabelWithIcon";
import UserProfileEdit from "./components/ProfileEdit/UserProfileEdit";
import { useUserState } from "../src/contexts/context";
import MoreMenu from "./components/MoreMenu/MoreMenu";
const MainRouter = () => {
  export default () => {
    const userState = useUserState();
    return (
      <Router>
        <Switch>
          <Route path="/question-screen">
            <QuestionScreen />
          </Route>
          <Route path="/more-menu">
            <MoreMenu />
          </Route>
          <Route path="/question-screen">
            <QuestionScreen />
          </Route>
          <Route path="/profile/edit">
            <UserProfileEdit />
          </Route>
          <Route path="/profile">
            <ProfileView />
          </Route>
          <Route path="/login">
            <LoginRegister />
          </Route>
          <Route path="/meeting-arrangment">
            <MeetingArrangment />
          </Route>
          <Route path="/search-for-expert">
            <SearchForExpert />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            {userState.user !== null ? (
              <Home />
            ) : (
              <Redirect to={{ pathname: "/login" }} />
            )}
          </Route>
        </Switch>
      </Router>
    );
  };
};

export default MainRouter;
