import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.module.css";
import "materialize-css/dist/css/materialize.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
