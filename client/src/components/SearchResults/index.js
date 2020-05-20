import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import ProfileCard from "../ProfileCard";

const SearchResults = () => {

    const [state, dispatch] = useStoreContext();

    console.log(state.curSearch);
    console.log(state);

    let curId = state.curUser._id;
  
    const addCollab = async (id) => {
        //const curId = ;
        console.log(curId);
        console.log(id);
        const userIds = {curId, id}
        const result = await API.saveCollab(userIds);
        //console.log(result);
    }


    return (  
        <div>
            {state.curSearch.map(profile => (
            <ProfileCard
            name = {profile.name}
            skills = {profile.skills}
            description = {profile.description}
            phone = {profile.phone}
            email = {profile.email}
            key= {profile.email}
            Button = {() => (<button     
                                onClick={() => addCollab(profile._id)}                 
                                className="btn btn-primary ml-2"
                            >
                                Collaborate
                            </button>)}
            />
            ))}
        </div>
    );
}

  
  export default SearchResults;