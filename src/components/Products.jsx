import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="search" name="" id="" placeholder="Search Product" />
      </div>
      <nav>
        <Link to={"featured"}>Featured-Products</Link>
        <Link to={"new"}>New-Products</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
