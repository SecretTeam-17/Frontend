import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { Instruction } from "./components/Instuction/Instruction";
import { Content } from "./components/Content/Content";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Instruction />
    <Content />
  </React.StrictMode>
);
