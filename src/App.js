import "./App.css";
import Test from "./components/Test/Test";
import { UserStateProvider } from "./contexts/context";
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
