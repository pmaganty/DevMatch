import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa"; //ADDED FOR AUTH

const Header = () => {

  const { isAuthenticated, logout } = useAuth0(); //ADDED FOR AUTH

  return (
    <div>
      

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Dev-Match</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  {/* <a className="nav-link" href="/profile">Profile</a> */}
                  <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                  {/* <a className="nav-link" href="/search">Search</a> */}
                  <Link className="nav-link" to="/search">Search</Link>
              </li>
              <li className="nav-item">
                  {/* <a className="nav-link" href="/collaborators">Collaborators</a> */}
                  <Link className="nav-link" to="/collaborators">Collaborators</Link>
              </li>
              <li className="nav-item">
                  {/* <a className="nav-link" href="/collaborators">Collaborators</a> */}
                  {isAuthenticated && <button className="nav-link" onClick={() => logout({returnTo: window.location.origin})}>Log out</button>}
              </li>
            </ul>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Header;
