import React from "react";
import Random from "./Random";

const FullList = ({ fullList }) => {
  return  fullList.map((el) => {
			return <Random value={el.value} key={el.id} />;
		});
};

export default FullList;
