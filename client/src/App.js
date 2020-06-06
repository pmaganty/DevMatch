import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Collaborators from "./pages/Collaborators";
import CreateAccount from "./pages/CreateAccount";
import { StoreProvider } from "./utils/GlobalState";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history"; //FOR AUTH
import PrivateRoute from "./components/PrivateRoute"; //FOR AUTH


function App() {

  const { loading } = useAuth0(); //ADDED FOR AUTH


  if (loading) { //ADDED FOR AUTH
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
    <Router history={history}>
        <StoreProvider>
        {/* <header>
          <AuthHeader />
        </header> */}
          <Switch>
            <Route path="/" exact component={Login}/>
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/new" component={CreateAccount} />
            <PrivateRoute exact path="/search" component={Search} />
            <PrivateRoute exact path="/collaborators" component={Collaborators} />
          </Switch> 
        </StoreProvider>
    </Router>
    </div>
  );
}

export default App;
