import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/animate.css";
import "./assets/style/ico-moon-fonts.css";
import "./assets/style/sc-spacing.css";
import "./assets/style/style.css";
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
