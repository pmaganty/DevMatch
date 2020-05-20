import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Collaborators from "./pages/Collaborators";
import CreateAccount from "./pages/CreateAccount";
import { StoreProvider } from "./utils/GlobalState";
import { useAuth0 } from "./react-auth0-spa";
import Header from "./components/Header";
import history from "./utils/history"; //FOR AUTH
import PrivateRoute from "./components/PrivateRoute"; //FOR AUTH
import AuthHeader from "./components/AuthHeader";
import API from "./utils/API";


function App() {

  const { loading, user } = useAuth0(); //ADDED FOR AUTH


  if (loading) { //ADDED FOR AUTH
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
    <Router history={history}>
        <StoreProvider>
        <header>
          <AuthHeader />
        </header>
          <Switch>
            <Route path="/" exact />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/new" component={CreateAccount} />
            <PrivateRoute exact path="/search" component={Search} />
          </Switch> 
        </StoreProvider>
    </Router>
    </div>
  );
}

export default App;
