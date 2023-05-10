import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Navbar } from "./Navbar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
