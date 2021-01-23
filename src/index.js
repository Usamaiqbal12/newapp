
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import SignIn from "./components/SignIn";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import reducer, {initialState} from './reducer';
import {StateProvider} from './StateProvider'

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StateProvider>,
  document.getElementById("root")
);
