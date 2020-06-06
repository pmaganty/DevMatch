import React, { useEffect } from "react";
import {useStoreContext} from "../utils/GlobalState";
import API from "../utils/API";
import AuthHeader from "../components/AuthHeader";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa"; //ADDED FOR AUTH


function Login() {

  const { user } = useAuth0(); //ADDED FOR AUTH
  const [state, dispatch] = useStoreContext();

  let historyHook = useHistory();

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
    <div>

    <AuthHeader />
    </div>
  );
}

export default Login;