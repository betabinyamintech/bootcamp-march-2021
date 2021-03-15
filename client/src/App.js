import "./App.css";
import Inquiry from "./components/Inquiry/Inquiry";
import logo from "./logo.svg";
import "./App.css";
import MyRouter from "./components/MyRouter/MyRouter";
import Home from "./components/Home/Home";
import RequestStatus from "./components/RequestStatusWindow/RequestStatus";
function App() {
  
  return (
    <div className="App">
      <RequestStatus status="opened" name="לורם איפסום דולור" />
    </div>
  );
}

export default App;