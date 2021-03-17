import { Route, Router } from "react-router";
import "./App.css";
import LoginRegister from "./components/Login/LoginRegister";
// import Test from "./components/Test/Test";
import { GlobalStateProvider } from "./contexts/UserContext";
import MainRouter from "./MainRouter";
function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        {/* <Test /> */}
        <MainRouter />
      </div>
      {/* <Router>
        <switch>
          <Route path="/login">
            <LoginRegister />
          </Route>
        </switch>
      </Router> */}
    </GlobalStateProvider>
  );
}

export default App;
