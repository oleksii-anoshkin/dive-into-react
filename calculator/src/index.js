// imports
// react
import React from "react";
import ReactDOM from "react-dom/client";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
// components
import App from "./components/App";

// Render HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
