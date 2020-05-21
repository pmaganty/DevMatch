import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


function ProfileInfo ({skills, description, phone, email}) {
    return (
        <div>
            <div><h2>My Profile</h2></div>
            <div>
                <div><p>Skills</p></div>
                <div><p>{skills}</p></div>
            </div>
            <div>
                <div><p>About Me</p></div>
                <div><p>{description}</p></div>
            </div>
            <div>
                <div><p>Contact Info</p></div>
                <div><p>{phone}</p></div>
                <div><p>{email}</p></div>
            </div>
        </div>
    );
  }
  
  export default ProfileInfo;