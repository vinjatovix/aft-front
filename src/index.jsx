import React from "react";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";
import { App } from "./Components/common/App";

import "./index.css";
import { store } from "./store";

const divRoot = document.getElementById("root");
const root = createRoot(divRoot);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
