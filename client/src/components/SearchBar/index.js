import React, {useRef} from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const SearchBar = () => {

    const [state, dispatch] = useStoreContext();

    const searchRef = useRef();

    const getResults = async () => {
        console.log(searchRef.current.value);
        const result = await API.getMatch(searchRef.current.value);
        console.log(result.data); //FOR DEBUG
        dispatch({type: "NEW_SEARCH", "matches": result.data});
    };

    return (  
    <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-12 col-md-12" >
            <div  className="wholeSearch row justify-content-center">
                <div id="searchDiv" className="col-sm-6 col-md-6 col-lg-6">
                    <p id="text">Find the perfect partner for your dream project</p>
                </div>
                <div id="input" className="col-sm-6 col-md-6 col-lg-6">
                    <input id="inputBox" placeholder="Enter Search Term" onChange={e => getResults(e)} ref={searchRef}/>
                </div>
            </div>
        </div>
    </div>
    );
}

  
  export default SearchBar;