import React from "react";
import "./style.css";


function ProfileInfo ({skills, description, phone, email}) {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="row">
                    <div id="profileDiv" className="col-sm-12 col-md-12 col-lg-12">
                        <p id="profileText">My Profile</p>
                        <div className="about-border"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div id="skillDiv" className="title row">
                            <p className="titleText">Skills</p>
                        </div>
                        <div id="skillListDiv" className="row">
                            {skills.map(skill => (
                                <p key={email} className="eachSkill">{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className=" title row">
                            <p className="titleText">About Me</p>
                        </div>
                        <div className="row">
                            <p id="aboutInfo">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row title">
                            <p className="titleText">Contact Info</p>
                        </div>
                        <div className="row">
                                <p className="contactInfo">Phone: {phone}</p>
                        </div>
                        <div className="row">
                                <p className="contactInfo">Email: {email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ProfileInfo;