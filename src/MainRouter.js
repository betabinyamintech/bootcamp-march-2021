import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "./components/Home/Home";
import LoginRegister from "./components/Login/LoginRegister";
import { useUserState } from "./contexts/context";

export default () => {
  const user = useUserState().user;
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
