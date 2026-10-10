import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initTracking } from "./shared/tracking.js";

initTracking();

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
