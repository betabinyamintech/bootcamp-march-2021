import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "./components/Home/Home";
import { useUserState } from "./contexts/UserContext";
import LoginRegister from "./components/Login/LoginRegister";
import ProfileEdit from "./components/ProfileEdit/UserProfileEdit";
import ProfileView from "./components/ProfileView/ProfileView";

const MainRouter = () => {
  const [user, setUser] = useUserState(true);
  const a = false;
  return (
    <Router>
      <Switch>
        <Route path="/profile/edit">
          <ProfileEdit />
        </Route>
        <Route path="/profile">
          <ProfileView />
        </Route>
        <Route path="/login">
          <LoginRegister />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          {a ? <Home /> : <Redirect to={{ pathname: "/login" }} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
