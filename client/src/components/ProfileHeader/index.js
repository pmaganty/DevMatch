import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";

const ProfileHeader = () => {

    const [state, dispatch] = useStoreContext();

    console.log(state);

    return (  
    <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-12 col-md-12" >
            <div className="box whole row justify-content-center">
                <div id="textDiv" className="helloText col-sm-6 col-md-6 col-lg-6">
                    <p id="text">Hello, {state.curUser.name}!</p>
                </div>
            </div>
        </div>
    </div>
    );
}

  
  export default ProfileHeader;