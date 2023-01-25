import React from "react";
import { Link, Outlet } from "react-router-dom";

const contact = () => {
  return (
    <>
      <Link to="Insta">
        <h1>Contact via Instagram</h1>
      </Link>
      <Link to="Mail">
        <h1>Contact via Mail</h1>
      </Link>
      <Outlet />
    </>
  );
};

export default contact;
