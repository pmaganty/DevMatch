import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Collaborators from "./pages/Collaborators";
import CreateAccount from "./pages/CreateAccount";
import { StoreProvider } from "./utils/GlobalState";
import { Auth0Context } from './contexts/auth0-context'; 


 
function App() {

  const auth0 = useContext(Auth0Context); 
  
  return (
    <Router>
      <div>
          <div className="hero is-info is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1>Click Below!</h1>
              <button onClick={auth0.loginWithRedirect} className="button is-danger">
                Login
              </button>
            </div>
          </div>
        </div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/new" component={CreateAccount} />
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
