import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const Form = () => {
    return (  
    <div className="row justify-content-center">
    <div className="form-main col-sm-10 col-lg-10 col-md-10" >
        <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input className="form-control" aria-describedby="emailHelp" placeholder="John Smith"/>
        </div>
  
        <div className="form-group">
          <label for="exampleInputPassword1">Description</label>
          <textarea className="form-control"  placeholder="Tell us about yourself."/>
        </div>
  
        <div className="form-group">
          <label for="exampleInputPassword1">Skills</label>
          <input className="form-control"  placeholder="i.e. JavaScript, React, HTML, etc."/>
        </div>
  
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
  
        <div className="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="512-555-3698"/>
        </div>
  
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
    );
}

  
  export default Form;