import React, {useEffect} from "react";
import Header from "../components/Header";
import {useStoreContext} from "../utils/GlobalState";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import { useAuth0 } from "../react-auth0-spa";
import AuthHeader from "../components/AuthHeader";


function Search() {

  return (
    <div>
    <AuthHeader />
    <SearchBar />
    <SearchResults />
    </div>
  );
}

export default Search;