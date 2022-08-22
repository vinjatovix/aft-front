import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import NavBar from "../Components/ui/navBar/NavBar";
import { Screen } from "../pages/common/Screen";
import { LoginScreen } from "../pages/login/LoginScreen";

export const AftRouter = () => (
  <Router>
    <NavBar />

    <Routes>
      <Route path="/" element={<Screen type="home" />} />

      <Route path="/books" element={<Screen type="book" />} />
      <Route
        path="/book/:bookId/characters"
        element={<Screen type="character" />}
      />
      <Route path="/book/:bookId/scenes" element={<Screen type="scene" />} />

      <Route path="/works" element={<Screen type="work" />} />

      <Route path="/login" element={<LoginScreen />} />
      <Route path="/users" element={<Screen type="user" />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);
