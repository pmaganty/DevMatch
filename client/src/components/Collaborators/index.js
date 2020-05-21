import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


function Collaborators ({collaborators}) {
    return (

        <div>
            <div><h2>Collaborators</h2></div>
             {collaborators.map(collab => (
                <ul>
                    <li>{collab.name}</li>
                    <li>{collab.skills}</li>
                    <li>{collab.email}</li>
                    <li>{collab.phone}</li>
                </ul>
            ))}           
        </div>
    );
  }
  
  export default Collaborators;