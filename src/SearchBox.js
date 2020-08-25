import React from "react";

const SearchBox = ({ searchChange }) => {
	return (
		<div className="search">
		<input type="search" className="searchTerm" placeholder="Search facts" onChange={searchChange} />
		</div>
		);
};

export default SearchBox;


