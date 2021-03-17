import React from "react";

const Counter = (props) => (
  <h1>
    {props.count() ? props.count() : ""}{" "}
    {props.count() === 1 ? "todo" : "todos"}
  </h1>
);

export default Counter;
