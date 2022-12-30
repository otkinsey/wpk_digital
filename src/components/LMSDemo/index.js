import { useState } from "react";
const LMSDemo = (props) => {
  return (
    <div className={`demo ${props.LMSActive ? "active" : ""}`}>
      <h1>Demo</h1>
    </div>
  );
};

export default LMSDemo;
