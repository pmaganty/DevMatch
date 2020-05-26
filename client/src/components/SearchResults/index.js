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

    let curUser = state.curUser;
  
    const addCollab = async (id) => {
        //const curId = ;
        console.log(curId);
        console.log(id);
        const userIds = {curId, id}
        const result = await API.saveCollab(userIds);
        //console.log(result);

        curUser.collaborators.push(id);
        console.log(curUser);

        dispatch({type: "SAVE_CURRENT_USER", user: curUser});
    }

    const addCheck = () => {
        console.log("Button pressed")
    }

    return (  
        <div>
            {state.curSearch.map(profile => (
            <ProfileCard

            photo = {profile.postImg}
            name = {profile.name}
            skills = {profile.skills}
            description = {profile.description}
            phone = {profile.phone}
            email = {profile.email}
            key= {profile.email}
            Button = {() => (<button     
                                onClick={() => { addCollab(profile._id);
                                addCheck();  }}             
                                className="btn btn-primary ml-2"
                            >
                                Collaborate
                                <svg class="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd"/>
                                </svg> 
                                
                            </button>)}
            />
            ))}
        </div>
    );
}

  
  export default SearchResults;