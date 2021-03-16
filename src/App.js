import "./App.css";
import Inquiry from "./components/Inquiry/Inquiry";
import logo from "./logo.svg";
import "./App.css";
import MyRouter from "./components/MyRouter/MyRouter";
import Home from "./components/Home/Home";
import RequestStatus from "./components/RequestStatusWindow/RequestStatus";
import Test from "./components/Test/Test";
import QuestionScreen from "./components/RequestStatusWindow/QuestionScreen";
function App() {
  return (
    <div className="App">
      <QuestionScreen
        questionText=" בכמה מילים, מה האתגר שלך."
        labelText="טקסט למטה"
      />
    </div>
  );
}

export default App;
