import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./assets/scss/index.scss";
import App from "./App";

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <Container fluid>
      <App />
    </Container>
  </BrowserRouter>,
  document.getElementById("root")
);
