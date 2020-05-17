import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


function ProfileCard ({ name, skills, description, email, phone }) {
    return (
      <ListItem>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            <h3 className="font-italic">{name}</h3>
          </Col>
          <Col size="md-4">
            <div className="btn-container">
                Collaborate
              {/* <Button /> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <p className="font-italic small">{skills}</p>
          </Col>
        </Row>
        <Row>
          <Col size="12 sm-4 md-2">
            <img className="img-thumbnail img-fluid w-100" src="" alt={name} />
          </Col>
          <Col size="12 sm-8 md-10">
            <p>{description}</p>
          </Col>
          <Col size="12 sm-8 md-10">
            <p>{email}</p>
          </Col>
          <Col size="12 sm-8 md-10">
            <p>{phone}</p>
          </Col>
  
        </Row>
      </ListItem>
    );
  }
  
  export default ProfileCard;