import "./App.css";
import Test from "./components/Test/Test";
import { UserStateProvider } from "./contexts/context";
import MainRouter from "./MainRouter";
function App() {
  return (
    <UserStateProvider>
      <div className="App">
        <Test />
        <MainRouter  />
        </div>
    </UserStateProvider>
  );
}

export default App;
