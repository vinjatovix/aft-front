import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import NavBar from "../helpers/navBar/NavBar";
import { LoginScreen } from "../pages/login/LoginScreen";

export const AftRouter = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/login" element={<LoginScreen />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);
