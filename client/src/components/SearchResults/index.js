import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import ProfileCard from "../ProfileCard";

const SearchResults = () => {

    const [state, dispatch] = useStoreContext();

    console.log(state.curSearch);


    return (  
        <div>
            {state.curSearch.map(profile => (
            <ProfileCard
            name = {profile.name}
            skills = {profile.skills}
            description = {profile.description}
            phone = {profile.phone}
            email = {profile.email}
            />
            ))}
        </div>
    );
}

  
  export default SearchResults;