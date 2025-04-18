import React from "react";
import useCustom from "../useCustom";

const DemoCustomHook = () => {
  const value = useCustom();
  console.log(value);
  return (
    <div>
      <h2>DemoCustomHook</h2>
      <p>Value is {value}</p>
    </div>
  );
};

export default DemoCustomHook;
