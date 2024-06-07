import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Instruction } from "./components/Instruction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Instruction />
  </React.StrictMode>
);
