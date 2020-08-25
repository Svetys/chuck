import React from "react";

const FactButton = ({click}) => {
  return (
    <div className="generateField">
      <button className="generateBtn" onClick={click}>Generate!</button>
    </div>
  );
};

export default FactButton;
