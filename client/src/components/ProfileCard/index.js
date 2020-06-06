import React, {useState} from "react";
import "./style.css";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


function ProfileCard ({ name, skills, description, email, phone, Button, id, image }) {
  const [fallBackImg, setFallBackImg] = useState(undefined);

  const attemptToRenderOriginalImage = () => {
    if(!image || image === "") {
      return signalFallBackImage();
    }
    
    return image;
  }
  const signalFallBackImage = () => {
      setFallBackImg("https://u.o0bc.com/avatars/stock/_no-user-image.gif");
  }

    return (
      <ListItem>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            <h3 className="font-italic">{name}</h3>
          </Col>
          <Col size="md-4">
            <div className="btn-container">
                <Button />
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <div id="skillListDiv" className="row">
                {skills.map(skill => (
                    <p key={skill} className="eachSkill">{skill}</p>
                ))}
            </div>
          </Col>
        </Row>
        <Row>
            <Col size="12 sm-4 md-2">
            { !fallBackImg ? 
              <img className="img-thumbnail img-fluid w-75" id="userImage" src={attemptToRenderOriginalImage()} onError={signalFallBackImage} alt="profile"></img> : 
              <img id="userImage" src={fallBackImg} alt="userImg"></img>
            }
          </Col>
        </Row>
        <Row>
            <Col size="12 sm-8 md-10">
            <p>{description}</p>
            </Col>
        </Row>
      </ListItem>
    );
  }
  
  export default ProfileCard;