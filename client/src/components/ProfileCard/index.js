import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const ProfileCard = (props) => {

    return (  
        <div className="row">
            {/* <div id="card" className="col-sm-10 col-md-10 col-lg-10">
                <div className="row">
                    <div className="col-sm-10 col-md-10 col-lg-10">

                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <button>Collaborate</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h2>{props.name}</h2>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

  
  export default ProfileCard;