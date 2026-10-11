import React from "react";
import ReactDOM from "react-dom/client";
import CaptacaoApp from "./CaptacaoApp.jsx";
import { initTracking } from "../shared/tracking.js";

initTracking();

ReactDOM.createRoot(document.getElementById("root")).render(
  <CaptacaoApp />
);
