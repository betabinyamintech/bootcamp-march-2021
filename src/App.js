import "./App.css";
import Test from "./components/Test/Test";
import QuestionScreen from "./components/RequestStatusWindow/QuestionScreen";
function App() {
  return (
    <div className="App">
      <QuestionScreen
        questionText=" בכמה מילים, מה האתגר שלך."
        labelText="אי אפשר בלי זה, מצטערת"
      />
    </div>
  );
}

export default App;
