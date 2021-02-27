import "./App.css";
import TopAppBar from "./pages/TopAppBar"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopAppBar/>
    </Router>
  );
}

export default App;
