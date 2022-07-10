import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import NavBar from "../helpers/navBar/NavBar";
import { BooksScreen } from "../pages/books/BooksScreen";
import { LoginScreen } from "../pages/login/LoginScreen";

export const AftRouter = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/books" element={<BooksScreen />} />
      <Route path="/login" element={<LoginScreen />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);
