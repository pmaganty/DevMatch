import React from "react";
import "./style.css";
import Requests from "../Requests";
import Requested from "../Requested";
import Collabs from "../Collabs"

const CollabSection = () => {

    return (  
    <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-10">
          <div id="sections" className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <Collabs />
            </div>
          </div>
          <div id="sections" className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <Requests />
            </div>
          </div>
          <div id="sections" className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <Requested />
            </div>
          </div>
        </div>
    </div>
    );
}

  
  export default CollabSection;