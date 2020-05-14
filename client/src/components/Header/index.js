import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">DevMatch</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" id="navlist">
            <li className="nav-item">
            <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                to="/login"
              >
                Logout
            </Link>
            </li>
            <li className="nav-item">
            <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
                to="/profile"
              >
                Profile
            </Link>
            </li>
            <li className="nav-item">
            <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                to="/search"
              >
                Search
            </Link>
            </li>
            <li className="nav-item">
                <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/collaborators" ? "nav-link active" : "nav-link"}
                to="/collaborators"
              >
                Collaborators
            </Link>
            </li>
            </ul>
        </div>
    </nav>
  );
};

export default Header;
