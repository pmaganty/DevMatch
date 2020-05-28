import React from "react";
import "./style.css";


function Collaborators ({collaborators}) {
    return (

        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="row">
                    <div id="collabDiv" className="col-sm-12 col-md-12 col-lg-12">
                        <p id="collabText">Collaborators</p>
                        <div className="about-border"></div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {collaborators.map(collab => (
                        <div id="eachCollab" className="col-sm-11 col-md-11 col-lg-11">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="row">
                                    <p className="nameTxt">{collab.name}</p>
                                </div>
                                <div id="skillListDiv" className="row">
                                    {collab.skills.map(skill => (
                                        <p key={collab.email} className="eachSkill">{skill}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>          
            </div>
        </div>
    );
  }
  
  export default Collaborators;