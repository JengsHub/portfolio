import "./App.css";
import TopAppBar from "./pages/TopAppBar";
import { BrowserRouter as Router } from "react-router-dom";
import MetaTags from "react-meta-tags";

function App() {
  return (
    <div>
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
      <Router>
        <TopAppBar />
      </Router>
    </div>
  );
}

export default App;
