import "./App.css";
import Test from "./components/Test/Test";
import { GlobalStateProvider } from "./contexts/UserContext";
import MainRouter from "./MainRouter";
function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <Test />
        <MainRouter  />
        </div>
    </GlobalStateProvider>
  );
}

export default App;
