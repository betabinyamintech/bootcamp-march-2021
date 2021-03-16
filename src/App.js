import "./App.css";
import Test from "./components/Test/Test";
import { GlobalStateProvider } from "./contexts/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <QuestionScreen
        questionText=" בכמה מילים, מה האתגר שלך."
        labelText="אי אפשר בלי זה, מצטערת"
      />
    </div>
=======
    <GlobalStateProvider>
      <Router>
        <div className="App">
          <Test />
        </div>
      </Router>
    </GlobalStateProvider>
>>>>>>> 77cd043678061bfd9da9602f5c98341a52d4093e
  );
}

export default App;
