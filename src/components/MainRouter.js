import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "./Home/Home";
import LoginRegister from "./Login/LoginRegister";
import ProfileView from "./ProfileView/ProfileView";
import SearchForExpert from "./SearchForExpert/SearchForExpert";
import MeetingArrangment from "./MeetingArrangment/MeetingArrangment";
import NewInquiry from "./RequestStatusWindow/NewInquiry";
// import ChooseMeetingSchedule from "./ChooseMeetingSchedule/ChooseMeetingSchedule";
import { useUserDispatch, useUserState } from "../contexts/context";
import MeetingScheduled from "./MeetingScheduled/MeetingScheduled";
import Test from "./Test/Test";
import MoreMenu from "./MoreMenu/MoreMenu";
import { useEffect } from "react";
import { getUser } from "../contexts/actions";
import UserProfileEdit from "./ProfileEdit/UserProfileEdit";
import QuestionBeforeMeeting from "./QuestionsBeforeMeeting/QuestionsBeforeMeeting";

const MainRouter = () => {
  const userState = useUserState();
  console.log("main router user", userState);
  const userDispatch = useUserDispatch();
  useEffect(() => {
    if (userState.user == null) {
      if (!localStorage.getItem("currentUser")) return;
      getUser(userDispatch);
    }
  }, [userDispatch]);
  return (
    <Router>
      {userState.user && (
        <Switch>
          <Route path="/inquiry/new">
            <NewInquiry />
          </Route>
          <Route path="/questionsBeforeMeeting">
            <QuestionBeforeMeeting />
          </Route>
          <Route path="/profile/edit">
            <UserProfileEdit />
          </Route>
          <Route path="/profile">
            <ProfileView />
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
            <Home />
          </Route>
        </Switch>
      )}
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/login">
          {!userState.user ? (
            <LoginRegister />
          ) : (
            <Redirect to={{ pathname: "/" }} />
          )}
        </Route>
        <Route path="/register">
          {!userState.user ? (
            <LoginRegister />
          ) : (
            <Redirect to={{ pathname: "/" }} />
          )}
        </Route>
        <Route path="/">
          {!userState.user && <Redirect to={{ pathname: "/login" }} />}
        </Route>
      </Switch>
    </Router>
  );
};
export default MainRouter;
