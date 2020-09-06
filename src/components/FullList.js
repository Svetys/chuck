import React from "react";
import Fact from "./Fact";

// Component to return full list when search input is used
const FullList = ({ fullList }) => {
  return  fullList.map((el) => {
			return <Fact value={el.value} key={el.id} />;
		});
};

export default FullList;
