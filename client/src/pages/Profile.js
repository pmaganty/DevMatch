import React from "react";
import Header from "../components/Header";
import {useStoreContext} from "../utils/GlobalState";
import API from "../utils/API";

function Profile() {
  return (
    <div>
    <Header />
    <h1>PROFILE PAGE</h1>
    </div>
  );
}

export default Profile;