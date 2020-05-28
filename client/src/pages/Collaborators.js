import React from "react";
import Header from "../components/Header";
import Collabs from "../components/Collabs";
import Requests from "../components/Requests";
import Requested from "../components/Requested";

function Collaborators() {
  return (
    <div>
    <Header />
    <Collabs />
    <Requests />
    <Requested />
    </div>
  );
}

export default Collaborators;