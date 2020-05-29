import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import userPic from './images/6133ed5e3f55dc74643a535641ceeac8' // relative path to image 

const ProfileHeader = () => {

    const [state, dispatch] = useStoreContext();

    console.log(state);

    const imageSrc = state.curUser.image;
    console.log(imageSrc);

    // const userImg = require(imageSrc);

    return (  
    <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-12 col-md-12" >
            <div className="box whole row justify-content-center">
                {/* <img src={userImg} alt="userImg"></img> */}
                <div id="textDiv" className="helloText col-sm-6 col-md-6 col-lg-6">
                    <p id="text">Hello, {state.curUser.name}!</p>
                </div>
            </div>
        </div>
    </div>
    );
}

  
  export default ProfileHeader;