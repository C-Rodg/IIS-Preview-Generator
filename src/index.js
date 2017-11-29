import React from "react";
import { render } from "react-dom";

import App from "./components/App";

import "./styles/default.css";

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

render(<App />, document.getElementById("root"));
