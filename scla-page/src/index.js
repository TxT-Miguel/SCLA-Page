import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
