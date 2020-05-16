import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { useAuth0 } from "../../react-auth0-spa"; //ADDED FOR AUTH
import Header from "../Header";

const AuthHeader = () => {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); //ADDED FOR AUTH

  return (
    <div> {/*DIV ADDED FOR AUTH*/}     
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    
      {isAuthenticated && (
      <span>
          <Header />
      </span>
      )}
    
    </div>
  );
};

export default AuthHeader;
