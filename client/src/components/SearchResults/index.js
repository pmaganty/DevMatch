import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const SearchResults = () => {

    const [state, dispatch] = useStoreContext();

    console.log(state.curSearch);


    return (  
    <div className="row justify-content-center">
                  {state.curSearch.map(profile => (
                    <div key={profile._id}>
                        <p>{profile.name}</p>
                    </div>
                  ))}
    </div>
    );
}

  
  export default SearchResults;