import React from "react";
import FullList from "./FullList";
import Loading from "./Loading";

const SearchList = ({ list, phrase, searchfield }) => {
	if (list.length) {
		return (<div>
			<ol>
			<FullList fullList={list} />
			</ol>
			</div>
			)
		// return list.map((el) => {
		// 	return <Random value={el.value} key={el.id} />;
		// });
	} else if (searchfield.length > 0) {
		return <Loading />
	} else if (phrase.length > 0) {
		return (
			<div>
			<h3>Your random fact:</h3>
			<p>{phrase}</p>
			</div>
			)
	}
	else {
		return <p>Search or Generate Chuck Norris Facts!</p>
	}
};

export default SearchList;
