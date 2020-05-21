import React from "react";
import Header from "../components/Header";
import {useStoreContext} from "../utils/GlobalState";
import API from "../utils/API";
import AuthHeader from "../components/AuthHeader";

function Collaborators() {
  return (
    <div>
    {/* <Header /> */}
    <AuthHeader />
    <h1>COLLABORATORS PAGE</h1>
    </div>
  );
}

export default Collaborators;