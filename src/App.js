import "./App.css";
import Test from "./components/Test/Test";
import { GlobalStateProvider } from "./contexts/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <div className="App">
          <Test />
        </div>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
