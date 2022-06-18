import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/ico-moon-fonts.css";
import "./assets/css/sc-spacing.css";
import "./assets/css/style.css";
import "./index.scss";
import { BrowserRouter } from "react-router-dom"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
