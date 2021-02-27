import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,HashRouter } from "react-router-dom";
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <HashRouter>
      <App />
    </HashRouter>
  </StateProvider>,
  document.getElementById("root")
);
