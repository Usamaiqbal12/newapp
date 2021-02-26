import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,HashRouter } from "react-router-dom";
// import SignIn from "./components/SignIn";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.min.css";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import Header from "./components/Header";
import Dashboard from "./components/dataset/Dummy";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter history={HashRouter}>
      <App />
    </BrowserRouter>
  </StateProvider>,
  document.getElementById("root")
);
