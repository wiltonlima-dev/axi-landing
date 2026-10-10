import React from "react";
import ReactDOM from "react-dom/client";
import ModaApp from "./ModaApp.jsx";
import { initTracking } from "../shared/tracking.js";

initTracking();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModaApp />
);
