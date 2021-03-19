import React from "react";
import logo from "../img/checkbox-logo.svg";

const Heading = ({count}) => {
  return (
      <div className="heading">
        <h1>{count} todos</h1>
        <img src={logo} id="logo" alt="A tick within a square"/>
      </div>
  );
};

export default Heading;
