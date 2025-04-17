import React from "react";

const ImageLazyLoader = () => {
  console.log("Lazy Component Loaded!");
  return (
    <div>
      <h3>ImageLazyLoader</h3>
      <img src="/dog1.jpg" style={{ width: "500px" }} alt="dog1" />
      <img src="/dog2.jfif" style={{ width: "500px" }} alt="dog2" />
    </div>
  );
};

export default ImageLazyLoader;
