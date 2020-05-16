import React from "react";
import Header from "../components/Header";
import {useStoreContext} from "../utils/GlobalState";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

function Search() {
  return (
    <div>
    {/* <Header /> */}
    <SearchBar />
    <SearchResults />
    </div>
  );
}

export default Search;