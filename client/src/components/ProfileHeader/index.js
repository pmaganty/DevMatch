import React, {useState} from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import userPic from './images/6133ed5e3f55dc74643a535641ceeac8' // relative path to image 

const ProfileHeader = () => {

    const [fallBackImg, setFallBackImg] = useState();

    const [state, dispatch] = useStoreContext();

    console.log(state);

    const imageSrc = state.curUser.image;
    console.log(imageSrc);

    // const userImg = require(imageSrc);

    const fallback = () => {
        setFallBackImg("https://u.o0bc.com/avatars/stock/_no-user-image.gif");
    }
    
    return (  
    <div className="row whole">
        <div id="textDiv" className="helloText col-sm-6 col-md-6 col-lg-6">
            <div id="imageDiv" className="row justify-content-center">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    { !fallBackImg ? <img id="userImage" src={imageSrc} onError={fallback} alt="userImg"></img> : <img id="userImage" src={fallBackImg} alt="userImg"></img>}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div id="text">Hello, {state.curUser.name}!</div>
                </div>
            </div>
        </div>
    </div>
    );
}

  
  export default ProfileHeader;