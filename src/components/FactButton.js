import React from "react";

// Component for Generate button
const FactButton = ({click}) => {
  return (
    <div className="generateField">
      <button className="generateBtn" onClick={click}>Generate!</button>
    </div>
  );
};

export default FactButton;
