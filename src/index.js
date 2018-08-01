/* Import statements */
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

/* App is the entry point to the React code.*/
import App from "./component/App";

/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from "react-router-dom";

/* import CSS Styles */
import "../src/styles/styles.css";
import "../node_modules/toastr/build/toastr.min.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
