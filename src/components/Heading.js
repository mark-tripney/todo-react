import React from "react";
import Counter from "./Counter";
import logo from "../img/checkbox-logo.svg";

const Heading = ({activeCount}) => (
  <div className="heading">
    <Counter count={activeCount} />
    <img src={logo} id="logo" alt="A tick within a square" />
  </div>
);

export default Heading;
