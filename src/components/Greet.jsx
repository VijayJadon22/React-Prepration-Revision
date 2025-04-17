import React from "react";

const Greet = (props) => {
  console.log("Hi i re-rendered");
  return <h2>Hi {props.name}, i re-rendered</h2>;
};

export default React.memo(Greet);
