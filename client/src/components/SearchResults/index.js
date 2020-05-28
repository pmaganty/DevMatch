import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import ProfileCard from "../ProfileCard";

const SearchResults = () => {

    const [state, dispatch] = useStoreContext();

    let curId = state.curUser._id;

    let curUser = state.curUser;
  
    const addCollab = async (id) => {
        //const curId = ;
        console.log(curId);
        console.log(id);
        const userIds = {curId, id}
        //const result = await API.saveCollab(userIds); //PRAN
        await API.saveCollabRequest(userIds);
        //console.log(result);

        // curUser.collaborators.push(id); //PRAN
        // console.log(curUser); //PRAN

        let profile = await API.getProfileInfo(state.curUser.email);

        curUser.requests.push(id);
        console.log(curUser);

        dispatch({type: "SAVE_CURRENT_USER", user: profile.data});
    }

    const addCheck = () => {
        console.log("Button pressed")
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
            key= {profile._id}
            id= {profile._id}
            Button = {() => (<button     
                                onClick={() => { addCollab(profile._id);
                                addCheck();  }}             
                                className="btn ml-2"
                            >
                                Collaborate
                                <svg className="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" />
                                <path d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" />
                                </svg> 
                                
                            </button>)}
            />
            ))}
        </div>
    );
}

  
  export default SearchResults;