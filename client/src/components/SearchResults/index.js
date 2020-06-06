import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import ProfileCard from "../ProfileCard";

const SearchResults = () => {

    const [state, dispatch] = useStoreContext();

    const {curUser} = state;
    const {_id:curId} = curUser;
  
    const addCollab = async (id) => {
        console.log(curId);
        console.log(id);
        const userIds = {curId, id}
        await API.saveCollabRequest(userIds);
        dispatch({type: "UPDATEE_CURRENT_SEARCH", collaboratorId: id});

        let profile = await API.getProfileInfo(state.curUser.email);
        curUser.requests.push(id);
        console.log(curUser);
        dispatch({type: "SAVE_CURRENT_USER", user: profile.data});
    }

    const addCheck = () => {
        console.log("Button pressed")
    }

    const profileButton = (id) => {
        return <button onClick={() => { 
            addCollab(id);
            addCheck();
            }}             
            className="btn ml-2">
            Collaborate
            <svg className="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" />
            <path d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" />
            </svg> 
        </button>
    }

    return (  
        <div>
            {/* Filter out users who are currently collaborators or pending requests */}
            {state.curSearch.map(profile => (
                state.curUser.requests.some(requestor => requestor._id === profile._id) || 
                state.curUser.collaborators.some(collaborator => collaborator._id === profile._id) 
                ? "" :
                <ProfileCard
                    name = {profile.name}
                    skills = {profile.skills}
                    description = {profile.description}
                    phone = {profile.phone}
                    email = {profile.email}
                    key= {profile._id}
                    id= {profile._id}
                    image = {profile.image}
                    Button = {() => profileButton(profile._id)}
                />
            ))}
        </div>
    );
}

  
  export default SearchResults;