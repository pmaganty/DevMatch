import React, {useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import ProfileInfo from "../ProfileInfo";
import Collaborators from "../Collaborators";
import { useAuth0 } from "../../react-auth0-spa"; //FOR AUTH


function ProfileContent () {

    const { user } = useAuth0();
    let userInfo;

    useEffect(async () => {
        console.log(user.email);
        let profile = await API.getProfileInfo(user.email);
        console.log(profile.data);
        userInfo = profile.data;
        console.log(userInfo);
    }, []);

    return (
        <div id="whole" className="row">
            <div className="col-sm-11 col-md-11 col-lg-11">
                <div className="row justify-content-center">
                    <div id="profileDiv" className="col-sm-12 col-md-8 col-lg-8">
                        <div id="profileContent">
                            <ProfileInfo 
                                // description={userInfo.description}
                                // skills={userInfo.skills}
                                // email={userInfo.email}
                                // phone={userInfo.phone}
                                // key={userInfo.email}
                            />
                        </div>
                    </div>
                    <div id="collabDiv" className="col-sm-12 col-md-4 col-lg-4">
                        <div id="collabContent">
                            <Collaborators />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ProfileContent;