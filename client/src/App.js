import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Collaborators from "./pages/Collaborators"
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/collaborators" component={Collaborators} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
