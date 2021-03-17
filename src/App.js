import "./App.css";
import Test from "./components/Test/Test";
import { refreshUserByToken } from "./contexts/actions";
import { UserStateProvider, useUserDispatch, useUserState } from "./contexts/context";
function App() {
  
  return (
    <UserStateProvider>
      <div className="App">
        <Test />
      </div>
    </UserStateProvider>
  );
}

export default App;
