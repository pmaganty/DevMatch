import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";


function Search() {

  return (
    <div>
    {/* <AuthHeader /> */}
    <Header />
    <SearchBar />
    <SearchResults />
    </div>
  );
}

export default Search;