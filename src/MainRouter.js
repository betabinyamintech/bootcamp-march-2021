import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "./components/Home/Home";
import { useUserState } from "./contexts/UserContext";
import LoginRegister from "./components/Login/LoginRegister";

export default () => {
  const [user, setUser] = useUserState();
  return (
    <Router>
      <Switch>
        <Route path="/">
          {user ? <Home /> : <Redirect to={{ pathname: "/login" }} />}
        </Route>
        <Route path="/login">
          <LoginRegister />
        </Route>
      </Switch>
    </Router>
  );
};
