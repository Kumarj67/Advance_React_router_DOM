import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "red" : "white",
      fontSize: "20px",
    };
  };
  return (
    <div className="header">
      <NavLink to={"/"} style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to={"About"} style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to={"/Contact"} style={navLinkStyles}>
        Contact
      </NavLink>
      {/* <Link to={"/"}></Link> */}
      {/* <Link to={"/About"}>
        <h1 className="navbar" style={{ color: "white", cursor: "pointer" }}>
          About
        </h1>
      </Link>
      <Link to={"/Contact"}>
        <h1 className="navbar" style={{ color: "white", cursor: "pointer" }}>
          Contact
        </h1>
      </Link> */}
    </div>
  );
};

export default Header;
