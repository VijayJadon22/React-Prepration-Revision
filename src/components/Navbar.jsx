import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to={"/"}
        style={({ isActive }) =>
          isActive
            ? { color: "blue", textDecoration: "underline" }
            : { color: "white" }
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        style={({ isActive }) =>
          isActive
            ? { color: "blue", textDecoration: "underline" }
            : { color: "white" }
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/products"}
        style={({ isActive }) =>
          isActive
            ? { color: "blue", textDecoration: "underline" }
            : { color: "white" }
        }
      >
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
