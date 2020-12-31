import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Main />
      </Router>
    </div>
  );
}

export default App;
