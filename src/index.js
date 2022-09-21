

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import {transition , position , Provider as AlertProvider, positions, transitions} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { createRoot } from "react-dom/client";

const options={
  position:positions.BOTTOM_CENTER,
  transition:transitions.SCALE
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App/> 
    </AlertProvider>
  </Provider>
);
