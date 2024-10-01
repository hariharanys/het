//Package Imports
import React from "react";
import ReactDOM from "react-dom/client";

//Component Imports
import App from "./App";

//Styles & Themes Imports
import "./styles/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
