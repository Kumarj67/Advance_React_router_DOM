import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>404 Error Page not found</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default Error;
