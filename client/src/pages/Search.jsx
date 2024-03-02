import React from "react";
import Navbar from "../components/Navbar";
import ShowProfile from "../components/Profile/ShowProfile";
import SearchArea from "../components/Search/SearchArea";

function Search() {
  return (
    <div className="flex w-full h-full bg-[#F6F6F6]">
      <Navbar />
      <ShowProfile />
      <SearchArea />
    </div>
  );
}

export default Search;
