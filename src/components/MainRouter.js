import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "./Home/Home";
import LoginRegister from "./Login/LoginRegister";
import ProfileEdit from "./ProfileEdit/UserProfileEdit";
import ProfileView from "./ProfileView/ProfileView";
import SearchForExpert from "./SearchForExpert/SearchForExpert";
import MeetingArrangment from "./MeetingArrangment/MeetingArrangment";
import QuestionScreen from "./RequestStatusWindow/QuestionScreen";
import { useUserState } from "../contexts/context";
import MeetingScheduled from "./MeetingScheduled/MeetingScheduled";
import MoreMenu from "./MoreMenu/MoreMenu";

const MainRouter = () => {
  const userState = useUserState();
  return (
    <Router>
      <Switch>
        <Route path="/question-screen">
          <QuestionScreen />
        </Route>
        <Route path="/profile/edit">
          <ProfileEdit />
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
        <Route path="/meeting-scheduled">
          <MeetingScheduled />
        </Route>
        <Route path="/more-menu">
          <MoreMenu />
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

export default MainRouter;
