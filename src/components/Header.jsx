import React from "react";
import SearchBar from "./SearchBar";

function Header () {
    return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Notes Application</h1>
      <SearchBar />
    </div>
    )
};


export default Header;