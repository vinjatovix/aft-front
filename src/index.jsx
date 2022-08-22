import React from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./providers/UserProvider";
import { App } from "./Components/common/App";

import "./index.css";

const divRoot = document.getElementById("root");
const root = createRoot(divRoot);

root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
