import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import ProfileInfo from "../ProfileInfo";
import Collaborators from "../Collaborators";


function ProfileContent () {

    const [state, dispatch] = useStoreContext();

    console.log(state.curUser.collaborators);

    return (
        <div className="row justify-content-center">
            <div className="col-sm-11 col-md-11 col-lg-11">
                <div id="whole" className="row justify-content-center">
                    <div  className="col-sm-12 col-md-8 col-lg-8">
                        <div id="profileDiv" className="row justify-content-center">
                            <div id="profileContent" className="col-sm-12 col-md-12 col-lg-12">
                                <ProfileInfo 
                                    description={state.curUser.description}
                                    skills={state.curUser.skills}
                                    email={state.curUser.email}
                                    phone={state.curUser.phone}
                                    key={state.curUser.email}
                                />
                            </div>
                        </div>
                    </div>
                    <div  className="col-sm-12 col-md-4 col-lg-4">
                        <div id="collabDiv" className="row justify-content-center">
                            <div className="col-sm-12 col-md-12 col-lg-12" id="collabContent">
                                <Collaborators 
                                    key={state.curUser.email}
                                    collaborators={state.curUser.collaborators}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ProfileContent;