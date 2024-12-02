import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Start from "./components/Start";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    {/* <Appv1 /> */}
    <Start />
  </StrictMode>
);
