import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";

const DATA = [];

render(<App todos={DATA} />, document.getElementById("root"));
