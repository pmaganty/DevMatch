import React, {useRef} from "react";
import "./style.css";
import { Link } from "react-router-dom";
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
    const emailRef = useRef();
    const phoneRef = useRef();

    const addNew = async (e) => {
      e.preventDefault();

      const skillArr = skillRef.current.value.split(",");
      for (let i = 0; i < skillArr.length; i++) {
        skillArr[i] = skillArr[i].trim().toLowerCase();
      }

      const formData = {
        name: nameRef.current.value,
        description: descRef.current.value,
        email: emailRef.current.value,
        skills: skillArr,
        phone: phoneRef.current.value
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

    return (  
    <div className="row justify-content-center">
    <div className="form-main col-sm-10 col-lg-10 col-md-10" >
        <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input className="form-control" aria-describedby="emailHelp" placeholder="John Smith" ref={nameRef}/>
        </div>
  
        <div className="form-group">
          <label for="exampleInputPassword1">Description</label>
          <input className="form-control"  placeholder="Tell us about yourself." ref={descRef}/>
        </div>
  
        <div className="form-group">
          <label for="exampleInputPassword1">Skills</label>
          <input className="form-control"  placeholder="i.e. JavaScript, React, HTML, etc." ref={skillRef}/>
        </div>
  
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input className="form-control" aria-describedby="emailHelp" placeholder="Enter email" ref={emailRef}/>
        </div>
  
        <div className="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="512-555-3698" ref={phoneRef}/>
        </div>
  
        <button type="submit" className="btn btn-primary" onClick={e => addNew(e)}>Submit</button>
      </form>
    </div>
    </div>
    );
}

  
  export default Form;