import React from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./providers/UserProvider";
import { AftRouter } from "./routers/AftRouter";
import "./index.css";

const divRoot = document.getElementById("root");
const root = createRoot(divRoot);

root.render(
  <UserProvider>
    <AftRouter />
  </UserProvider>
);
