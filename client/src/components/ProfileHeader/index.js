import React, {useRef} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const ProfileHeader = () => {

    const [state, dispatch] = useStoreContext();

    return (  
    <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-12 col-md-12" >
            <div  className="whole row justify-content-center">
                <div id="textDiv" className="col-sm-6 col-md-6 col-lg-6">
                    <p id="text">Hello NAME</p>
                </div>
            </div>
        </div>
    </div>
    );
}

  
  export default ProfileHeader;