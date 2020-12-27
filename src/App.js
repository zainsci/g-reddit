import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <NavBar />
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
