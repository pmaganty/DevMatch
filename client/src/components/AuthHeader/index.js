import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { useAuth0 } from "../../react-auth0-spa"; //ADDED FOR AUTH
import Header from "../Header";
import { useHistory } from "react-router-dom";
import logo from './logo.png' // relative path to image 

const AuthHeader = () => {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); //ADDED FOR AUTH

  return (
    <div className="img-fluid" id="mainPage"> {/*DIV ADDED FOR AUTH*/}     
    
      {/* {isAuthenticated && (
      <span>
          <Header />
      </span>
      )} */}

        <div id="centerDiv" className="row justify-content-center">
          <div className="card text-center col-sm-12 col-md-6 col-lg-6">
            <div className="card-body">
              <div className="card-title"><img id="image" src={logo}></img></div>
              <p className="card-text">Do you have an Idea, but lack the expertise? This application
                  will allow you to search for and work with other Developers who have the skills you're
                  looking for. You'll be added into a database alongside many other developers so you can 
                  create the perfect team that encompasses everything you need to make your dream project 
                  a reality!</p>
              {!isAuthenticated && (
                <button className="btn btn-primary" onClick={() => loginWithRedirect({})}>Log in</button>
              )}
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default AuthHeader;
