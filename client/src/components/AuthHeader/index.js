import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { useAuth0 } from "../../react-auth0-spa"; //ADDED FOR AUTH
import Header from "../Header";
import { useHistory } from "react-router-dom";

const AuthHeader = () => {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); //ADDED FOR AUTH

  const { user } = useAuth0(); //ADDED FOR AUTH

  let historyHook = useHistory();

  //const [state, dispatch] = useStoreContext();
  const [state, dispatch] = useStoreContext();
  

  const getProfile = async () => {
    if (user) {
      console.log(user.email);
      let profile = await API.getProfileInfo(user.email);
      console.log(profile);
      if (!profile.data) {
        console.log("PROFILE IS NULL");
        historyHook.push("/new");
      } else {
        dispatch({type: "SAVE_CURRENT_USER", user: profile.data});
        historyHook.push("/search");
      }
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

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
