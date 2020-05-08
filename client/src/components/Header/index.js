import React from "react";
import "./style.css";

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">TEST NAV BAR</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/login">Logout</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/profile">Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/collaborators">Collaborators</a>
            </li>
            </ul>
        </div>
    </nav>
  );
};

export default Header;
