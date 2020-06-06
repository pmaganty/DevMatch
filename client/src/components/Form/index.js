import React, {useRef} from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa"; //ADDED FOR AUTH

const Form = () => {

    const [state, dispatch] = useStoreContext();

    const { user } = useAuth0(); //ADDED FOR AUTH

    let historyHook = useHistory();

    const nameRef = useRef();
    const descRef = useRef();
    const skillRef = useRef();
    const phoneRef = useRef();

    let imageUrl;

    const addNew = async (e) => {
      e.preventDefault();

      const skillArr = skillRef.current.value.split(",");
      for (let i = 0; i < skillArr.length; i++) {
        skillArr[i] = skillArr[i].trim().toLowerCase();
      }

      if (!imageUrl) {
        imageUrl = "https://u.o0bc.com/avatars/stock/_no-user-image.gif";
      }

      const formData = {
        name: nameRef.current.value,
        description: descRef.current.value,
        email: user.email,
        skills: skillArr,
        phone: phoneRef.current.value,
        image: imageUrl
      };

      const res = await API.saveProfile(formData);
      console.log(res.data); 
      dispatch({type: "ADD_PROFILE", newProfile: res.data});

      console.log(user.email);
      let profile = await API.getProfileInfo(user.email);
      console.log(profile);
      dispatch({type: "SAVE_CURRENT_USER", user: profile.data});

      historyHook.push("/search");
    };

    const onChangeHandler = async event => {
      event.preventDefault();
      console.log(event.target.files[0]);
      try {
        const response =  await API.uploadImage(event.target.files[0]);
        console.log(response);
        imageUrl = response.data.friendlyUrl;
      } catch (err) {
        console.log(err);
      }
    }

    return (  
    <div className="row justify-content-center">
    <div className="form-main col-sm-10 col-lg-10 col-md-10" >
        <form>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" aria-describedby="emailHelp" placeholder="John Smith" ref={nameRef}/>
        </div>
  
        <div className="form-group">
          <label>Description</label>
          <input className="form-control"  placeholder="Tell us about yourself." ref={descRef}/>
        </div>
  
        <div className="form-group">
          <label>Skills</label>
          <input className="form-control"  placeholder="i.e. JavaScript, React, HTML, etc." ref={skillRef}/>
        </div>
  
        <div className="form-group">
          <label>Phone Number</label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="512-555-3698" ref={phoneRef}/>
        </div>

        <input type="file" accept="image/*" name="photo" onChange={event => onChangeHandler(event)}></input>
  
        <button type="submit" className="btn btn-primary" onClick={e => addNew(e)}>Submit</button>
      </form>
    </div>
    </div>
    );
}

  
  export default Form;