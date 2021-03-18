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
// import ChooseMeetingSchedule from "./ChooseMeetingSchedule/ChooseMeetingSchedule";
import { useUserDispatch, useUserState } from "../contexts/context";
import MeetingScheduled from "./MeetingScheduled/MeetingScheduled";
import Test from "./Test/Test";
import MoreMenu from "./MoreMenu/MoreMenu";
import { useEffect } from "react";
import { refreshUserByToken } from "../contexts/actions";

const MainRouter = () => {
  const userState = useUserState();
  const userDispatch = useUserDispatch();
  useEffect(() => {
    console.log("userState", userState);
    if (userState.user == null) {
      refreshUserByToken(userDispatch);
    }
  });

  return (
    <Router>
      <Switch>
        {/* <Route path="/choose-meeting-schedule">
          <ChooseMeetingSchedule />
        </Route> */}
        <Route path="/test">
          <Test />
        </Route>
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
          {!userState.user ? (
            <LoginRegister />
          ) : (
            <Redirect to={{ pathname: "/" }} />
          )}
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
          {userState.user ? <Home /> : <Redirect to={{ pathname: "/login" }} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
