import { UserStateProvider } from "./contexts/context";
import "./App.css";
import MainRouter from "./components/MainRouter";

function App() {
  return (
    <UserStateProvider>
      <div className="App">
        <MainRouter />
      </div>
    </UserStateProvider>
  );
}

export default App;
